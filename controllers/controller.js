export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }
    // tr = table row, td = table data
    buildTemplate(cow) {
        return `<tr class="customerrow">
        <td>${cow.getRegistrationNumber()}</td>
        <td>${cow.getStall()}</td>
        <td>${cow.getBreed()}</td>
        <td>${cow.getBirthday()}</td>
        <td>${cow.getMilk()}</td>
        <td><button type="button" class="button" id="${cow.getRegistrationNumber()}">Delete</button></td>
        </tr>`
    }

    rnSearch(registrationNumber) {
        const cow = this.model.cowList.getCow(registrationNumber);
        let template = "";
        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">No result found</td>
            </tr>`;
        }
        this.view.message(template);
    }
    search(searchCow) { //optimalCow
        const cow = this.model.cowList.search(searchCow);
        let template = "";
        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="6">No result found</td>
            </tr>`;
        }
        this.view.message(template);
    }
    showAllCows() {
        let template = "";
        for (const cow of this.model.cowList.allCows()) {
            template += this.buildTemplate(cow);
        }
        this.view.message(template);
    }
    newCow(cow) {
        const doesCowAlreadyExist = this.model.cowList.getCow(cow.registrationNumber);
        if (doesCowAlreadyExist === null) {
            this.model.cowList.addCow(cow.registrationNumber, cow.stall, cow.breed, cow.birthday, cow.milk);
            this.view.snackbar("The cow was saved");
        } else {
            this.view.snackbar("The cow already exists");
        }
    }
    deleteCow(rn) {
        this.model.cowList.deleteCow(rn);
        this.view.snackbar("The cow was deleted!");
    }
    
}