define('ember-cli-bootstrap-datepicker/components/datepicker-support', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = _ember['default'].Mixin.create({
    mustUpdateInput: true,
    value: null,
    // add the observed properties
    minViewMode: undefined,
    format: undefined,
    language: undefined,
    startDate: undefined,
    endDate: undefined,
    customParser: function customParser(value) {
      return value;
    },

    setupBootstrapDatepicker: _ember['default'].on('didInsertElement', function () {
      var _this = this;

      this.$().datepicker({
        autoclose: this.get('autoclose'),
        calendarWeeks: this.get('calendarWeeks'),
        clearBtn: this.get('clearBtn'),
        container: this.get('widgetContainer'),
        daysOfWeekDisabled: this.get('daysOfWeekDisabled'),
        defaultViewDate: this.get('defaultViewDate'),
        disableTouchKeyboard: this.get('disableTouchKeyboard'),
        enableOnReadonly: this.get('enableOnReadonly'),
        endDate: this.get('endDate'),
        forceParse: this.get('forceParse'),
        format: this._toString(this.get('format')),
        immediateUpdates: this.get('immediateUpdates'),
        keyboardNavigation: this.get('keyboardNavigation'),
        language: this.get('language') || undefined,
        maxViewMode: this.get('maxViewMode'),
        minViewMode: this.get('minViewMode'),
        multidate: this.get('multidate'),
        multidateSeparator: this.get('multidateSeparator'),
        orientation: this.get('orientation'),
        showOnFocus: this.get('showOnFocus'),
        startDate: this.get('startDate'),
        startView: this.get('startView'),
        todayBtn: this.get('todayBtn'),
        todayHighlight: this.get('todayHighlight'),
        toggleActive: this.get('toggleActive'),
        weekStart: this.get('weekStart'),
        datesDisabled: this.get('datesDisabled')
      }).on('changeDate', function (event) {
        _ember['default'].run(function () {
          _this._didChangeDate(event);
        });
      }).on('changeMonth', function (event) {
        _this.sendAction('changeMonth', event.date);
      }).on('focusout', function (event) {
        _this.sendAction('focus-out', _this, event);
      }).on('focusin', function (event) {
        _this.sendAction('focus-in', _this, event);
      }).on('clearDate', function (event) {
        _ember['default'].run(function () {
          _this._didChangeDate(event);
        });
      }).on('show', function () {
        _this.sendAction('show');
      }).on('hide', function () {
        _this.sendAction('hide');
      });

      this._updateDatepicker();
    }),

    teardownBootstrapDatepicker: _ember['default'].on('willDestroyElement', function () {
      this.$().datepicker('remove');
    }),

    didChangeValue: _ember['default'].observer('value', function () {
      this._updateDatepicker();
    }),

    _didChangeDate: function _didChangeDate(event) {
      var value = null;

      if (event.date) {
        if (this.get('multidate')) {
          value = this.$().datepicker('getDates');
        } else {
          value = this.$().datepicker('getDate');
        }
      }

      this.set('mustUpdateInput', false);
      this.set('value', value);
      if (event.type === 'clearDate') {
        this.sendAction('clearDate');
      } else {
        this.sendAction('changeDate', value);
      }
    },

    _addObservers: _ember['default'].on('didInsertElement', function () {
      this.addObserver('language', function () {
        this.$().datepicker('remove');
        this.setupBootstrapDatepicker();
      });

      this.addObserver('startDate', function () {
        this.$().datepicker('setStartDate', this.get('startDate'));
        this._updateDatepicker();
      });

      this.addObserver('endDate', function () {
        this.$().datepicker('setEndDate', this.get('endDate'));
        this._updateDatepicker();
      });

      this.addObserver('datesDisabled', function () {
        this.$().datepicker('setDatesDisabled', this.get('datesDisabled'));
        this._updateDatepicker();
      });

      this.addObserver('minViewMode', function () {
        this.$().datepicker('minViewMode', this.get('minViewMode'));
        this.$().data('datepicker')._process_options({ minViewMode: this.get('minViewMode') });
        this._updateDatepicker();
      });

      this.addObserver('format', function () {
        var format = this._toString(this.get('format'));
        this.$().datepicker('format', format);
        this.$().data('datepicker')._process_options({ format: format });
        this._updateDatepicker();
      });
    }),

    _updateDatepicker: function _updateDatepicker() {
      var _this2 = this;

      var element = this.$(),
          value = this.get('value'),
          customParser = this.get('customParser'),
          dates = [];

      if (!this.get('mustUpdateInput')) {
        this.set('mustUpdateInput', true);
        return;
      }

      value = customParser(value);

      switch (_ember['default'].typeOf(value)) {
        case 'array':
          dates = value;
          break;
        case 'date':
          dates = [value];
          break;
        default:
          dates = [null];
      }
      dates = dates.map(function (date) {
        return _ember['default'].isNone(date) ? null : _this2._getDateCloneWithNoTime(date);
      });

      element.datepicker.apply(element, Array.prototype.concat.call(['update'], dates));
    },

    // HACK: Have to reset time to 00:00:00 because of the bug in
    //       bootstrap-datepicker
    //       Issue: http://git.io/qH7Hlg
    _getDateCloneWithNoTime: function _getDateCloneWithNoTime(date) {
      var clone = new Date(date.getTime());

      clone.setHours(0);
      clone.setMinutes(0);
      clone.setSeconds(0);
      clone.setMilliseconds(0);

      return clone;
    },

    /**
     * Fix Issue #59
     * _toString Checks and converts the input object and returns  a String if it is required and feasible
     * @param  {Object} obj The object to check
     * @return {Object} The object as a String
     */
    _toString: function _toString(obj) {
      if (typeof obj !== typeof Undefined && obj !== typeof String) {
        if (typeof obj.toString === typeof Function) {
          obj = obj.toString();
        } else {
          // No toString() method available - There is nothing else that can be done
          throw new Error("At _toString() (datepicker-support.js) - No toString() method available for the passed object.");
        }
      }
      return obj;
    }
  });
});