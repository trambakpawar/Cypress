const recruitpage = "#menu_recruitment_viewRecruitmentModule > b"
const candidatepage = "#menu_recruitment_viewCandidates"
const jobtitle = "#candidateSearch_jobTitle"
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
const deletebutton1 = "#btnDelete"
const listecheckbox1 = "#ohrmList_chkSelectAll"
const confirmdelete1 = "#dialogDeleteBtn"

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

export class recruit {
    recruitmentpage() {
        cy.get(recruitpage).click({ force: true })
    }

    candidatepage() {
        cy.get(candidatepage).click({ force: true })
    }

    search() {
        cy.get(jobtitle).select("Account Assistant")
        cy.get(candidatename).type("Matilda Fleenor")
        cy.get(searchbutton).click()

    }

    addbutton() {
        cy.get(addbutton).click()
    }


    addcandidate() {
        cy.get(candidatefirstname).type("Trambak")
        cy.get(candidatemiddlenanme).type("Ramesh")
        cy.get(candidatelastname).type("pawar")
        cy.get(candidateemail).type("trambak.1912@gmail.com")
        cy.get(candidatecontact).type("9404504578")
        cy.get(candidatevacancy).select("Software Engineer")

        const filename = "1.pdf"
        cy.get(candidateresume).attachFile(filename)
        cy.get(candidatekeywords).type("software,IOT")
        cy.get(candidatecomment).type("hahahahaha")

        cy.get(consentcheckbox).check()
        cy.get(savebutton2).click()

    }
    deletecandidate() {
        cy.get(deletebutton1).click()
    }

    selectcandidate() {
        cy.get(listecheckbox1).check()
    }

    confirmdelete() {
        cy.get(confirmdelete1).click()
    }

    deletesearch() {
        cy.get(jobtitle).select("Software Engineer")
        cy.get(candidatename).type("Trambak Ramesh Pawar")
        cy.get(searchbutton).click()
    }

    search2() {
        cy.get(candidatename).type("Trambak Ramesh Pawar")
        cy.get(searchbutton).click()
    }

    download() {
        cy.get('.odd > :nth-child(7)').click()
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

    addbutton2() {
        cy.get(addbutton3).click()
    }

    addvacancy() {
        cy.get(vacanciestitle).select("Software Engineer")
        cy.get(vacanciesname).type("Software Tester")
        cy.get(vacanciesmanager).type("Orange Test")
        cy.get(vacanciespositions).type("100")
        cy.get(vacanciesdescriptions).type("bla bla bla")
        cy.get(vacanciesstatus).check()
        cy.get(vacanciespublished).check()
        cy.wait(1000)
        cy.get(savebutton3).click()
    }
}


