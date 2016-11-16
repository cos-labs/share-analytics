define('tc3/components/wild-card', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        actions: {
            removeChart: function removeChart() {
                this.sendAction('removeChart', 'wildcard');
            }
        }

    });
});