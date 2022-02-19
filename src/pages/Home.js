import React from 'react';
import { Form, Info, Feedbacks } from '../components/';
import Alert from '../components/UI/Alert';
import { useFeedbackContext } from '../context';

const Home = () => {
  const { isAlert } = useFeedbackContext();

  return (
    <article className='home'>
      {isAlert.show && <Alert />}
      <Form />
      <Info />
      <Feedbacks></Feedbacks>
    </article>
  );
};

export default Home;
