function ProductOffer(id, noItems, discount) {
  var mId = id;
  var mNoItems = noItems;
  var mDiscount = discount;

  function calculatePriceOf(noItems, priceEach) {
    var discountApplyNumber = Math.floor(noItems/mNoItems) * mNoItems;
    var discountDoesNotApplyNumber = noItems - discountApplyNumber;
    var cost = (discountApplyNumber * priceEach);
    cost -= (cost * mDiscount) / 100.0;
    cost += discountDoesNotApplyNumber * priceEach;
    return Math.round(cost * 100) / 100;
  }

  return {
    priceOf: function(noItems, priceEach) {
      return calculatePriceOf(noItems, priceEach);
    }
  }
}

module.exports = ProductOffer;