import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { saveProgress, openModal, closeModal } from '../redux/books/books';

const Popup = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '5%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  useEffect(() => { Modal.setAppElement('#root'); }, []);
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.books.modal.open);
  const data = useSelector((state) => state.books.modal.data);

  const handleInput = (e) => {
    const { value } = e.target;
    const newData = { id: data.id, progress: value };
    dispatch(openModal(newData));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(saveProgress(data));
    dispatch(closeModal);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => dispatch(closeModal)}
      style={customStyles}
      contentLabel="Update Progress"
    >
      <form id="update-progress-form" onSubmit={submitForm}>
        <h2> Reading Progress</h2>
        {` ${data.progress}%`}
        <input
          name="progress"
          type="range"
          min="0"
          max="100"
          value={data.progress}
          onChange={handleInput}
        />
        <button id="update-progress-button" type="submit">Update</button>
      </form>
    </Modal>

  );
};

export default Popup;
