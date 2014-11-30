import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage", "category", "brand", "gender", "query"],

  query: null,
  brand: null,
  gender: null,
  category: null,
  unFilteredProducts: Ember.computed.alias('model'),

  products: function() {
    var query, unFilteredProducts, result;

    query = this.get('query');
    unFilteredProducts = this.get('unFilteredProducts');

    result = query ? this.store.find('product', {query: query}) : unFilteredProducts;
    return result;
  }.property('unFilteredProducts','query'),

  actions: {
    search: function (searchQuery) {
      this.set('query', searchQuery);
    }
  }
});
