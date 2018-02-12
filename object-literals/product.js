//create an object literal [properties & values] 
//function to  manipulate values in object 

let product = {
	name: "Chair",
	inventory:20,
	unit_price:45.99
};
//create a function addInventory it accepts two arguments object itself and no of items to add to inventory
// . syntax to access property on a object 
function addInventory(prod, quantity){
	prod.inventory += quantity;
	console.log(quantity+ " " + prod.name + "s added to the inventory.");
}

// call the addInventory() functin
addInventory(product,3);


function processSale(prod, quantity) {
  prod.inventory -= quantity;
  console.log(quantity + " " + prod.name + "s sold");
  return quantity * prod.unit_price;
}
console.log("Total sale: $" + processSale(product, 3));