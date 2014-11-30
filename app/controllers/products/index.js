import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  // setup our query params
  queryParams: ["page", "perPage", "category", "brand", "gender", "query"],

  query: null,
  brand: null,
  gender: null,
  category: null,
  products: function() {
    var products = this.get('model');
    var query = this.get('query');

    if (query) {
      products = this.store.find('product', {query: query})
    }

    return products;
  }.property('model', 'query'),

  // binding the property on the paged array
  // to the query params on the controller
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages",

  // optional. Don't serialize default values
  // into the URL
  page: 1,
  perPage: 9,

  actions: {
    search: function (searchQuery) {
      this.set('query', searchQuery);
    }
  }
});
