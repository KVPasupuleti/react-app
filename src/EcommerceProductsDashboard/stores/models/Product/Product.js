class Product {
    productId
    availableSizes
    currencyFormat
    currencyId
    description
    installmentsCount
    isFreeShipping
    price
    printStyle
    title
    imageURL

    constructor(productObject) {
        this.productId = Math.random()
        this.availableSizes = productObject.availableSizes
        this.currencyFormat = productObject.currencyFormat
        this.currencyId = productObject.currencyId
        this.description = productObject.description
        this.installmentsCount = productObject.installments
        this.isFreeShipping = productObject.isFreeShipping
        this.price = productObject.price
        this.printStyle = productObject.style
        this.title = productObject.title
        this.imageURL = productObject.image
    }
}

export default Product