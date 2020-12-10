//Import the pageObject class
import homePage from '../pageObject/homePage';
import shoppingPage from '../pageObject/shoppingPage';
import checkoutPage from '../pageObject/checkoutPage';

//Test Suite
describe('Shopping Cart Test Suite', function()
{
    //Loading Data
    beforeEach(function() {
        cy.fixture('checkout.json').then(function(data) {
            this.checkoutData = data;
        })

        cy.fixture('shoppingCart.json').then(function(data) {
            this.shoppingCartData = data;
        })
    })
    
    it('Submit Form Test Case',function(){ 
      var hPage = new homePage();
      var sPage = new shoppingPage();

      cy.visit('https://rahulshettyacademy.com/angularpractice/')

      hPage.getShopTab().click();

      this.shoppingCartData.itemsToAdd.forEach(itemName => {
        cy.addToCart(itemName);
      });

      sPage.getCheckout().click();
    })

    it('Validate Final Checkout Test Case',function(){ 
        var checkPage = new checkoutPage();
  
        checkPage.getCheckoutBtn().click();
      })
  
      it('Validate Delivery Address Test Case',function(){ 
          var checkPage = new checkoutPage();
    
          checkPage.getDeliveryLocation().type(this.checkoutData.deliveryShort);
          //checkPage.getFirstEntry().click();
          checkPage.getEntry(this.checkoutData.delivery).click();
        checkPage.getAgreeTerms().click({force: true});
          checkPage.getPurchaseBtn().click();
        })
})