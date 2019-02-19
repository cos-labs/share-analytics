"use strict";



define('sa-dashboard/adapters/application', ['exports', 'ember-data', 'sa-dashboard/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTAdapter.extend(_emberData.default.BuildURLMixin, {
        namespace: 'api/records',
        host: _environment.default.apiBaseUrl,
        headers: {
            Accept: 'application/json'
        },
        ajax(url, method, hash) {
            hash = hash || {};
            hash.crossDomain = true;
            hash.xhrFields = { withCredentials: true };
            return this._super(url, method, hash);
        },
        pathForType(type) {
            var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
            return Ember.String.underscore(inflector.pluralize(type));
        }
    });
});
define('sa-dashboard/adapters/citation', ['exports', 'ember-osf/adapters/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('sa-dashboard/adapters/collection', ['exports', 'ember-osf/adapters/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('sa-dashboard/adapters/comment-report', ['exports', 'ember-osf/adapters/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('sa-dashboard/adapters/comment', ['exports', 'ember-osf/adapters/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('sa-dashboard/adapters/contributor', ['exports', 'ember-osf/adapters/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('sa-dashboard/adapters/draft-registration', ['exports', 'ember-osf/adapters/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('sa-dashboard/adapters/file-contents', ['exports', 'ember-osf/adapters/file-contents'], function (exports, _fileContents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileContents.default;
    }
  });
});
define('sa-dashboard/adapters/file-provider', ['exports', 'ember-osf/adapters/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('sa-dashboard/adapters/file-version', ['exports', 'ember-osf/adapters/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('sa-dashboard/adapters/file', ['exports', 'ember-osf/adapters/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('sa-dashboard/adapters/institution', ['exports', 'ember-osf/adapters/institution'], function (exports, _institution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _institution.default;
    }
  });
});
define('sa-dashboard/adapters/license', ['exports', 'ember-osf/adapters/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('sa-dashboard/adapters/log', ['exports', 'ember-osf/adapters/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('sa-dashboard/adapters/metaschema', ['exports', 'ember-osf/adapters/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('sa-dashboard/adapters/node-link', ['exports', 'ember-osf/adapters/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('sa-dashboard/adapters/node', ['exports', 'ember-osf/adapters/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('sa-dashboard/adapters/osf-adapter', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _osfAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfAdapter.default;
    }
  });
});
define('sa-dashboard/adapters/preprint-provider', ['exports', 'ember-osf/adapters/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('sa-dashboard/adapters/preprint', ['exports', 'ember-osf/adapters/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('sa-dashboard/adapters/registration', ['exports', 'ember-osf/adapters/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('sa-dashboard/adapters/review-action', ['exports', 'ember-osf/adapters/review-action'], function (exports, _reviewAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reviewAction.default;
    }
  });
});
define('sa-dashboard/adapters/taxonomy', ['exports', 'ember-osf/adapters/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('sa-dashboard/adapters/user', ['exports', 'ember-osf/adapters/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define('sa-dashboard/adapters/widget', ['exports', 'ember-data/adapters/json-api', 'sa-dashboard/config/environment'], function (exports, _jsonApi, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _jsonApi.default.extend({

        host: _environment.default.APP.GRANTS_BACKEND,

        buildURL: function (type, id, record) {
            //call the default buildURL and then append a slash
            // return this._super(type, id, record) + '/';
            return this._super(type, id, record) + '/';
        }

    });
});
define('sa-dashboard/app', ['exports', 'sa-dashboard/resolver', 'ember-load-initializers', 'sa-dashboard/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  Ember.MODEL_FACTORY_INJECTIONS = true;

  let App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('sa-dashboard/authenticators/osf-cookie', ['exports', 'ember-osf/authenticators/osf-cookie'], function (exports, _osfCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfCookie.default;
    }
  });
});
define('sa-dashboard/authenticators/osf-token', ['exports', 'ember-osf/authenticators/osf-token'], function (exports, _osfToken) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfToken.default;
    }
  });
});
define('sa-dashboard/authorizers/osf-cookie', ['exports', 'ember-osf/authorizers/osf-cookie'], function (exports, _osfCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfCookie.default;
    }
  });
});
define('sa-dashboard/authorizers/osf-token', ['exports', 'ember-osf/authorizers/osf-token'], function (exports, _osfToken) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfToken.default;
    }
  });
});
define('sa-dashboard/components/agent-detail-widget/component', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        agentData: Ember.computed(function () {
            return this.get('data.hits.hits')[0];
        }),
        dataAsString: Ember.computed(function () {
            var data = this.get('data.hits.hits')[0];
            return JSON.stringify(data, null, '    ');
        }),
        showJSON: false,

        actions: {

            transitionToFacet(item) {
                let queryParams = {
                    id: undefined
                };
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = item.name;
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                } else if (item.url) {
                    window.location.href = item.url;
                }
            },

            transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, item);
            }

        }

    });
});
define("sa-dashboard/components/agent-detail-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3674NJQI", "block": "{\"symbols\":[\"source\",\"identifier\",\"type\"],\"statements\":[[6,\"div\"],[9,\"class\",\"object-detail\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"\\n        \"],[1,[20,[\"agentData\",\"_source\",\"name\"]],false],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"agentData\",\"_source\",\"types\"]]],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[7],[1,[19,3,[]],false],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"agentData\",\"_source\",\"description\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[6,\"h3\"],[7],[0,\"Description\"],[8],[1,[20,[\"agentData\",\"_source\",\"description\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"agentData\",\"_source\",\"identifiers\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Identifiers\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"agentData\",\"_source\",\"identifiers\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[1,[19,2,[]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"agentData\",\"_source\",\"sources\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Sources\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"agentData\",\"_source\",\"sources\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"showJSON\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showJSON\"]],[7],[0,\"Hide Raw Data    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-up\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n        \"],[6,\"pre\"],[7],[1,[18,\"dataAsString\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showJSON\"]],[7],[0,\"View Raw Data    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-down\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/agent-detail-widget/template.hbs" } });
});
define('sa-dashboard/components/author-link/component', ['exports', 'ember-osf/components/author-link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('sa-dashboard/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('sa-dashboard/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('sa-dashboard/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('sa-dashboard/components/bootstrap-datepicker-inline', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _bootstrapDatepickerInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepickerInline.default;
});
define('sa-dashboard/components/bootstrap-datepicker', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _bootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepicker.default;
});
define('sa-dashboard/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('sa-dashboard/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('sa-dashboard/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('sa-dashboard/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('sa-dashboard/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('sa-dashboard/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('sa-dashboard/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('sa-dashboard/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('sa-dashboard/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('sa-dashboard/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('sa-dashboard/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('sa-dashboard/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('sa-dashboard/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('sa-dashboard/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('sa-dashboard/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('sa-dashboard/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('sa-dashboard/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('sa-dashboard/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('sa-dashboard/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('sa-dashboard/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('sa-dashboard/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('sa-dashboard/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('sa-dashboard/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('sa-dashboard/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('sa-dashboard/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('sa-dashboard/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('sa-dashboard/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('sa-dashboard/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('sa-dashboard/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('sa-dashboard/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('sa-dashboard/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('sa-dashboard/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('sa-dashboard/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('sa-dashboard/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('sa-dashboard/components/c3-chart/component', ['exports', 'sa-dashboard/config/environment', 'sa-dashboard/utils/currency-rounder', 'd3'], function (exports, _environment, _currencyRounder, _d) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    /* global c3 */
    const NIH_LABELS = {
        'fogarty international center': 'FIC',
        'national center for advancing translational sciences': 'NCATS',
        'national center for complementary and integrative health': 'NCCIH',
        'national cancer institute': 'NCI',
        'national eye institute': 'NEI',
        'national human genome research institute': 'NHGRI',
        'national heart': 'NHLBI',
        'national institute on aging': 'NIA',
        'national institute on alcohol abuse and alcoholism': 'NIAAA',
        'national institute of allergy and infectious diseases': 'NIAID',
        'national institute of arthritis and musculoskeletal and skin diseases': 'NIAMS',
        'national institute of biomedical imaging and bioengineering': 'NIBIB',
        'national institute of child health and human development': 'NICHD',
        'national institute on drug abuse': 'NIDA',
        'national institute on deafness and other communication disorders': 'NIDCD',
        'national institute of dental and craniofacial research': 'NIDCR',
        'national institute of diabetes and digestive and kidney diseases': 'NIDDK',
        'national institute of environmental health sciences': 'NIEHS',
        'national institute of general medical sciences': 'NIGMS',
        'national institute of mental health': 'NIMH',
        'national institute of neurological disorders and stroke': 'NINDS',
        'national institute of nursing research': 'NINR',
        'national library of medicine': 'NLM',
        'office of the director': 'OD',
        'national science foundation': 'NSF',
        'u.s. department of energy': 'U.S. DOE',
        'rolling deck to repository (r2r) program': 'R2R Program',
        'pangaea - data publisher for earth & environmental science': 'PANGAEA',
        'escholarship, university of california': 'eScholarship, UC',
        'international studies perspectives 2015. doi: 10.1111/insp.12104': 'Intl. Studies Perspectives'
    };

    function log10ToLinear(log_num) {
        if (log_num <= 0) {
            return 0;
        }
        return Math.pow(10, log_num - 1).toFixed(0);
    }

    function linearToLog10(lin_num) {
        if (lin_num <= 0) {
            return 0;
        }
        return Math.log(lin_num) / Math.LN10 + 1;
    }

    function getLabel(label) {
        if (NIH_LABELS[label.toLowerCase()]) {
            return NIH_LABELS[label.toLowerCase()];
        }
        return label;
    }

    exports.default = Ember.Component.extend({

        classNames: ['chart'],
        charttitle: 'Untitled Chart',

        dataChanged: Ember.observer('data', function () {
            this.updateChart();
        }),

        dataChanged2: Ember.observer('data.[]', function () {
            this.updateChart();
        }),

        data: [],

        init() {
            this._super(...arguments);
            if (this.get('name') === 'Data Providers') {
                this.processData(this.get("aggregations.publishers.buckets"));
            }
            if (this.get('name') === "Funders") {
                this.processData(this.get('aggregations.funders.buckets'));
            }
        },

        processData: async function (data) {
            this.set("data", "data");

            if (this.get('name') === 'Data Providers' || this.get('name') === 'Funders') {
                let agent_details = await Ember.$.ajax({
                    url: 'https://dev-labs.cos.io/bulk_get_agents',
                    crossDomain: true,
                    data: JSON.stringify(data),
                    type: 'POST',
                    contentType: 'application/json'
                });
                this.set("data", JSON.parse(agent_details));
            }
        },

        sizeChanged: Ember.observer('resizedSignal', function () {
            if (this.get('resizedSignal') === false) {
                return;
            }
            this.updateChart();
            this.set('resizedSignal', false);
        }),

        charTypeChange: Ember.observer('chartType', function () {
            this.updateChart();
        }),

        updateChart: async function () {

            var self = this;

            let chart_type = this.get('chartType');

            let chart_options = {
                bindto: this.$(this.element).find('.renderChart')[0],
                data: {
                    columns: null, //to be filled later
                    type: chart_type,
                    onclick: d => {
                        self.get('actions').transitionToFacet.call(self, d.id);
                    }
                },
                legend: { show: false },
                [chart_type]: {
                    title: this.get('charttitle'), //to be filled later
                    label: {
                        show: false
                    }
                }
            };

            if (chart_type == 'donut') {
                var title = '';

                var _data = this.get('data');

                if (this.get('data').length === 0 && this.get('name') === 'Data Providers') {
                    var data = [{
                        'id': '64201-BDE-4D4',
                        'name': 'UC San Diego',
                        'number': 58
                    }];
                    this.set('data', data);
                }

                if (this.get('item.mappingType') === 'OBJECT_TO_ARRAY') {
                    var columns = this.get('data').map(({ id, number }) => [id, number]);
                }

                if (this.get('item.mappingType') === 'OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY') {
                    var columns = this.get('data').map(({ id, number, awards }) => [id, awards.value]);
                }

                chart_options['tooltip'] = {
                    format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                        name: function (id, percentage) {
                            return self.data.reduce(function (acc, cur, idx, arr) {
                                if (cur.id === id) {
                                    return cur.name;
                                }
                                return acc;
                            }, false);
                        },
                        value: function (value, percent, id) {
                            var obj = self.data.filter(function (obj) {
                                return obj.id === id;
                            })[0];
                            var counts = obj.number;
                            if (self.get('name') === 'Funders') {
                                let roundedValue = (0, _currencyRounder.default)(value);
                                return counts + "&nbsp;records ($" + roundedValue + ")";
                            }
                            return counts + " records"; // This isn't perfect, but it's at least more verbose than before
                        }
                    }
                };

                chart_options['donut'].width = 100;
            } else if (chart_type === 'bar') {

                this.set('data', this.get('aggregations.contributors.buckets'));
                var columns = this.get('data').map(({ key, doc_count }) => [key, doc_count]).slice(0, 10);

                chart_options['axis'] = {
                    x: {
                        tick: {
                            format: function () {
                                return 'Top 10 Contributors';
                            }
                        }
                    },
                    y: {
                        label: 'Number of Publications'
                    }
                };
                chart_options['tooltip'] = {
                    grouped: false // Default true
                };
                chart_options['tooltip'] = tooltip;
            } else if (chart_type === 'relevanceHistogram') {

                let UC_hits = this.get('aggregations.filtered_score.buckets.institution.doc_count');
                let total_hits = this.get('total');
                var columns = [['overallCountByRelevance'].concat(this.get('data.aggregations.all_score.buckets').map(datum => {
                    let val = this.get('aggregations.all_score.buckets')[datum.key];
                    if (val && val.doc_count > 0) {
                        return val.doc_count * UC_hits / total_hits;
                    }
                    return 0;
                })), ['ucCountByRelevance'].concat(this.get('aggregations.all_score.buckets').map(datum => {
                    let val = this.get('aggregations.filtered_score.buckets.institution.score.buckets')[datum.key];
                    if (val && val.doc_count > 0) {
                        return val.doc_count;
                    }
                    return 0;
                }))];

                chart_options['axis'] = {
                    x: {
                        tick: {
                            format: function (val) {
                                return val;
                            }
                        },
                        label: 'Relevance Score'
                    },
                    y: {
                        tick: {
                            format: function (d) {
                                return d;
                            }
                        },
                        label: 'Number of Items'
                    }
                };

                chart_options['data']['types'] = {
                    x: 'bar',
                    overallCountByRelevance: 'bar',
                    doeCountByRelevance: 'bar',
                    ucCountByRelevance: 'bar'
                };

                chart_options['data']['labels'] = {
                    //labels: {
                    //    format: {
                    //        overallCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);},
                    //        institutionCountByRelevance: function(d,id){console.log(id, Math.pow(10,d));return Math.pow(10,d).toFixed(0);}
                    //    }
                    //}
                };

                chart_options['point'] = { show: false };
            } else if (chart_type === 'timeseries') {

                let x_axis = this.get('data.aggregations.all_over_time.buckets').map(datum => {
                    return datum.key_as_string;
                });
                var columns = this.get('data.aggregations.sorted_by_type.buckets').map(bucket => {
                    return [bucket.key].concat(bucket['type_over_time'].buckets.reduce((ret, bucket) => {
                        ret[x_axis.indexOf(bucket.key_as_string)] = linearToLog10(bucket.doc_count);
                        return ret;
                    }, new Array(x_axis.length).fill(0)));
                });
                columns.unshift(['x'].concat(x_axis));
                columns.unshift(['All Events'].concat(this.get('data.aggregations.all_over_time.buckets').map(bucket => {
                    return linearToLog10(bucket.doc_count);
                })));
                let data_x = 'x';
                chart_options['axis'] = {
                    x: {
                        type: 'timeseries',
                        tick: {
                            culling: {
                                max: 10
                            },
                            rotate: 90,
                            format: '%d-%m-%Y' // Format the tick labels on our chart
                        }
                    },
                    y: {
                        min: 1,
                        tick: {
                            format: log10ToLinear
                        },
                        label: 'Number of Items (Log Scale)'
                    }
                };
                let data_types = columns.reduce((r, c, i, a) => {
                    r[c[0]] = 'area-spline';
                    return r;
                }, {});
                chart_options['tooltip'] = {
                    format: { // We want to return a nice-looking tooltip whose content is determined by (or at least consistent with) sour TS intervals
                        title: function (d) {
                            return d.toString().substring(4, 15); // This isn't perfect, but it's at least more verbose than before
                        }
                    }
                };

                let point = {
                    show: false
                };

                chart_options['data']['types'] = data_types;
                chart_options['data']['x'] = data_x;
                chart_options['legend'] = { position: "right" };
                chart_options['point'] = point;
            }

            chart_options['data']['columns'] = columns;
            chart_options[chart_type]['title'] = title;
            this.set('chart', c3.generate(chart_options));

            if (chart_type === "donut") {
                var labels = _d.default.selectAll(this.$(this.element).find('.c3-chart-arc')).select(function (d) {
                    let angle_size = d.endAngle - d.startAngle;
                    if (angle_size < 0.5) {
                        return;
                    }
                    _d.default.select(this.parentNode).append('text').text(self.data.reduce(function (acc, cur, idx, arr) {
                        if (cur.id === d.data.id) {
                            var string = cur.name ? cur.name : cur.id;
                            var label = getLabel(string);
                            if (label.length > 28) {
                                return label.substring(0, 25) + "...";
                            }
                            return label;
                        }
                        return acc;
                    }, false)).attr("x", 160 * Math.sin((d.startAngle + d.endAngle) / 2)).attr("y", -130 * Math.cos((d.startAngle + d.endAngle) / 2)).attr("text-anchor", "middle").attr("alignment-baseline", "central").attr("font-size", "12px").attr("fill", "rgb(250,250,250)").each(function (d) {
                        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                        this.parentNode.insertBefore(rect, this);
                        let bbox = this.getBBox();
                        _d.default.select(rect).attr("fill", "rgba(0,0,0,0.5)").attr("stroke", "rgba(0,0,0,0.6)").attr("width", bbox.width + 14).attr("height", bbox.height + 8).attr("x", bbox.x - 7).attr("y", bbox.y - 4);
                    });
                });
                /*var labels_bgs = d3.selectAll(this.$(this.element).find('.c3-chart-arc'))
                    .insert('rect', 'text')
                    .each(function(d) {
                        d.attr("width", 200).attr("height", 20)
                    })
                 labels.select(function() {
                });*/
            }
        },

        didRender() {
            //this.updateChart();
        },

        actions: {
            parentTransitionToFacet(facetDash, queryParams) {
                this.attrs.transitionToFacet(facetDash, queryParams);
            },
            transitionToFacet(id, override) {
                //Two different items here; one refers to the widget; one refers to the datum.
                override = override || false;
                let queryParams = {};
                let data = this.get('data');
                let item = data.reduce((acc, cur, idx, arr) => {
                    if (cur.id === id) {
                        return cur;
                    }
                    return acc;
                }, false);
                var facet = this.get("item.facetDashParameter");
                var facetDash = this.get("item.facetDash");
                queryParams["page"] = undefined;
                if (override) {
                    facetDash = override;
                }
                if (id === null) {
                    this.attrs.transitionToFacet(facetDash, queryParams);
                    return;
                }
                if (facetDash === "url" && item.url) {
                    window.location.href = item.url;
                    return;
                }
                if (facet) {
                    queryParams[facet] = item.name;
                    if (item.types.indexOf("agent") > -1) {
                        queryParams[facet] = item.id;
                    }
                    this.attrs.transitionToFacet(facetDash, queryParams);
                }
            }
        }

    });
});
define("sa-dashboard/components/c3-chart/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "h1xd4kl9", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"widget-body clearfix\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"widgetSettings\",\"helpText\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"text-muted text-smaller\"],[7],[0,\"\\n      \"],[6,\"i\"],[7],[0,\"(\"],[1,[20,[\"widgetSettings\",\"helpText\"]],false],[0,\")\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"widgetSettings\",\"showFilter\"]]],null,{\"statements\":[[0,\"      \"],[1,[25,\"dropdown-widget\",null,[[\"widgetSettings\",\"aggregations\",\"parameters\",\"item\",\"data\",\"transitionToFacet\"],[[20,[\"widgetSettings\"]],[20,[\"aggregations\"]],[20,[\"parameters\"]],[20,[\"item\"]],[20,[\"data\"]],[25,\"action\",[[19,0,[]],\"parentTransitionToFacet\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"renderChart\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"data\",\"length\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"widgetSettings\",\"viewAllRoute\"]]],null,{\"statements\":[[4,\"unless\",[[20,[\"item\",\"hideViewAll\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"text-right m-t-md\"],[7],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-link text-bigger\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",null,\"providers\"]],[7],[0,\"View all\"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"No data providers\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/c3-chart/template.hbs" } });
});
define('sa-dashboard/components/citation-widget/component', ['exports', 'ember-osf/components/citation-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/comment-detail/component', ['exports', 'ember-osf/components/comment-detail/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/comment-form/component', ['exports', 'ember-osf/components/comment-form/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/comment-pane/component', ['exports', 'ember-osf/components/comment-pane/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/copy-button', ['exports', 'ember-cli-clipboard/components/copy-button'], function (exports, _copyButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
define('sa-dashboard/components/cp-panel-body', ['exports', 'ember-collapsible-panel/components/cp-panel-body/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/cp-panel-toggle', ['exports', 'ember-collapsible-panel/components/cp-panel-toggle/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/cp-panel', ['exports', 'ember-collapsible-panel/components/cp-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/cp-panels', ['exports', 'ember-collapsible-panel/components/cp-panels/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/discover-page/component', ['exports', 'ember-osf/components/discover-page/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/donate-banner/component', ['exports', 'ember-osf/components/donate-banner/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/dropdown-widget/component', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        dropList: null,
        firstRow: 'Select type', // Text for visible first row on dropdown,
        mode: 'dropdown', // Can be dropdown or search
        filteredList: null,
        filterText: '',
        showList: false,
        selectedType: null, // If mode of widget is dropdown, this will be set to item listed in query parameters
        enteredItem: null, // If mode of widget is search, this will be set to the term in query parameters
        updatedData: Ember.observer('data', function () {
            if (this.get('widgetSettings.aggregationTitle')) {
                this.processData(this.get('data'));
            }
        }),
        typingTimer: null,
        init() {
            this._super(...arguments);
            // check settings to see what the mode is
            let settings = this.get('widgetSettings');
            if (settings && settings.mode) {
                this.set('mode', settings.mode);
            }
            this.set('dropList', Ember.A());
            this.set('filteredList', Ember.A());
            let aggregationsData = this.get('aggregations.dropdownList.buckets') || this.get('aggregations.publishers.buckets');
            this.processData(aggregationsData);
            // Show the selected parameter
            let queryParams = this.get('parameters');
            var facet = this.get("item.facetDashParameter");

            if (queryParams[facet]) {
                if (facet === 'type') {
                    this.set('selectedType', queryParams[facet]);
                    if (queryParams[facet] === "project") {
                        this.set('selectedType', queryParams[facet] + " & awards");
                    }
                } else if (facet === 'funders' || facet === 'publishers' || facet === 'contributors') {
                    let id = { key: queryParams[facet] };
                    this.fetchAgentDetails([id]).then(data => {
                        if (data[0]) {
                            this.set('enteredItem', data[0].name);
                        }
                    });
                } else {
                    this.set('enteredItem', queryParams[facet]);
                }
            }
        },
        fetchAgentDetails: async function (agentList) {

            let agent_details = await Ember.$.ajax({
                url: 'https://dev-labs.cos.io/bulk_get_agents',
                crossDomain: true,
                data: JSON.stringify(agentList),
                type: 'POST',
                contentType: 'application/json'
            });
            return JSON.parse(agent_details);
        },
        outsideClick(event) {
            if (!this.get('showList')) return;
            let $element = this.$();
            let $target = $(event.target);

            if ($element && $target && !$target.closest($element).length) {
                this.set('showList', false);
            }
        },
        didInsertElement() {
            if (this.get('mode') === 'dropdown') return;
            let clickHandler = this.get('outsideClick').bind(this);
            Ember.$(document).on('click', clickHandler);
        },
        willDestroyElement() {
            if (this.get('mode') === 'dropdown') return;
            let clickHandler = this.get('outsideClick').bind(this);
            Ember.$(document).off('click', clickHandler);
        },
        processData(data) {
            this.get('dropList').clear();
            this.get('filteredList').clear();
            data.forEach(item => {
                let obj = {};
                if (item.doc_count) {
                    if (item.doc_count > 0) {
                        obj.key = item.key;
                        if (item.name) {
                            obj.name = item.name.buckets[0].key;
                        }
                    } else {
                        return;
                    }
                } else if (item.number) {
                    if (item.number > 0) {
                        obj.key = item.id;
                        obj.name = item.name;
                    } else {
                        return;
                    }
                }
                if (obj.key === 'project') {
                    obj.key += ' & awards';
                }
                this.get('dropList').addObject(obj);
                this.get('filteredList').addObject(obj);
            });
        },
        filterInput(type, filter_data, search_term) {
            let afilteredList = filter_data.hits.hits.map(function (x) {
                let contributorsList;

                if (type === 'tags') {
                    contributorsList = x._source.tags.map(function (y) {
                        return {
                            key: y,
                            name: y
                        };
                    });
                } else {
                    contributorsList = x._source.lists[type].map(function (y) {
                        return {
                            key: y.id,
                            name: y.name
                        };
                    });
                }

                var filteredContribList = contributorsList.filter(word => word.name.toLowerCase().match(search_term.toLowerCase()));

                return filteredContribList;
            });

            let flattenedFilteredContribList = afilteredList.reduce((a, b) => a.concat(b), []);

            flattenedFilteredContribList.filter(contribToTest => contribToTest === flattenedFilteredContribList.find(testContrib => testContrib.name === contribToTest.name));

            this.set('filteredList', Array.from(new Set(flattenedFilteredContribList)));
        },
        actions: {
            transitionToFacet(value) {
                //Two different items here; one refers to the widget; one refers to the datum.
                let queryParams = {};
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = value;
                    queryParams["page"] = undefined;
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                }
            },
            removeFilter(key) {
                let queryParams = {};
                queryParams[key] = undefined;
                this.attrs.transitionToFacet("search", queryParams);
            },
            applySelection(value) {
                this.send('transitionToFacet', value);
            },
            debouncedfilterVisible() {
                clearTimeout(this.get('typingTimer'));
                let typingTimer = setTimeout(function () {
                    this.send('filterVisible');
                }.bind(this), 500);
                this.set('typingTimer', typingTimer);
            },
            resetDebounce() {
                clearTimeout(this.get('typingTimer'));
            },
            filterVisible: async function () {

                let widget_category = this.get('item.facetDashParameter');
                let term_name = "lists." + this.get('item.facetDashParameter') + ".name.exact";
                if (widget_category === 'tags') {
                    term_name = this.get('item.facetDashParameter') + ".exact";
                }
                let search_term_query = this.get('filterText');
                let search_term = "^" + this.get('filterText');

                let first_char_search_term = search_term_query.charAt(0).toLowerCase();
                if (search_term_query.length > 1) {
                    search_term_query = search_term_query.slice(1, search_term_query.length);
                    search_term_query = "[" + first_char_search_term + first_char_search_term.toUpperCase() + "]" + search_term_query + "(.*)";
                } else {
                    search_term_query = search_term_query + "(.*)";
                }

                let filter_query = {
                    "query": {
                        "bool": {
                            "must": {
                                "regexp": {
                                    [term_name]: {
                                        "value": search_term_query
                                    }
                                }
                            }
                        }
                    }
                };

                let filter_data = await Ember.$.ajax({
                    url: _environment.default.apiUrl + 'records/_search?request_cache=true',
                    crossDomain: true,
                    data: JSON.stringify(filter_query),
                    type: 'POST',
                    contentType: 'application/json'
                });

                this.filterInput(widget_category, filter_data, search_term);
            },
            showList() {
                this.set('showList', true);
            }
        }

    });
});
define("sa-dashboard/components/dropdown-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D1DFQ8W7", "block": "{\"symbols\":[\"item\",\"type\"],\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"mode\"]],\"dropdown\"],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"p-md\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"selectedType\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"facet-tag\"],[7],[0,\"Current selection:\\n          \"],[6,\"div\"],[7],[6,\"b\"],[7],[1,[18,\"selectedType\"],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],\"removeFilter\",[20,[\"item\",\"facetDashParameter\"]]]],[7],[6,\"i\"],[9,\"class\",\"fa fa-close\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" \"],[8],[0,\" \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"applySelection\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"selectedType\"]]],null,{\"statements\":[[0,\"                \"],[6,\"option\"],[9,\"value\",\"\"],[9,\"selected\",\"selected\"],[7],[0,\"Select Type\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[20,[\"dropList\"]]],null,{\"statements\":[[0,\"                \"],[6,\"option\"],[10,\"value\",[19,2,[\"key\"]],null],[10,\"selected\",[25,\"if\",[[25,\"eq\",[[20,[\"selectedType\"]],[19,2,[\"key\"]]],null],true],null],null],[7],[1,[19,2,[\"key\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"mode\"]],\"search\"],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"p-md\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"enteredItem\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"facet-tag\"],[7],[0,\"Current selection:\\n              \"],[6,\"div\"],[7],[6,\"b\"],[7],[1,[18,\"enteredItem\"],false],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],\"removeFilter\",[20,[\"item\",\"facetDashParameter\"]]]],[7],[6,\"i\"],[9,\"class\",\"fa fa-close\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\" \"],[8],[0,\" \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"key-up\",\"key-down\",\"focus-in\"],[\"form-control\",[20,[\"filterText\"]],\"Type to filter\",\"debouncedfilterVisible\",\"resetDebounce\",\"showList\"]]],false],[0,\"\\n\"],[4,\"if\",[[20,[\"showList\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[9,\"class\",\"dropdown-search\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"filteredList\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"dropdown-search-item\"],[3,\"action\",[[19,0,[]],\"applySelection\",[19,1,[\"key\"]]]],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"name\"]]],null,{\"statements\":[[0,\"                        \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[1,[19,1,[\"key\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/dropdown-widget/template.hbs" } });
});
define('sa-dashboard/components/dropzone-widget/component', ['exports', 'ember-osf/components/dropzone-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/ember-ace-completion-tooltip', ['exports', 'ember-ace/components/ember-ace-completion-tooltip'], function (exports, _emberAceCompletionTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAceCompletionTooltip.default;
    }
  });
});
define('sa-dashboard/components/ember-ace', ['exports', 'ember-ace/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
    }
  });
});
define('sa-dashboard/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('sa-dashboard/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('sa-dashboard/components/eosf-project-nav/component', ['exports', 'ember-osf/components/eosf-project-nav/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/faceted-search/component', ['exports', 'ember-osf/components/faceted-search/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-browser-icon/component', ['exports', 'ember-osf/components/file-browser-icon/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-browser-item/component', ['exports', 'ember-osf/components/file-browser-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-browser-tree/component', ['exports', 'ember-osf/components/file-browser-tree/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-browser/component', ['exports', 'ember-osf/components/file-browser/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-chooser/component', ['exports', 'ember-osf/components/file-chooser/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-editor/component', ['exports', 'ember-osf/components/file-editor/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-renderer/component', ['exports', 'ember-osf/components/file-renderer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-version/component', ['exports', 'ember-osf/components/file-version/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/file-widget/component', ['exports', 'ember-osf/components/file-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/filter-plaques/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ID_FILTERS = ['contributors', 'funders', 'publishers', 'provider'];

  //Any plaque name on this list will not show up in the plaques list 
  var PLAQUE_BLACKLIST = ['recently_added_sort'];

  exports.default = Ember.Component.extend({
    filters: null,
    init() {

      this._super(...arguments);
      let parameters = this.get('parameters');
      var filters = Object.keys(parameters).filter(key => {
        return key !== "page";
      }).map(key => {
        return {
          "key": key,
          "value": parameters[key]
        };
      });

      // Find and format all query params that use ids for the value
      var ids = filters.filter(item => {
        return ID_FILTERS.indexOf(item.key) !== -1;
      }).map(param => {
        return { key: param.value };
      });
      // Fetch display names
      let promise;
      if (ids.length > 0) {
        promise = this.fetchAgentDetails(ids);
      } else {
        promise = new Ember.RSVP.Promise((res, rej) => {
          res("win");
          rej("error");
        });
      }

      promise.then(data => {
        var displayFilters = filters.map(filter => {
          var value = filter.value;
          for (let agentData of data) {
            if (value === agentData.id) {
              if (!agentData.name == "") {
                value = agentData.name;
              }
              break;
            }
          }
          let filterKey = filter.key;
          if (filter.key === 'publishers') {
            filterKey = 'provider';
          }
          if (value === 'project') {
            value += " & awards";
          }
          return { key: filterKey, value: value };
        });

        //Remove any blackListedNames 
        $.each(displayFilters, function (index, value) {
          $.each(PLAQUE_BLACKLIST, function (i, blacklistedName) {
            console.log(blacklistedName);
            if (value.key === blacklistedName) {
              displayFilters.pop(index);
            }
          });
        });

        this.set('filters', displayFilters);
      });
    },

    fetchAgentDetails: async function (agentList) {
      let agent_details = await Ember.$.ajax({
        url: 'https://dev-labs.cos.io/bulk_get_agents',
        crossDomain: true,
        data: JSON.stringify(agentList),
        type: 'POST',
        contentType: 'application/json'
      });
      return JSON.parse(agent_details);
    },

    actions: {

      removeFilter(filter) {
        let filterKey = filter.key;
        if (filter.key === "provider") {
          filterKey = "publishers";
        }
        let queryParams = {};

        queryParams[filterKey] = undefined;
        queryParams['page'] = undefined;
        this.attrs.transitionToFacet("search", queryParams);
      },

      transitionToFacet(parameter, parameterValue) {
        let queryParams = {};
        queryParams[parameter] = parameterValue;
        this.attrs.transitionToFacet("search", queryParams);
      }

    }

  });
});
define("sa-dashboard/components/filter-plaques/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+dYf3PAi", "block": "{\"symbols\":[\"filter\"],\"statements\":[[6,\"div\"],[9,\"class\",\"widget-body clearfix filter-plaques-container\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"filters\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"filter-plaque\"],[7],[6,\"span\"],[9,\"class\",\"filter-plaque-type\"],[7],[1,[19,1,[\"key\"]],false],[8],[0,\"    \"],[6,\"span\"],[7],[1,[19,1,[\"value\"]],false],[8],[0,\"    \"],[6,\"span\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],\"removeFilter\",[19,1,[]]]],[7],[6,\"i\"],[9,\"class\",\"fa fa-close\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/filter-plaques/template.hbs" } });
});
define('sa-dashboard/components/lazy-options/component', ['exports', 'ember-osf/components/lazy-options/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/license-list/component', ['exports', 'ember-osf/components/license-list/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/license-picker/component', ['exports', 'ember-osf/components/license-picker/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/list-widget/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        data: [''],
        init() {
            this._super(...arguments);
            if (this.get('chartType') === 'recentlyAdded') {
                var data = this.get('data.hits.hits').map(function (hits, index) {
                    return {
                        number: index + 1,
                        name: hits._source.title,
                        id: hits._source.id
                    };
                });
                this.set('data', data);
            } else if (this.get('chartType') == 'highlightedCollections') {
                data = [{
                    number: 1,
                    name: 'CAVEcam Virtual Reality Photography Collection',
                    id: '46002-874-0B4'
                }, {
                    number: 2,
                    name: 'Data from: Carbonic Anhydrases, EPF2 and a Novel Protease Mediate CO2 Control of Stomatal Development',
                    id: '4619D-B54-28E'
                }, {
                    number: 3,
                    name: 'Heavy Metals in the Ocean Insect, Halobates',
                    id: '4612B-AF0-7FB'
                }, {
                    number: 4,
                    name: 'Keith Rayner Eye Movements in Reading Data Collection',
                    id: '4601B-68A-696'
                }, {
                    number: 5,
                    name: 'Stack Gas and Plume Aerosol Measurements from Renewable Diesel and Ultra Low Sulfur Diesel in At-Sea Operation of Research Vessel Robert Gordon Sproul',
                    id: '4607A-27C-FB9'
                }];
                this.set('data', data);
            } else if (this.get('chartType') === 'topContributors') {
                this.fetchAgentDetails(this.get('aggregations.listWidgetData.buckets'));
            } else {
                this.processData(this.get('aggregations.listWidgetData.buckets'));
            }
        },
        processData(data) {
            this.set('data', data.map(raw_datum => {
                return {
                    number: raw_datum.doc_count,
                    name: raw_datum.key
                };
            }));
        },

        fetchAgentDetails: async function (data) {
            let agent_details = await Ember.$.ajax({
                url: 'https://dev-labs.cos.io/bulk_get_agents',
                crossDomain: true,
                data: JSON.stringify(data),
                type: 'POST',
                contentType: 'application/json'
            });
            this.set('data', JSON.parse(agent_details).filter(element => element.name !== ''));
        },

        actions: {
            transitionToFacet(item) {
                //Two different items here; one refers to the widget; one refers to the datum.
                let queryParams = {};
                var facet = this.get("item.facetDashParameter");
                let facetDash = this.get("item.facetDash");
                if (facet) {
                    queryParams[facet] = item.name;
                    if (facet === 'contributors' || facet === 'publishers') {
                        queryParams["page"] = undefined;
                    }
                    if (facetDash === "objectDetail" || facetDash === "agentDetail" || facet === 'contributors' || facet === 'publishers') {
                        queryParams[facet] = item.id;
                    }
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                }
            },
            transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, {});
            }
        }
    });
});
define("sa-dashboard/components/list-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WaDD4BSk", "block": "{\"symbols\":[\"listItem\"],\"statements\":[[6,\"table\"],[9,\"style\",\"width: 100%;\"],[9,\"class\",\"list-widget widget-body\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"        \"],[6,\"tr\"],[9,\"href\",\"#\"],[9,\"class\",\"list-widget-item\"],[7],[0,\"\\n                \"],[6,\"td\"],[9,\"class\",\"item-number\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",[19,1,[]]]],[7],[1,[19,1,[\"number\"]],false],[8],[0,\"\\n                \"],[6,\"td\"],[9,\"class\",\"item-name\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",[19,1,[]]]],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"data\",\"length\"]]],null,{\"statements\":[[4,\"unless\",[[20,[\"item\",\"hideViewAll\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"text-right m-t-md\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"class\",\"btn btn-link text-bigger\"],[3,\"action\",[[19,0,[]],\"transitionToViewAll\",[20,[\"item\"]]]],[7],[0,\"View more\"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"No results\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/list-widget/template.hbs" } });
});
define('sa-dashboard/components/maintenance-banner/component', ['exports', 'ember-osf/components/maintenance-banner/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/navbar-auth-dropdown/component', ['exports', 'ember-osf/components/navbar-auth-dropdown/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/new-navbar-auth-dropdown/component', ['exports', 'ember-osf/components/new-navbar-auth-dropdown/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/new-osf-navbar/component', ['exports', 'ember-osf/components/new-osf-navbar/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/number-widget/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        total: null,
        settings: {
            fontSize: 3,
            fontColor: '#F44336',
            isLink: true,
            pre: '',
            post: ''
        },
        init() {
            this._super(...arguments);
            let settings = this.get('widgetSettings');
            if (settings) {
                this.set('settings', Ember.assign(this.get('settings'), settings));
            }
        },

        didReceiveAttrs() {
            this._super(...arguments);
            var unformatted = this.total || 0;
            this.set('total', unformatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        },

        actions: {

            transitionToFacet() {
                //Two different items here; one refers to the widget; one refers to the datum.
                if (!this.get('settings.isLink')) {
                    return;
                }
                let queryParams = {};
                var facet = this.get("item.facetDashParameter");
                let facetDash = this.get("item.facetDash");
                if (facetDash === "url" && item.url) {
                    window.location.href = item.url;
                    return;
                }
                if (facetDash) {
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                }
            }

        }

    });
});
define("sa-dashboard/components/number-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hFYlr6PR", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"widget-body clearfix\"],[7],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",[26,[\"widget-number size-\",[20,[\"settings\",\"fontSize\"]],\" \",[25,\"if\",[[20,[\"settings\",\"isLink\"]],\"is-link\"],null]]]],[10,\"style\",[26,[\"color:\",[20,[\"settings\",\"fontColor\"]],\";\"]]],[7],[0,\"\\n        \"],[6,\"span\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\"]],[7],[1,[20,[\"settings\",\"pre\"]],false],[1,[18,\"total\"],false],[1,[20,[\"settings\",\"post\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/number-widget/template.hbs" } });
});
define('sa-dashboard/components/oauth-popup/component', ['exports', 'ember-osf/components/oauth-popup/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('sa-dashboard/components/object-detail-widget/component', ['exports', 'sa-dashboard/config/environment', 'npm:is-url'], function (exports, _environment, _npmIsUrl) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var isHTTPURL = function (value) {
        var httpURL = /^https?/;
        return httpURL.test(value.trim()) && (0, _npmIsUrl.default)(value);
    };

    exports.default = Ember.Component.extend({

        showJSON: false,
        showAllContrib: false,
        hasMoreContrib: false,

        objectData: Ember.computed(function () {
            return this.get('data');
        }),

        affiliations: Ember.computed(function () {
            return Array.from(new Set(this.get('data._source.affiliations')));
        }),

        dataAsString: Ember.computed(function () {
            var data = this.get('data');

            if (!library) var library = {};

            library.json = {
                replacer: function (match, pIndent, pKey, pVal, pEnd) {
                    var key = '<span class=json-key>';
                    var val = '<span class=json-value>';
                    var str = '<span class=json-string>';
                    var r = pIndent || '';
                    if (pKey) r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
                    if (pVal) r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
                    return r + (pEnd || '');
                },
                prettyPrint: function (obj) {
                    var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
                    return JSON.stringify(obj, null, 3).replace(/&/g, '&amp;').replace(/\\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(jsonLine, library.json.replacer);
                }
            };

            return library.json.prettyPrint(data);
            //return JSON.stringify(data, null, '    ');
        }),

        identifierURLs: Ember.computed('objectData._source.identifiers', function () {
            return this.get('objectData')._source.identifiers.filter(function (id) {
                return isHTTPURL(id);
            });
        }),

        dataUrl: Ember.computed(function () {
            // Use the doi url to link to the resource, otherwise use the first http url
            var data = this.get('objectData');
            var identifiers = data._source.identifiers;
            var httpUrl = null;
            for (var id of identifiers) {
                if (id.includes('doi')) {
                    return id;
                } else if (!httpUrl && id.includes('http')) {
                    httpUrl = id;
                }
            }
            return httpUrl;
        }),

        funders: Ember.computed('objectData._source.lists.funders', function () {
            var funders = this.get('objectData')._source.lists.funders;
            let currency = '$';
            if (funders) {
                return funders.map(funder => {
                    let total = funder.awards.reduce((total, award) => {
                        return total + award.amount;
                    }, 0);
                    let formattedTotal = total > 0 ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;
                    return { name: funder.name, awardTotal: formattedTotal, currency: currency };
                });
            }
        }),

        topContrib: Ember.computed('objectData._source.lists.contributors', function () {
            var topContrib = this.get('objectData')._source.lists.contributors;
            if (topContrib.length > 10) {
                this.hasMoreContrib = true;
            }
            return topContrib.slice(0, 10);
        }),

        resourceType: Ember.computed('data', function () {
            let type = this.get('data._source.type');
            if (this.get('data._source.type') === 'project') {
                type = this.get('data._source.type') + ' & awards';
            }

            return type;
        }),

        init() {
            this._super(...arguments);
            let data = this.processData(this.get('data'));
            this.set('data', data);
            this.get('resourceType');
        },

        processData(data) {
            let datum = data.hits.hits[0];
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            options.timeZone = 'UTC';
            if (datum._source.date_modified) {
                //keep
                datum["_source"]["date_modified"] = new Date(datum["_source"]["date_modified"]).toLocaleDateString('en-US', options);
            }
            if (datum._source.date_published) {
                //keep
                datum["_source"]["date_published"] = new Date(datum["_source"]["date_published"]).toLocaleDateString('en-US', options);
            }
            if (datum._source.date_updated) {
                //keep
                datum["_source"]["date_updated"] = new Date(datum["_source"]["date_updated"]).toLocaleDateString('en-US', options);
            }
            return datum;
        },

        actions: {
            transitionToFacet(facetDash, parameterName, parameter) {
                let queryParams = {
                    id: undefined
                };
                queryParams[parameterName] = parameter;
                this.attrs.transitionToFacet(facetDash, queryParams);
            },

            transitionToSHARE(item) {
                window.location.href = item.url;
            },

            transitionToViewAll(item) {
                this.attrs.transitionToFacet(item.dataType, item);
            }

        }

    });
});
define("sa-dashboard/components/object-detail-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AV3L6L10", "block": "{\"symbols\":[\"source\",\"identifier\",\"tag\",\"funder\",\"affiliation\",\"contributor\",\"contributor\",\"publisher\"],\"statements\":[[6,\"div\"],[9,\"class\",\"object-detail\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"\\n        \"],[1,[20,[\"objectData\",\"_source\",\"title\"]],true],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"dataUrl\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[9,\"class\",\"btn btn-md object-detail-button\"],[10,\"href\",[26,[[18,\"dataUrl\"]]]],[7],[0,\"Access Resource\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"h3\"],[7],[0,\"Resource Type\"],[8],[0,\"\\n    \"],[6,\"ul\"],[7],[6,\"li\"],[7],[1,[18,\"resourceType\"],false],[8],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"objectData\",\"_source\",\"publishers\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Data Providers\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"objectData\",\"_source\",\"publishers\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[1,[19,8,[]],false],[8],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"objectData\",\"_source\",\"description\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[6,\"h3\"],[7],[0,\"Description\"],[8],[1,[20,[\"objectData\",\"_source\",\"description\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showAllContrib\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h3\"],[7],[0,\"Contributors\"],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"objectData\",\"_source\",\"lists\",\"contributors\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",\"search\",\"contributors\",[19,7,[\"id\"]]]],[7],[1,[19,7,[\"name\"]],false],[8],[8],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"        \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"hasMoreContrib\"]]],null,{\"statements\":[[0,\"    \"],[6,\"a\"],[9,\"class\",\"toggleContrib\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showAllContrib\"]],[7],[0,\"Hide    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-up\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"h3\"],[7],[0,\"Contributors\"],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"topContrib\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[6,\"a\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",\"search\",\"contributors\",[19,6,[\"id\"]]]],[7],[1,[19,6,[\"name\"]],false],[8],[8],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"        \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"hasMoreContrib\"]]],null,{\"statements\":[[0,\"    \"],[6,\"a\"],[9,\"class\",\"toggleContrib\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showAllContrib\"]],[7],[0,\"View More    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-down\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"affiliations\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Affiliations\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"affiliations\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[7],[1,[19,5,[]],false],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"funders\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Funders\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"funders\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[7],[1,[19,4,[\"name\"]],false],[0,\"\\n\"],[4,\"if\",[[19,4,[\"awardTotal\"]]],null,{\"statements\":[[0,\"                      : \"],[1,[19,4,[\"currency\"]],false],[1,[19,4,[\"awardTotal\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"objectData\",\"_source\",\"tags\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[6,\"h3\"],[7],[0,\"Tags\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"objectData\",\"_source\",\"tags\"]]],null,{\"statements\":[[0,\"                \"],[6,\"span\"],[9,\"class\",\"object-tag\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",\"search\",\"tags\",[19,3,[]],true],[[\"on\"],[\"click\"]]],[7],[1,[19,3,[]],false],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"identifierURLs\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Identifiers\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"identifierURLs\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[0,\"\\n                        \"],[6,\"a\"],[10,\"href\",[26,[[19,2,[]]]]],[7],[1,[19,2,[]],false],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"objectData\",\"_source\",\"sources\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Sources\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"objectData\",\"_source\",\"sources\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Dates\"],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"objectData\",\"_source\",\"date_published\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"First published by Source:\"],[8],[0,\" \"],[1,[20,[\"objectData\",\"_source\",\"date_published\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"objectData\",\"_source\",\"date_updated\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Last updated by Source:\"],[8],[0,\" \"],[1,[20,[\"objectData\",\"_source\",\"date_updated\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"objectData\",\"_source\",\"date_modified\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[6,\"strong\"],[7],[0,\"Last harvested by SHARE:\"],[8],[0,\" \"],[1,[20,[\"objectData\",\"_source\",\"date_modified\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"showJSON\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showJSON\"]],[7],[0,\"Hide Raw Data    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-up\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n        \"],[6,\"pre\"],[7],[1,[18,\"dataAsString\"],true],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"pointer\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showJSON\"]],[7],[0,\"View Raw Data    \"],[6,\"i\"],[9,\"class\",\"fa fa-chevron-down\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/object-detail-widget/template.hbs" } });
});
define('sa-dashboard/components/old-file-browser-item/component', ['exports', 'ember-osf/components/old-file-browser-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/old-file-browser/component', ['exports', 'ember-osf/components/old-file-browser/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/osf-copyright/component', ['exports', 'ember-osf/components/osf-copyright/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('sa-dashboard/components/osf-footer/component', ['exports', 'ember-osf/components/osf-footer/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('sa-dashboard/components/osf-mode-footer/component', ['exports', 'ember-osf/components/osf-mode-footer/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('sa-dashboard/components/osf-navbar/component', ['exports', 'ember-osf/components/osf-navbar/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/osf-paginator/component', ['exports', 'ember-osf/components/osf-paginator/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/page-controls/component', ['exports', 'ember-osf/components/page-controls/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/pagination-control/component', ['exports', 'ember-osf/components/pagination-control/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('sa-dashboard/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('sa-dashboard/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('sa-dashboard/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('sa-dashboard/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('sa-dashboard/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('sa-dashboard/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('sa-dashboard/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('sa-dashboard/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('sa-dashboard/components/project-selector/component', ['exports', 'ember-osf/components/project-selector/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/query-syntax/component', ['exports', 'ember-osf/components/query-syntax/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("sa-dashboard/components/query-widget/component", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        init() {
            this._super(...arguments);
            this.set("query", this.get("parameters").query);
        },

        actions: {

            transitionToFacet(parameter) {
                let queryParams = {};
                queryParams["query"] = parameter;
                queryParams["page"] = undefined;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }

        }

    });
});
define("sa-dashboard/components/query-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z2isvmDT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"widget-body clearfix\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"form-group\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",[20,[\"query\"]]],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"input-group\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"type\",\"value\",\"placeholder\"],[\"form-control\",\"text\",[20,[\"query\"]],\"e.g., Ocean\"]]],false],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"type\",\"submit\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-search\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/query-widget/template.hbs" } });
});
define('sa-dashboard/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define("sa-dashboard/components/results-list/component", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        data: [""],
        pagebackbtn: null,
        pagenextbtn: null,
        newTab: false,
        objectID: "",

        init() {
            this._super(...arguments);
            let data = this.processData(this.get('data.hits.hits'));
            this.set('data', data);
            this.get('resourceType');
        },
        didRender() {
            $('.dropdown-toggle').click(function () {
                $(this).siblings('.dropdown-menu').toggleClass('collapsed expanded');
            });

            $(".menu").click(e => {
                e.stopPropagation();
                this.set('objectID', e.target.getAttribute('data-id'));

                switch (e.target.innerHTML) {
                    case "Open in new tab":
                        this.set('newTab', true);
                        this.send('transitionToFacet');
                        this.set('newTab', false);
                        break;
                    case "Open Link":
                        this.set('newTab', "transitionToFacet");
                        this.send('transitionToFacet');
                        this.set('newTab', false);
                        break;
                    case "Copy URL":
                        var aux = document.createElement("input");
                        aux.setAttribute("value", window.location.origin + '/' + this.get('objectID'));
                        document.body.appendChild(aux);
                        aux.select();
                        document.execCommand("copy");
                        document.body.removeChild(aux);
                        $(e.target).text('Text copied');
                        setTimeout(() => {
                            $(e.target).text('Copy URL');
                        }, 3000);
                        break;
                    default:
                }
                return false;
            });

            //check the sort
            if (this.get('parameters').recently_added_sort === 'desc') {
                $('.orderBy label').removeClass("active orderBySelected");
                $(".orderBy").children().eq(1).addClass("active orderBySelected");
            }
        },
        pagebackbtn: Ember.computed('page', function () {
            let page = Number(this.parameters['page']);
            if (page == 1 || !page) {
                return 'disable';
            } else {
                return null;
            }
        }),
        pagenextbtn: Ember.computed('data', function () {
            if (this.get('data').length < 10) {
                return 'disable';
            } else {
                return null;
            }
        }),
        pageNumber: Ember.computed('page', function () {
            let page = 'Page ' + this.get('parameters').page;
            if (!this.get('parameters').page) page = 'Page 1';
            return page;
        }),
        processData(data) {
            return data.map(datum => {
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                options.timeZone = 'UTC';
                if (datum._source.description) {
                    datum['description_truncated'] = datum._source.description.substring(0, 200) + '...';
                }
                if (datum._source.date) {
                    datum["_source"]["date"] = new Date(datum["_source"]["date"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_created) {
                    datum["_source"]["date_created"] = new Date(datum["_source"]["date_created"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_modified) {
                    datum["_source"]["date_modified"] = new Date(datum["_source"]["date_modified"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_published) {
                    datum["_source"]["date_published"] = new Date(datum["_source"]["date_published"]).toLocaleDateString('en-US', options);
                }
                if (datum._source.date_updated) {
                    datum["_source"]["date_updated"] = new Date(datum["_source"]["date_updated"]).toLocaleDateString('en-US', options);
                }
                if (datum["_source"]["type"] === "project") {
                    datum["_source"]["type"] = datum["_source"]["type"] + " & awards";
                }

                return datum;
            });
        },
        actions: {

            transitionToFacet(facet_name, parameter_name, parameter_value) {
                let queryParams = {};
                queryParams[parameter_name] = parameter_value;
                if (this.get('newTab') === true) {
                    window.open(window.location.origin + '/' + this.get('objectID'));
                } else if (this.get('newTab') === "transitionToFacet") {
                    let url = window.location + '/' + this.get('objectID');
                    console.log("URL", url);
                    window.location.replace(window.location.origin + '/' + this.get('objectID'));
                } else {
                    this.attrs.transitionToFacet(facet_name, queryParams);
                }
            },
            pageback() {
                let page = Number(this.parameters["page"]);
                if (!page || --page < 1) {
                    // decrements and modifies page var before the comparison
                    page = 1;
                }
                this.attrs.transitionToFacet("search", { page: page });
            },
            pagenext() {
                let page = Number(this.parameters["page"]);
                console.log("page", page);
                if (!page) {
                    page = 2;
                } else if (++page < 1) {
                    // increments and modifies page var before the comparison
                    page = 1;
                }
                this.attrs.transitionToFacet("search", { page: page });
            },
            orderBy() {
                let orderBtnID = $(event.target).children().attr('id');

                $('.orderBy label').removeClass("active orderBySelected");
                $(event.target).addClass("active orderBySelected");

                if (orderBtnID === 'orderByDate') {
                    console.log('date');
                    this.attrs.transitionToFacet('search', { recently_added_sort: 'desc' });
                } else if (orderBtnID === 'orderByRelevance') {
                    console.log('relevance');
                    let queryParams = {};
                    queryParams['recently_added_sort'] = undefined;
                    this.attrs.transitionToFacet('search', queryParams);
                }
            }

        }

    });
});
define("sa-dashboard/components/results-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5/TfV7uJ", "block": "{\"symbols\":[\"item\",\"publisher\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"list-widget widget-body\"],[9,\"style\",\"padding: 0;\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n        \"],[6,\"span\"],[7],[0,\"Sort by: \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"btn-group orderBy\"],[9,\"data-toggle\",\"buttons\"],[7],[0,\"  \\n\\n            \"],[6,\"label\"],[9,\"class\",\"btn active orderBySelected\"],[3,\"action\",[[19,0,[]],\"orderBy\"]],[7],[0,\"\\n                \"],[6,\"input\"],[9,\"type\",\"radio\"],[9,\"name\",\"options\"],[9,\"id\",\"orderByRelevance\"],[7],[8],[0,\" Relevance\\n            \"],[8],[0,\"\\n\\n            \"],[6,\"label\"],[9,\"class\",\"btn\"],[3,\"action\",[[19,0,[]],\"orderBy\"]],[7],[0,\"\\n                \"],[6,\"input\"],[9,\"type\",\"radio\"],[9,\"name\",\"options\"],[9,\"id\",\"orderByDate\"],[7],[8],[0,\" Date\\n            \"],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[6,\"a\"],[10,\"href\",[26,[\"objectDetail?id=\",[19,1,[\"_source\",\"id\"]]]]],[9,\"style\",\"position: relative; clear: both;\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"style\",\"cursor: pointer; background-color: #eee; overflow: hidden; position: relative; margin: 0 10px;\"],[9,\"href\",\"#\"],[9,\"class\",\"list-widget-item\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",\"objectDetail\",\"id\",[19,1,[\"_source\",\"id\"]]]],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"item-number\"],[9,\"style\",\"color: #fff; background-color: #aaa; position: absolute; left: 0; top: 0; padding: 3px 7px 3px 7px; font-size: 13px; margin: 0px;\"],[7],[1,[19,1,[\"_source\",\"type\"]],false],[8],[0,\"\\n\\n\\n\\n\\n\\n        \"],[6,\"div\"],[9,\"class\",\"item-number\"],[9,\"style\",\"color: #aaa; float: right; font-size: 13px;\"],[7],[0,\"\\n\\n\\n\\n            \"],[1,[19,1,[\"_source\",\"date\"]],false],[0,\"\\n\\n            \"],[6,\"li\"],[9,\"class\",\"menu dropdown\"],[7],[0,\"\\n              \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"btn btn-lg  dropdown-toggle\"],[7],[6,\"div\"],[9,\"class\",\"dots\"],[7],[8],[0,\"\\n\\n              \"],[8],[0,\"\\n              \"],[6,\"ul\"],[9,\"class\",\"menu  dropdown-menu collapsed\"],[9,\"role\",\"menu\"],[7],[0,\"\\n                \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[10,\"data-id\",[26,[\"objectDetail?id=\",[19,1,[\"_source\",\"id\"]]]]],[7],[0,\"Open in new tab\"],[8],[8],[0,\"\\n                \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[10,\"data-id\",[26,[\"objectDetail?id=\",[19,1,[\"_source\",\"id\"]]]]],[7],[0,\"Open Link\"],[8],[8],[0,\"\\n                \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[10,\"data-id\",[26,[\"objectDetail?id=\",[19,1,[\"_source\",\"id\"]]]]],[7],[0,\"Copy URL\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"item-number\"],[9,\"style\",\"color: #666; clear: both; padding-top: 10px;\"],[7],[1,[19,1,[\"_source\",\"title\"]],false],[8],[0,\"\\n\"],[0,\"    \"],[6,\"div\"],[9,\"style\",\"max-width: 700px; color: #888; padding-top: 10px; padding-bottom: 10px;\"],[7],[1,[19,1,[\"description_truncated\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"item-number\"],[9,\"style\",\"color: #aaa; float: left; clear: both; font-size: 13px;\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"_source\",\"publishers\"]]],null,{\"statements\":[[0,\"        Provided by: \"],[4,\"each\",[[19,1,[\"_source\",\"publishers\"]]],null,{\"statements\":[[0,\"\\n        \"],[6,\"span\"],[7],[1,[19,2,[]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\\n\\n\\n\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"item-name\"],[9,\"style\",\"cursor: pointer; margin-bottom: 10px; float: right; color: #aaa: padding: 3px 5px 3px 5px;\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\",\"objectDetail\",\"id\",[19,1,[\"_source\",\"id\"]]]],[7],[0,\"Details  \"],[6,\"i\"],[9,\"class\",\"fa fa-angle-right\"],[7],[8],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"style\",\"padding: 10px; margin-bottom: 20px;\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"colspan\",\"4\"],[9,\"style\",\"padding: 8px; padding-bottom: 28px;\"],[7],[0,\"\\n\"],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[6,\"h3\"],[9,\"class\",\"text-center p-t-md\"],[7],[0,\"\\n    No results found.\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[20,[\"data\",\"length\"]]],null,{\"statements\":[[6,\"div\"],[9,\"style\",\"text-align: center; padding: 30px;\"],[7],[0,\"\\n    \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[10,\"disabled\",[25,\"if\",[[20,[\"pagebackbtn\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pageback\"]],[7],[6,\"i\"],[9,\"class\",\"fa fa-chevron-left\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\" \"],[1,[18,\"pageNumber\"],false],[0,\"\\n    \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[10,\"disabled\",[25,\"if\",[[20,[\"pagenextbtn\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pagenext\"]],[7],[6,\"i\"],[9,\"class\",\"fa fa-chevron-right\"],[9,\"aria-hidden\",\"true\"],[7],[8],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/results-list/template.hbs" } });
});
define('sa-dashboard/components/search-dropdown/component', ['exports', 'ember-osf/components/search-dropdown/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-daterange/component', ['exports', 'moment'], function (exports, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const DATE_FORMAT = 'YYYY-MM-DD';

    exports.default = Ember.Component.extend({
        state: {
            start: null,
            end: null
        },
        init() {
            this._super(...arguments);
            let queryParams = this.get('parameters');
            this.set('state.start', queryParams.start || '1996-01-01');
            this.set('state.end', queryParams.end || new Date().toISOString().split('T')[0]);
        },
        didInsertElement() {
            this._super(...arguments);

            let dateRanges = {
                'Past week': [(0, _moment.default)().subtract(1, 'week'), (0, _moment.default)()],
                'Past month': [(0, _moment.default)().subtract(1, 'month'), (0, _moment.default)()],
                'Past year': [(0, _moment.default)().subtract(1, 'year'), (0, _moment.default)()],
                'Past decade': [(0, _moment.default)().subtract(10, 'year'), (0, _moment.default)()]
            };

            let picker = this.$('.date-range');
            picker.daterangepicker({
                ranges: dateRanges,
                autoUpdateInput: false,
                locale: { cancelLabel: 'Clear' }
            });

            picker.on('apply.daterangepicker', (ev, picker) => {
                Ember.run(() => {
                    let start = picker.startDate;
                    let end = picker.endDate;
                    this.send('transitionToFacet', start, end);
                });
            });

            picker.on('cancel.daterangepicker', () => {
                Ember.run(() => {
                    this.send('clear');
                });
            });

            Ember.run.scheduleOnce('actions', this, function () {
                this.filterUpdated();
            });
        },

        statePrevious: [],
        changed: Ember.observer('state.start', 'state.end', function () {
            let start = this.get('state.start');
            let end = this.get('state.end');
            if (start !== this.get('statePrevious.start') || end !== this.get('statePrevious.end')) {
                this.set('pickerValue', `${(0, _moment.default)(start).format(DATE_FORMAT)} - ${(0, _moment.default)(end).format(DATE_FORMAT)}`);
                this.updateFilter(start, end);
            }
        }),

        filterUpdated: Ember.observer('state', function () {
            let state = this.get('state');
            if (state.start) {
                let start = (0, _moment.default)(this.get('state.start'));
                let end = (0, _moment.default)(this.get('state.end'));
                let picker = this.$('.date-range').data('daterangepicker');
                picker.setStartDate(start);
                picker.setEndDate(end);
                if (picker.chosenLabel && picker.chosenLabel !== 'Custom Range') {
                    this.set('pickerValue', picker.chosenLabel);
                } else {
                    this.set('pickerValue', `${start.format(DATE_FORMAT)} - ${end.format(DATE_FORMAT)}`);
                }
            } else {
                this.noFilter();
            }
        }),

        noFilter() {
            this.set('pickerValue', 'All time');
        },

        actions: {
            clear() {
                this.noFilter();
                this.set('previousState', this.get('state'));
            },
            transitionToFacet(start, end) {
                let queryParams = {
                    start: `${(0, _moment.default)(start).format('YYYY-MM-DD')}`,
                    end: `${(0, _moment.default)(end).format('YYYY-MM-DD')}`
                };
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }
    });
});
define("sa-dashboard/components/search-facet-daterange/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a/0zu5va", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"p-md\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"date-range\"],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"fa fa-calendar\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n        \"],[1,[18,\"pickerValue\"],false],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"fa fa-caret-down pull-right\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/search-facet-daterange/template.hbs" } });
});
define('sa-dashboard/components/search-facet-language/component', ['exports', 'ember-osf/components/search-facet-language/component', 'npm:langs'], function (exports, _component, _npmLangs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-locked/component', ['exports', 'ember-osf/components/search-facet-locked/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-source/component', ['exports', 'ember-osf/components/search-facet-source/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-typeahead/component', ['exports', 'ember-osf/components/search-facet-typeahead/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-worktype-button/component', ['exports', 'ember-osf/components/search-facet-worktype-button/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-worktype-hierarchy/component', ['exports', 'ember-osf/components/search-facet-worktype-hierarchy/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-facet-worktype/component', ['exports', 'ember-osf/components/search-facet-worktype/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-help-modal/component', ['exports', 'ember-osf/components/search-help-modal/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/search-result/component', ['exports', 'ember-osf/components/search-result/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/sign-up/component', ['exports', 'ember-osf/components/sign-up/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/stacked-bars/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const minLabelWidth = 90;

    exports.default = Ember.Component.extend({
        chartSelector: '.widget-stackedBar',
        data: [],
        pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
        calculateTotal(items) {
            let total = 0;
            for (var value of items) {
                total += value.doc_count;
            }
            return total;
        },
        setData() {
            // Turn numbers into percentages and save to width
            let items = this.get('data.aggregations.stackedData.buckets');
            let total = this.calculateTotal(items);
            let data = items.map((item, index) => {
                let percentage = (item.doc_count * 100 / total).toFixed(2);
                return {
                    number: item.doc_count,
                    label: item.key,
                    percentage: percentage,
                    background: this.get('pattern')[index] || '#666666'
                };
            });
            this.set('data', data);
        },
        generateChart() {
            let items = this.get('data');
            let chartElement = this.$(this.element).find(this.get('chartSelector'));
            chartElement.html('');
            this.setWidths();
            for (var j = 0; j < items.length; j++) {
                let value = items[j];
                if (value.label === 'project') {
                    value.label = value.label + ' & awards';
                }
                chartElement.append('<div class="stack" data-index="' + j + '" data-tooltip="' + value.label + ': ' + value.number + '&nbsp;records" style="width:' + value.width + 'px; background-color:' + value.background + ';"><span>' + value.label + ': ' + value.number + '&nbsp;records</span></div>');
            }
        },
        showHideLabel() {
            let component = this;
            let elements = this.$(this.element).find(this.get('chartSelector') + ' .stack');
            elements.map(function (index, stack) {
                let stackEl = component.$(stack);
                if (stackEl.width() < minLabelWidth) {
                    stackEl.children('span').hide();
                } else {
                    stackEl.children('span').show();
                }
            });
        },
        setWidths() {
            let items = this.get('data');
            let chartElementWidth = this.$(this.element).find(this.get('chartSelector')).width();
            let residualPixel = 0; // How much percentage is left after rounding down
            let topItem = null; // The item that has the highest percentage
            let topItemPercentage = 0; // The highest item Percentage
            for (var item of items) {
                let itemWidth;
                let rawWidth = chartElementWidth / 100 * item.percentage;
                if (rawWidth < 1) {
                    itemWidth = 1;
                    residualPixel -= 1 - rawWidth;
                } else {
                    itemWidth = Math.floor(rawWidth);
                    residualPixel += rawWidth - itemWidth;
                }
                if (item.percentage > topItemPercentage) {
                    topItem = item;
                    topItemPercentage = item.percentage;
                }
                item.width = itemWidth;
            }
            topItem.itemWidth += residualPixel; // Add all residual pixel to biggest item;
        },
        didInsertElement() {
            this.generateChart();
            this.$(window).on('resize', () => {
                this.generateChart.call(this); // This is very expensive, will need to be revised for actual app
                this.showHideLabel.call(this);
            });
            this.showHideLabel.call(this);
            this.$('.stack').click(ev => {
                let target = ev.target;
                if (ev.target.tagName === "SPAN") target = ev.target.parentNode;
                let index = this.$(target).attr("data-index");
                let item = this.get('data')[index];
                this.send('transitionToFacet', item);
            });
        },
        init() {
            this._super(...arguments);
            this.setData();
        },
        actions: {
            transitionToFacet(item) {
                let queryParams = {};
                var facet = this.get("item.facetDashParameter");
                if (facet) {
                    queryParams[facet] = {
                        "project or awards": "project",
                        "creative work": "creative work",
                        "article": "article",
                        "data set": "data set",
                        "registration": "registration",
                        "preprint": "preprint",
                        "conference paper": "conference paper",
                        "book": "book",
                        "report": "report",
                        "software": "software"
                    }[item.label];
                    this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
                } else if (item.url) {
                    window.location.href = item.url;
                }
            }
        }

    });
});
define("sa-dashboard/components/stacked-bars/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x5SDAeRN", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"widget-body clearfix p-v-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"widget-stackedBar\"],[7],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/stacked-bars/template.hbs" } });
});
define('sa-dashboard/components/tags-widget/component', ['exports', 'ember-osf/components/tags-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/text-widget/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            transitionToFacet(parameter) {
                let queryParams = {};
                queryParams["query"] = parameter;
                this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
            }
        }
    });
});
define("sa-dashboard/components/text-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+UbFGfQz", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"widget-body text-widget \",[25,\"if\",[[20,[\"item\",\"showButton\"]],\"summary\"],null]]]],[7],[0,\"\\n    \"],[6,\"div\"],[7],[1,[20,[\"item\",\"content\"]],true],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"showButton\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"class\",\"btn btn-info pull-right\"],[3,\"action\",[[19,0,[]],\"transitionToFacet\"]],[7],[0,\"Read more\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/text-widget/template.hbs" } });
});
define('sa-dashboard/components/total-share-results/component', ['exports', 'ember-osf/components/total-share-results/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/user-feedback-form/component', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		showForm: false,
		actions: {
			toggleForm() {
				this.toggleProperty('showForm');
				if (this.get('showForm')) {
					$("body").css("overflow", "hidden");
				} else {
					$("body").css("overflow", "auto");
				}
			}
		}
	});
});
define("sa-dashboard/components/user-feedback-form/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V29BuZ2p", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"span\"],[9,\"class\",\"btn btn-default user-feedback\"],[3,\"action\",[[19,0,[]],\"toggleForm\"]],[7],[6,\"div\"],[7],[0,\"Provide feedback\"],[8],[8],[0,\"\\n\\n\\n\"],[4,\"if\",[[20,[\"showForm\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"feedback-modal\"],[7],[0,\"\\n\\t\"],[6,\"i\"],[9,\"class\",\"fa fa-times feedback-close\"],[9,\"aria-hidden\",\"true\"],[3,\"action\",[[19,0,[]],\"toggleForm\"]],[7],[8],[0,\"\\n\\t\"],[6,\"iframe\"],[9,\"src\",\"https://docs.google.com/forms/d/e/1FAIpQLScIfQMFzGs3P9gsfGM0-Psl0wnD4otSec86j-K8B7fKmUlfag/viewform?embedded=true\"],[9,\"width\",\"100%\"],[9,\"height\",\"100%\"],[9,\"frameborder\",\"0\"],[9,\"scrolling\",\"no\"],[9,\"class\",\"googleForm\"],[10,\"onsubmit\",[26,[[25,\"action\",[[19,0,[]],\"toggleForm\"],null]]]],[7],[0,\"Loading...\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/user-feedback-form/template.hbs" } });
});
define('sa-dashboard/components/validated-input/component', ['exports', 'ember-osf/components/validated-input/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('sa-dashboard/components/widget-adapter/component', ['exports', 'sa-dashboard/config/environment', 'npm:json-stable-stringify', 'sa-dashboard/utils/date-interval'], function (exports, _environment, _npmJsonStableStringify, _dateInterval) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const helpText = {
        'Total Results': 'Number of unique items returned by your search',
        'Data Providers': 'Organizations or agents, such as publishers, repositories, data centers, archives, and funders, making these resources available. A given resource may list more than one data provider, for example, the Association (e.g. Association for Computing Machinery) and the Association`s Press (ACM Press).',
        'Types': 'Resources, or items, are categorized into Types (article, data set, dissertation, etc.). Any resource not categorized by the Source will appear under Creative Work by default.',
        'Tags': 'Keywords, subjects, and topics that describe the research output. Those listed here are the most frequently listed tags in content aggregated by SHARE.',
        'Funders': 'Organizations, institutions, foundations, or groups that provided financial support for the research',
        'Dates': 'Date information about the resource was last updated by Source',
        'Top Contributors': 'Individuals, organizations, or institutions involved in the production of the resource. Their contribution could be intellectual, material, or financial. Those listed here are the most frequently named contributors in content aggregated by SHARE.',
        'filter-plaques': 'A list of your current search terms, click on X within each box to remove the filter from your current search.',
        'Contributors': 'Individuals, organizations, or institutions involved in the production of the resource. Their contribution could be intellectual, material, or financial.'
        //import Q from 'npm:q';
    };const agg_types = [// agg_types is this array literal, reduced by the following fn

    //
    // Average Aggregation
    // *******************
    {
        'elastic_name': 'avg',
        'pretty_name': 'Average',
        'description': 'A single-value metrics aggregation that computes the average of numeric values that are extracted from the aggregated documents. These values can be extracted either from specific numeric fields in the documents, or be generated by a provided script. Script support is not enabled at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field to calculate the average over',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default. Documents without a value at \'field\' will be placed into this bucket',
            'isValid': function () {
                return true;
            }
        }]
    },

    //
    // Cardinality Aggregation
    // ***********************
    {
        'elastic_name': 'cardinality',
        'pretty_name': 'Cardinality',
        'description': 'A single-value metrics aggregation that calculates an approximate count of distinct values. Values can be extracted either from specific fields in the document or generated by a script. Script support is not enabled at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field to calculate the cardinality of',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'precision_threshold',
            'pretty_name': 'Precision Threshold',
            'description': 'The precision_threshold options allows to trade memory for accuracy, and defines a unique count below which counts are expected to be close to accurate. Above this value, counts might become a bit more fuzzy. The maximum supported value is 40000, thresholds above this number will have the same effect as a threshold of 40000. The default values is 3000.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default. Documents without a value at \'field\' will be placed into this bucket',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Extended Stats Aggregation
    // **************************
    {
        'elastic_name': 'extended_stats',
        'pretty_name': 'Extended Stats',
        'description': 'A multi-value metrics aggregation that computes stats over numeric values extracted from the aggregated documents. These values can be extracted from specific numeric fields in the documents. The extended_stats aggregations is an extended version of the stats aggregation, where additional metrics are added such as sum_of_squares, variance, std_deviation and std_deviation_bounds.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the stats will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'sigma',
            'pretty_name': 'Sigma',
            'description': 'By default, the extended_stats metric will return an object called std_deviation_bounds, which provides an interval of plus/minus two standard deviations from the mean. This can be a useful way to visualize variance of your data. If you want a different boundary, for example three standard deviations, you can set sigma in the request. Sigma can be any non-negative double, meaning you can request non-integer values such as 1.5. A value of 0 is valid, but will simply return the average for both upper and lower bounds. The standard deviation and its bounds are displayed by default, but they are not always applicable to all data-sets. Your data must be normally distributed for the metrics to make sense. The statistics behind standard deviations assumes normally distributed data, so if your data is skewed heavily left or right, the value returned will be misleading.',
            'isValid': function* () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Maximum Aggregation
    // **************************
    {
        'elastic_name': 'max',
        'pretty_name': 'Maximum',
        'description': 'A single-value metrics aggregation that keeps track and returns the maximum value among the numeric values extracted from the aggregated documents.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the maximum will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Minimum Aggregation
    // **************************
    {
        'elastic_name': 'min',
        'pretty_name': 'Minimum',
        'description': 'A single-value metrics aggregation that keeps track and returns the minimum value among the numeric values extracted from the aggregated documents.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the minimum will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Percentiles Aggregation
    // **************************
    {
        'elastic_name': 'percentiles',
        'pretty_name': 'Percentiles',
        'description': 'A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from the aggregated documents. Percentiles show the point at which a certain percentage of observed values occur. For example, the 95th percentile is the value which is greater than 95% of the observed values. Percentiles are often used to find outliers. In normal distributions, the 0.13th and 99.87th percentiles represents three standard deviations from the mean. Any data which falls outside three standard deviations is often considered an anomaly. When a range of percentiles are retrieved, they can be used to estimate the data distribution and determine if the data is skewed, bimodal, etc.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the percentiles will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'percents',
            'pretty_name': 'Percents',
            'description': 'Specify just the percents we are interested in (requested percentiles must be a value between 0-100 inclusive)',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Percentile Ranks Aggregation
    // *****************************
    {
        'elastic_name': 'percentile_ranks',
        'pretty_name': 'Percentile Ranks',
        'description': 'A multi-value metrics aggregation that calculates one or more percentiles over numeric values extracted from the aggregated documents. Percentile rank shows the percentage of observed values which are below certain value. For example, if a value is greater than or equal to 95% of the observed values it is said to be at the 95th percentile rank.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the minimum will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'values',
            'pretty_name': 'Values',
            'description': 'Specify just the values we are interested in',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Stats  Aggregation
    // *****************************
    {
        'elastic_name': 'stats',
        'pretty_name': 'Stats',
        'description': 'The stats that are returned consist of: min, max, sum, count and avg.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents the stats will be calculated on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Sum Aggregation
    // *****************************
    {
        'elastic_name': 'sum',
        'pretty_name': 'Sum',
        'description': 'A single-value metrics aggregation that sums up numeric values that are extracted from the aggregated documents. These values can be extracted either from specific numeric fields in the documents',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents to be summed.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'missing',
            'pretty_name': 'Missing',
            'description': 'A value to use as a default if a given document does not have a given field. Ignored by default.',
            'isValid': function (value) {
                return true;
            }
        }]
    },

    //
    // Value Count Aggregation
    // *****************************
    {
        'elastic_name': 'value_count',
        'pretty_name': 'Value Count',
        'description': 'A single-value metrics aggregation that counts the number of values that are extracted from the aggregated documents. These values can be extracted either from specific fields in the documents, or be generated by a provided script. Typically, this aggregator will be used in conjunction with other single-value aggregations. For example, when computing the avg one might be interested in the number of values the average is computed over.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The field setting defines the numeric field of the documents to be summed.',
            'isValid': function () {
                return true;
            }
        }]
    },

    //
    // Date Histogram Aggregation
    // **************************
    {
        'elastic_name': 'date_histogram',
        'pretty_name': 'Date Histogram',
        'description': 'A multi-bucket aggregation similar to the histogram except it can only be applied on date values. Scripting is not supported at this time.',
        'options': [{
            'elastic_name': 'field',
            'pretty_name': 'Field',
            'description': 'The name of the field that contains the date to build the histogram from',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'interval',
            'pretty_name': 'Interval',
            'description': 'The field setting defines the numeric field of the documents the stats will be computed on.',
            'isValid': function () {
                return true;
            }
        }, {
            'elastic_name': 'offset',
            'pretty_name': 'Offset',
            'description': 'The offset parameter is used to change the start value of each bucket by the specified positive (+) or negative offset (-) duration, such as 1h for an hour, or 1M for a month.',
            'isValid': function () {
                return true;
            }
        }]
    }].reduce(function (agg_list, agg_meta) {

        agg_meta.class = class {

            constructor() {
                this.meta = agg_meta;
            }

            createAggregations() {
                return this.meta.options.reduce(function (aggs, agg_meta) {
                    let agg_name = agg_meta.elastic_name;
                    let agg = this[agg_name];
                    if (!agg_meta.isValid(agg)) {
                        throw agg;
                    }
                    aggs[agg_name] = agg;
                    return aggs;
                }, {});
            }

        };

        return agg_list[agg_meta.elastic_name] = agg_meta;
    }, {});

    exports.default = Ember.Component.extend({

        aggregations: false,
        docs: false,
        loadingData: Ember.computed('data', function () {
            return !this.get('data');
        }),

        classNameBindings: ['configuring', 'picking', 'width', 'height'],

        widgetType: null,
        name: 'tobeDetermined',
        jsEngine: 'c3',
        widthSetting: 2,
        heightSetting: 2,
        height: Ember.computed(function () {
            return this.get('item').height;
        }),
        width: Ember.computed('widthSetting', function () {

            let new_setting = this.get('widthSetting');
            let current_setting = this.get('currentWidth');

            if (new_setting < 1) {
                new_setting = current_setting;
            }
            if (new_setting > 12) {
                new_setting = 12;
            }

            this.set('currentWidth', new_setting);

            return "col-md-" + new_setting;
        }),

        computedHeight: 200,
        computedWidth: 200,

        router: Ember.inject.service('router'),
        resizedSignal: false,

        // Initialize our query parameters
        query: 'UC',
        gte: "1996-01-01",
        lte: new Date().toISOString().split('T')[0], // Set the ending date of our query to today's date, by default

        tsInterval: Ember.computed('gte', 'lte', function () {
            let d1 = new Date(this.get('gte'));
            let d2 = new Date(this.get('lte'));
            return (0, _dateInterval.default)(d1, d2);
        }),

        configuring: false,
        picking: false,

        helpText,
        showHelpText: true,

        init() {
            this._super(...arguments);
            this.set('widthSetting', this.get('item').width);
            Promise.resolve(this.fetchWidgetData()).then(() => {
                return this.applyGraphSetting();
            });
            if (this.get('item.name') == '' || this.get('item.name') == 'Highlighted Collections' || this.get('item.name') == 'Recently Added' || this.get('item.name') == 'Top Tags') {
                this.set('showHelpText', false);
            }
            if (this.get('item.widgetType') == 'filter-plaques') {

                this.set('showHelpText', true);
            }
        },

        didRender() {
            this.set('computedHeight', this.$().height());
            this.set('computedWidth', this.$().width());

            //
            //  Use a closure to hide the local variables from the
            //  global namespace
            //


            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        },

        fetchWidgetData: async function () {
            if (this.get('item').post_body === null) {
                return;
            }
            let query = this.get('query');
            let gte = this.get('gte');
            let lte = this.get('lte');
            let interval = this.get('tsInterval');
            let item = this.get('item');
            var endpoint = 'records/_search?request_cache=true';
            if (item.endpoint) {
                endpoint = '/share/search/' + item.endpoint + '/_search?request_cache=true';
            }
            if (item.indexVersion) {
                endpoint += "&v=" + item.indexVersion;
            }
            if (!this.get('item').post_body) {
                this.set('data', {});
                return;
            }
            let data = await Ember.$.ajax({
                url: _environment.default.apiUrl + endpoint,
                crossDomain: true,
                type: 'POST',
                contentType: 'application/json',
                data: (0, _npmJsonStableStringify.default)(this.get('item').post_body, {
                    replacer: function (key, value) {
                        if (Array.isArray(value)) {
                            return value.filter(Object);
                        }
                        return value;
                    }
                })
            });
            this.set('data', data);
            this.set('aggregations', data.aggregations);
            this.set('total', data.hits.total);

            if (item.chartType === 'relatedResearchers') {
                this.set('total', data.aggregations.relatedContributors.value);
            }

            /*this.set('docs', data.hits.hits.map((hit) => {
                let source = Ember.Object.create(hit._source);
                let r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
                r.id = hit._id;
                r.contributors = source.lists.contributors;
                r.funders = source.lists.funders;
                r.publishers = source.lists.publishers;
                r.institutions = source.lists.institutions;
                r.organizations = source.lists.organizations;
                return r;
            }));
            */
        },

        applyGraphSetting: function () {
            this.set('chartType', this.get('item').chartType);
            this.set('widgetType', this.get('item').widgetType);
        },

        configureQuery: function () {},

        actions: {

            addChart: function (option) {
                this.sendAction('addChart', option);
            },

            showConfig: function () {
                this.set('configuring', !this.get('configuring'));
                this.set('picking', false);
            },

            showPicker: function () {
                this.set('picking', !this.get('picking'));
                this.set('configuring', false);
            },

            changeEngine: function (jsEngine) {
                console.log(jsEngine);
            },

            changeChart: function (chart) {
                this.set('chartType', chart);
            },

            widgetPicked: function (index) {
                let selectedWidget = this.get('widgets')[index];
                this.set('item', selectedWidget);
                console.log(this.get('item').name);
                Promise.resolve(this.fetchWidgetData()).then(() => {
                    return this.applyGraphSetting();
                });
            },

            removeWidget: function () {
                this.sendAction('removeChart', this.get('item'));
            },
            configChanged: function () {
                this.set('configuring', !this.get('configuring'));
                let name = this.get('name');
                if (this.get('resizedSignal') == true) return;
                this.set('resizedSignal', true);
                this.set('configuring', false);
            },

            transitionToFacet: function (dashboardName, newQueryParams) {
                let self = this;
                var queryParams = Object.keys(newQueryParams).reduce((acc, cur, idx, arr) => {
                    acc[cur] = newQueryParams[cur];
                    return acc;
                }, this.get("parameters"));
                this.get('router').transitionTo('dashboards.dashboard', dashboardName, {
                    queryParams: queryParams
                }).then(function (route) {
                    //Ember.run.schedule('afterRender', self, function() {
                    //    let controller = route.get('controller');
                    //    Object.keys(queryParams).map((key) => {
                    //        controller.set(key, queryParams[key]);
                    //    });
                    //    controller.set('back', 'backroute');
                    //});
                    //route.refresh();
                });
            },

            saveWidget: function () {
                console.log('saveWidget');
                let widgetType = this.get('chartType');
                let name = this.get('name');
                let jsEngine = this.get('jsEngine');
                let chartType = this.get('chartType');
                let author = "tobeDetermined";
                let width = this.get('widthSetting');
                let height = this.get('heightSetting');

                let q = this.get('q');
                let gte = this.get('gte');
                let lte = this.get('lte');
                let interval = this.get('tsInterval');
                let query = {
                    query: { bool: {
                            must: [{
                                query_string: { query: q }
                            }, {
                                range: { date: {
                                        gte: gte,
                                        lte: lte,
                                        format: "yyyy-MM-dd||yyyy"
                                    } }
                            }]
                        } },
                    from: 0,
                    aggregations: {
                        sources: {
                            terms: {
                                field: 'sources.raw',
                                size: 200
                            }
                        },
                        contributors: {
                            terms: {
                                field: 'contributors.raw',
                                size: 200
                            }
                        },
                        tags: {
                            terms: {
                                field: 'tags.raw',
                                size: 200
                            }
                        },
                        articles_over_time: {
                            date_histogram: {
                                field: 'date',
                                interval: interval,
                                format: 'yyyy-MM-dd'
                            },
                            aggregations: {
                                arttype: { terms: { field: 'type' } }
                            }
                        }
                    }
                };
                let settings = { jsEngine: jsEngine, chartType: chartType };
                let information = {
                    name: name,
                    width: width,
                    height: height,
                    query: query,
                    settings: settings
                };

                this.sendAction('dashboardSaveWidget', information);
            }

        }

    });
});
define("sa-dashboard/components/widget-adapter/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SpFpxeRF", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"widget \",[18,\"widgetType\"]]]],[10,\"style\",[26,[\"height: \",[18,\"height\"],\"px; min-height: \",[20,[\"item\",\"widgetSettings\",\"minHeight\"]],\"px;\"]]],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showHelpText\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"bs-button\",null,[[\"class\"],[\"popover-button pull-right\"]],{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"help-icon\"],[7],[0,\"?\"],[8],[0,\"\\n\"],[4,\"bs-tooltip\",null,[[\"placement\"],[\"top\"]],{\"statements\":[[4,\"if\",[[20,[\"item\",\"name\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"get\",[[20,[\"helpText\"]],[20,[\"item\",\"name\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[25,\"get\",[[20,[\"helpText\"]],[20,[\"item\",\"widgetType\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"widgetButtons\"],[7],[0,\"\\n        \"],[6,\"h4\"],[7],[1,[20,[\"item\",\"name\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"configmenu\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"JS Engine:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n              \"],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"changeEngine\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"c3\"],[7],[0,\"C3\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"dimple\"],[7],[0,\"Dimple\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Chart:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n              \"],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"changeChart\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"donut\"],[7],[0,\"Donut\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"timeseries\"],[7],[0,\"Time-Series\"],[8],[0,\"\\n                \"],[6,\"option\"],[9,\"value\",\"bar\"],[7],[0,\"Bar\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Name:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"size\",\"value\"],[\"text\",\"35\",[20,[\"name\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Width:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"size\",\"value\"],[\"text\",\"10\",[20,[\"widthSetting\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Height:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n              \"],[1,[25,\"input\",null,[[\"type\",\"size\",\"value\"],[\"text\",\"10\",[20,[\"heightSetting\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Query:\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n              \"],[1,[25,\"textarea\",null,[[\"value\",\"cols\",\"rows\"],[[20,[\"query\"]],\"35\",\"3\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n              \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"style\",\"margin-right:10px\"],[9,\"type\",\"submit\"],[3,\"action\",[[19,0,[]],\"configChanged\"]],[7],[0,\"OK\"],[8],[0,\"\\n            \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"widgetpicker\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-4\"],[7],[0,\"Widgets:\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n          \"],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"widgetPicked\"],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"widgets\"]]],null,{\"statements\":[[0,\"                \"],[6,\"option\"],[10,\"value\",[19,2,[]],null],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"component\",[[20,[\"widgetType\"]]],[[\"parameters\",\"data\",\"widgetSettings\",\"chartType\",\"aggregations\",\"name\",\"item\",\"width\",\"height\",\"interval\",\"resizedSignal\",\"total\",\"transitionToFacet\"],[[20,[\"parameters\"]],[20,[\"data\"]],[20,[\"item\",\"widgetSettings\"]],[20,[\"chartType\"]],[20,[\"aggregations\"]],[20,[\"item\",\"name\"]],[20,[\"item\"]],[20,[\"widthSetting\"]],[20,[\"heightSetting\"]],[20,[\"tsInterval\"]],[20,[\"resizedSignal\"]],[20,[\"total\"]],[25,\"action\",[[19,0,[]],\"transitionToFacet\"],null]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"loadingData\"]]],null,{\"statements\":[[0,\"       \"],[6,\"div\"],[9,\"class\",\"ball-pulse ball-dark text-center p-lg\"],[7],[6,\"div\"],[7],[8],[6,\"div\"],[7],[8],[6,\"div\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[11,3],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/components/widget-adapter/template.hbs" } });
});
define("sa-dashboard/controllers/application", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({ //OsfAgnosticAuthControllerMixin,{
        toast: Ember.inject.service(),
        actions: {
            transitionToHome() {
                this.transitionToRoute("dashboards.dashboard", "ucsd", {
                    queryParams: {
                        all: undefined,
                        sources: undefined,
                        id: undefined,
                        contributors: undefined,
                        publishers: undefined,
                        tags: undefined,
                        query: undefined,
                        type: undefined,
                        funders: undefined,
                        start: undefined,
                        end: undefined,
                        page: undefined
                    }
                });
            }
        }
    });
});
define('sa-dashboard/controllers/dashboards/dashboard', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        queryParams: [{ 'id': { scope: "controller" } }, { 'scholar': { scope: "controller" } }, { 'query': { scope: "controller" } }, { 'q': { scope: "controller" } }, { 'institution': { scope: "controller" } }, { 'tag': { scope: "controller" } }, { 'tags': { scope: "controller" } }, { 'topic': { scope: "controller" } }, { 'all': { scope: "controller" } }, { 'sources': { scope: "controller" } }, { 'publishers': { scope: "controller" } }, { 'type': { scope: "controller" } }, { 'funders': { scope: "controller" } }, { 'contributors': { scope: "controller" } }, { 'recently_added_sort': { scope: "controller" } }],

        updateParams: Ember.observer('queryParams', function () {
            //this.set("parameters", Ember.computed.apply(this, this.get('queryParams').concat(() => {
            //    return this.get('queryParams').map((param) => {
            //        return this.get(param);
            //    })
            //})));
        }),

        currentUser: Ember.inject.service(),

        // Initialize the dashboard with no widgets.
        widgets: [],

        // Initialize the list of additional charts that the user can add
        addableList: [],
        storedDashboards: [],

        configureQuery: function () {}.on('init'),

        init() {
            let ret = this._super();
            return ret;
        },

        actions: {

            changeQ: function (query) {
                this.set('q', query);
            },

            changeGte: function (g) {
                g = new Date(g);
                this.set('gte', g.toISOString().split('T')[0]); // Elasticsearch doesn't accept timezone information.
            },

            changeLte: function (l) {
                l = new Date(l);
                this.set('lte', l.toISOString().split('T')[0]);
            },

            sortEndAction: function () {},

            removeChart: function (targetWidget) {
                this.set('widgets', this.get('widgets').filter(function (widget) {
                    return widget !== targetWidget;
                }).slice());
            },

            addChart: function (widget) {
                this.set('widgets', this.get('widgets').concat({ isPlaceholder: true }));
            },

            dashboardSaveWidget: function (widget) {
                this.get('currentUser').load().then(c => {
                    widget.author = c.get('fullName');
                    this.set('widgets', this.get('widgets').addObject(widget));
                    widget = this.store.createRecord('widget', widget);
                    widget.save();
                    // TODO: This should not be an alert, but a growl-style notification.
                    // alert("Chart has been successfully saved!");
                }, function (r) {
                    // TODO: This should not be an alert, but a growl-style notification.
                    alert("Widgets may not be saved anonymously. Log in to save a widget.");
                });
            }

        }

    });
});
define('sa-dashboard/helpers/add', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.add = add;
  function add(params) {
    return params[0] + params[1];
  }

  exports.default = Ember.Helper.helper(add);
});
define('sa-dashboard/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/app-version', ['exports', 'sa-dashboard/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('sa-dashboard/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('sa-dashboard/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('sa-dashboard/helpers/build-secondary-nav-links', ['exports', 'ember-osf/helpers/build-secondary-nav-links'], function (exports, _buildSecondaryNavLinks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _buildSecondaryNavLinks.default;
    }
  });
  Object.defineProperty(exports, 'buildSecondaryNavLinks', {
    enumerable: true,
    get: function () {
      return _buildSecondaryNavLinks.buildSecondaryNavLinks;
    }
  });
});
define('sa-dashboard/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  Object.defineProperty(exports, 'cancelAll', {
    enumerable: true,
    get: function () {
      return _cancelAll.cancelAll;
    }
  });
});
define('sa-dashboard/helpers/custom-taxonomy-filter', ['exports', 'ember-osf/helpers/custom-taxonomy-filter'], function (exports, _customTaxonomyFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _customTaxonomyFilter.default;
    }
  });
  Object.defineProperty(exports, 'customTaxonomyFilter', {
    enumerable: true,
    get: function () {
      return _customTaxonomyFilter.customTaxonomyFilter;
    }
  });
});
define('sa-dashboard/helpers/elem-id', ['exports', 'ember-osf/helpers/elem-id'], function (exports, _elemId) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _elemId.default;
    }
  });
  Object.defineProperty(exports, 'elemId', {
    enumerable: true,
    get: function () {
      return _elemId.elemId;
    }
  });
});
define('sa-dashboard/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('sa-dashboard/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('sa-dashboard/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('sa-dashboard/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/extract-doi', ['exports', 'ember-osf/helpers/extract-doi'], function (exports, _extractDoi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _extractDoi.default;
    }
  });
  Object.defineProperty(exports, 'extractDoi', {
    enumerable: true,
    get: function () {
      return _extractDoi.extractDoi;
    }
  });
});
define('sa-dashboard/helpers/filter-replace', ['exports', 'ember-osf/helpers/filter-replace'], function (exports, _filterReplace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterReplace.default;
    }
  });
  Object.defineProperty(exports, 'filterReplace', {
    enumerable: true,
    get: function () {
      return _filterReplace.filterReplace;
    }
  });
});
define('sa-dashboard/helpers/fix-special-char', ['exports', 'ember-osf/helpers/fix-special-char'], function (exports, _fixSpecialChar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.default;
    }
  });
  Object.defineProperty(exports, 'fixSpecialCharHelper', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.fixSpecialCharHelper;
    }
  });
});
define('sa-dashboard/helpers/get-ancestor-descriptor', ['exports', 'ember-osf/helpers/get-ancestor-descriptor'], function (exports, _getAncestorDescriptor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getAncestorDescriptor.default;
    }
  });
  Object.defineProperty(exports, 'getAncestorDescriptor', {
    enumerable: true,
    get: function () {
      return _getAncestorDescriptor.getAncestorDescriptor;
    }
  });
});
define('sa-dashboard/helpers/get-display-name', ['exports', 'ember-osf/helpers/get-display-name'], function (exports, _getDisplayName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getDisplayName.default;
    }
  });
  Object.defineProperty(exports, 'getDisplayName', {
    enumerable: true,
    get: function () {
      return _getDisplayName.getDisplayName;
    }
  });
});
define('sa-dashboard/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/if-filter', ['exports', 'ember-osf/helpers/if-filter'], function (exports, _ifFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ifFilter.default;
    }
  });
  Object.defineProperty(exports, 'ifFilter', {
    enumerable: true,
    get: function () {
      return _ifFilter.ifFilter;
    }
  });
});
define('sa-dashboard/helpers/is-after', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-after'], function (exports, _environment, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/is-before', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-before'], function (exports, _environment, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/is-between', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-between'], function (exports, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/is-clipboard-supported', ['exports', 'ember-cli-clipboard/helpers/is-clipboard-supported'], function (exports, _isClipboardSupported) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(exports, 'isClipboardSupported', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
define('sa-dashboard/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('sa-dashboard/helpers/is-same-or-after', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _environment, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/is-same-or-before', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/is-same', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/is-same'], function (exports, _environment, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSame.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/moment-add', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-calendar', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _environment, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentCalendar.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('sa-dashboard/helpers/moment-format', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _environment, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFormat.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-from-now', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _environment, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFromNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-from', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _environment, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFrom.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-subtract', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _environment, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentSubtract.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-to-date', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _environment, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToDate.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-to-now', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _environment, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-to', ['exports', 'sa-dashboard/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _environment, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentTo.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('sa-dashboard/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('sa-dashboard/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('sa-dashboard/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('sa-dashboard/helpers/number-format', ['exports', 'ember-osf/helpers/number-format'], function (exports, _numberFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _numberFormat.default;
    }
  });
  Object.defineProperty(exports, 'numberFormat', {
    enumerable: true,
    get: function () {
      return _numberFormat.numberFormat;
    }
  });
});
define('sa-dashboard/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  Object.defineProperty(exports, 'perform', {
    enumerable: true,
    get: function () {
      return _perform.perform;
    }
  });
});
define('sa-dashboard/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('sa-dashboard/helpers/share-detail-url', ['exports', 'ember-osf/helpers/share-detail-url'], function (exports, _shareDetailUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shareDetailUrl.default;
    }
  });
  Object.defineProperty(exports, 'shareDetailURL', {
    enumerable: true,
    get: function () {
      return _shareDetailUrl.shareDetailURL;
    }
  });
});
define('sa-dashboard/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('sa-dashboard/helpers/sort-option-display', ['exports', 'ember-osf/helpers/sort-option-display'], function (exports, _sortOptionDisplay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortOptionDisplay.default;
    }
  });
  Object.defineProperty(exports, 'sortOptionDisplay', {
    enumerable: true,
    get: function () {
      return _sortOptionDisplay.sortOptionDisplay;
    }
  });
});
define('sa-dashboard/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('sa-dashboard/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  Object.defineProperty(exports, 'task', {
    enumerable: true,
    get: function () {
      return _task.task;
    }
  });
});
define('sa-dashboard/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('sa-dashboard/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('sa-dashboard/human-file-size/util', ['exports', 'ember-osf/human-file-size/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('sa-dashboard/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sa-dashboard/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('sa-dashboard/initializers/component-routes', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize(application) {
        application.inject('component', 'router', 'router:main');
    }

    exports.default = {
        name: 'component-routes',
        initialize
    };
});
define('sa-dashboard/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'sa-dashboard/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
define('sa-dashboard/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('sa-dashboard/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.initialize;
    }
  });
});
define('sa-dashboard/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('sa-dashboard/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('sa-dashboard/initializers/ember-simple-auth', ['exports', 'sa-dashboard/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('sa-dashboard/initializers/export-application-global', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('sa-dashboard/initializers/load-bootstrap-config', ['exports', 'sa-dashboard/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define('sa-dashboard/initializers/metrics', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    const application = arguments[1] || arguments[0];
    const { metricsAdapters = [] } = _environment.default;
    const { environment = 'development' } = _environment.default;
    const options = { metricsAdapters, environment };

    application.register('config:metrics', options, { instantiate: false });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  exports.default = {
    name: 'metrics',
    initialize
  };
});
define('sa-dashboard/initializers/promise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    window.Promise = Ember.RSVP.Promise;
  }

  exports.default = {
    name: 'promise',
    initialize
  };
});
define('sa-dashboard/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
define('sa-dashboard/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'sa-dashboard/config/environment'], function (exports, _toastr, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const toastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  const config = _environment.default['ember-toastr'] || {
    injectAs: 'toast',
    toastrOptions: toastrOptions
  };

  exports.default = {
    name: 'ember-toastr',
    initialize() {
      // support 1.x and 2.x
      var application = arguments[1] || arguments[0];

      if (!config.toastrOptions) {
        config.toastrOptions = toastrOptions;
      }

      if (!config.injectAs) {
        config.injectAs = 'toast';
      }

      (0, _toastr.initialize)(application, config);
    }
  };
});
define('sa-dashboard/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("sa-dashboard/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('sa-dashboard/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('sa-dashboard/instance-initializers/ember-osf', ['exports', 'ember-osf/instance-initializers/ember-osf'], function (exports, _emberOsf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberOsf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberOsf.initialize;
    }
  });
});
define('sa-dashboard/instance-initializers/global', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(app) {
    // appInstance.inject('route', 'foo', 'service:foo');
    app.store = app.__container__.lookup('service:store');
    window.App = app;
  }

  exports.default = {
    name: 'global',
    initialize
  };
});
define('sa-dashboard/instance-initializers/jquery-extensions', ['exports', 'ember-osf/instance-initializers/jquery-extensions'], function (exports, _jqueryExtensions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _jqueryExtensions.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _jqueryExtensions.initialize;
    }
  });
});
define('sa-dashboard/locales/en/config', ['exports', 'ember-osf/locales/en/config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _config.default;
    }
  });
});
define('sa-dashboard/locales/en/translations', ['exports', 'ember-osf/locales/en/translations'], function (exports, _translations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _translations.default;
    }
  });
});
define('sa-dashboard/metrics-adapters/keen', ['exports', 'ember-osf/metrics-adapters/keen'], function (exports, _keen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keen.default;
    }
  });
});
define('sa-dashboard/mixins/commentable', ['exports', 'ember-osf/mixins/commentable'], function (exports, _commentable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentable.default;
    }
  });
});
define('sa-dashboard/mixins/host-app-name', ['exports', 'ember-osf/mixins/host-app-name'], function (exports, _hostAppName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hostAppName.default;
    }
  });
});
define('sa-dashboard/mixins/keen-tracker', ['exports', 'ember-osf/mixins/keen-tracker', 'npm:js-md5', 'ember-get-config', 'npm:lodash/get', 'npm:js-cookie', 'npm:keen-tracking'], function (exports, _keenTracker, _npmJsMd, _emberGetConfig, _get2, _npmJsCookie, _npmKeenTracking) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keenTracker.default;
    }
  });
});
define('sa-dashboard/mixins/osf-token-login-controller', ['exports', 'ember-osf/mixins/osf-token-login-controller'], function (exports, _osfTokenLoginController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfTokenLoginController.default;
    }
  });
});
define('sa-dashboard/mixins/osf-token-login-route', ['exports', 'ember-osf/mixins/osf-token-login-route'], function (exports, _osfTokenLoginRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfTokenLoginRoute.default;
    }
  });
});
define('sa-dashboard/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('sa-dashboard/models/citation', ['exports', 'ember-osf/models/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('sa-dashboard/models/collection', ['exports', 'ember-osf/models/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('sa-dashboard/models/comment-report', ['exports', 'ember-osf/models/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('sa-dashboard/models/comment', ['exports', 'ember-osf/models/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('sa-dashboard/models/contributor', ['exports', 'ember-osf/models/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('sa-dashboard/models/dashboard', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({

        name: _emberData.default.attr('string'),
        q: _emberData.default.attr('string'),
        gte: _emberData.default.attr('date'),
        lte: _emberData.default.attr('date'),
        tsInterval: _emberData.default.attr('string'),
        sortableObjectList: _emberData.default.attr(),
        addableList: _emberData.default.attr()

    });
});
define('sa-dashboard/models/draft-registration', ['exports', 'ember-osf/models/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('sa-dashboard/models/file-provider', ['exports', 'ember-osf/models/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('sa-dashboard/models/file-version', ['exports', 'ember-osf/models/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('sa-dashboard/models/file', ['exports', 'ember-osf/models/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('sa-dashboard/models/institution', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({

        name: _emberData.default.attr('string'),
        dashboards: _emberData.default.hasMany('dashboard')

    });
});
define('sa-dashboard/models/license', ['exports', 'ember-osf/models/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('sa-dashboard/models/log', ['exports', 'ember-osf/models/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('sa-dashboard/models/metaschema', ['exports', 'ember-osf/models/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('sa-dashboard/models/node-link', ['exports', 'ember-osf/models/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('sa-dashboard/models/node', ['exports', 'ember-osf/models/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('sa-dashboard/models/osf-model', ['exports', 'ember-osf/models/osf-model'], function (exports, _osfModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfModel.default;
    }
  });
});
define('sa-dashboard/models/preprint-provider', ['exports', 'ember-osf/models/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('sa-dashboard/models/preprint', ['exports', 'ember-osf/models/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('sa-dashboard/models/registration', ['exports', 'ember-osf/models/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('sa-dashboard/models/review-action', ['exports', 'ember-osf/models/review-action'], function (exports, _reviewAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reviewAction.default;
    }
  });
});
define('sa-dashboard/models/taxonomy', ['exports', 'ember-osf/models/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('sa-dashboard/models/user', ['exports', 'ember-osf/models/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define('sa-dashboard/models/widget', ['exports', 'ember-data', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberData, _attr, _relationships) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: (0, _attr.default)('string', { defaultValue: 'Unnamed Widget' }),
        author: (0, _attr.default)('string'),
        width: (0, _attr.default)('number'),
        height: (0, _attr.default)('number'),
        query: (0, _attr.default)({
            aggregations: (0, _attr.default)({
                articles_over_time: (0, _attr.default)({
                    data_histogram: (0, _attr.default)({
                        field: (0, _attr.default)('date'),
                        interval: (0, _attr.default)('string'),
                        format: (0, _attr.default)('string')
                    }),
                    aggregations: (0, _attr.default)({
                        arttype: {
                            term: {
                                field: (0, _attr.default)('string')
                            }
                        }
                    })
                }),
                tags: (0, _attr.default)({
                    terms: (0, _attr.default)({
                        field: (0, _attr.default)('string'),
                        size: (0, _attr.default)('number')
                    })
                }),
                contributors: (0, _attr.default)({
                    terms: (0, _attr.default)({
                        field: (0, _attr.default)('string'),
                        size: (0, _attr.default)('number')
                    })
                }),
                sources: (0, _attr.default)({
                    terms: (0, _attr.default)({
                        field: (0, _attr.default)('string'),
                        size: (0, _attr.default)('number')
                    })
                }) }),
            query: (0, _attr.default)({
                bool: (0, _attr.default)({
                    must: (0, _attr.default)([{
                        query_string: (0, _attr.default)({ query: (0, _attr.default)('string') })
                    }, { range: (0, _attr.default)({
                            date: (0, _attr.default)({
                                gte: (0, _attr.default)('date'),
                                lte: (0, _attr.default)('date'),
                                interval: (0, _attr.default)('string')
                            })
                        })
                    }])
                })
            }),
            from: (0, _attr.default)('number')
        }),

        settings: (0, _attr.default)({
            gte: (0, _attr.default)('date'),
            lte: (0, _attr.default)('date'),
            interval: (0, _attr.default)('string')
        })
    });
});
define('sa-dashboard/models/wiki', ['exports', 'ember-osf/models/wiki'], function (exports, _wiki) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wiki.default;
    }
  });
});
define('sa-dashboard/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('sa-dashboard/router', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const Router = Ember.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    Router.map(function () {
        this.route('dashboards', {
            path: ""
        }, function () {
            this.route('dashboard', {
                path: ':dashboard'
            });
        });
    });

    exports.default = Router;
});
define('sa-dashboard/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({ //OsfAgnosticAuthRouteMixin, {

        store: Ember.inject.service(),
        session: Ember.inject.service(),

        model() {
            //if (this.get('session.isAuthenticated')) {
            //return this.get('store').findRecord('user', 'me');
            //}
        }

    });
});
define('sa-dashboard/routes/dashboards', ['exports', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _authenticatedRouteMixin) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		beforeModel: function () {
			if (window.location.pathname == "/") {
				this.transitionTo('dashboards.dashboard', 'ucsd');
			}
		}
	});
});
define('sa-dashboard/routes/dashboards/dashboard', ['exports', 'sa-dashboard/utils/date-interval'], function (exports, _dateInterval) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /* Gets all (as close to all) share records that are published by UCSD. Used with query.bool.should*/
    const ucsd_query = ["UCSD", "UC San Diego", "UC San Diego Library Digital Collections", "Scripps Institution of Oceanography", "Scripps Institute of Oceanography", "University of California San Diego", "Univ of california san diego", "University of CA San Diego", "university of california at san diego", "university california san diego", "univ of california at san diego", "univ california san diego", "univ calif san diego", "california univ san diego", "san diego supercomputer center", "qualcomm institute"].map(term => {
        return {
            "multi_match": {
                "fields": ["contributors", "publishers", "affiliations", "funders", "title", "hosts"],
                "type": "phrase",
                "query": term
            }
        };
    }).concat([{
        "match_phrase": {
            "tags": "cdl.ucsd"
        }
    }, {
        "match_phrase": {
            "tags": "Scripps institution of oceanography"
        }
    }, {
        "term": {
            "source": "UC San Diego Library"
        }
    }]);

    /* Tags to be ommited from the search results. Goes into tags aggregation query under 'exclude' */
    const tag_blacklist = ["address", "process", "improved", "base", "goals", "testing", "development", "research", "event", "role", "novel", "work", "text", "cdl", "cdl.ucsd", "dataset", "text/tab-separated-values", "natl_1981_an_37n", "58 geosciences", "natl_1981_an_26n", "date/time", "54 environmental sciences", "36 materials science", "59 basic biological sciences", "unknown", "preprint", "2011)", "extracted from the 2-minute gridded global relief data (etopo2)", "extracted from the world ocean atlas 2005", "fugacity of carbon dioxide (water) at sea surface temperature (wet air)", "recomputed after socat (pfeil et al", "xco2 (water) at sea surface temperature (dry air)", "100036", "extracted from the ncep/ncar 40-year reanalysis project", "extracted from globalview-co2", "document", "indianocean_1976_an_18s", "75 condensed matter physics", "37 inorganic", "book", "29442", "71 classical and quantum mechanics", "information", "project", "data", "application/pdf", "description", "materials", "size", "99 general and miscellaneous//mathematics", "and information science", "& refractories-- physical properties", "1 ancillary/documentation file", "1 data file", "62 radiology and nuclear medicine", "article", "208 data points", "58125", "70 plasma physics and fusion technology", "ands", "centre72", "ascii: ascii text (text/plain)", "72 physics of elementary particles and fields", "getinfo", "multipart/mixed", "s", "u", "comment", "42 engineering", "ca", "ct", "fl", "ga", "md", "nc", "nj", "va", "& thermal phenomena-- (-1987)", "(unk)", "al", "hi", "ma", "ns", "ny", "or", "ri", "sc", "073", "63 radiation", "656102 -- solid state physics-- superconductivity-- acoustic", "and other environ. pollutant effects on living orgs. and biol. mat.", "de", "nitrat", "nitrit", "surface waters 580500* -- oceanography-- (1980-1989)", "036", "46211", "58302", "lternet", "& refractories-- structure & phase studies", "006", "076", "093", "46215", "46231", "580000 -- geosciences", "cfc-11", "cfc-12", "datavers", "ms", "transition element compounds 360204* -- ceramics", "uniform resource locator/link to image", "vertebrates 550201* -- biochemistry-- tracer techniques"];

    /* ucsd ID's to be  ommited from the contributor results. Goes into ucsd aggregation query under 'exclude' */
    const ucsd_blacklist = ["64201-BDE-4D4", //"University of California, San Diego"
    "641C6-0E9-04C", //"University of California [San Diego] (UC San Diego)",
    "640E7-1AA-07C", //"University of California San Diego",
    "6412C-4A8-62C", //"University of California: San Diego",
    //"California Univ., San Diego",
    //"University of California at San Diego",
    "640B7-236-74F", //"Univ. of California",
    "64020-818-87A" //"University of California"
    ];

    exports.default = Ember.Route.extend({
        aboutContent: '',
        queryParams: { //Ember queryParams, if any of the listed parameters change the page will refresh.
            query: { refreshModel: true },
            tags: { refreshModel: true },
            sources: { refreshModel: true },
            id: { refreshModel: true },
            scholar: { refreshModel: true },
            all: { refreshModel: true },
            contributors: { refreshModel: true },
            publishers: { refreshModel: true },
            type: { refreshModel: true },
            funders: { refreshModel: true },
            start: { refreshModel: true },
            end: { refreshModel: true },
            page: { refreshModel: true },
            recently_added_sort: { refreshModel: true }
        },
        gte: "1996-01-01", // Set default begin date
        lte: new Date().toISOString().split('T')[0], // Set default end date
        tsInterval: Ember.computed('gte', 'lte', function () {
            let d1 = new Date(this.get('gte'));
            let d2 = new Date(this.get('lte'));
            return (0, _dateInterval.default)(d1, d2);
        }),

        /* Resets query parameters to undefined when leaving dashboard route*/
        resetController: function (controller, isExiting, transition) {
            this._super.apply(this, arguments);

            if (isExiting) {
                controller.set("all", undefined);
                controller.set("sources", undefined);
                controller.set("id", undefined);
                controller.set("contributors", undefined);
                controller.set("publishers", undefined);
                controller.set("tags", undefined);
                controller.set("query", undefined);
                controller.set("type", undefined);
                controller.set("funders", undefined);
                controller.set("start", undefined);
                controller.set("end", undefined);
                controller.set("page", undefined);
            }
        },
        beforeModel() {
            this.set('aboutContent', `
            <h4><b>What is TritonSHARE?</b></h4>
            <p>
                TritonSHARE is a tool that harvests and presents information about UC San Diego
                research outputs, harvested from sources around the world. Research outputs
                refers to a wide variety of scholarly work, including journal articles and
                preprints, datasets, ongoing projects, awards and research tools that are
                publicly findable.
            </p>
            <p>
                TritonSHARE is a tool designed and built by the UC San Diego Library, in
                conjunction with several partners. It harvests metadata about research - that is,
                the tool collects information about contemporary research outputs from diverse
                sources and presents it in a single, unified interface. This allows for the
                discovery of many pieces of research in one place, rather than needing to search
                in multiple locations. TritonSHARE displays this information in a simple
                interface, exposing common elements.
            </p>
            <h4><b>How does TritonSHARE work?</b></h4>
            <p>
                TritonSHARE is built on top of an international research tool: the SHARE database.
                SHARE is an <a href=\"http://arl.org\">Association of Research Libraries (ARL)</a>
                and <a href=\"http://cos.io\">Center for Open Science</a> initiative whose mission
                is to maximize research impact by making research output widely accessible,
                discoverable, and reusable. SHARE is a free, open data set about research and
                scholarly activities across the scholarly life cycle. The SHARE database stores
                information on over 30 million research items, harvested from
                <a href=\"https://share.osf.io/sources\">more than 150 international sources</a>.
                These are presented in a searchable interface on the SHARE site:
                <a href=\"https://share.osf.io\">https://share.osf.io</a>.
            </p>
            <p>
                TritonSHARE is a <i>custom view</i> into the SHARE database, searching only for
                UC San Diego-related resources. This is done behind the scenes via an
                actively-maintained search string that looks for all name variants for our campus,
                schools and research units. Based on this query, users can search whatever
                keywords, names, identifiers, resource types, etc. they want to find.
            </p>
            <p>
                Once relevant items are found, TritonSHARE displays them in a consistent format,
                to allow for ease of comparison. If searchers want to find out more about certain
                items, or download data, clicking on the relevant link in the record will hand them
                off directly to the data resource.
            </p>
            <h4><b>How do I get my research listed in TritonSHARE?</b></h4>
            <p>
                In addition to harvesting information from sources, the Library can manually enter
                information you provide about your research data into the SHARE database. The Library
                also hosts a data repository, the
                <a href=\"https://library.ucsd.edu/dc\">UC San Diego Library Digital Collections</a>,
                one of the many sources harvested by SHARE. Contact the team at 
                <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a> if you would like to
                enter information about your published data into SHARE or deposit your data into the
                Digital Collections.
            </p>
            <h4><b>I’m not finding items that I expect to be in TritonSHARE</b></h4>
            <p>
                TritonSHARE undergoes <i>constant updating, revision and improvement</i>. Because it
                presents data that are hosted in thousands of locations around the world, consistency
                is a challenge. Sometimes metadata is present in the tool, but phrased in such a
                way to make discovery difficult. Sometimes data hasn’t been correctly attributed
                as associated with UC San Diego, or contains errors in the attribution. And sometimes
                the tool simply doesn’t know about research output that has been posted online but
                not indexed in one of the international sources from which SHARE currently harvests
                information.
            </p>
            <h4><b>I see a problem or error in TritonSHARE</b></h4>
            <p>
                The TritonSHARE team works daily to improve content in the tool, and greatly
                appreciates your feedback, comments, and requests for updates. You can contact 
                the team directly at <a href=\"mailto:tritonshare@ucsd.edu\">tritonshare@ucsd.edu</a>,
                and we’ll look into your query and respond as soon as possible.
            </p>
            <h4><b>Attributions</b></h4>
            <p>
                SHARE is funded by the <a href=\"http://imls.gov\">Institute of Museum and Library
                Services</a> and the <a href=\"http://sloan.org\">Alfred P. Sloan Foundation</a>.
                The SHARE initiative was founded in 2013 by <a href=\"http://www.arl.org\">ARL</a>,
                the <a href=\"http://www.aau.edu\">Association of American Universities (AAU)</a>,
                and the <a href=\"http://aplu.org\">Association of Public and Land-grant Universities (APLU).</a>
            </p>
        `);
        },
        model: function (params, transition, queryParams) {

            let gte = this.get('gte');
            let lte = this.get('lte');
            let dashboards = {
                /* Each top level object is a dashboard view (i.e. a page with widgets) See first object for comments on properties */
                objectDetail: {
                    dashboardName: 'Object Detail Dashboard',
                    /* Each widget goes through widget-adapter that uses the settings and parameters */
                    widgets: [{
                        widgetType: "object-detail-widget", // Corresponds to the Ember component name
                        background_color: "000000",
                        name: "", // Showing a name displays widget title, empty name omits title
                        width: 12, // Widgets are floated left and width is defined in grid columns 0-12
                        post_body: {}, // Raw elastic query to be sent with the request for SHARE
                        postBodyParams: [// List of parameters to add to post_body. Params overrides post_body if there are same parameter paths
                        {
                            parameterName: "id", // the name of the url parameter, the value of this parameter will be used as value of the parameterpath below
                            /*  parameterPath: Path of the parameter object. Converts to:
                            *   "query": {
                            *       "bool" : {
                            *           "must" : [
                            *               {   // 0 in this example is for the index of the preceding item
                            *                   "term": {
                            *                       "_id": // value given for the "id" parameter
                            *                   }
                            *               }
                            *           ]
                            *       }
                            *    }
                            *
                            * */
                            parameterPath: ["query", "bool", "must", 0, "term", "_id"]
                        }]
                    }]
                },
                agentDetail: {
                    dashboardName: 'Agent Detail Dashboard',
                    widgets: [{
                        widgetType: "agent-detail-widget",
                        background_color: "000000",
                        name: "",
                        width: 12,
                        endpoint: "agents",
                        post_body: {},
                        postBodyParams: [{
                            parameterName: "id",
                            parameterPath: ["query", "bool", "must", 0, "term", "_id"]
                        }]
                    }]
                },
                search: {
                    dasboardName: 'Institution Overview Dashboard',
                    widgets: [{
                        widgetType: "query-widget",
                        background_color: "rgba(0,0,0,0.3)",
                        name: "",
                        width: 12,
                        facetDash: "search"
                    }, {
                        widgetType: "filter-plaques",
                        name: "",
                        width: 12,
                        facetDash: "search"
                    }, {
                        widgetType: "results-list",
                        name: "",
                        width: 9,
                        post_body: {},
                        facetDash: "search",
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterName: "recently_added_sort",
                            parameterPath: ["sort", "date", "order"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterName: "page",
                            parameterPath: ["from"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            minHeight: 115
                        }
                    }, {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 3,
                        facetDash: null,
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115,
                            isLink: true
                        }
                    }, {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 3,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings: {
                            viewAllRoute: 'providers',
                            showFilter: true,
                            mode: 'search',
                            aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags.exact"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type.exact"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }]
                    }, {
                        chartType: 'topContributors',
                        widgetType: 'dropdown-widget',
                        name: 'Contributors',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        post_body: {
                            "aggregations": {
                                "dropdownList": {
                                    "terms": {
                                        "field": "",
                                        "size": 100
                                    },
                                    "aggs": {
                                        "name": {
                                            "terms": {
                                                "field": ""
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            mode: 'search'
                        }
                    }, {
                        // Type dropdown
                        widgetType: 'dropdown-widget',
                        name: 'Types',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                            parameterName: "sources"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["aggregations", "dropdownList", "terms", "field"],
                            parameterName: "type_field",
                            defaultValue: "type.exact"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            mode: 'dropdown'
                        }
                    }, {
                        // Tag select
                        widgetType: 'dropdown-widget',
                        name: 'Tags',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "tags",
                        post_body: {
                            "aggregations": {
                                "dropdownList": {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 2, "term", "tags"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 4, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 5, "term", "type"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 6, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 7, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            mode: 'search'
                        }
                    }, {
                        // Funder select
                        widgetType: 'dropdown-widget',
                        name: 'Funders',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "funders",
                        post_body: {
                            "aggregations": {
                                "dropdownList": {
                                    "terms": {
                                        "field": "lists.funders.id.exact",
                                        "size": 100
                                    },
                                    "aggs": {
                                        "name": {
                                            "terms": {
                                                "field": "lists.funders.name.exact"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "tags",
                            parameterPath: ["query", "bool", "filter", 1, "term", "tags"]
                        }, {
                            parameterName: "publishers",
                            parameterPath: ["query", "bool", "filter", 2, "term", "lists.publishers.id.exact"]
                        }, {
                            parameterName: "contributors",
                            parameterPath: ["query", "bool", "filter", 3, "term", "lists.contributors.id.exact"]
                        }, {
                            parameterName: "type",
                            parameterPath: ["query", "bool", "filter", 4, "term", "type"]
                        }, {
                            parameterName: "funders",
                            parameterPath: ["query", "bool", "filter", 5, "term", "lists.funders.id.exact"]
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }],
                        widgetSettings: {
                            mode: 'search'
                        }
                    }, {
                        // Daterange select
                        widgetType: 'search-facet-daterange',
                        name: 'Dates',
                        width: 3,
                        facetDash: "search",
                        facetDashParameter: "",
                        post_body: {}
                    }]
                },
                aboutDash: {
                    dashboardName: "About",
                    widgets: [{
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: this.get('aboutContent')
                    }]
                },
                "ucsd": {
                    dasboardName: 'Institution Overview Dashboard',
                    widgets: [{
                        widgetType: "text-widget",
                        name: "",
                        width: 12,
                        facetDash: "aboutDash",
                        content: "TritonSHARE presents information about UC San Diego research outputs, harvested from sources around the world.",
                        showButton: true
                    }, {
                        widgetType: "query-widget",
                        background_color: "000000",
                        name: "",
                        width: 8,
                        facetDashParameter: "query",
                        facetDash: "search"
                    }, {
                        chartType: 'totalResults',
                        widgetType: 'number-widget',
                        name: 'Total Results',
                        width: 4,
                        facetDash: "search",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            fontSize: 2,
                            fontColor: '#F44336',
                            minHeight: 115
                        }
                    }, {
                        chartType: 'highlightedCollections',
                        widgetType: 'list-widget',
                        name: 'Highlighted Collections',
                        width: 6,
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true
                    }, {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Data Providers',
                        width: 6,
                        mappingType: "OBJECT_TO_ARRAY",
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: !transition.queryParams.all,
                        widgetSettings: {
                            viewAllRoute: 'providers',
                            showFilter: true,
                            mode: 'search',
                            aggregationTitle: 'publishers'
                        },
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "filter", 2, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "publishers", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }, {
                        widgetType: "stacked-bars",
                        name: "Types",
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "type",
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["aggregations", "stackedData", "terms", "field"],
                            parameterName: "type_field",
                            defaultValue: "type.exact"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }, {
                        chartType: 'recentlyAdded',
                        widgetType: 'list-widget',
                        name: 'Recently Added',
                        facetDash: "objectDetail",
                        facetDashParameter: "id",
                        hideViewAll: true,
                        width: 6,
                        post_body: {
                            "sort": { "date": { "order": "desc" } }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "recently_added_sort",
                            parameterPath: ["sort", "date", "order"],
                            defaultValue: "desc"
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }]
                    },
                    /*{
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 6,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        post_body : {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "exclude": ucsd_blacklist,
                                        "field": 'lists.contributors.id.exact',
                                        "size": 9
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                                parameterName: "query",
                                defaultValue: "*"
                            },
                            {
                                parameterName: "sources",
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                            }
                        ]
                    },
                    {
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Funders',
                        facetDash: "search",
                        facetDashParameter: "funders",
                        width: 6,
                        mappingType: "OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY",
                        post_body: {
                            "aggregations": {
                                "funders": {
                                    "terms": {
                                        "field": "lists.funders.id.exact"
                                    },
                                    "aggs": {
                                        "awards": {
                                            "sum": {
                                                "script": {
                                                    "lang": "expression",
                                                    "inline": "doc['lists.funders.awards.amount'].sum()"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [
                            {
                                parameterPath: ["query", "bool", "minimum_should_match"],
                                parameterName: "shouldMatch",
                                defaultValue: 1
                            },
                            {
                                parameterPath: ["query", "bool", "should"],
                                defaultValue: ucsd_query
                            },
                            {
                                parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"],
                                parameterName: "sources"
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range",  "date", "gte"],
                                parameterName: "start",
                                defaultValue: gte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                                parameterName: "end",
                                defaultValue: lte
                            },
                            {
                                parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                                parameterName: "date_range_format",
                                defaultValue: "yyyy-MM-dd||yyyy"
                            }
                        ],
                        widgetSettings: {
                          helpText: 'Click on a section to view associated records'
                        }
                    },*/
                    {
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        facetDash: "search",
                        facetDashParameter: "tags",
                        width: 6,
                        dataType: 'tags',
                        post_body: {
                            from: 0,
                            aggregations: {
                                listWidgetData: {
                                    terms: {
                                        field: 'tags.exact',
                                        exclude: tag_blacklist,
                                        size: 10
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.exact"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                contributors: {
                    dashboardName: 'Top Contributors',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Top Contributors',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "contributors",
                        dataType: 'contributors',
                        hideViewAll: true,
                        post_body: {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "exclude": ucsd_blacklist,
                                        "field": 'lists.contributors.id.exact',
                                        "size": 100
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                tags: {
                    dashboardName: 'Top Tags',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'tagsList',
                        widgetType: 'list-widget',
                        name: 'Top Tags',
                        width: 12,
                        indexVersion: 3,
                        hideViewAll: true,
                        post_body: {
                            "aggregations": {
                                "listWidgetData": {
                                    "terms": {
                                        "field": 'tags.exact',
                                        "size": 100,
                                        exclude: tag_blacklist
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterName: "sources",
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"]
                        }, {
                            parameterName: "query",
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            defaultValue: "*"
                        }, {
                            parameterName: "topic",
                            parameterPath: ["query", "bool", "filter", 0, "term", "tags"]
                        }, {
                            parameterName: "institution",
                            parameterPath: ["query", "bool", "filter", 1, "term", "sources"]
                        }, {
                            parameterName: "scholar",
                            parameterPath: ["query", "bool", "filter", 2, "term", "contributors.exact"]
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        facetDash: "search",
                        facetDashParameter: "tags"
                    }]
                },
                providers: {
                    dashboardName: 'Data providers',
                    wrapperClass: 'index-page',
                    widgets: [{
                        chartType: 'topContributors',
                        widgetType: 'list-widget',
                        name: 'Data providers',
                        width: 12,
                        facetDash: "search",
                        facetDashParameter: "publishers",
                        hideViewAll: true,
                        post_body: {},
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterPath: ["query", "bool", "must", 0, "query_string", "query"],
                            parameterName: "query",
                            defaultValue: "*"
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources.raw"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["aggregations", "listWidgetData", "terms", "field"],
                            parameterName: "publisher_field",
                            defaultValue: "lists.publishers.id.exact"
                        }, {
                            parameterPath: ["aggregations", "listWidgetData", "terms", "size"],
                            parameterName: "publisher_size",
                            defaultValue: 200
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }]
                    }]
                },
                awards: {
                    "dashboardName": "Awards Dashboard",
                    "widgets": [{
                        chartType: 'donut',
                        widgetType: 'c3-chart',
                        name: 'Awards',
                        facetDash: "agentDetail",
                        facetDashParameter: "id",
                        width: 6,
                        mappingType: "OBJECT_AWARDS_NESTED_VALUE_TO_ARRAY",
                        post_body: {
                            "aggregations": {
                                "funders": {
                                    "terms": {
                                        "field": "lists.funders.id.exact"
                                    },
                                    "aggs": {
                                        "awards": {
                                            "sum": {
                                                "script": {
                                                    "lang": "expression",
                                                    "inline": "doc['lists.funders.awards.amount'].sum()"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        postBodyParams: [{
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should", "minimum_should_match"],
                            parameterName: "shouldMatch",
                            defaultValue: 1
                        }, {
                            parameterPath: ["query", "bool", "filter", 1, "bool", "should"],
                            defaultValue: ucsd_query
                        }, {
                            parameterPath: ["query", "bool", "filter", 0, "term", "sources"],
                            parameterName: "sources"
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "gte"],
                            parameterName: "start",
                            defaultValue: gte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "lte"],
                            parameterName: "end",
                            defaultValue: lte
                        }, {
                            parameterPath: ["query", "bool", "must", 1, "range", "date", "format"],
                            parameterName: "date_range_format",
                            defaultValue: "yyyy-MM-dd||yyyy"
                        }, {
                            parameterPath: ["size"],
                            defaultValue: 0
                        }],
                        widgetSettings: {
                            helpText: 'Click on a section to view associated records'
                        }
                    }]
                }
            };

            let dashboard = dashboards[params.dashboard];
            let widgets = dashboard.widgets;
            let array_keys = new Set(["filter", "must", "must_not"]);
            dashboard.widgets = widgets.map(widget => {
                if (widget.postBodyParams) {
                    widget.postBodyParams.forEach(param => {

                        let parameter_value;
                        if (param.parameterName in transition.queryParams) {
                            if (param.parameterName === "page") {
                                parameter_value = Number(transition.queryParams[param.parameterName]) * 10 - 10;
                            } else {
                                parameter_value = transition.queryParams[param.parameterName];
                            }
                        } else if ("defaultValue" in param) {
                            parameter_value = param.defaultValue;
                        } else {
                            return;
                        }
                        let path_parts = param.parameterPath.slice(0, -1);
                        let parameter_key = param.parameterPath[param.parameterPath.length - 1];
                        let nested_object = path_parts.reduce((nested, pathPart) => {
                            if (!nested[pathPart]) {
                                if (array_keys.has(pathPart)) {
                                    nested[pathPart] = [];
                                } else {
                                    nested[pathPart] = {};
                                }
                            }
                            return nested[pathPart];
                        }, widget.post_body); // Uses the actual object; changes made on nested change the original.

                        nested_object[parameter_key] = parameter_value;
                    });
                }

                return widget;
            });

            return {
                dashboard: dashboard,
                parameters: transition.queryParams
            };
        },

        setupController: function (controller, model) {

            this._super(controller, model);

            if (controller.get('query') === undefined) {
                // This will change depending on what default will be in the storage backend.
                controller.set('query', model.dashboard.query);
            }

            controller.set('parameters', model.parameters);

            controller.set('institutionName', "eScholarship @ University of California");
            controller.set('wrapperClass', model.dashboard.wrapperClass);
            controller.set('widgets', model.dashboard.widgets);
        }

    });
});
define('sa-dashboard/serializers/citation', ['exports', 'ember-osf/serializers/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('sa-dashboard/serializers/collection', ['exports', 'ember-osf/serializers/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('sa-dashboard/serializers/comment-report', ['exports', 'ember-osf/serializers/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('sa-dashboard/serializers/comment', ['exports', 'ember-osf/serializers/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('sa-dashboard/serializers/contributor', ['exports', 'ember-osf/serializers/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('sa-dashboard/serializers/draft-registration', ['exports', 'ember-osf/serializers/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('sa-dashboard/serializers/file-contents', ['exports', 'ember-osf/serializers/file-contents'], function (exports, _fileContents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileContents.default;
    }
  });
});
define('sa-dashboard/serializers/file-provider', ['exports', 'ember-osf/serializers/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('sa-dashboard/serializers/file-version', ['exports', 'ember-osf/serializers/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('sa-dashboard/serializers/file', ['exports', 'ember-osf/serializers/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('sa-dashboard/serializers/institution', ['exports', 'ember-osf/serializers/institution'], function (exports, _institution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _institution.default;
    }
  });
});
define('sa-dashboard/serializers/license', ['exports', 'ember-osf/serializers/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('sa-dashboard/serializers/linked-node', ['exports', 'ember-osf/serializers/linked-node'], function (exports, _linkedNode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkedNode.default;
    }
  });
});
define('sa-dashboard/serializers/metaschema', ['exports', 'ember-osf/serializers/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('sa-dashboard/serializers/node-link', ['exports', 'ember-osf/serializers/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('sa-dashboard/serializers/node', ['exports', 'ember-osf/serializers/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('sa-dashboard/serializers/osf-serializer', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _osfSerializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfSerializer.default;
    }
  });
});
define('sa-dashboard/serializers/preprint-provider', ['exports', 'ember-osf/serializers/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('sa-dashboard/serializers/preprint', ['exports', 'ember-osf/serializers/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('sa-dashboard/serializers/registration', ['exports', 'ember-osf/serializers/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('sa-dashboard/serializers/review-action', ['exports', 'ember-osf/serializers/review-action'], function (exports, _reviewAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reviewAction.default;
    }
  });
});
define('sa-dashboard/serializers/taxonomy', ['exports', 'ember-osf/serializers/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('sa-dashboard/serializers/user', ['exports', 'ember-osf/serializers/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define('sa-dashboard/serializers/wiki', ['exports', 'ember-osf/serializers/wiki'], function (exports, _wiki) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wiki.default;
    }
  });
});
define('sa-dashboard/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('sa-dashboard/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('sa-dashboard/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _currentUser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _currentUser.default;
    }
  });
});
define('sa-dashboard/services/dependency-checker', ['exports', 'sa-dashboard/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    hasLiquidFire: Ember.computed('', function () {
      return _environment.default['ember-collapsible-panel'].hasLiquidFire;
    })

  });
});
define('sa-dashboard/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _fileManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileManager.default;
    }
  });
});
define('sa-dashboard/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('sa-dashboard/services/metrics', ['exports', 'ember-metrics/services/metrics'], function (exports, _metrics) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metrics.default;
    }
  });
});
define('sa-dashboard/services/moment', ['exports', 'sa-dashboard/config/environment', 'ember-moment/services/moment'], function (exports, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: Ember.get(_environment.default, 'moment.outputFormat')
  });
});
define('sa-dashboard/services/panel-actions', ['exports', 'ember-collapsible-panel/services/panel-actions'], function (exports, _panelActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _panelActions.default;
    }
  });
});
define('sa-dashboard/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('sa-dashboard/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('sa-dashboard/services/theme', ['exports', 'ember-osf/services/theme'], function (exports, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _theme.default;
    }
  });
});
define('sa-dashboard/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _toast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toast.default;
    }
  });
});
define('sa-dashboard/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("sa-dashboard/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4QH1a4Vg", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"main-application\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"wrapper dashboard\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ucsd_header\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"navbar-brand\"],[3,\"action\",[[19,0,[]],\"transitionToHome\"]],[7],[6,\"span\"],[9,\"style\",\"color: rgb(255, 205, 0);\"],[7],[0,\"TRITON\"],[8],[0,\"SHARE\"],[8],[0,\"\\n                   \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"col-xs-6 text-right\"],[3,\"action\",[[19,0,[]],\"transitionToHome\"]],[7],[0,\"\\n                        \"],[6,\"img\"],[9,\"src\",\"/images/logo_UCSD.png\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[1,[18,\"outlet\"],false],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"wrapper related-services\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[0,\"Related Resources and Services\"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4 text-center\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"http://libraries.ucsd.edu/services/data-curation/\"],[9,\"class\",\"btn btn-lg related-services-button text-center\"],[7],[0,\"\\n                        \"],[6,\"img\"],[9,\"src\",\"/images/logo-rdcp-white.png\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4 text-center\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"https://share.osf.io/\"],[9,\"class\",\"btn btn-lg related-services-button\"],[7],[0,\"\\n                        \"],[6,\"img\"],[9,\"src\",\"/images/share-logo.png\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-md-4 text-center\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"https://ucsd.edu/\"],[9,\"class\",\"btn btn-lg related-services-button\"],[7],[0,\"\\n                        \"],[6,\"img\"],[9,\"src\",\"/images/UCSanDiegoLogo-Blue.png\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[18,\"osf-copyright\"],false],[0,\"\\n    \"],[1,[18,\"osf-mode-footer\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/templates/application.hbs" } });
});
define('sa-dashboard/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("sa-dashboard/templates/dashboards", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iNmS7LC3", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/templates/dashboards.hbs" } });
});
define("sa-dashboard/templates/dashboards/dashboard", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G3/t3ANs", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"div\"],[10,\"class\",[26,[[18,\"wrapperClass\"]]]],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"widgets\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"widget-adapter\",null,[[\"options\",\"addChart\",\"removeChart\",\"item\",\"widgets\",\"dashboardSaveWidget\",\"parameters\"],[[20,[\"addableList\"]],[25,\"action\",[[19,0,[]],\"addChart\"],null],[25,\"action\",[[19,0,[]],\"removeChart\"],null],[19,1,[]],[20,[\"widgets\"]],[25,\"action\",[[19,0,[]],\"dashboardSaveWidget\"],null],[20,[\"parameters\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\\n\"],[2,\"\\n<div class='centered'>\\n    <button class='restore-widget-button' onclick = {{action 'restoreWidgets'}} style = 'clear:both;'>{{fa-icon 'folder-open'}}</button>\\n    <button class='add-widget-button' onclick={{action 'addChart'}} style='clear:both;'>{{fa-icon 'plus'}}</button>\\n</div>\\n\"],[0,\"\\n\\n\"],[1,[18,\"user-feedback-form\"],false],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/templates/dashboards/dashboard.hbs" } });
});
define("sa-dashboard/templates/dashboards/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tynwmqWZ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"widget available-dashes\"],[7],[0,\"\\n       \"],[6,\"h1\"],[7],[0,\"Welcome to TRITONSHARE\"],[8],[0,\"\\n        This project is a collaboration between UC San Diego, SHARE, and the Ceter for Open Science. Be aware that this application is a protoype and is subject to change.\\n\\n\\n\"],[6,\"h3\"],[7],[0,\"Available Dashboards\"],[8],[0,\"\\n\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\\n\"],[6,\"h4\"],[7],[0,\"Primary View\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"dashboards.dashboard\",\"ucsd\",[25,\"query-params\",null,[[\"sources\"],[\"UC San Diego Library\"]]]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"Curated Data\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"dashboards.dashboard\",\"ucsd\"],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[7],[0,\"All UC San Diego Data\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "sa-dashboard/templates/dashboards/index.hbs" } });
});
define('sa-dashboard/transforms/embed', ['exports', 'ember-osf/transforms/embed'], function (exports, _embed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _embed.default;
    }
  });
});
define('sa-dashboard/transforms/fixstring', ['exports', 'ember-osf/transforms/fixstring'], function (exports, _fixstring) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixstring.default;
    }
  });
});
define('sa-dashboard/transforms/links', ['exports', 'ember-osf/transforms/links'], function (exports, _links) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _links.default;
    }
  });
});
define('sa-dashboard/utils/ajax-helpers', ['exports', 'ember-osf/utils/ajax-helper'], function (exports, _ajaxHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajaxHelper.default;
    }
  });
  Object.defineProperty(exports, 'authenticatedAJAX', {
    enumerable: true,
    get: function () {
      return _ajaxHelper.authenticatedAJAX;
    }
  });
});
define('sa-dashboard/utils/auth', ['exports', 'ember-osf/utils/auth'], function (exports, _auth) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _auth.default;
    }
  });
});
define('sa-dashboard/utils/can-use-dom', ['exports', 'ember-metrics/utils/can-use-dom'], function (exports, _canUseDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _canUseDom.default;
    }
  });
});
define("sa-dashboard/utils/currency-rounder", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = currencyRounder;
    /*
      Returns letters with currencies to shorten them.
      Taken from: http://stackoverflow.com/questions/36734201/how-to-convert-numbers-to-million-in-javascript
     */
    function currencyRounder(rawValue) {
        if (Math.abs(Number(rawValue)) >= 1.0e+9) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+9) + "B";
        }
        if (Math.abs(Number(rawValue)) >= 1.0e+6) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+6) + "M";
        }
        if (Math.abs(Number(rawValue)) >= 1.0e+3) {
            return Math.round(Math.abs(Number(rawValue)) / 1.0e+3) + "K";
        }
        return Math.abs(Number(rawValue));
    }
});
define('sa-dashboard/utils/date-interval', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = dateInterval;
  /*
    Returns a suitable date interval in string for charting depending on how big the date range is
   */
  function dateInterval(d1, d2) {
    if (d2 - d1 >= 31622400000) {
      // If our dates are more than a year apart
      return 'month'; // We want to increment our TS data by months
    }
    if (7948800000 <= d2 - d1 && d2 - d1 < 31622400000) {
      // If our dates are less than a year apart but more than three months apart
      return 'week'; // We want to increment our TS data by weeks
    }
    if (d2 - d1 < 7948800000) {
      // If our data are less than three months apart
      return 'day'; // We want to increment our TS data by days
    }
  }
});
define('sa-dashboard/utils/extract-doi-from-string', ['exports', 'ember-osf/utils/extract-doi-from-string'], function (exports, _extractDoiFromString) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _extractDoiFromString.default;
    }
  });
});
define('sa-dashboard/utils/fix-special-char', ['exports', 'ember-osf/utils/fix-special-char'], function (exports, _fixSpecialChar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.default;
    }
  });
});
define('sa-dashboard/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('sa-dashboard/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('sa-dashboard/utils/load-relationship', ['exports', 'ember-osf/utils/load-relationship'], function (exports, _loadRelationship) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _loadRelationship.default;
    }
  });
});
define('sa-dashboard/utils/object-transforms', ['exports', 'ember-metrics/utils/object-transforms'], function (exports, _objectTransforms) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectTransforms.default;
    }
  });
});
define('sa-dashboard/utils/path-join', ['exports', 'ember-osf/utils/path-join'], function (exports, _pathJoin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathJoin.default;
    }
  });
});
define('sa-dashboard/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('sa-dashboard/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('sa-dashboard/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('sa-dashboard/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('sa-dashboard/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('sa-dashboard/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('sa-dashboard/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('sa-dashboard/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('sa-dashboard/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('sa-dashboard/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('sa-dashboard/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('sa-dashboard/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('sa-dashboard/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('sa-dashboard/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('sa-dashboard/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('sa-dashboard/config/environment', [], function() {
  var prefix = 'sa-dashboard';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("sa-dashboard/app")["default"].create({"LOG_RESOLVER":false,"LOG_ACTIVE_GENERATION":false,"LOG_TRANSITIONS":false,"LOG_TRANSITIONS_INTERNAL":false,"LOG_VIEW_LOOKUPS":false,"GRANTS_BACKEND":"http://127.0.0.1:8000/api","name":"sa-dashboard","version":"0.0.0+f3a6372c"});
}
//# sourceMappingURL=sa-dashboard.map
