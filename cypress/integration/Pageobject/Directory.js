const directorypage = "#menu_directory_viewDirectory > b"
const searchbutton = '#searchBtn'
const username = '#searchDirectory_emp_name_empName'

export class directory {

    directory() {
        cy.get(directorypage).click()
    }

    searchbutton() {
        cy.get(searchbutton).click()
    }

    search(user) {
        cy.get(username).type(user)
    }
}