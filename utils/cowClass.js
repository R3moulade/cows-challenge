export default class Cow {
    constructor(registrationNumber, stall, breed, birthday, milk) {
        this.registrationNumber = registrationNumber;
        // this.price = price;
        this.stall = stall;
        this.breed = breed;
        this.birthday = birthday;
        this.milk = milk;
        // this.topwood = topwood;
    }
    getRegistrationNumber() {
        return this.registrationNumber;
    }
    // getPrice() {
    //     return this.price;
    // }
    getStall() {
        return this.stall;
    }
    getBreed() {
        return this.breed;
    }
    getBirthday() {
        return this.birthday;
    }
    getMilk() {
        return this.milk;
    }
    // getTopwood() {
    //     return this.topwood;
    // }
}
