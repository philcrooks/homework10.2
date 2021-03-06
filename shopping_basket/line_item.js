LineItem.prototype.contains = function(item) {
  return (this._item.id === item.id);
}

LineItem.prototype.addItem = function() {
  this._numberOf += 1;
  this._linePrice = this._item.priceOf(this._numberOf);
}

LineItem.prototype.removeItem = function() {
  this._numberOf -= 1;
  if (this._numberOf < 0) this._numberOf = 0;
  this._linePrice = this._item.priceOf(this._numberOf);
}

LineItem.prototype.isEmpty = function() {
  return (this._numberOf === 0);
}

function LineItem(item) {

  // return {
  //   _item: item,
  //   _numberOf: 1,
  //   _linePrice: this._item.priceOf(this._numberOf),
  //   numberOFItems: set(noItems) {
  //     if (noItems >= 0) this._numberOf = noItems;
  //     this._linePrice = this._item.priceOf(this._numberOf);
  //   },
  //   price: get() {
  //     return Math.round(this._linePrice * 100) / 100;
  //   }
  // }
  this._item = item;
  this._numberOf = 1;
  this._linePrice = this._item.priceOf(this._numberOf);
  Object.defineProperties(this, {
    "numberOfItems": { 
      set: function(noItems) { 
        if (noItems >= 0) this._numberOf = noItems;
        this._linePrice = this._item.priceOf(this._numberOf);
      }
    },
    "price": {
      get: function() {
        return Math.round(this._linePrice * 100) / 100;
      }
    }
  })
}

module.exports = LineItem;