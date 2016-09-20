function BasketDiscount(discount, discountThreshold) {
  var mDiscount = discount;
  var mDiscountThreshold = discountThreshold;

  return {
    applyDiscount: function(amount) {
      if (amount > mDiscountThreshold)
        //return amount - ((amount * mDiscount) / 100.0);
        return Math.round((100 - mDiscount) * amount) / 100;
      return amount;
    }
  }
}

module.exports = BasketDiscount;