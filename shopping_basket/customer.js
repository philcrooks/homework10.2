function Customer(id, name) {
  var mId = id;
  var mName = name;
  var mLoyaltyCard = null;

  return {
    addCard: function(card) {
      mLoyaltyCard = card;
    },
    applyDiscount: function (amount) {
      if (mLoyaltyCard == null)
        return amount;
      else
        return mLoyaltyCard.applyDiscount(amount);
    }
  }
}

module.exports = Customer;