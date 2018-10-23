"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
const MenuPage_1 = require("../OwnersPage/MenuPage");
const protractor_1 = require("protractor");
const OwnersPage_1 = require("../OwnersPage/OwnersPage");
const OwnersData_1 = require("../TestData/OwnersData");
const CheckOwners_1 = require("../OwnersPage/CheckOwners");
const NewVetPage_1 = require("../OwnersPage/NewVetPage");
const VeterinariansData_1 = require("../TestData/VeterinariansData");
const CheckVeterinarian_1 = require("../OwnersPage/CheckVeterinarian");
let menuPage = new MenuPage_1.MenuPage();
let ownersPage = new OwnersPage_1.OwnersPage();
let checkOwnersPresent = new CheckOwners_1.CheckOwners();
let newVetPage = new NewVetPage_1.NewVetPage();
let checkVeterinarian = new CheckVeterinarian_1.CheckVeterinarians();
describe("first describe", () => {
    beforeEach(() => {
        utils_1.Utils.goToHomePage();
    });
    it("Add a new Owner", () => {
        menuPage.clickOwnersButton();
        protractor_1.browser.sleep(1000);
        menuPage.clickAddNewOwnerButton();
        protractor_1.browser.sleep(2000);
        ownersPage.addInformation(OwnersData_1.OwnersData.GigelHappyPath.firstName, OwnersData_1.OwnersData.GigelHappyPath.lastName, OwnersData_1.OwnersData.GigelHappyPath.address, OwnersData_1.OwnersData.GigelHappyPath.city, OwnersData_1.OwnersData.GigelHappyPath.telephone);
        ownersPage.clickOnAddOwnerButton();
        protractor_1.browser.sleep(1000);
    });
});
it("Add a new owner and check phone validation", () => {
    //Utils.goToHome();
    menuPage.clickOwnersButton();
    protractor_1.browser.sleep(1000);
    menuPage.clickAddNewOwnerButton();
    protractor_1.browser.sleep(1000);
    //ownersPage.addInformation
    ownersPage.addInformation("Gigel", "Ionut", "Bucuresti", "Bucresti", "161631513");
    ownersPage.addTelephone("fvsrss");
    protractor_1.browser.sleep(1000);
    expect(ownersPage.isErrorDisplayed()).toBeTruthy();
    protractor_1.browser.sleep(1000);
    expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
    protractor_1.browser.sleep(1000);
});
// it("Add a new owner - happy path", ()=>{
//     menuPage.clickOwnersButton();
//     browser.sleep(1000);
//     menuPage.clickAddNewOwnerButton();
//     browser.sleep(1000);
//     ownersPage.addInformationForOwnerModel(OwnersData.GigelHappyPath);
//     browser.sleep(1000);
//     ownersPage.clickOnAddOwnerButton();
//     browser.sleep(1000);
// });
it("Check that new owner was created", () => {
    menuPage.clickOwnersButton();
    protractor_1.browser.sleep(1000);
    menuPage.clickAllOwnersButton();
    protractor_1.browser.sleep(1000);
    expect(checkOwnersPresent.checkOwnerPresent(OwnersData_1.OwnersData.GigelHappyPath.firstName + " " + OwnersData_1.OwnersData.GigelHappyPath.lastName)).toBeTruthy();
});
it("Create new veterinarian", () => {
    menuPage.clickVetsButton();
    protractor_1.browser.sleep(1000);
    menuPage.clickAddNewVetButton();
    newVetPage.addVetInfo(VeterinariansData_1.VeterinariansData.VeterinarNou.firstName, VeterinariansData_1.VeterinariansData.VeterinarNou.lastName);
    protractor_1.browser.sleep(1000);
    newVetPage.clickSaveButton();
    protractor_1.browser.sleep(1000);
});
it("Check new veterinarian was created", () => {
    menuPage.clickVetsButton();
    protractor_1.browser.sleep(1000);
    menuPage.clickAllVetButton();
    protractor_1.browser.sleep(1000);
    expect(checkVeterinarian.checkVetPresent(VeterinariansData_1.VeterinariansData.VeterinarNou.firstName + " " + VeterinariansData_1.VeterinariansData.VeterinarNou.lastName)).toBeTruthy();
});
