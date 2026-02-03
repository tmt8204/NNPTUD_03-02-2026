let Product = function(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
};

let category = function(id, name) {
    this.id = id;
    this.name = name;
};

let categogy = [new category(1, "Electronics"), 
                new category(2, "Clothing"),
                new category(3, "Accessories")];
let product = [new Product(1, "Laptop", 1000, 5, categogy[0], true),
               new Product(2, "T-Shirt", 20, 0, categogy[1], true),
               new Product(3, "Smartphone", 700, 10, categogy[0], false),
               new Product(4, "Jeans", 40, 0, categogy[1], true),
               new Product(5, "Headphones", 150, 15, categogy[0], true),
               new Product(6, "Jacket", 80, 20, categogy[1], false),
               new Product(7, "Watch", 200, 25, categogy[2], true),
               new Product(8, "Tablet", 30000001, 1, categogy[0], true)];


let result3 = product.map(function (params) {
    return {name: params.name, price: params.price};
});
console.log("Cau 3");
console.log(result3);



let result4 = product.filter(function (params) {
    return params.quantity > 0;
});
console.log("Cau 4");
console.log(result4);



let result5 = product.some(function (params) {
    return params.price > 30000000;
});
console.log("Cau 5", result5);



let result6 = product.every(function (params) {
    return params.isAvailable === true && params.category.name === "Accessories";
});
console.log("Cau 6", result6);



let result7 = product.map(function (params) {
    return params.price * params.quantity;
});
let totalInventoryValue = result7.reduce(function (sum, value) {
    return sum + value;
}, 0);
console.log("Cau 7 ", totalInventoryValue);




let result8 = function(){
    for (let prod of product) {
        console.log(`Product Name: ${prod.name}, Category: ${prod.category.name}, Available: ${prod.isAvailable}`);
    }
}
console.log("Cau 8");
result8();




let result9 = function(){
    for (let index in product[0]) {
        if (index === "category") {
            console.log(`${index}: ${product[0][index].name}`);
        } else {
            console.log(`${index}: ${product[0][index]}`);
        }
    } 
}
console.log("Cau 9");
result9();



let result10 = product.filter(function (params) {
    return params.quantity > 0 && params.isAvailable === true;
});
console.log("Cau 10");
console.log(result10);