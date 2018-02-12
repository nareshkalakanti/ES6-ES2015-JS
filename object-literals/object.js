//1.create object literal and assign a variable 
//2. Add a  property name and value names
//3. USe a for-in loop to print the object to console

let book = { 
	title: "Harry Potter and Sorcers stone",
	author: "J.K . rowling",
	publish_year:1997
};

for(book_property in book) {
	//console.log(book_property);
	//to access values of the properties use bracket syntax
	//console.log(book[book_property]);
	//use string cancatinate to display prop name and value
	console.log(book_property+ " :" + book[book_property]);
}

