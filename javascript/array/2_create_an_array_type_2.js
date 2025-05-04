const books = new Array(["System Design", "Clean Architecture"]);
books.forEach(book => console.log(book));

books.forEach(b => {
    b.forEach(book => console.log(book));
});