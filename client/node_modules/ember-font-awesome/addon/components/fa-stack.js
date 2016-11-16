import Ember from 'ember';

import computed from 'ember-computed-decorators';

import tryMatch from '../utils/try-match';
import optional from '../utils/optional-decorator';
import layout from '../templates/components/fa-stack';

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames: 'fa-stack',
  classNameBindings: ['sizeCssClass'],

  @computed('size')
  @optional
  sizeCssClass(size) {
    if (tryMatch(size, /^fa-/)) {
      return size;
    } else if (tryMatch(size, /(?:lg|x)$/)) {
      return `fa-${size}`;
    } else {
      return `fa-${size}x`;
    }
  }
});
