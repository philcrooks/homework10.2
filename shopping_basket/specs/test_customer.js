var Customer = require( '../customer' );
var LoyaltyCard = require( '../loyalty_card' );
var assert = require( 'assert' );

describe ( 'Customer', function() {
  var card;
  var customer;
  
  beforeEach(function() {
    card = new LoyaltyCard(5, 2.0);
    customer = new Customer(4, "Phil");
  })

  it( "should give 0% discount", function() {
    assert.equal( 100.0, customer.applyDiscount(100.0) );
  })

  it( "should give 2% discount", function() {
    customer.addCard(card);
    assert.equal( 98.0, customer.applyDiscount(100.0) );
  })
})