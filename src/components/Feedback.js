import React from 'react';
import { useFeedbackContext } from '../context';
import '../Styles/feedback.scss';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const Feedback = ({ id, feed }) => {
  const { deleteFeedback } = useFeedbackContext();
  return (
    <div className='feedback'>
      <p className='feedback-feed'>{feed}</p>
      <p className='feedback-rate'>9</p>
      <div className='btn-container'>
        <button type='button' className='feed-btn edit'>
          <FaEdit />
        </button>
        <button
          type='button'
          className='feed-btn delete'
          onClick={() => deleteFeedback(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
