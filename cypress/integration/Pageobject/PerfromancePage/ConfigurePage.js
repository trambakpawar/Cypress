

//config page elements 
const performance = "#menu__Performance > b"
const configure = "#menu_performance_Configure"
const kpi = "#menu_performance_searchKpi"
const job = "#kpi360SearchForm_jobTitleCode"
const tracker = "#menu_performance_addPerformanceTracker"
const search = "#searchBtn"
const deletebutton = "#btnDelete"
const addbutton = "#btnAdd"
const checkbox = "#ohrmList_chkSelectAll"
const confirmdelete = '#dialogDeleteBtn'
// add page elements
const jobtitle = "#defineKpi360_jobTitleCode"
const indicator = "#defineKpi360_keyPerformanceIndicators"
const minrating = "#defineKpi360_minRating"
const maxrating = "#defineKpi360_maxRating"
const scale = "#defineKpi360_makeDefault"
const savebutton = "#saveBtn"

// tracker page
const addbutton1 = "#btnAdd"
const delete1 = "#btnDelete"
const check1 = 'input[type="checkbox"]'
const trackername = "#addPerformanceTracker_tracker_name"
const empname = "#addPerformanceTracker_employeeName_empName"
const addbutton2 = "#btnAssignEmployee"
const review = "#addPerformanceTracker_availableEmp"
const savebutton1 = "#btnSave"
const confirmdelete1 = "#dialogDeleteBtn"

export class perform {
    performancepage() {
        cy.get(performance).click({ force: true })
    }

    configuretab() {
        cy.get(configure).click({ force: true })
    }
    kpi() {
        cy.get(kpi).click({ force: true })
    }

    trackerpage() {
        cy.get(tracker).click({ force: true })
    }
    searchjob() {
        cy.get(job).select("QA Engineer")
        cy.get(search).click()
        cy.wait(1000)
        cy.get(checkbox).check()
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click()
    }

    addjob() {
        cy.get(addbutton).click()
        cy.get(jobtitle).select("QA Engineer")
        cy.get(indicator).type("High")
        cy.get(minrating).type("00")
        cy.get(maxrating).clear().type("100")
        cy.get(scale).check()
        cy.get(savebutton).click()

    }

    addtracker() {
        cy.get(addbutton1).click()
        cy.get(trackername).type("Trambak")
        cy.get(empname).type("Ananya Dash")
        cy.get(review).select("Orange Test", "John Smith", "Fiona Grace")
        cy.get(addbutton2).click()
        cy.get(savebutton1).click()
    }

    deletetracker() {
        cy.get(check1).each(($ele, index) => {
            if (index <= 2) {
                cy.wrap($ele).click()
            }
        })
        cy.get(deletebutton).click()
        cy.get(confirmdelete1).click()
    }
}