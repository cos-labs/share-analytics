define('ember-font-awesome/components/fa-list', ['exports', 'ember', 'ember-font-awesome/templates/components/fa-list'], function (exports, _ember, _emberFontAwesomeTemplatesComponentsFaList) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberFontAwesomeTemplatesComponentsFaList['default'],
    tagName: 'ul',
    classNames: 'fa-ul'
  });
});