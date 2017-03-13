import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string'),
    q: DS.attr('string'),
    gte: DS.attr('date'),
    lte: DS.attr('date'),
    tsInterval: DS.attr('string'),
    sortableObjectList: DS.attr(),
    addableList: DS.attr()

});

