import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: '',
  searchQuery: '',

  actions: {
    search: function() {
      this.sendAction('action', this.get('emptySearchQuery') ? null : this.get('searchQuery'));
    }
  },

  emptySearchQuery: function() {
    var str = this.get('searchQuery');
    return (!str || 0 === str.length);
  }.property('searchQuery')
});
