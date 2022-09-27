import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    console.log("ShowModal")
    setShowModal(true);
  }

  function closeModalHandler() {
    console.log("CloseModal")
    setShowModal(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>Delete</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <Modal text='Are You Sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;