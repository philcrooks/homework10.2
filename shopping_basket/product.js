function Product(id, name, price) {
  var mId = id;
  var mName = name;
  var mPrice = price;
  var mOffer = null;

  return {
    addSpecialOffer: function(offer) {
      mOffer = offer;
    },
    get id() {
      return mId;
    },
    priceOf: function(noItems) {
      if (mOffer == null)
        return noItems * price;
      else
        return mOffer.priceOf(noItems, price);
    }
  }
}

module.exports = Product;
