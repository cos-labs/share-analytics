

export default loadAll;
import Ember from 'ember';
function loadAll(model, relationship, dest) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var page = options.page || 1;
    var query = {
        'page[size]': 10,
        page: page
    };
    query = Ember.merge(query, options || {});
    Ember.set(model, 'query-params', query);

    return model.query(relationship, query).then(function (results) {
        dest.pushObjects(results.toArray());

        var total = results.meta.pagination.total;
        var pageSize = results.meta.pagination.per_page;
        var remaining = total - page * pageSize;
        if (remaining > 0) {
            query.page = page + 1;
            query['page[size]'] = pageSize;
            return loadAll(model, relationship, dest, query);
        }
    });
}