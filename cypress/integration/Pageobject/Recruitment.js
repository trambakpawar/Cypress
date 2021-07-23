const recruitpage = "#menu_recruitment_viewRecruitmentModule > b"
const candidatepage = "#menu_recruitment_viewCandidates"
const candidatename = "#candidateSearch_candidateName"
const searchbutton = "#btnSrch"
const addbutton = "#btnAdd"
const candidatefirstname = "#addCandidate_firstName"
const candidatemiddlenanme = "#addCandidate_middleName"
const candidatelastname = "#addCandidate_lastName"
const candidateemail = "#addCandidate_email"
const candidatecontact = "#addCandidate_contactNo"
const candidatevacancy = "#addCandidate_vacancy"
const candidateresume = "#addCandidate_resume"
const candidatekeywords = "#addCandidate_keyWords"
const candidatecomment = "#addCandidate_comment"
const consentcheckbox = "#addCandidate_consentToKeepData"
const savebutton2 = "#btnSave"
const deletebutton = "#btnDelete"
const confirmdelete = "#dialogDeleteBtn"

// vacancies page
const vacanciespage = "#menu_recruitment_viewJobVacancy"
const searchtitle = "#vacancySearch_jobTitle"
const searchbutton2 = "#btnSrch"
const addbutton3 = "#btnAdd"
const vacanciestitle = "#addJobVacancy_jobTitle"
const vacanciesname = "#addJobVacancy_name"
const vacanciesmanager = "#addJobVacancy_hiringManager"
const vacanciespositions = "#addJobVacancy_noOfPositions"
const vacanciesdescriptions = "#addJobVacancy_description"
const vacanciesstatus = "#addJobVacancy_status"
const vacanciespublished = "#addJobVacancy_publishedInFeed"
const savebutton3 = "#btnSave"

const rcdata = require("../../fixtures/UserData/Recruitment.json")

export class recruit {
    recruitmentpage() {
        cy.get(recruitpage).click({ force: true })
    }

    candidatepage() {
        cy.get(candidatepage).click({ force: true })
    }

    search() {

        cy.get(candidatename).type(rcdata.fullname)
        cy.get(searchbutton).click()

    }

    addcandidate() {
        cy.get(addbutton).click()
        cy.get(candidatefirstname).type(rcdata.firstname)
        cy.get(candidatemiddlenanme).type(rcdata.middlename)
        cy.get(candidatelastname).type(rcdata.lastname)
        cy.get(candidateemail).type(rcdata.email)
        cy.get(candidatecontact).type(rcdata.contactno)
        cy.get(candidatevacancy).select(rcdata.vacancy)

        const filename = "1.pdf"
        cy.get(candidateresume).attachFile(filename)
        cy.get(candidatekeywords).type(rcdata.keywords)
        cy.get(candidatecomment).type(rcdata.comment)

        cy.get(consentcheckbox).check()
        cy.get(savebutton2).click()

    }
    deletecandidate() {
        cy.get(deletebutton).click()
        cy.get(confirmdelete1).click()
    }

    selectcandidate() {
        cy.contains('tr', rcdata.fullname).find('input').check()
    }


    search2() {
        cy.get(candidatename).type(rcdata.fullname)
        cy.get(searchbutton).click()
    }



    vacanciespage() {
        cy.get(vacanciespage).click({ force: true })
    }

    searchtitle(job) {
        cy.get(searchtitle).select(job)
    }

    searchbutton() {
        cy.get(searchbutton2).click()
    }



    addvacancy() {
        cy.get(addbutton3).click()
        cy.get(vacanciestitle).select(rcdata.vacancy)
        cy.get(vacanciesname).type(rcdata.vacancyname)
        cy.get(vacanciesmanager).type(rcdata.manager)
        cy.get(vacanciespositions).type(rcdata.position)
        cy.get(vacanciesdescriptions).type(rcdata.comment)
        cy.get(vacanciesstatus).check()
        cy.get(vacanciespublished).check()
        cy.get(savebutton3).click()
        this.recruitmentpage()
        this.vacanciespage()
    }

    deletevacancy() {
        cy.contains('tr', rcdata.vacancyname).find('input').check()
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click()
    }
}


