function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }

import Ember from 'ember';

import computed from 'ember-computed-decorators';

import tryMatch from '../utils/try-match';
import optional from '../utils/optional-decorator';
import layout from '../templates/components/fa-stack';

export default Ember.Component.extend(_createDecoratedObject([{
  key: 'layout',
  initializer: function initializer() {
    return layout;
  }
}, {
  key: 'tagName',
  initializer: function initializer() {
    return 'span';
  }
}, {
  key: 'classNames',
  initializer: function initializer() {
    return 'fa-stack';
  }
}, {
  key: 'classNameBindings',
  initializer: function initializer() {
    return ['sizeCssClass'];
  }
}, {
  key: 'sizeCssClass',
  decorators: [optional, computed('size')],
  value: function sizeCssClass(size) {
    if (tryMatch(size, /^fa-/)) {
      return size;
    } else if (tryMatch(size, /(?:lg|x)$/)) {
      return 'fa-' + size;
    } else {
      return 'fa-' + size + 'x';
    }
  }
}]));