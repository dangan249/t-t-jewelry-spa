import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  // setup our query params
  queryParams: ["page", "perPage", "category", "brand", "gender", "query"],

  query: '',
  brand: '',
  gender: '',
  category: '',
  products: Ember.computed.alias('model'),

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
    search: function (query) {
      this.set('query', query);
    }
  }
});
