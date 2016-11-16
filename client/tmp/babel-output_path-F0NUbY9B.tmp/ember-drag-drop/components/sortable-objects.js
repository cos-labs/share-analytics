define('ember-drag-drop/components/sortable-objects', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    dragCoordinator: _ember['default'].inject.service(),
    tagName: 'div',
    overrideClass: 'sortable-objects',
    classNameBindings: ['overrideClass'],
    enableSort: true,
    useSwap: true,
    sortingScope: 'drag-objects',
    sortableObjectList: _ember['default'].A(),

    didInsertElement: function didInsertElement() {
      if (this.get('enableSort')) {
        this.get('dragCoordinator').pushSortComponent(this);
      }
    },

    willDestroyElement: function willDestroyElement() {
      if (this.get('enableSort')) {
        this.get('dragCoordinator').removeSortComponent(this);
      }
    },

    dragStart: function dragStart() {
      if (!this.get('enableSort')) {
        return false;
      }
    },

    dragOver: function dragOver() {
      //needed so drop event will fire
      return false;
    },

    drop: function drop(event) {
      if (this.get('enableSort')) {
        this.sendAction('sortEndAction', event);
      }
    }
  });
});