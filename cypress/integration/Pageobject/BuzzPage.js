/// <reference types="Cypress" />

// upload page
const buzzpage = "#menu_buzz_viewBuzz"
const updatestatus = "#createPost_content"
const postbutton = "#postSubmitBtn"
const uploadimage = "#tabLink2"
const uploadbutton = '#image-upload-button'
const imageupload = "#imageUploadBtn"
const deleteconfirm = "#delete_confirm"

const buzzdata = require("../../fixtures/UserData/BuzzPage.json")
export class post {

    buzzapge() {
        cy.get(buzzpage).click({ force: true })
    }

    updatestatus() {
        cy.get(updatestatus).type(buzzdata.comment)
    }

    post() {
        cy.get(postbutton).click()

    }

    uploadimage() {

        cy.get(uploadimage).click()

        const file = "1.jpg"
        cy.get(uploadbutton).attachFile(file)

    }

    imagebutton() {
        cy.get(imageupload).click()
    }

    deletepost() {

        cy.get('.dropdown').children().first().click().then(() => {
            cy.get("li").contains("Delete").click({ force: true })
        })
        cy.get(deleteconfirm).click()
    }

    editpost() {
        cy.get('.dropdown').children().first().click().then(() => {
            cy.get("li").contains("Edit").click({ force: true })
        })
        cy.get(".shareBox popupEdit shareEditText").clear()
        cy.get(".in > .modal-body > .popUpContainer").type(buzzdata.message)
        cy.get('.btnEditShare').focused().click({ force: true })
    }
}