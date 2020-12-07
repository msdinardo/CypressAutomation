//Test Suite
describe('My First Test Suite But with Fixtures', function()
{
    before(function() {
        cy.fixture('test7fixtures.json').then(function(data) {
            this.articles = data;
        })
    })

    //First Test Case
    it('My First Test Case',function(){
        //Navigate to the page
        cy.visit(this.articles.url);

        //Search all the items with 'ca'
        cy.get('.search-keyword').type(this.articles.search);
        
        //Get only visible entries, validate that there are only 4 items
        cy.get('.product:visible').should('have.length',4);

        //Get product entries inside products, validate that there are only 4 items
        cy.get('.products').find('.product').should('have.length',4);

        //Click the Second product
        //Find the third product and click on the ADD TO CART button
        cy.get('.products').find('.product').eq(2).contains(this.articles.addToCart).click();

        //Valida which of the retrieved products is called 'Cashews' and the click 'ADD TO CART'
        cy.get('.products').find('.product').each(($el,index,$list) => {
            var productName = $el.find('.product-name').text();
            if(productName.includes(this.articles.searchSpecific))
            {
                if($el.find('button').text() == this.articles.addToCart)
                {
                    $el.find('button').click();
                }
            }
        })
    })

    
    //Second Test Case
    it('Validate Logo',function(){
        //Validate that the logo has the text 'GREENKART'
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.brand').should('have.text','GREENKART')
    })
})