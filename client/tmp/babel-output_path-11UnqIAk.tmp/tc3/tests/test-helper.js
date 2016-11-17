define('tc3/tests/test-helper', ['exports', 'tc3/tests/helpers/resolver', 'ember-qunit'], function (exports, _tc3TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_tc3TestsHelpersResolver['default']);
});