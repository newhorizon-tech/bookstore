const Book = (props) => {
  const { book } = props;
  return (
    <li key={book.id}>
      Title : {' '+book.title},
      Author: {' '+book.author}
      <button> Remove Book </button>
    </li>
  );
};

export default Book;
