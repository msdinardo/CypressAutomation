import 'cypress-iframe'

//Test Suite
describe('Control Automation Test Suite', function()
{
    //Interact with frames
    it('Test On Frame Management',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        //obtenemos el ID de frame
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find('div.pricing-container').should('have.length',2);
    })
})