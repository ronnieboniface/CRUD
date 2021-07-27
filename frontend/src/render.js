const baseUrl = 'http://localhost:3000/books'
const bookList = document.getElementById('book-list');
const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const genreInput = document.getElementById('genre');
const publisherInput = document.getElementById('publisher');

const render = (div, book) => {
  div.innerHTML = `
  <h1 class="title">${book.title}</h1>
  <strong>Author:</strong> 
  <p class="author"> ${book.author}</p>
  <strong>Genre:</strong>
  <p class="genre"> ${book.genre}</p>
  <strong>Publisher:</strong>
  <p class="publisher"> ${book.publisher}</p>
  <p class="book-btn"><button>Edit</button> <button>Delete</button></p>
`;
};

const renderBooks = (books) => {
  books.forEach(book => {
    renderBook(book);
  })
};

const renderBook = (book) => {
  const bookDiv = document.createElement('div');
  bookDiv.classList = "book-card";
  bookDiv.dataset.id = book.id;

  render(bookDiv, book);

  bookList.appendChild(bookDiv);
  bookList.addEventListener('click', handleBookClick);
};

const renderEditForm = (book) => {
  const title = book.querySelector('.title').innerText;
  const author = book.querySelector('.author').innerText;
  const genre = book.querySelector('.genre').innerText;
  const publisher = book.querySelector('.publisher').innerText;

  const editDiv = document.createElement('div');
  editDiv.classList.add('edit-form');
  editDiv.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" value="${title}" name="title" id="update-title" />

      <label for="author">Author:</label>
      <input type="text" value="${author}" name="author" id="update-author" />
      
      <label for="genre">Genre:</label>
      <input type="text" value="${genre}" name="genre" id="update-genre" />

      <label for="publisher">Publisher</label>
      <input type="text" value="${publisher}" name="publisher" id="update-publisher" />
  `;

  book.appendChild(editDiv);
};