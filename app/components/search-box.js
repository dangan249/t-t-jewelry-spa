import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: '',
  searchQuery: '',

  actions: {
    search: function() {
      if (this.get('emptySearchQuery')) {
        alert('Search Field Cannot Be Blank');
      } else {
        this.sendAction('action', this.get('searchQuery'));
      }
    }
  },

  emptySearchQuery: function() {
    var str = this.get('searchQuery');
    return (!str || 0 === str.length);
  }.property('searchQuery')
});
