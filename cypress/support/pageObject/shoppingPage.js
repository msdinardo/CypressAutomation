class shoppingPage
{
    getCheckout()
    {
            return cy.get('a.nav-link.btn.btn-primary').contains("Checkout");
    }

    getPrices()
    {
        return cy.get('table.table.table-hover tr td:nth-child(4) strong')
    }

    getTotalPrice()
    {
        return cy.get('td.text-right h3 strong');
    }
}

export  default shoppingPage