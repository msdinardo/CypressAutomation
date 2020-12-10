//Import the pageObject class
import homePage from '../pageObject/homePage';

//Test Suite
describe('Shopping Cart Test Suite', function()
{
    //Loading Data
    beforeEach(function() {
        cy.fixture('home.json').then(function(data) {
            this.data = data;
        })
    })

    //First Test Case
    it('Two Way Binding Test Case',function(){ 
        var hPage = new homePage();
        cy.visit(Cypress.env('URL-Testing'));
        
        //Fill Up the fields
        hPage.getName().type(this.data.name);

        hPage.getTwoWayBinding().should('have.value',this.data.name);
    })

    
    it('Submit Form Test Case',function(){ 
      var hPage = new homePage();
      cy.visit(Cypress.env('URL-Testing'));
      
      //Fill Up the fields
      hPage.getName().type(this.data.name);
      hPage.getEmail().type(this.data.email);
      hPage.getPassword().type(this.data.password);
      hPage.getGender().select(this.data.gender);
      hPage.getStudent().click();
      hPage.getBirthDate().type(this.data.birthDate);

      //Submit the Form
      hPage.getSubmit().click();

      //Validate Feedack
      hPage.getFeedBack().contains(this.data.successFeedback);
    })
})