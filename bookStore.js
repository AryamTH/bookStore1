// Create an array to store the book information
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
  ];
  
  // Add a new book
  function addBook(bookId, bookTitle, author, price, quantity) {
    let book = [bookId, bookTitle, author, price, quantity];
    books.push(book);
    console.log("Book added successfully.");
  }
  
  // Edit book information
  function editBook(bookId, bookTitle, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books[i] = [bookId, bookTitle, author, price, quantity];
        console.log("Book information updated successfully.");
        return;
      }
    }
    console.log("Book not found.");
  }
  
  // Delete a book
  function deleteBook(bookId) {
    for (let i = 0; i < books.length; i++) {
      if (books[i][0] === bookId) {
        books.splice(i, 1);
        console.log("Book deleted successfully.");
        return;
      }
    }
    console.log("Book not found.");
  }
  
  // Display book information
  function displayBooks() {
    console.log("Book information:");
    for (let i = 0; i < books.length; i++) {
      let [bookId, bookTitle, author, price, quantity] = books[i];
      console.log(`Book ID: ${bookId}`);
      console.log(`Title: ${bookTitle}`);
      console.log(`Author: ${author}`);
      console.log(`Price: ${price}`);
      console.log(`Quantity: ${quantity}`);
      console.log("--------------------");
    }
  }
  
  // Search for a book
  function searchBook(criteria) {
    let foundBooks = [];
    for (let i = 0; i < books.length; i++) {
      let [bookId, bookTitle, author, price, quantity] = books[i];
      if (
        bookId === criteria ||
        bookTitle.toLowerCase().includes(criteria.toLowerCase()) ||
        author.toLowerCase().includes(criteria.toLowerCase())
      ) {
        foundBooks.push(books[i]);
      }
    }
    if (foundBooks.length === 0) {
      console.log("Book not found.");
    } else {
      console.log("Books found:");
      for (let i = 0; i < foundBooks.length; i++) {
        let [bookId, bookTitle, author, price, quantity] = foundBooks[i];
        console.log(`Book ID: ${bookId}`);
        console.log(`Title: ${bookTitle}`);
        console.log(`Author: ${author}`);
        console.log(`Price: ${price}`);
        console.log(`Quantity: ${quantity}`);
        console.log("--------------------");
      }
    }
  }
  
  // Sell a book and generate an invoice
  function sellBook(bookTitle, quantity, availableBalance) {
    let foundBook = null;
    for (let i = 0; i < books.length; i++) {
      if (books[i][1] === bookTitle) {
        foundBook = books[i];
        break;
      }
    }
  
    if (foundBook === null) {
      console.log("Book not found.");
    } else if (foundBook[4] < quantity) {
      console.log("Requested quantity not available in stock.");
    } else if (availableBalance < foundBook[3] * quantity) {
      console.log("Insufficient balance to purchase the requested quantity.");
    } else {
      foundBook[4] -= quantity;
      let totalPrice = foundBook[3] * quantity;
      console.log(`Sold ${quantity} books of ${foundBook[1]} successfully.`);
      console.log(`Total invoice amount: ${totalPrice}`);
    }
  }
  
  // Execute commands
  addBook(6, "The Lean Startup", "Eric Ries", 60.0, 8);
  editBook(1, "Start with Why", "Simon Sinek", 85.0, 15);
  deleteBook(2);
  displayBooks();
  searchBook("clean");
  sellBook("Clean Code", 3, 200);