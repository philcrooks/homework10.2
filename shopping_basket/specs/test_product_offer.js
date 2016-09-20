var ProductOffer = require( '../product_offer' );
var assert = require( 'assert' );

describe ( 'Product Offer', function() {
  var bogof;
  var perItem;
  var buyTwoGetOneFree;

  beforeEach(function() {
    bogof = new ProductOffer(1, 2, 50.0);
    perItem = new ProductOffer(2, 1, 10.0);
    buyTwoGetOneFree = new ProductOffer(3, 3, 33.33);
  })

  it( "per item discount of 10%", function() {
    assert.equal( 45.00, perItem.priceOf(5, 10.0) );
  })

  it( "bogof - one item", function() {
    assert.equal( 5.0, bogof.priceOf(1, 5.00) );
  })

  it( "bogof - even number of items", function() {
    assert.equal( 10.0, bogof.priceOf(4, 5.00) );
  })

  it( "bogof - odd number of items", function() {
    assert.equal( 15.0, bogof.priceOf(5, 5.00) );
  })

  it( "buy two get one free - one item", function() {
    assert.equal( 5.0, buyTwoGetOneFree.priceOf(1, 5.00) );
  })

  it( "buy two get one free - two items", function() {
    assert.equal( 10.0, buyTwoGetOneFree.priceOf(2, 5.00) );
  })

  it( "buy two get one free - three items", function() {
    assert.equal( 10.0, buyTwoGetOneFree.priceOf(3, 5.00) );
  })

  it( "buy two get one free - four items", function() {
    assert.equal( 15.0, buyTwoGetOneFree.priceOf(4, 5.00) );
  })
})