import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id} className="book-item">
      <div className="text-info">
        <span className="book-category">
          {`${book.category}`}
        </span>
        <span className="book-title">
          {`${book.title}`}
        </span>
      </div>
      <div className="book-actions">
        <button type="button"> Comments </button>
        <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
          Remove
        </button>
        <button type="button"> Edit</button>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
