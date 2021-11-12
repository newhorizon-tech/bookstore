import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id} className="book-item">
      <span>
        {` ${book.title}. `}
      </span>
      <span>
        {` Category: ${book.category}`}
      </span>
      <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
        Remove Book
      </button>
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
