import Ember from 'ember';

export default Ember.Route.extend({
  perPage: 9,

  model: function(params) {
    return  this.store.find('product', params);
  }
});
