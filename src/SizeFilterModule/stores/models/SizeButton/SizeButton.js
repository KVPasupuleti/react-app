import { observable } from "mobx"

class SizeButton {
    
    buttonId
    @observable isSelected
    constructor(buttonName) {
        this.buttonId = Math.random()
        this.name = buttonName
        this.isSelected = false
    }

    onClickSizeButton = () => {
        this.isSelected = !this.isSelected
    }
}

export default SizeButton 