//Test API
describe('Test API and Process JSON Test Suite', function () {

    it('Submit a Request and process JSON Response', function () {
        var body = {
            "name":"Test Automation with Cypress",
            "isbn":"abcd1234",
            "aisle":"567890A",
            "author":"John Snow"
        };
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',body).then(
            (response) => {
                expect(response.body).to.have.property('Msg');
                expect(response.status).to.be.equal(200);
                expect(response.body.ID).to.be.equal(body.isbn + body.aisle);
            }
        );

    })
})