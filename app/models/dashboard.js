import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string'),
    settings: DS.attr('object'),
    widgets: DS.hasMany('widget', {
        async: true,
        inverse: "dashboard"
    })

});
