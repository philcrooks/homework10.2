Customer.prototype.addCard = function(card) {
  this._loyaltyCard = card;
}

Customer.prototype.applyDiscount =function (amount) {
  if (this._loyaltyCard === null)
    return amount;
  else
    return this._loyaltyCard.applyDiscount(amount);
}

function Customer(id, name) {
  this._id = id;
  this._name = name;
  this._loyaltyCard = null;
}

module.exports = Customer;