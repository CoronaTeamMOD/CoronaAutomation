import BasePage from '../Pages/BasePage';

const BaseTest = () => {
    const basePage = new BasePage;

    describe('Base Test', () => {
        it('Open Base Page', () => {
            basePage.visit();
        });

        it('Open Investigation Page', () => {
            basePage.visitInvestigation();
        })

        it('Open Personal Details Tab', () => {
            basePage.openPersonalDetailsTab();
        });

        it('Open Insulation And Clinic Details Tab', () => {
            basePage.openInsulationAndClinicDetailsTab();
        });

        it('Open Possible Exposure Tab', () => {
            basePage.openPossibleExposureTab();
        });

        it('Open Places And Contacts Tab', () => {
            basePage.openPlacesAndContactsTab();
        });
    });

}
export default BaseTest;