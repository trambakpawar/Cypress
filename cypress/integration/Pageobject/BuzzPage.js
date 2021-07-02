/// <reference types="Cypress" />

// upload page 
const buzzpage = "#menu_buzz_viewBuzz"
const updatestatus = "#createPost_content"
const postbutton = "#postSubmitBtn"
const uploadimage = "#tabLink2"
const uploadbutton = '#image-upload-button'
const imageupload = "#imageUploadBtn"
const deletemenu = '#submenu12'
const deleteconfirm = "#delete_confirm"
const editmenu = '#submenu14'
const editbox = "#editshareBox_14"
const editbutton = "#btnEditShare_14"


export class post {

    buzzapge() {
        cy.get(buzzpage).click({ force: true })
    }

    updatestatus() {
        cy.get(updatestatus).type("bla bla bla")
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

        cy.get(deletemenu).contains("Delete").click({ force: true })
        cy.get(deleteconfirm).click()
    }

    editpost() {
        cy.get(editmenu).contains("Edit").click({ force: true })
        cy.get(editbox).clear()
        cy.get(editbox).type("baba black ship")
        cy.get(editbutton).click()
    }
}