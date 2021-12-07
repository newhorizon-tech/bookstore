import PropTypes from 'prop-types';
import Book from './Book';

const BooksPage = (props) => {
  const { bookList } = props;
  return (
    <div>
      <h1> Books </h1>
      <ul>
        {bookList.map((book) => <Book key={book.id} book={book} />)}
      </ul>
      <form id="add-book-form">
        <input placeholder="Book Title" />
        <input placeholder="Book Author" />
        <button type="submit"> Add Book </button>
      </form>
    </div>
  );
};

BooksPage.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BooksPage;
