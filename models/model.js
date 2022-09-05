import Inventory from "../utils/inventoryClass.js";
export default class Model {
    constructor() {
        this.cowList = new Inventory;
        this.cowList.addCow("34-343", "1", "Holstein", '2012', 2957);
        this.cowList.addCow('74-323', '1', 'Holstein', '2013', 4683);
        this.cowList.addCow('11-421', '2', 'Jersey', '2016', 3759);
        this.cowList.addCow('67-965', '2', 'Jersey', '2017', 8375);
        this.cowList.addCow('74-343', '3', 'Normande', '2019', 5253);
        this.cowList.addCow('17-421', '3', 'Normande', '2021', 0);
    }
    
}
//registration number, stall number, breed, birthday, milk