BasketDiscount.prototype.applyDiscount = function(amount) {
  if (amount > this._discountThreshold)
    //return amount - ((amount * mDiscount) / 100.0);
    return Math.round((100 - this._discount) * amount) / 100;
  return amount;
}

function BasketDiscount(discount, discountThreshold) {
  this._discount = discount;
  this._discountThreshold = discountThreshold;
}

module.exports = BasketDiscount;