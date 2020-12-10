class checkoutPage
{
    getCheckoutBtn()
    {
        return cy.get('button.btn.btn-success');
    }

    getDeliveryLocation()
    {
        return cy.get('#country');
    }

    getAgreeTerms()
    {
        return cy.get('input#checkbox2[type="checkbox"]');
    }

    getFirstEntry()
    {
        return cy.get('div.suggestions ul li a',{"timeout":"10000"});
    }

    getPurchaseBtn()
    {
        return cy.get('.ng-untouched > .btn');
    }

    getEntry(delivery)
    {
        //Both methods work, the first one is more powerfull, the second one is more efficient

       /*cy.get('div.suggestions ul li a',{"timeout":"10000"}).each((el,index,list) => {
           console.log(el.text());
            if(el.text() == delivery)
            {
                cy.wrap(list[index]).click();
            }
        });*/


        return cy.get('div.suggestions ul li a',{"timeout":"10000"}).contains(delivery)
    }
}

export default checkoutPage