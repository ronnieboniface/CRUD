
// Retrieve all books from backend and append them to the DOM.
const fetchBooks = () => {
  bookList.innerText = "";

  fetch(baseUrl)
  .then(resp => resp.json())
  .then(books => renderBooks(books))
};

// Create a new book and append it to the DOM.
const postBook = () => {
  event.preventDefault();
  const formData = {
    title: titleInput.value,
    author: authorInput.value,
    genre: genreInput.value,
    publisher: publisherInput.value
  };

  const configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch(baseUrl, configObj)
  .then(resp => resp.json())
  .then(book => {
    renderBook(book);
    bookForm.reset();
  });
};

// Update a pre-existing book and update it on the DOM.


// Delete a book and remove it from the DOM.
const deleteBook = (id, bookEl) => {
  const configObj = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  fetch(`${baseUrl}/${id}`, configObj)
  bookEl.remove();
};
