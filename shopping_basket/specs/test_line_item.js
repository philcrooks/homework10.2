var ProductOffer = require( '../product_offer' );
var Product = require( '../product' );
var LineItem = require('../line_item')
var assert = require( 'assert' );

describe ( 'Line Item', function() {
  var offer;
  var productWithOffer;
  var productWithoutOffer;
  var lineItem;
  
  beforeEach(function() {
    offer = new ProductOffer(10, 3, 33.33);
    productWithOffer = new Product(16, "Stripey Socks", 5.0);
    productWithOffer.addSpecialOffer(offer);
    productWithoutOffer = new Product(33, "Plain Black Socks", 3.5);
  })

  it( "test 'contains' true", function() {
    lineItem = new LineItem( productWithoutOffer );
    assert.equal( true, lineItem.contains(productWithoutOffer) );
  })

  it( "test 'contains' false", function() {
    lineItem = new LineItem(productWithoutOffer);
    assert.equal( false, lineItem.contains(productWithOffer) );
  })

  it( "test price", function() {
    lineItem = new LineItem(productWithoutOffer);
    assert.equal( 3.5, lineItem.getPrice() );
  })

  it( "test add item", function() {
    lineItem = new LineItem(productWithoutOffer);
    lineItem.addItem();
    assert.equal( 7.0, lineItem.getPrice() );
  })

  it( "test discount - no discount", function() {
    lineItem = new LineItem(productWithoutOffer);
    lineItem.setNumberOfItems(3);
    assert.equal( 10.5, lineItem.getPrice() );
  })

  it( "test discount - with discount", function() {
    lineItem = new LineItem(productWithOffer);
    lineItem.setNumberOfItems(3);
    assert.equal( 10.0, lineItem.getPrice() );
  })

  it( "test remove item", function() {
    lineItem = new LineItem(productWithoutOffer);
    lineItem.setNumberOfItems(3);
    lineItem.removeItem();
    assert.equal(7.0, lineItem.getPrice());
  })
})