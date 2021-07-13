const apidata = require("../../fixtures/UserData/APITest.json")

export class apidemo {
    visit() {
        cy.request(apidata.method, apidata.url, apidata.key)
    }

    status() {
        cy.request(apidata.method, apidata.url, apidata.key).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)

        })
    }

    getdata() {
        cy.request(apidata.method, apidata.url1, apidata.key).then((res) => {
            expect(res.body.data.id).to.eq(15)
            expect(res.body.data.name).to.eq("Chitraksh Gandhi")
            expect(res.body.data.gender).to.eq("female")
            expect(res.body.data.status).to.eq("inactive")

        })
    }

    postdata() {
        cy.request({
            method: apidata.methode,
            url: apidata.url,
            headers: {
                'Authorization': apidata.key
            },
            body: {
                "name": "Trambak Pawar",
                "gender": "male",
                "email": "trambak.1911@gmail.com",
                "status": "inactive"
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", "Trambak Pawar")
            expect(res.body.data).has.property("gender", "male")
            expect(res.body.data).has.property("email", "trambak.1911@gmail.com")
            expect(res.body.data).has.property("status", "inactive")
        })

    }
}