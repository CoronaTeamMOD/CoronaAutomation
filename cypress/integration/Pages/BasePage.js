import BasePageSelectors from '../PagesSelectors/BasePageSelectors';

class BasePage {
    // handlers with get()
    handleOnClick = (whichPageClickSelector, clickSelector) => {
        cy.get(whichPageClickSelector[clickSelector]).click();
    }

    handleShould = (whichPageShouldSelector, shouldSelector, whatShouldHappened) => {
        cy.get(whichPageShouldSelector[shouldSelector]).should(ShouldValues[whatShouldHappened]);
    }

    handleOnClickWithShould = (whichPageClickSelector, clickSelector, whichPageShouldSelector, shouldSelector, whatShouldHappened) => {
        this.handleOnClick(whichPageClickSelector, clickSelector);
        this.handleShould(whichPageShouldSelector, shouldSelector, whatShouldHappened);
    }

    // handlers with contains()
    handleOnContainsClick = (whichPageClickSelector, clickSelector) => {
        cy.contains(whichPageClickSelector[clickSelector]).click();
    }

    handleOnContainsShould = (whichPageShouldSelector, shouldSelector, whatShouldHappened) => {
        cy.contains(whichPageShouldSelector[shouldSelector]).should(ShouldValues[whatShouldHappened]);
    }

    handleOnContainsClickWithShould = (whichPageClickSelector, clickSelector, whichPageShouldSelector, shouldSelector, whatShouldHappened) => {
        this.handleOnContainsClick(whichPageClickSelector, clickSelector);
        this.handleOnContainsShould(whichPageShouldSelector, shouldSelector, whatShouldHappened);
    }

    visit = () => {
        cy.visit(BasePageSelectors.SITE);
    }

    visitInvestigation = () => {
        cy.visit(BasePageSelectors.INVESTIGATION_SITE);
    }

    openPersonalDetailsTab = () => {
        this.handleOnClick(BasePageSelectors, "PERSONAL_INFORMATION_TAB")
    }

    openInsulationAndClinicDetailsTab = () => {
        this.handleOnClick(BasePageSelectors, "INSULATION_AND_CLINICAL_DETAILS_TAB")

    }

    openPossibleExposureTab = () => {
        this.handleOnClick(BasePageSelectors, "POSSIBLE_EXPOSURE_TAB")
    }

    openPlacesAndContactsTab = () => {
        this.handleOnClick(BasePageSelectors, "PLASCES_AND_CONTACTS")
    }
}
export default BasePage;