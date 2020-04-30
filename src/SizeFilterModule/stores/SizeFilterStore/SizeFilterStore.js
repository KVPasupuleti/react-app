import { action } from "mobx"
import { SizeButton } from "../models/SizeButton"

class SizeFilterStore {
    buttonNames 
    sizeButtons 

    constructor() {
        this.buttonNames = ["XS", "S", "M", "L", "XL", "XXL"]
    }

    @action.bound
    getSizeButtons() {
        return this.sizeButtons = this.buttonNames.map(eachButtonName => new SizeButton(eachButtonName))
    }
}

const sizeFilterStore = new SizeFilterStore()

export default sizeFilterStore