import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.id}>
      <span>
        {` ${book.title} `}
      </span>
      <span>
        {`by ${book.author}`}
      </span>
      <button type="button" onClick={() => dispatch(removeBook(book.id))}>
        Remove Book
      </button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
