import { useState } from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {

  const [checked, setChecked] = useState(false)
  const isChecked = () => setChecked(!checked)

  // checked = {(otherProps.type == 'radio' || otherProps.type == 'checkbox')? checked: ''}
  // onClick={isChecked}
  return (
    <div className='group' >
      <input className='form-input' {...otherProps} />
      {(otherProps.type == 'radio' || otherProps.type == 'checkbox')? <span className='checkmark'></span>: ''}
      {label && (
        <label
          htmlFor={otherProps.id}
          className={`${
            (otherProps.value.length && otherProps.type !== 'radio' && otherProps.type !== 'checkbox') ? 'shrink' : ''
          } 
          ${
            (otherProps.type !== 'radio' && otherProps.type !== 'checkbox') ? 'form-input-label' : ''
          }
          ${(otherProps.type == 'radio' || otherProps.type == 'checkbox')? 'radio-label': ''} `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;