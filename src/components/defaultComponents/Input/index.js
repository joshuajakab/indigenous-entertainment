import React from 'react';
import './styles.css';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='formRow'>
            {label && (
                <label>
                    <h3>{label}</h3>
                </label>
            )}

            <input className='formInput' onChange={handleChange} {...otherProps} />
        </div>

    );
}

export default FormInput;
