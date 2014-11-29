import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage"],

  // binding the property on the paged array
  // to the query params on the controller
  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.totalPages",

  // optional. Don't serialize default values
  // into the URL
  page: 1,
  perPage: 9
});
