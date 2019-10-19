class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        const item = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        this.items.push(item)
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.map(items => items.quantity * items.pricePerUnit).reduce(((a,b) => a + b),0)
    }
}

module.exports = ShoppingCart