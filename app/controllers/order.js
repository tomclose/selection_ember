var OrderController = Ember.ObjectController.extend({
  needs: ['dishes'],

  dishes: function() {
    return this.get('controllers.dishes');
  }.property('controllers.dishes'),


  actions: {
    addDish: function() {
      var newDish = this.get('newDish');
      this.get('items').pushObject(
        this.store.createRecord('item', {
          dish: newDish,
          quantity: 1,
        })
      );
    }
  }
});

export default OrderController;
