import React, { useEffect } from 'react';
import '../Styles/info.scss';
import { useFeedbackContext } from '../context';

const Info = () => {
  const { feedbacks } = useFeedbackContext();

  const average = feedbacks.reduce((total, feed) => {
    total += feed.vote;
    return total;
  }, 0);

  return (
    <section className='info-container'>
      <div className='info-center'>
        <h4>
          <span className='info-amount'>{feedbacks.length} </span> Feedback
        </h4>
        <h4>
          Average Feedback :{' '}
          <span className='info-amount'>
            {feedbacks.length > 0 ? (average / feedbacks.length).toFixed(1) : 0}
          </span>
        </h4>
      </div>
    </section>
  );
};

export default Info;
