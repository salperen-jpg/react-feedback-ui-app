import React from 'react';
import { useFeedbackContext } from '../context';

import '../Styles/form.scss';
import Error from './UI/Error';

const Form = () => {
  const {
    feedback,
    handleChange,
    handleSubmit,
    handleVoting,
    isEditing,
    isError,
  } = useFeedbackContext();

  return (
    <section className='form-section'>
      <div className='form-center'>
        <form className='form'>
          <div className='form-action'>
            <h4>Do you want to rate our service ? </h4>
          </div>
          <div className='form-action form-rating'>
            <span
              className={`rating ${feedback.vote === 1 && 'active'}`}
              data-value='1'
              onClick={handleVoting}
            >
              1
            </span>
            <span
              className={`rating ${feedback.vote === 2 && 'active'}`}
              data-value='2'
              onClick={handleVoting}
            >
              2
            </span>
            <span
              className={`rating ${feedback.vote === 3 && 'active'}`}
              data-value='3'
              onClick={handleVoting}
            >
              3
            </span>
            <span
              className={`rating ${feedback.vote === 4 && 'active'}`}
              data-value='4'
              onClick={handleVoting}
            >
              4
            </span>
            <span
              className={`rating ${feedback.vote === 5 && 'active'}`}
              data-value='5'
              onClick={handleVoting}
            >
              5
            </span>
            <span
              className={`rating ${feedback.vote === 6 && 'active'}`}
              data-value='6'
              onClick={handleVoting}
            >
              6
            </span>
            <span
              className={`rating ${feedback.vote === 7 && 'active'}`}
              data-value='7'
              onClick={handleVoting}
            >
              7
            </span>
            <span
              className={`rating ${feedback.vote === 8 && 'active'}`}
              data-value='8'
              onClick={handleVoting}
            >
              8
            </span>
            <span
              className={`rating ${feedback.vote === 9 && 'active'}`}
              data-value='9'
              onClick={handleVoting}
            >
              9
            </span>
          </div>
          <div className='form-action text-part'>
            <input
              type='text'
              className='form-input'
              value={feedback.feed}
              name='feed'
              onChange={handleChange}
            />
            <button
              type='submit'
              className='btn btn-action'
              onClick={handleSubmit}
            >
              {isEditing ? 'EDIT' : 'ADD'}
            </button>
          </div>
        </form>
        {isError && <Error />}
      </div>
    </section>
  );
};

export default Form;
