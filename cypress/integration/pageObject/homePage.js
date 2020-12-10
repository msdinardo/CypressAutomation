class homePage
{
    getName()
    {
        return cy.get('input[name="name"]').eq(0);
    }

    getTwoWayBinding()
    {
        return cy.get('input[name="name"]').eq(1);
    }

    getEmail()
    {
        return cy.get('input[name=email]')
    }

    getPassword()
    {
        return cy.get('#exampleInputPassword1');
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getStudent()
    {
        return cy.get('#inlineRadio1')
    }

    getShopTab()
    {
        return cy.get('a.nav-link').eq(1).contains('Shop');
    }

    getBirthDate()
    {
        return cy.get('input[name="bday"]');
    }

    getSubmit()
    {
        return cy.get('.btn');
    }

    getFeedBack()
    {
        return cy.get('.alert');
    }
}

export  default homePage