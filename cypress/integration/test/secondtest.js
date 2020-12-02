//Test Suite
describe('Shopping Cart Test Suite', function()
{
    //Validate Shopping Cart Items
    it('Validate thhe shopping cart quantity',function(){
        //Navigate to the page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //Search all the items with 'ca'
        cy.get('.search-keyword').type('ca');

        //Get product entries inside products, validate that there are only 4 items
        cy.get('.products').find('.product').should('have.length',4);

        //Find the second product and click on the ADD TO CART button
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        //Valida which of the retrieved products is called 'Cashews' and the click 'ADD TO CART'
        cy.get('.products').find('.product').each(($el,index,$list) => {
            var productName = $el.find('.product-name').text();
            if(productName.includes('Cashews'))
            {
                if($el.find('button').text() == "ADD TO CART")
                {
                    $el.find('button').click();
                }
            }
        })

        //Click the checkout button
        cy.get('.cart-icon').click();

        //Validate that there are two items in the shopping cart
        cy.get('ul.cart-items').find('li.cart-item:visible').should('have.length','2');

        //Click checkout
        cy.get('button').contains('PROCEED TO CHECKOUT').click();

        //Validate that the final review still have two items
        //cy.get('cartTable').find('tr td img.product-image').should('have.length','2');
    })
})