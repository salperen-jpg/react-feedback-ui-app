import React from 'react';
import { useFeedbackContext } from '../../context';
import '../../Styles/alert.scss';

const Error = () => {
  const { closeError } = useFeedbackContext();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      closeError();
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className='error-message'>
      <p>Please fill the form completely.</p>
    </div>
  );
};

export default Error;
