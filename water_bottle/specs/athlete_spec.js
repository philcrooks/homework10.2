var Athlete = require( '../athlete' );
var WaterBottle = require( '../water_bottle' )
var assert = require( 'assert' );

describe ( 'Athlete', function() {
  var athlete;
  var bottle;

  beforeEach( function() {
    athlete = new Athlete();
  })

  // 1. Athlete should have a hydration attribute that starts at 100.
  it( "check initial hydration", function() {
    assert.equal( 100, athlete.hydration );
  })


  // 2. Athlete should have a distance covered attribute starts at 0.
  it( "check initial distance covered", function() {
    assert.equal( 0, athlete.distanceCovered );
  })

  // 3. Athlete should be able to run:  increasing distance, decreasing hydration.
  it( "check athlete can run", function() {
    athlete.run();
    assert.equal( 10, athlete.distanceCovered );
    assert.equal( 90, athlete.hydration );
  })

  // 4. Athlete should not move when running dehydrated: hydration at 0;
  it( "check athlete cannot run dehydrated", function() {
    for (var c = 0; c < 10; c++) {
      athlete.run();
    }
    assert.equal( 100, athlete.distanceCovered );
    assert.equal( 0, athlete.hydration );
    athlete.run();
    assert.equal( 100, athlete.distanceCovered );
    assert.equal( 0, athlete.hydration );
  })

  // 5. Athlete should be able to increase hydration by drinking from water bottle
  it( "check rehydration", function() {
    bottle = new WaterBottle();
    bottle.fill();

    for (var c = 0; c < 10; c++) {
      athlete.run();
    }
    assert.equal( 100, athlete.distanceCovered );
    assert.equal( 0, athlete.hydration );
    assert.equal( 100, bottle.volume );

    for (var c = 0; c < 10; c++) {
      athlete.drink(bottle);
    }
    assert.equal( 100, athlete.hydration );
    assert.equal( 0, bottle.volume );

    athlete.drink(bottle);
    assert.equal( 100, athlete.hydration );
    assert.equal( 0, bottle.volume );
  })

})