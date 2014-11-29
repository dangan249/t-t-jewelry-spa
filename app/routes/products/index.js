import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 9,

  model: function(params) {
    // todo is your model name
    // returns a PagedRemoteArray
    return this.findPaged('product',params);
  }
});
