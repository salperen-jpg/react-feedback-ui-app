import React, { useEffect } from 'react';
import { useFeedbackContext } from '../../context';
import '../../Styles/loading.scss';

const Loading = () => {
  const { closeLoading } = useFeedbackContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeLoading();
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className='loading-container'>
      <div className='loading'></div>
    </div>
  );
};

export default Loading;
