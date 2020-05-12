import sizeFilterStore from './SizeFilterStore'

describe("sizeFilterStore Tests", () => {

    it("should initialise the buttons List", () => {
        expect(sizeFilterStore.buttonNames).toEqual(["XS", "S", "M", "L", "XL", "XXL"])
    })
})