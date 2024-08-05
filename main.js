//Assignment1: creating an Array of books in a library
//creating empty array of library and the books objects
const library = [];
let book1 = {title: "The Great Gatsby", author: "F.Scott Fitzgerald", year:1925, available: true};
let book2 = {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: true};
let book3 = {title: "1984", author: "George Orwell", year: 1949, available: false};
let book4 = {title: "Pride and Prejudice", author: "Jane Austen", year: 1813, available: true}
//add the books objects to the library array
library.push(book1, book2, book3, book4);
//console.log(library);
//updating the "1984" book available to true
const newlibrary= library.map( lib => {
    if (lib.title === "1984") {
      return { ...lib, available: "true" };
    } else {
      return lib;
    }
   });
//console.log(newlibrary); 
//remove "pride and prejudice" from the library
const updatedlibrary = newlibrary.splice(3,1);
//console.log(newlibrary);
//console.log(updatedlibrary);
//Check if the book "The Great Gatsby" is in the array. First extract the book titles from the objects
const titles = newlibrary.map(book => book.title);
const isinlibrary = titles.includes("The Great Gatsby");
//console.log(isinlibrary);
//changing the available status of the first book to false.
const rembooks = newlibrary.map( lib => {
    if (lib.title === "The Great Gatsby") {
      return { ...lib, available: "false" };
    } else {
      return lib;
    }
   });
//console.log(rembooks);
//removing the first book from the array
rembooks.shift();
//console.log(rembooks);
//adding a new book to the array
rembooks.unshift({title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, available: true})
//console.log(rembooks);
//extracting the titles of the books
const booktitles = library.map(book => book.title).join(', ');
//console.log(booktitles);
//extracting the last two books in teh array and assigning it to a new array called newarrival
const newarrival = rembooks.slice(-2);
console.log(newarrival);