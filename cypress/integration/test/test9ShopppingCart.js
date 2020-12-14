//Import the pageObject class
import homePage from '../../support/pageObject/homePage';
import shoppingPage from '../../support/pageObject/shoppingPage';
import checkoutPage from '../../support/pageObject/checkoutPage';

//Test Suite
describe('Shopping Cart Test Suite', function () {
    //Loading Data
    beforeEach(function () {
        cy.fixture('checkout.json').then(function (data) {
            this.checkoutData = data;
        })

        cy.fixture('shoppingCart.json').then(function (data) {
            this.shoppingCartData = data;
        })
    })

    it('Submit Form Test Case', function () {
        var hPage = new homePage();
        var sPage = new shoppingPage()

        cy.visit(Cypress.env('URL-Testing'));

        hPage.getShopTab().click();

        this.shoppingCartData.itemsToAdd.forEach(itemName => {
            cy.addToCart(itemName);
        });

        sPage.getCheckout().click();
    })

    it('Validate Sum Prices', function() {
        var sPage = new shoppingPage();
        var total = 0;
        var totalPrice = 0

        sPage.getTotalPrice().then(function(element){
            totalPrice = parseInt(element.text().split(' ')[1].trim());
        });

        sPage.getPrices().each((el,index,list) => {
            var localPrice = el.text().split(' ')[1].trim();
            total = total + parseInt(localPrice);
        }).then(function () {
            //sPage.getTotalPrice().contains(total);
            
            expect(totalPrice).to.be.equal(total);
        }
        );
    })

    it('Validate Final Checkout Test Case', function () {
        var checkPage = new checkoutPage();

        checkPage.getCheckoutBtn().click();
    })

    it('Validate Delivery Address Test Case', function () {
        var checkPage = new checkoutPage();

        checkPage.getDeliveryLocation().type(this.checkoutData.deliveryShort);
        //checkPage.getFirstEntry().click();
        checkPage.getEntry(this.checkoutData.delivery).click();
        checkPage.getAgreeTerms().click({ force: true });
        checkPage.getPurchaseBtn().click();
    })
})