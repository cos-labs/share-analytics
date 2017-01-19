import Ember from 'ember';

export default Ember.Component.extend({

    total: 'hello',

    settings : {
        fontSize: 3,
        fontColor: '#F44336',
        pre:'',
        post: '',
        value: 0
    },

    init () {
        this._super(...arguments);
        let settings = this.get('widgetSettings');
        if(settings){
            this.set('settings', settings);
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        var unformatted = this.total
        if (!unformatted) {
            unformatted = this.settings.value
        }
        this.set('total', unformatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

});
