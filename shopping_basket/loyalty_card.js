function LoyaltyCard (id, discount) {
  var mId = id;
  var mDiscount = discount;

  return {
    applyDiscount: function(amount) {
      var reduction = (amount * mDiscount) / 100.0;
      return amount - reduction;
    }
  }
}

module.exports = LoyaltyCard;