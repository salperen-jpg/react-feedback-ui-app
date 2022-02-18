import React from 'react';
import { useFeedbackContext } from '../context';
import { FaSearch } from 'react-icons/fa';
import '../Styles/form.scss';

const Form = () => {
  const { feedback, handleChange, handleSubmit, abc } = useFeedbackContext();
  return (
    <section className='form-section'>
      <div className='form-center'>
        <form className='form'>
          <div className='form-action'>
            <h4>Do you want to rate our service ? </h4>
          </div>
          <div className='form-action'></div>
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
              <FaSearch></FaSearch>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
