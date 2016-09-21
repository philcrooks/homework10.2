var WaterBottle = require( '../water_bottle' );
var assert = require( 'assert' );

describe ( 'Water Bottle', function() {
  var bottle;

  before( function() {
    bottle = new WaterBottle();
  })

  // 1. water bottle should be empty(X)
  it( "should be empty", function() {
    assert.equal( 0, bottle.volume );
  })

  // 2. should go to 100 when filled
  it( "should go to 100 when filled", function() {
    bottle.fill();
    assert.equal( 100, bottle.volume );
  })

  // 3. should go down by 10 when drank
  it( "should go down by 10 when drank", function() {
    bottle.fill();
    bottle.drink();
    assert.equal( 90, bottle.volume );
  })

  // 4. should go to 0 when emptied
  it( "should go to 0 when emptied", function() {
    bottle.fill();
    bottle.empty();
    assert.equal( 0, bottle.volume );
  })

  // 5. should not be able to go below 0
  it( "should not be able to go below 0", function() {
    bottle.fill();
    var drinks = 0;
    for (var c = 0; c <= 10; c++) {
      bottle.drink();
      drinks++;
    }
    assert.equal( 11, drinks);
    assert.equal( 0, bottle.volume );
  })
})