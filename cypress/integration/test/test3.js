//Test Suite
describe('Control Automation Test Suite', function()
{

        //Interact with checkboxes
        it('Test Checkboxes',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    
            //Check all the checkboxes 
            //and validate is checked
            //and validate that eh value is correct
            cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
            cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2');
            cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3');
    
            //Uncheck all the checkboxes
            //Validate that are unchecked
            cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
            cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
            cy.get('#checkBoxOption3').uncheck().should('not.be.checked');
    
            //Check just the checkbox with the desired values
            cy.get('input[type="checkbox"]').check(['option2','option3']);
        })
    
        //Validate Shopping Cart Items
        it('Test Static Dropdown List',function(){
            //cy.visit('https://rahulshettyacademy.com/AutomationPractice')
            //cy.get('#dropdown-class-example').click();
            cy.get('#dropdown-class-example').select('option2');
            cy.get('#dropdown-class-example').should('have.value','option2');
        })
    
        //Validate Shopping Cart Items
        it('Test Dynamic Dropdown List',function(){
            //cy.visit('https://rahulshettyacademy.com/AutomationPractice')
            cy.get('#autocomplete').type('Ita');
            cy.get('.ui-menu-item .ui-menu-item-wrapper').each(($el,index,$list) => {
                if($el.text() == 'Italy')
                {
                    $el.click();
                }
            }
            )
            cy.get('#autocomplete').should('have.value','Italy');
        })
    
        it('Test Visible/Invisible',function(){
            //cy.visit('https://rahulshettyacademy.com/AutomationPractice')
            cy.get('#displayed-text').should('be.visible');
            cy.get('#hide-textbox').click();
            cy.get('#displayed-text').should('not.be.visible');
            cy.get('#show-textbox').click();
            cy.get('#displayed-text').should('be.visible');
            cy.get('#hide-textbox').click();
            cy.get('#displayed-text').should('not.be.visible');
        })
    
        it('Javascript Alert',function(){
           cy.get('#alertbtn').click();
           cy.on('window:alert',(str) => {
               //Mocha code
                expect(str).to.equal("Hello , share this practice page and share your knowledge")
           })
        })
    
        it('Javascript Confirm',function(){
            cy.get('#confirmbtn').click();
            cy.on('window:confirm', (str) => {
                //Mocha code
                expect(str).to.equal("Hello , Are you sure you want to confirm?")
            })
        })
    
        it('Test of child tab',function(){
            cy.get('#opentab').invoke('removeAttr','target');
            cy.get('#opentab').click({timeout:10000});
            cy.url().should('eq','https://www.rahulshettyacademy.com/#/index');
            //cy.wait(10000);
            cy.go('back');
            cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/');
        })


})

