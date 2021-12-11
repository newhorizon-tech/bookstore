import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { openModal } from '../redux/books/books';

import Popup from './Popup';

const UpdateProgress = (props) => {
  const dispatch = useDispatch();
  const { id, progress } = props;
  useEffect(() => { Modal.setAppElement('#root'); }, []);

  const openUpdate = (data) => {
    dispatch(openModal(data));
  };

  return (
    <div>
      <button className="chapter-button" type="button" onClick={() => openUpdate({ id, progress })}> Update Progress </button>
      <Popup key={id} id={id} progress={progress} />
    </div>
  );
};

UpdateProgress.propTypes = {
  id: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default UpdateProgress;
