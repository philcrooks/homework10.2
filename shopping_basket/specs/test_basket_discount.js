var BasketDiscount = require( '../basket_discount' );
var assert = require( 'assert' );

describe ( 'Basket Discount', function() {
  var discount;

  beforeEach(function() {
    discount = new BasketDiscount(10.0, 20.0);
  })

  it( "test no basket discount", function() {
    assert.equal( 20.0, discount.applyDiscount(20.0) );
  })

  it( "test basket discount", function() {
    assert.equal( 18.01, discount.applyDiscount(20.01) );
  })
})