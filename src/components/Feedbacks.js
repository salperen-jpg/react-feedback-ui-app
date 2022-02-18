import React from 'react';
import { useFeedbackContext } from '../context';
import Feedback from './Feedback';
import '../Styles/Feedbacks.scss';

const Feedbacks = () => {
  const { feedbacks } = useFeedbackContext();
  if (feedbacks.length === 0) {
    return (
      <div className='centered-info'>
        <p>There is no feedback at the moment</p>
      </div>
    );
  }
  return (
    <article className='feedbacks'>
      <div className='feedbacks-center'>
        {feedbacks.map((feedback) => {
          return <Feedback key={feedback.id} {...feedback} />;
        })}
      </div>
    </article>
  );
};

export default Feedbacks;
