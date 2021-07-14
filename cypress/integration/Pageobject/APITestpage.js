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
            expect(res.body.data.name).to.eq(apidata.name)
            expect(res.body.data.gender).to.eq(apidata.gender)
            expect(res.body.data.status).to.eq(apidata.status)

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
                "name": apidata.name,
                "gender": apidata.gender,
                "email": apidata.email,
                "status": apidata.status
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", apidata.name)
            expect(res.body.data).has.property("gender", apidata.gender)
            expect(res.body.data).has.property("email", apidata.email)
            expect(res.body.data).has.property("status", apidata.status)
        })
    }

    postget() {
        cy.request({
            method: apidata.methode,
            url: apidata.url,
            headers: {
                'Authorization': apidata.key
            },
            body: {
                "name": apidata.name,
                "gender": apidata.gender,
                "email": apidata.email,
                "status": apidata.status
            }

        }).then((res) => {
            const userid = res.body.data.id
            cy.log("User id is:-" + userid)
            cy.request({
                method: "GET",
                url: "https://gorest.co.in/public/v1/users/" + userid,
                headers: {
                    'Authorization': apidata.key
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property("name", apidata.name)
                expect(res.body.data).has.property("gender", apidata.gender)
                expect(res.body.data).has.property("email", apidata.email)
                expect(res.body.data).has.property("status", apidata.status)
            })
        })
    }
}