define('ember-data-has-many-query/property-names', ['exports'], function (exports) {
  'use strict';

  var queryParamPropertyName = function queryParamPropertyName(key) {
    return '__' + key + 'QueryParams';
  };

  var lastWasErrorPropertyName = function lastWasErrorPropertyName(key) {
    return '__' + key + 'LastWasError';
  };

  var ajaxOptionsPropertyName = function ajaxOptionsPropertyName(key) {
    return '__' + key + 'AjaxOptions';
  };

  var stickyPropertyName = function stickyPropertyName(key) {
    return '__' + key + 'BelongsToSticky';
  };

  exports.queryParamPropertyName = queryParamPropertyName;
  exports.lastWasErrorPropertyName = lastWasErrorPropertyName;
  exports.ajaxOptionsPropertyName = ajaxOptionsPropertyName;
  exports.stickyPropertyName = stickyPropertyName;
});