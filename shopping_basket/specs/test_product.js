var ProductOffer = require( '../product_offer' );
var Product = require( '../product' );
var assert = require( 'assert' );

describe ( 'Product Offer', function() {
  var offer;
  var product;

  beforeEach(function() {
    offer = new ProductOffer(10, 3, 33.33);
    product = new Product(16, "Stripey Socks", 5.0);
  })

  it( "check price - no offer", function() {
    assert.equal( 15.0, product.priceOf(3) );
  })

  it( "check price with offer", function() {
    product.addSpecialOffer(offer);
    assert.equal( 10.0, product.priceOf(3) );
  })
})