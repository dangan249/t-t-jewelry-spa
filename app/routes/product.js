import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('relatedProducts',  this.store.metadataFor("product").related_products);
  }
});

