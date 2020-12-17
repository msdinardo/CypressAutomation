//Test Suite
describe('Control Automation Test Suite', function()
{
    //Interact with checkboxes
    it('Test Tables',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#product tr td:nth-child(2)').each(($el,index,$list) => {
            var course = $el.text();
            if(course.includes("Master Selenium Automation in simple Python Language"))
            {
                //Primera forma de hacerlo solo Cypress (mas complicada)
               //cy.get('#product tr td:nth-child(2)').eq(index).next().contains('24');

               //Segunda forma de hacerlo con JQuery (mas simple)
               var price = $el.next().text();
               expect(price).to.equal('25');
            }
        })
    })
})