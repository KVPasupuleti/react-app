import { observable, action } from "mobx";

class Cell {

    id
    isHidden
    constructor(cellObject) {
        this.id = cellObject.id
        this.isHidden = cellObject.isHidden
    }

    onClick() {
        this.isClicked = !this.isClicked
    }
}

export default Cell