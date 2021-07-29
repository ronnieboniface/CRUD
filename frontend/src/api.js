
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
const editBook = (id, bookDiv) => {
  const editForm = document.querySelector('.edit-form');
  const title = document.getElementById('update-title').value;
  const author = document.getElementById('update-author').value;
  const genre = document.getElementById('update-genre').value;
  const publisher = document.getElementById('update-publisher').value;

  const bookObj = {
    title: title,
    author: author,
    genre: genre,
    publisher: publisher
  };

  const configObj = {
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(bookObj)
  };

  fetch(`${baseUrl}/${id}`, configObj)
  .then(resp => resp.json())
  .then((data) => {
    render(bookDiv, data)
  });
  editForm.remove();
};


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
