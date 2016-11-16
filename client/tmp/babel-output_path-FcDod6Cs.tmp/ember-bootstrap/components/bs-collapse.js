define('ember-bootstrap/components/bs-collapse', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;

  /**
   An Ember component that mimics the behaviour of Bootstrap's collapse.js plugin, see http://getbootstrap.com/javascript/#collapse
  
   ```hbs
   {{#bs-collapse collapsed=collapsed}}
    <div class="well">
      <h2>Collapse</h2>
      <p>This is collapsible content</p>
    </div>
   {{/bs-collapse}}
   ```
  
   @class Collapse
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({

    classNameBindings: ['collapse', 'in', 'collapsing'],
    attributeBindings: ['style'],

    /**
     * Collapsed/expanded state
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    collapsed: true,

    /**
     * True if this item is expanded
     *
     * @property active
     * @protected
     */
    active: false,

    collapse: computed.not('transitioning'),
    collapsing: computed.alias('transitioning'),
    'in': computed.and('collapse', 'active'),

    /**
     * true if the component is currently transitioning
     *
     * @property transitioning
     * @type boolean
     * @protected
     */
    transitioning: false,

    /**
     * @property collapseSize
     * @type number
     * @protected
     */
    collapseSize: null,

    /**
     * The size of the element when collapsed. Defaults to 0.
     *
     * @property collapsedSize
     * @type number
     * @default 0
     * @public
     */
    collapsedSize: 0,

    /**
     * The size of the element when expanded. When null the value is calculated automatically to fit the containing elements.
     *
     * @property expandedSize
     * @type number
     * @default null
     * @public
     */
    expandedSize: null,

    /**
     * Usually the size (height) of the element is only set while transitioning, and reseted afterwards. Set to true to always set a size.
     *
     * @property resetSizeWhenNotCollapsing
     * @type boolean
     * @default true
     * @private
     */
    resetSizeWhenNotCollapsing: true,

    /**
     * The direction (height/width) of the collapse animation.
     * When setting this to 'width' you should also define custom CSS transitions for the width property, as the Bootstrap
     * CSS does only support collapsible elements for the height direction.
     *
     * @property collapseDimension
     * @type string
     * @default 'height'
     * @public
     */
    collapseDimension: 'height',

    style: computed('collapseSize', function () {
      var size = this.get('collapseSize');
      var dimension = this.get('collapseDimension');
      if (_ember['default'].isEmpty(size)) {
        return _ember['default'].String.htmlSafe('');
      }
      return _ember['default'].String.htmlSafe(dimension + ': ' + size + 'px');
    }),

    /**
     * Triggers the show transition
     *
     * @method show
     * @protected
     */
    show: function show() {
      var complete = function complete() {
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.sendAction('didShow');
      };

      this.sendAction('willShow');

      this.setProperties({
        transitioning: true,
        collapseSize: this.get('collapsedSize'),
        active: true
      });

      if (!_ember['default'].$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      _ember['default'].run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.getExpandedSize('show'));
        }
      });
    },

    /**
     * Get the size of the element when expanded
     *
     * @method getExpandedSize
     * @param $action
     * @return {Number}
     * @private
     */
    getExpandedSize: function getExpandedSize($action) {
      var expandedSize = this.get('expandedSize');
      if (_ember['default'].isPresent(expandedSize)) {
        return expandedSize;
      }

      var collapseElement = this.$();
      var prefix = $action === 'show' ? 'scroll' : 'offset';
      var measureProperty = _ember['default'].String.camelize(prefix + '-' + this.get('collapseDimension'));
      return collapseElement[0][measureProperty];
    },

    /**
     * Triggers the hide transition
     *
     * @method hide
     * @protected
     */
    hide: function hide() {

      var complete = function complete() {
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.sendAction('didHide');
      };

      this.sendAction('willHide');

      this.setProperties({
        transitioning: true,
        collapseSize: this.getExpandedSize('hide'),
        active: false
      });

      if (!_ember['default'].$.support.transition) {
        return complete.call(this);
      }

      this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, complete))
      // @todo: make duration configurable
      .emulateTransitionEnd(350);

      _ember['default'].run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.get('collapsedSize'));
        }
      });
    },

    _onCollapsedChange: observer('collapsed', function () {
      var collapsed = this.get('collapsed');
      var active = this.get('active');
      if (collapsed !== active) {
        return;
      }
      if (collapsed === false) {
        this.show();
      } else {
        this.hide();
      }
    }),

    _onInit: _ember['default'].on('init', function () {
      this.set('active', !this.get('collapsed'));
    }),

    _updateCollapsedSize: observer('collapsedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('collapsedSize'));
      }
    }),

    _updateExpandedSize: observer('expandedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && !this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('expandedSize'));
      }
    })
  });
});