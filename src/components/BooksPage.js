import Book from './Book';

const BooksPage = (props) => {
  const { bookList } = props;
  return (
    <div>
      <h1> Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <form>
       <input placeholder="Book Title">
       <input placeholder="Book Title">
       <button> Add Book </button>

      </form>
    </div>
  );
};

export default BooksPage;
