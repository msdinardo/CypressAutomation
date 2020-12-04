//Test Suite
describe('Control Automation Test Suite', function()
{
    //Interact with checkboxes
    it('Test Mouse Over',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('.mouse-hover-content').invoke('show');
        cy.get('[href="#top"]').click();
        cy.url().should('include','#top');
    })

        //Interact with checkboxes
        it('Test Mouse Over 2',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice')
            cy.get('[href="#top"]').click({force:true});
            cy.url().should('include','#top');
        })
})