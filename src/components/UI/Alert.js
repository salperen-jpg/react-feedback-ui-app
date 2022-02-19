import React from 'react';
import { useFeedbackContext } from '../../context';
import '../../Styles/alert.scss';

const Alert = () => {
  const { isAlert, closeAlert } = useFeedbackContext();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className={`alert ${isAlert.status} ${isAlert.show && 'show'}`}>
      <p>{isAlert.msg}</p>
    </div>
  );
};

export default Alert;
