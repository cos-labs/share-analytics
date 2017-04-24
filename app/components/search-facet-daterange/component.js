import Ember from 'ember';
import moment from 'moment';
//import { dateRangeFilter } from 'ember-share/utils/elastic-query';

const DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
    state: {
        start: null,
        end: null
    },
    init() {
        this._super(...arguments);
        let queryParams = this.get('parameters');
        this.set('state.start', queryParams.start || '1996-01-01')
        this.set('state.end', queryParams.end || (new Date()).toISOString().split('T')[0])
    },

    didInsertElement() {
        this._super(...arguments);

        let dateRanges = {
            'Past week': [moment().subtract(1, 'week'), moment()],
            'Past month': [moment().subtract(1, 'month'), moment()],
            'Past year': [moment().subtract(1, 'year'), moment()],
            'Past decade': [moment().subtract(10, 'year'), moment()]
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

        Ember.run.scheduleOnce('actions', this, function() {
            this.filterUpdated();
        });

    },

    statePrevious: [],
    changed: Ember.observer('state.start', 'state.end', function() {
        let start = this.get('state.start');
        let end = this.get('state.end');
        if (start !== this.get('statePrevious.start') || end !== this.get('statePrevious.end')) {
            this.set('pickerValue', `${moment(start).format(DATE_FORMAT)} - ${moment(end).format(DATE_FORMAT)}`);
            this.updateFilter(start, end);
        }
    }),

    filterUpdated: Ember.observer('state', function() {
        let state = this.get('state');
        if (state.start) {
            let start = moment(this.get('state.start'));
            let end = moment(this.get('state.end'));
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
                start: `${moment(start).format('YYYY-MM-DD')}`,
                end: `${moment(end).format('YYYY-MM-DD')}`
            };
            this.attrs.transitionToFacet(this.get('item.facetDash'), queryParams);
        }
    }
});
