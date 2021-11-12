import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';

import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const progess = (Math.random() * 100).toFixed(1);
  return (
    <li key={book.item_id} className="book-item">
      <div className="left-section">
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
      </div>
      <div className="progress-bar">
        <CircularProgressbar value={progess} text={`${progess}%`} />
      </div>
      <div className="chapters">
        Chapters
        <button type="button"> Update Progress </button>
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
