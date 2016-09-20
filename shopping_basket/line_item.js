function LineItem(item) {
  var mItem = item;
  var mNumberOf = 1;
  var mLinePrice = mItem.priceOf(mNumberOf);

  return {
    contains: function(item) {
      return (mItem.getId() === item.getId());
    },
    addItem: function() {
      mNumberOf += 1;
      mLinePrice = item.priceOf(mNumberOf);
    },
    removeItem: function() {
      mNumberOf -= 1;
      if (mNumberOf < 0) mNumberOf = 0;
      mLinePrice = mItem.priceOf(mNumberOf);
    },
    setNumberOfItems(noItems) {
      if (noItems >= 0) mNumberOf = noItems;
      mLinePrice = mItem.priceOf(mNumberOf);
    },
    getPrice: function() {
      return Math.round(mLinePrice * 100) / 100;
    },
    isEmpty: function() {
      return (mNumberOf === 0);
    }
  }
}

module.exports = LineItem;