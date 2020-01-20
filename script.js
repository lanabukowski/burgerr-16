'use script';

const SIZES = {
    SIZE_SMALL : 'SIZE_SMALL',
    SIZE_LARGE : 'SIZE_LARGE'
}

const STUFFINGS = {
    STUFFING_CHEESE : 'STUFFING_CHEESE',
    STUFFING_SALAD : 'STUFFING_SALAD',
    STUFFING_POTATO : 'STUFFING_POTATO',
}

const TOPPINGS = {
    TOPPING_MAYO : 'TOPPING_MAYO',
    TOPPING_SEASONING : 'TOPPING_SEASONING',
}

const CALORIES = {
    [SIZES.SIZE_SMALL] : 20,
    [SIZES.SIZE_LARGE] : 40,
    [STUFFINGS.STUFFING_CHEESE] : 20,
    [STUFFINGS.STUFFING_SALAD] : 5,
    [STUFFINGS.STUFFING_POTATO] : 10,
    [TOPPINGS.TOPPING_MAYO] : 5,
    [TOPPINGS.TOPPING_SEASONING] : 0
}

const PRICES = {
    [SIZES.SIZE_SMALL] : 50,
    [SIZES.SIZE_LARGE] : 100,
    [STUFFINGS.STUFFING_CHEESE] : 10,
    [STUFFINGS.STUFFING_SALAD] : 20,
    [STUFFINGS.STUFFING_POTATO] : 15,
    [TOPPINGS.TOPPING_MAYO] : 20,
    [TOPPINGS.TOPPING_SEASONING] : 15
}

class Hamburger {
    static sizes = SIZES;
    static stuffings = STUFFINGS;
    static toppings = TOPPINGS;
    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    calculateCalories() {
        let cal = 0;
        cal += CALORIES[this.size] + CALORIES[this.stuffing];
        this.toppings.forEach(function(item) {
            cal += CALORIES[item];
        });
        return cal;
    }

    calculatePrice() {
        let price = 0;
        price += PRICES[this.size] + PRICES[this.stuffing];
        this.toppings.forEach(function(item) {
            price += PRICES[item];
        });
        return price;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }
}

let hamburger = new Hamburger(Hamburger.sizes.SIZE_SMALL, Hamburger.stuffings.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.toppings.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.toppings.TOPPING_SEASONING);

console.log("Price with sauce: " + hamburger.calculatePrice());