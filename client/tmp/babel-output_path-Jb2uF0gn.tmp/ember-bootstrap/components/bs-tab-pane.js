define('ember-bootstrap/components/bs-tab-pane', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-tab-pane', 'ember-bootstrap/mixins/component-child', 'ember-bootstrap/components/bs-tab'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsTabPane, _emberBootstrapMixinsComponentChild, _emberBootstrapComponentsBsTab) {
  'use strict';

  var computed = _ember['default'].computed;
  var observer = _ember['default'].observer;

  /**
   The tab pane of a tab component.
   See [Components.Tab](Components.Tab.html) for examples.
  
   @class TabPane
   @namespace Components
   @extends Ember.Component
   @uses Mixins.ComponentChild
   @public
   */
  exports['default'] = _ember['default'].Component.extend(_emberBootstrapMixinsComponentChild['default'], {
    layout: _emberBootstrapTemplatesComponentsBsTabPane['default'],
    classNameBindings: ['active', 'fade', 'in'],
    classNames: ['tab-pane'],
    ariaRole: 'tabpanel',

    /**
     * True if this pane is active (visible)
     *
     * @property isActive
     * @type boolean
     * @protected
     */
    isActive: computed('tab.activeId', 'elementId', function () {
      return this.get('tab.activeId') === this.get('elementId');
    }),

    /**
     * Used to apply Bootstrap's "active" class
     *
     * @property active
     * @type boolean
     * @default false
     * @protected
     */
    active: false,

    /**
     * Used to apply Bootstrap's "in" class
     *
     * @property in
     * @type boolean
     * @default false
     * @protected
     */
    'in': false,

    /**
     * Use CSS transitions when showing/hiding the pane?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @protected
     */
    usesTransition: computed('fade', function () {
      return _ember['default'].$.support.transition && this.get('fade');
    }),

    /**
     * The parent [Components.Tab](Components.Tab.html) instance.
     *
     * @property tab
     * @type {Components.Tab}
     * @protected
     */
    tab: computed(function () {
      return this.nearestOfType(_emberBootstrapComponentsBsTab['default']);
    }),

    /**
     * The title for this tab pane. This is used by the `bs-tab` component to automatically generate
     * the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * An optional group title used by the `bs-tab` component to group all panes with the same group title
     * under a common drop down in the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property groupTitle
     * @type string
     * @default null
     * @public
     */
    groupTitle: null,

    /**
     * Use fade animation when switching tabs.
     *
     * @property fade
     * @type boolean
     * @readonly
     * @protected
     */
    fade: computed.readOnly('tab.fade'),

    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type integer
     * @readonly
     * @protected
     */
    fadeDuration: computed.readOnly('tab.fadeDuration'),

    /**
     * Show the pane
     *
     * @method show
     * @protected
     */
    show: function show() {
      if (this.get('usesTransition')) {
        this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, function () {
          if (!this.get('isDestroyed')) {
            this.setProperties({
              active: true,
              'in': true
            });
          }
        })).emulateTransitionEnd(this.get('fadeDuration'));
      } else {
        this.set('active', true);
      }
    },

    /**
     * Hide the pane
     *
     * @method hide
     * @protected
     */
    hide: function hide() {
      if (this.get('usesTransition')) {
        this.$().one('bsTransitionEnd', _ember['default'].run.bind(this, function () {
          if (!this.get('isDestroyed')) {
            this.set('active', false);
          }
        })).emulateTransitionEnd(this.get('fadeDuration'));
        this.set('in', false);
      } else {
        this.set('active', false);
      }
    },

    _showHide: observer('isActive', function () {
      if (this.get('isActive')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].run.scheduleOnce('afterRender', this, function () {
        // isActive comes from parent component, so only available after render...
        this.set('active', this.get('isActive'));
        this.set('in', this.get('isActive') && this.get('fade'));
      });
    }

  });
});