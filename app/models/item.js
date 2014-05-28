export default DS.Model.extend({
  dish:     DS.belongsTo('dish'),
  quantity: DS.attr('number'),


  priceCents: function() {
    return this.get('quantity') * this.get('dish.priceCents');
  }.property('quantity', 'dish.priceCents'),
});