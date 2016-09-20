var LineItem = require( './line_item' );

function ShoppingBasket(discount) {
  var mDiscount = discount;
  var mLineItems = [];
  var mTotalPrice = 0.0;
  var mCustomer = null;

  function totalize() {
    var total = 0.0;
    for (var item of mLineItems) {
      total += item.getPrice();
    }
    // Any product-specific discounts are applied within the line-item
    // Apply any shopping basket specific discounts now
    mTotalPrice = mDiscount.applyDiscount(total);
    // Customer discount applied last
    if (mCustomer != null) {
      mTotalPrice = mCustomer.applyDiscount(mTotalPrice);
    }
  }

  return {
    addCustomer: function(customer) {
      if (mCustomer == null) {
        mCustomer = customer;
      }
    },
    getIndex: function(item) {
      var li;
      for (var i = 0; i < mLineItems.length; i++) {
        li = mLineItems[i];
        if (li.contains(item)) return i;
      }
      return -1;
    },
    addItem: function(item) {
      // Check to see if this product already exists in the basket.
      for (var i of mLineItems) {
        if (i.contains(item)) {
          // Found it - add one more to the line item
          i.addItem();
          return;
        }
      }
      mLineItems.push(new LineItem(item));
    },
    addItemByIndex: function(itemIndex) {
      mLineItems[itemIndex].addItem();
    },
    setNumberOfItems: function(itemIndex, numberOfItems) {
      mLineItems[itemIndex].setNumberOfItems(numberOfItems);  
    },
    removeItem: function(itemIndex) {
      var li = mLineItems[itemIndex];
      li.removeItem();
      if (li.isEmpty()) mLineItems.splice(itemIndex, 1);
    },
    clearBasket: function() {
      mLineItems.length = 0;
    },
    getPrice: function() {
      totalize();
      return Math.round(mTotalPrice * 100) / 100;
    },
    size: function() {
      return mLineItems.length;
    }
  }
}

module.exports = ShoppingBasket;