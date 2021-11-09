import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <li key={book.id}>
      <span>
        {` ${book.title} `}
      </span>
      <span>
        {`by ${book.author}`}
      </span>
      <button type="button"> Remove Book </button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
