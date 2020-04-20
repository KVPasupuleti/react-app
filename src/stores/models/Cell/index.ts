type cellObjectProps = {
    id: number
    isHidden:boolean
}

class CellModel {
    id:number
    isHidden:boolean
    constructor(cellObject:cellObjectProps) {
        this.id = cellObject.id
        this.isHidden = cellObject.isHidden
    }
}

export default CellModel