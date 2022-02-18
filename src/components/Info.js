import React from 'react';
import '../Styles/info.scss';
import { useFeedbackContext } from '../context';

const Info = () => {
  const { feedbacks } = useFeedbackContext();
  return (
    <section className='info-container'>
      <div className='info-center'>
        <h4>
          <span className='info-amount'>{feedbacks.length} </span> Feedback
        </h4>
        <h4>Average Feedback : 9</h4>
      </div>
    </section>
  );
};

export default Info;
