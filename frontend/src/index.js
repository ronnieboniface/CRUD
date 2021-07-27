document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  bookForm.addEventListener('submit', postBook);
});

const handleBookClick = () => {
  const bookContainer = event.target.parentElement.parentElement;
  const bookId = bookContainer.dataset.id;
  const eventButton = event.target;

  switch(eventButton.innerText) {
    case 'Edit':
      eventButton.innerText = 'Save';
      renderEditForm(bookContainer);
      break;
    case 'Delete': 
      deleteBook(bookId, bookContainer);
      break;
    case 'Save':
      eventButton.innerText = 'Edit';
      editBook(bookId, bookContainer);
      break;
    default: 
      console.log('Nothin happening here.');
      break;
  };

};

