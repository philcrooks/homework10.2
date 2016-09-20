var LoyaltyCard = require( '../loyalty_card' );
var assert = require( 'assert' );

describe ( 'Loyalty Card', function() {
  var card;

  beforeEach(function() {
    card = new LoyaltyCard(3, 3.0);
  })

  it( "should give 3% discount", function() {
    assert.equal( 97.0, card.applyDiscount(100.0) );
  })
})