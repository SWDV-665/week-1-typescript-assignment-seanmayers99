// create a class
class Grocery {
    // properties declared with data type
    name: string;
    quantity: number;
    price: number;

    // constructor portion
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// list of grocery items created here
// keyword selected to initialize objects
let list_of_items = [
    new Grocery("milk", 3, 12),
    new Grocery("bread", 6, 27),
    new Grocery("egg", 11, 38)
]

// access the html element with id app
const ele = document.getElementById("app");

// <p> element created for each item in the grocery list and
// appendded to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});