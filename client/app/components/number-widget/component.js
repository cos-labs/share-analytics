import Ember from 'ember';

export default Ember.Component.extend({
  total: 'hello',
  settings : {
      fontSize: 3,
      fontColor: '#F44336'
  },
  init () {
      this._super(...arguments);
      let settings = this.get('widgetSettings');
      if(settings){
          this.set('settings', settings);
      }
  }

});
