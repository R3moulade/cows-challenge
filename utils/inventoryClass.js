import Cow from "./cowClass.js"
export default class Inventory {
    constructor() {
        this.cows = [];
    }
    addCow(registrationNumber, stall, breed, birthday, milk) {
        const newCow = new Cow("Registration Number: " + registrationNumber, "Stall Number: " + stall, "Breed: " + breed, "Birthday Date: " + birthday, "Milk (L): " + milk);
        this.cows.push(newCow);
    }
    getCow(registrationNumber) {
        for (const cow of this.cows) {
            if (registrationNumber === cow.registrationNumber) {
                return cow;
            }
        }
        return null;
    }
    search(idealCow) {
        const {registrationNumber, stall, breed, birthday, milk} = idealCow;
        for (const cow of this.cows) {
            if (cow.stall === stall && cow.breed === breed && cow.birthday === birthday && cow.milk === milk) {
                return cow;
            }
        }
        return null;
    }
    allCows() {
        return this.cows;
    }
    deleteCow(rn) {
        const index=this.cows.map(cow => cow.registrationNumber).indexOf(rn);
        this.cows.splice(index, 1); // Removes cow from cow object lists
    }
}