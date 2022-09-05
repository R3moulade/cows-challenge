import Cow from "../utils/cowClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const rnSearchForm = document.getElementById("rnSearchForm");
        const rnField = document.getElementById("rnField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const stall = document.getElementById("stall");
        const breed = document.getElementById("breed");
        const birthday = document.getElementById("birthday");
        const milk = document.getElementById("milk");
        // const topwood = document.getElementById("topwood");
        // const price = document.getElementById("price");
        const showAllCowsButton = document.getElementById("showAllCowsButton");
        const cowDialogForm = document.getElementById("cowDialogForm");
        const addCowButton = document.getElementById("addCowButton");
        const cowDialog = document.getElementById("cowDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenRnField = document.getElementById("hiddenRnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllCowsButton.onclick = function() {
            self.controller.showAllCows();
        }

        rnSearchForm.onsubmit = function (e) {
            e.preventDefault(); // stop reloading
            self.controller.rnSearch(rnField.value);
        }
        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalCow = new Cow ("", stall.value, breed.value, birthday.value, milk.value);
            self.controller.search(optimalCow);
            searchPanel.classList.remove("searchPanelAnim");
        }
        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }
        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }

        // Dialog eventhandler
        addCowButton.onclick = function () {
            cowDialogForm.reset();
            cowDialog.showModal();
        }

        cancelButton.onclick = function () {
            cowDialog.close();
        }
        cowDialogForm.onsubmit = function () {
            self.controller.newCow({
                registrationNumber: document.getElementById("rnfield").value,
                stall: document.getElementById("stallfield").value,
                breed: document.getElementById("breedfield").value,
                birthday: document.getElementById("birthdayfield").value,
                milk: parseFloat(document.getElementById("milkfield").value)
                // topwood: document.getElementById("topwoodfield").value,
                // price: parseFloat(document.getElementById("pricefield").value)
            })
        }
        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenRnField.value = e.target.id;
                confirmDialog.showModal();
            }
        }
        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }
        confirmDialogForm.onsubmit = function () {
            self.controller.deleteCow(hiddenRnField.value);
            self.controller.showAllCows();
        }
    }
    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; // resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className=snackbar.className.replace("show", "");
        }, 3000);
    }
}