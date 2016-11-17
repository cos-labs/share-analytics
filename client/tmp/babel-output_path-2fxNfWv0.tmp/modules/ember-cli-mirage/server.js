var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

// jscs:disable requireParenthesesAroundArrowParam

import { pluralize, camelize } from './utils/inflector';
import { toCollectionName } from 'ember-cli-mirage/utils/normalize-name';
import Ember from 'ember';
import Pretender from 'pretender';
import Db from './db';
import Schema from './orm/schema';
import assert from './assert';
import SerializerRegistry from './serializer-registry';
import RouteHandler from './route-handler';

import _pick from 'lodash/object/pick';
import _assign from 'lodash/object/assign';
import _find from 'lodash/collection/find';
import _isPlainObject from 'lodash/lang/isPlainObject';

var Promise = Ember.RSVP.Promise;

function createPretender(server) {
  return new Pretender(function () {
    this.passthroughRequest = function (verb, path, request) {
      if (server.shouldLog()) {
        console.log('Passthrough request: ' + verb.toUpperCase() + ' ' + request.url);
      }
    };

    this.handledRequest = function (verb, path, request) {
      if (server.shouldLog()) {
        console.log('Mirage: [' + request.status + '] ' + verb.toUpperCase() + ' ' + request.url);
        var responseText = request.responseText;

        var loggedResponse = undefined;

        try {
          loggedResponse = JSON.parse(responseText);
        } catch (e) {
          loggedResponse = responseText;
        }

        console.log(loggedResponse);
      }
    };

    this.unhandledRequest = function (verb, path) {
      path = decodeURI(path);
      assert('Your Ember app tried to ' + verb + ' \'' + path + '\',\n         but there was no route defined to handle this request.\n         Define a route that matches this path in your\n         mirage/config.js file. Did you forget to add your namespace?');
    };
  });
}

var defaultRouteOptions = {
  coalesce: false,
  timing: undefined
};

var defaultPassthroughs = ['http://localhost:0/chromecheckurl'];
export { defaultPassthroughs };

function isOption(option) {
  if (!option || typeof option !== 'object') {
    return false;
  }

  var allOptions = Object.keys(defaultRouteOptions);
  var optionKeys = Object.keys(option);
  for (var i = 0; i < optionKeys.length; i++) {
    var key = optionKeys[i];
    if (allOptions.indexOf(key) > -1) {
      return true;
    }
  }
  return false;
}

/*
  Args can be of the form
    [options]
    [object, code]
    [function, code]
    [shorthand, options]
    [shorthand, code, options]
    with all optional. This method returns an array of
    [handler (i.e. the function, object or shorthand), code, options].
*/

function extractRouteArguments(args) {
  var _args$splice = args.splice(-1);

  var _args$splice2 = _slicedToArray(_args$splice, 1);

  var lastArg = _args$splice2[0];

  if (isOption(lastArg)) {
    lastArg = _assign({}, defaultRouteOptions, lastArg);
  } else {
    args.push(lastArg);
    lastArg = defaultRouteOptions;
  }
  var t = 2 - args.length;
  while (t-- > 0) {
    args.push(undefined);
  }
  args.push(lastArg);
  return args;
}

