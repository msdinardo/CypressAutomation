class shoppingPage
{
    getCheckout()
    {
            return cy.get('a.nav-link.btn.btn-primary').contains("Checkout");
    }
}

export  default shoppingPage