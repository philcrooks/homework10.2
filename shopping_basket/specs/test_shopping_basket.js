var Customer = require( '../customer' );
var LoyaltyCard = require( '../loyalty_card' );
var Product = require( '../product' );
var ProductOffer = require( '../product_offer' );
var BasketDiscount = require( '../basket_discount')
var ShoppingBasket = require( '../shopping_basket');
var assert = require( 'assert' );

describe ( 'Shopping Basket', function() {
  var customer;
  var product1;
  var product2;
  var basket;
  
  beforeEach(function() {
    // 2% discount for loyalty cards
    var card = new LoyaltyCard(1, 2.0);
    customer = new Customer(2, "Phil");
    customer.addCard(card);

    // Create a bogof offer - 50% discount when you buy two items
    var offer = new ProductOffer(3, 2, 50.0);
    product1 = new Product(4, "Product 1", 5.0);
    product1.addSpecialOffer(offer);

    product2 = new Product(5, "Product 2", 15.0);

    // 10% discount after £20 spent
    var discount = new BasketDiscount(10.0, 20.0);
    basket = new ShoppingBasket(discount);
  })

  it( "test Loyalty Card", function() {
      assert.equal( 26.46, customer.applyDiscount(27.0) );
  })

  it( "test empty shopping basket", function() {
    assert.equal( 0.0, basket.price );
  })

  it( "add one item to the shopping basket", function() {
    // A customer clicks "buy now" on an item on the website
    basket.addItem(product1);
    assert.equal( 5.0, basket.price );
  })

  it( "add two bogof items to the basket", function() {
    // A customer clicks "buy now" twice on an item that has a bogof offer
    basket.addItem(product1);
    basket.addItem(product1);
    assert.equal( 5.0, basket.price );
  })

  it( "check basket discount - no discount", function() {
    // A customer clicks "buy now" twice on two items that have no special offers
    // Note that the 10% discount does not come into effect until more than £20 is spent
    basket.addItem(product1);
    basket.addItem(product2);
    assert.equal( 20.0, basket.price );
  })

  it( "check bogof with no basket discount", function () {
    // A customer buys two of one item and one of another. A bogof offer comes into effect.
    // There is no "basket discount" because it does not come into effect until *more than* £20 is spent.
    basket.addItem(product1);
    basket.addItem(product1);
    basket.addItem(product2);
    assert.equal( 20.0, basket.price );
  })

  it( "check bogof with basket discount", function() {
    // A customer buys three of one item and one of another. A bogof offer comes into effect on one of the items.
    // There is a "basket discount" of 10% because more than £20 is spent (£25 is spent).
    basket.addItem(product1);
    basket.addItem(product1);
    basket.addItem(product1);
    basket.addItem(product2);
    assert.equal( 22.5, basket.price );
  })

  it( "check basket discount without bogof", function() {
    // There is a "basket discount" of 10% because more than £20 is spent (£30 is spent).
    // There is no bogof offer
    basket.addItem(product2);
    basket.addItem(product2);
    assert.equal( 27.0, basket.price );
  })

  it( "test basket discount and customer discount", function() {
    // There is a "basket discount" of 10% because more than £20 is spent (£30 is spent).
    // THe customer has a loyalty card so there is a further discount of 2% applied after the basket discount.
    basket.addItem(product2);
    basket.addItem(product2);
    // Adding the customer to the basket after buying the items is the equivalent of logging into the system after shopping has started.
    basket.addCustomer(customer);
    assert.equal(26.46, basket.price );
  })

  it( "test getIndex()", function() {
    // Using the index of a line item to update the basket is the equivalent of interactining with the basket itself
    // (rather than clicking on "buy now" elsewhere on the website).
    // Check that the index can be found.
    basket.addItem(product2);
    basket.addItem(product1);
    assert.equal( 0, basket.getIndex(product2) );
    assert.equal( 1, basket.getIndex(product1) );
  })

  it( "test removing an item by index", function() {
    // Test that the user can reduce the number of items he wants by one
    // Because there is only one item on the line, removing the item removes the line
    basket.addItem(product2);
    basket.addItem(product1);
    basket.removeItem(basket.getIndex(product2));
    assert.equal( 5.0, basket.price );
    assert.equal( 1, basket.size() ); // Only one line item left
  })

  it( "test adding an item by index", function() {
    // Test that the user can add one to the number of items he wants
    // (by interacting with the basket rather than clicking on "buy now")
    basket.addItem(product2);
    basket.addItem(product1);
    basket.addItemByIndex(basket.getIndex(product2));
    assert.equal(31.5, basket.price );
    assert.equal(2, basket.size() );
  })

  it( "test setNumberOfItems()", function() {
    // Test that the user can arbitrarily change the number of items he wants
    // (by interacting with the basket rather than clicking on "buy now")
    basket.addItem(product1);
    basket.setNumberOfItems(basket.getIndex(product1), 10);
    assert.equal( 22.5, basket.price );
    assert.equal( 1, basket.size() );
  })

  it( "clear the basket", function() {
    // Test that the user can empty the basket
    basket.addItem(product1);
    basket.setNumberOfItems(basket.getIndex(product1), 10);
    basket.clearBasket();
    // No line items and no price
    assert.equal( 0.0, basket.price );
    assert.equal( 0, basket.size() );
  })
})