var ItemController = Ember.ObjectController.extend({
  price: function() {
    return "£" + (this.get('priceCents')/100).toFixed(2);
  }.property('priceCents'),
});

export default ItemController;
