//Test Suite
describe('My First Test Suite', function()
{
    //First Test Case
    it('My First Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
    })

    //Second Test Case
    it('My Second Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    })
})