var Server = (function () {
  function Server() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Server);

    this.config(options);
  }

  _createClass(Server, [{
    key: 'config',
    value: function config() {
      var _config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var didOverrideConfig = _config.environment && this.environment && this.environment !== _config.environment;
      assert(!didOverrideConfig, 'You cannot modify Mirage\'s environment once the server is created');
      this.environment = _config.environment || 'development';

      this.options = _config;

      this.timing = this.timing || _config.timing || 400;
      this.namespace = this.namespace || _config.namespace || '';
      this.urlPrefix = this.urlPrefix || _config.urlPrefix || '';

      this._defineRouteHandlerHelpers();

      this.db = this.db || new Db();
      if (this.schema) {
        this.schema.registerModels(_config.models);
        this.serializerOrRegistry.registerSerializers(_config.serializers || {});
      } else {
        this.schema = new Schema(this.db, _config.models);
        this.serializerOrRegistry = new SerializerRegistry(this.schema, _config.serializers);
      }

      var hasFactories = this._hasModulesOfType(_config, 'factories');
      var hasDefaultScenario = _config.scenarios && _config.scenarios.hasOwnProperty('default');

      this.pretender = this.pretender || createPretender(this);

      if (_config.baseConfig) {
        this.loadConfig(_config.baseConfig);
      }

      if (this.isTest()) {
        if (_config.testConfig) {
          this.loadConfig(_config.testConfig);
        }

        window.server = this; // TODO: Better way to inject server into test env
      }

      if (this.isTest() && hasFactories) {
        this.loadFactories(_config.factories);
      } else if (!this.isTest() && hasDefaultScenario) {
        this.loadFactories(_config.factories);
        _config.scenarios['default'](this);
      } else {
        this.loadFixtures();
      }

      if (_config.useDefaultPassthroughs) {
        this._configureDefaultPassthroughs();
      }
    }
  }, {
    key: 'isTest',
    value: function isTest() {
      return this.environment === 'test';
    }
  }, {
    key: 'shouldLog',
    value: function shouldLog() {
      return typeof this.logging !== 'undefined' ? this.logging : !this.isTest();
    }
  }, {
    key: 'loadConfig',
    value: function loadConfig(config) {
      config.call(this);
      this.timing = this.isTest() ? 0 : this.timing || 0;
    }
  }, {
    key: 'passthrough',
    value: function passthrough() {
      var _this = this;

      for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
        paths[_key] = arguments[_key];
      }

      var verbs = ['get', 'post', 'put', 'delete', 'patch'];
      var lastArg = paths[paths.length - 1];

      if (paths.length === 0) {
        // paths = ['http://localhost:7357'];
        paths = ['/**', '/'];
      } else if (Array.isArray(lastArg)) {
        verbs = paths.pop();
      }

      verbs.forEach(function (verb) {
        paths.forEach(function (path) {
          var fullPath = _this._getFullPath(path);
          _this.pretender[verb](fullPath, _this.pretender.passthrough);
        });
      });
    }
  }, {
    key: 'loadFixtures',
    value: function loadFixtures() {
      var fixtures = this.options.fixtures;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (args.length) {
        var camelizedArgs = args.map(camelize);
        fixtures = _pick.apply(undefined, [fixtures].concat(_toConsumableArray(camelizedArgs)));
      }

      this.db.loadData(fixtures);
    }

    /*
      Factory methods
    */
  }, {
    key: 'loadFactories',
    value: function loadFactories() {
      var _this2 = this;

      var factoryMap = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      // Store a reference to the factories
      var currentFactoryMap = this._factoryMap || {};
      this._factoryMap = _assign(currentFactoryMap, factoryMap);

      // Create a collection for each factory
      Object.keys(factoryMap).forEach(function (type) {
        var collectionName = toCollectionName(type);
        _this2.db.createCollection(collectionName);
      });
    }
  }, {
    key: 'factoryFor',
    value: function factoryFor(type) {
      var camelizedType = camelize(type);

      if (this._factoryMap && this._factoryMap[camelizedType]) {
        return this._factoryMap[camelizedType];
      }
    }
  }, {
    key: 'build',
    value: function build(type) {
      var _this3 = this;

      for (var _len3 = arguments.length, traitsAndOverrides = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        traitsAndOverrides[_key3 - 1] = arguments[_key3];
      }

      var traits = traitsAndOverrides.filter(function (arg) {
        return arg && typeof arg === 'string';
      });
      var overrides = _find(traitsAndOverrides, function (arg) {
        return _isPlainObject(arg);
      });
      var camelizedType = camelize(type);

      // Store sequence for factory type as instance variable
      this.factorySequences = this.factorySequences || {};
      this.factorySequences[camelizedType] = this.factorySequences[camelizedType] + 1 || 0;

      var OriginalFactory = this.factoryFor(type);
      if (OriginalFactory) {
        var _ret = (function () {
          var attrs = OriginalFactory.attrs;

          traits.forEach(function (traitName) {
            if (!OriginalFactory.isTrait(traitName)) {
              throw new Error('\'' + traitName + '\' trait is not registered in \'' + type + '\' factory');
            }
          });

          var allExtensions = traits.map(function (traitName) {
            // throw error if not registered
            return attrs[traitName].extension;
          });
          allExtensions.push(overrides || {});
          var mergedExtensions = allExtensions.reduce(function (accum, extension) {
            return _assign(accum, extension);
          }, {});

          var Factory = OriginalFactory.extend(mergedExtensions);
          var factory = new Factory();

          var sequence = _this3.factorySequences[camelizedType];
          return {
            v: factory.build(sequence)
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else {
        return overrides;
      }
    }
  }, {
    key: 'buildList',
    value: function buildList(type, amount) {
      var list = [];

      for (var _len4 = arguments.length, traitsAndOverrides = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        traitsAndOverrides[_key4 - 2] = arguments[_key4];
      }

      for (var i = 0; i < amount; i++) {
        list.push(this.build.apply(this, [type].concat(traitsAndOverrides)));
      }

      return list;
    }

    // When there is a Model defined, we should return an instance
    // of it instead of returning the bare attributes.
  }, {
    key: 'create',
    value: function create(type) {
      var _this4 = this;

      for (var _len5 = arguments.length, options = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        options[_key5 - 1] = arguments[_key5];
      }

      var traits = options.filter(function (arg) {
        return arg && typeof arg === 'string';
      });
      var overrides = _find(options, function (arg) {
        return _isPlainObject(arg);
      });
      var collectionFromCreateList = _find(options, function (arg) {
        return arg && Array.isArray(arg);
      });

      var attrs = this.build.apply(this, [type].concat(_toConsumableArray(traits), [overrides]));
      var modelOrRecord = undefined;

      if (this.schema && this.schema[toCollectionName(type)]) {
        var modelClass = this.schema[toCollectionName(type)];

        modelOrRecord = modelClass.create(attrs);
      } else {
        var collection = undefined,
            collectionName = undefined;

        if (collectionFromCreateList) {
          collection = collectionFromCreateList;
        } else {
          collectionName = this.schema ? toCollectionName(type) : pluralize(type);
          collection = this.db[collectionName];
        }

        assert(collection, 'You called server.create(' + type + ') but no model or factory was found. Try `ember g mirage-model ' + type + '`.');
        modelOrRecord = collection.insert(attrs);
      }

      var OriginalFactory = this.factoryFor(type);
      if (OriginalFactory) {
        OriginalFactory.extractAfterCreateCallbacks({ traits: traits }).forEach(function (afterCreate) {
          afterCreate(modelOrRecord, _this4);
        });
      }

      return modelOrRecord;
    }
  }, {
    key: 'createList',
    value: function createList(type, amount) {
      var list = [];
      var collectionName = this.schema ? toCollectionName(type) : pluralize(type);
      var collection = this.db[collectionName];

      for (var _len6 = arguments.length, traitsAndOverrides = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        traitsAndOverrides[_key6 - 2] = arguments[_key6];
      }

      for (var i = 0; i < amount; i++) {
        list.push(this.create.apply(this, [type].concat(traitsAndOverrides, [collection])));
      }

      return list;
    }
  }, {
    key: 'shutdown',
    value: function shutdown() {
      this.pretender.shutdown();
      if (this.environment === 'test') {
        window.server = undefined;
      }
    }
  }, {
    key: 'resource',
    value: function resource(resourceName) {
      var _this5 = this;

      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var only = _ref.only;
      var except = _ref.except;

      only = only || [];
      except = except || [];

      if (only.length > 0 && except.length > 0) {
        throw 'cannot use both :only and :except options';
      }

      var actionsMethodsAndsPathsMappings = {
        index: { methods: ['get'], path: '/' + resourceName },
        show: { methods: ['get'], path: '/' + resourceName + '/:id' },
        create: { methods: ['post'], path: '/' + resourceName },
        update: { methods: ['put', 'patch'], path: '/' + resourceName + '/:id' },
        'delete': { methods: ['del'], path: '/' + resourceName + '/:id' }
      };

      var allActions = Object.keys(actionsMethodsAndsPathsMappings);
      var actions = only.length > 0 && only || except.length > 0 && allActions.filter(function (action) {
        return except.indexOf(action) === -1;
      }) || allActions;

      actions.forEach(function (action) {
        var methodsWithPath = actionsMethodsAndsPathsMappings[action];

        methodsWithPath.methods.forEach(function (method) {
          return _this5[method](methodsWithPath.path);
        });
      });
    }
  }, {
    key: '_defineRouteHandlerHelpers',
    value: function _defineRouteHandlerHelpers() {
      var _this6 = this;

      [['get'], ['post'], ['put'], ['delete', 'del'], ['patch'], ['head']].forEach(function (_ref2) {
        var _ref22 = _slicedToArray(_ref2, 2);

        var verb = _ref22[0];
        var alias = _ref22[1];

        _this6[verb] = function (path) {
          for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            args[_key7 - 1] = arguments[_key7];
          }

          var _extractRouteArguments = extractRouteArguments(args);

          var _extractRouteArguments2 = _slicedToArray(_extractRouteArguments, 3);

          var rawHandler = _extractRouteArguments2[0];
          var customizedCode = _extractRouteArguments2[1];
          var options = _extractRouteArguments2[2];

          _this6._registerRouteHandler(verb, path, rawHandler, customizedCode, options);
        };

        if (alias) {
          _this6[alias] = _this6[verb];
        }
      });
    }
  }, {
    key: '_serialize',
    value: function _serialize(body) {
      if (body) {
        return typeof body !== 'string' ? JSON.stringify(body) : body;
      } else {
        return '{"error": "not found"}';
      }
    }
  }, {
    key: '_registerRouteHandler',
    value: function _registerRouteHandler(verb, path, rawHandler, customizedCode, options) {
      var _this7 = this;

      var routeHandler = new RouteHandler({
        schema: this.schema,
        verb: verb, rawHandler: rawHandler, customizedCode: customizedCode, options: options, path: path,
        serializerOrRegistry: this.serializerOrRegistry
      });

      var fullPath = this._getFullPath(path);
      var timing = options.timing !== undefined ? options.timing : function () {
        return _this7.timing;
      };

      this.pretender[verb](fullPath, function (request) {
        return new Promise(function (resolve) {
          Promise.resolve(routeHandler.handle(request)).then(function (mirageResponse) {
            var _mirageResponse = _slicedToArray(mirageResponse, 3);

            var code = _mirageResponse[0];
            var headers = _mirageResponse[1];
            var response = _mirageResponse[2];

            resolve([code, headers, _this7._serialize(response)]);
          });
        });
      }, timing);
    }
  }, {
    key: '_hasModulesOfType',
    value: function _hasModulesOfType(modules, type) {
      var modulesOfType = modules[type];
      return modulesOfType ? Object.keys(modulesOfType).length > 0 : false;
    }

    /*
      Builds a full path for Pretender to monitor based on the `path` and
      configured options (`urlPrefix` and `namespace`).
    */
  }, {
    key: '_getFullPath',
    value: function _getFullPath(path) {
      path = path[0] === '/' ? path.slice(1) : path;
      var fullPath = '';
      var urlPrefix = this.urlPrefix ? this.urlPrefix.trim() : '';
      var namespace = this.namespace ? this.namespace.trim() : '';

      // check to see if path is a FQDN. if so, ignore any urlPrefix/namespace that was set
      if (/^https?:\/\//.test(path)) {
        fullPath += path;
      } else {

        // otherwise, if there is a urlPrefix, use that as the beginning of the path
        if (!!urlPrefix.length) {
          fullPath += urlPrefix[urlPrefix.length - 1] === '/' ? urlPrefix : urlPrefix + '/';
        }

        // add the namespace to the path
        fullPath += namespace;

        // add a trailing slash to the path if it doesn't already contain one
        if (fullPath[fullPath.length - 1] !== '/') {
          fullPath += '/';
        }

        // finally add the configured path
        fullPath += path;
      }

      return fullPath;
    }
  }, {
    key: '_configureDefaultPassthroughs',
    value: function _configureDefaultPassthroughs() {
      var _this8 = this;

      defaultPassthroughs.forEach(function (passthroughUrl) {
        _this8.passthrough(passthroughUrl);
      });
    }
  }]);

  return Server;
})();

export default Server;