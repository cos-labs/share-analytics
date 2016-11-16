var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

// jscs:disable disallowArrayDestructuringReturn
import Ember from 'ember';
import config from 'ember-get-config';

/**
 * @module ember-osf
 * @submodule utils
 */

/**
 * @class auth
 */

/**
 * Retrieve the correct URL for OAuth 2.0 authentication in the OSF, including any additional configurable parameters
 * @private
 * @method getOAuthUrl
 * @param {string} nextUri Where to send the browser after a successful login request
 * @return {string}
 */
function getOAuthUrl(nextUri) {
    // OAuth requires that redirect URI match what was registered, exactly. We may need a parameter to signify next
    //   transition, if the user wants to return to ember at the point where they left off before needing to log in.
    // For now, we will put this in the `state` parameter (always returned unchanged) and implement that functionality in ember later.
    // To avoid abuse, the application should forcibly truncate state, eg make it relative to the application rootURL
    //   (should not be possible to use the ember app as just an external redirect service)
    var uri = config.OSF.oauthUrl + '?response_type=token&scope=' + config.OSF.scope + '&client_id=' + config.OSF.clientId + '&redirect_uri=' + encodeURIComponent(config.OSF.redirectUri);
    if (nextUri) {
        uri += '&state=' + encodeURIComponent(nextUri);
    }
    return uri;
}

/**
 * Retrieve the correct URL for cookie-based in the OSF, including any additional configurable parameters
 * @private
 * @method getCookieAuthUrl
 * @param {string} nextUri Where to send the browser after a successful login request
 * @return {string}
 */
function getCookieAuthUrl(nextUri) {
    nextUri = nextUri || config.OSF.redirectUri;
    var loginUri = config.OSF.url + 'login?next=' + encodeURIComponent(nextUri);
    return config.OSF.cookieLoginUrl + '?service=' + encodeURIComponent(loginUri);
}

/**
 * Return the appropriate auth URL for the specified authorization mechanism (as specified in application configuration)
 * Currently supports `token` and `cookie` based authorization
 * @public
 * @method getAuthUrl
 * @return {string}
 */
function getAuthUrl() {
    var authType = config.authorizationType;
    if (authType === 'token') {
        return getOAuthUrl.apply(undefined, arguments);
    } else if (authType === 'cookie') {
        return getCookieAuthUrl.apply(undefined, arguments);
    } else {
        throw new Ember.Error('Unrecognized authorization type: ' + authType);
    }
}

function getTokenFromHash(hash) {
    hash = hash.substring(1).split('&');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = hash[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var chunk = _step.value;

            var _chunk$split = chunk.split('=');

            var _chunk$split2 = _slicedToArray(_chunk$split, 2);

            var key = _chunk$split2[0];
            var value = _chunk$split2[1];

            if (key === 'access_token') {
                return value;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}

export { getAuthUrl, getTokenFromHash };