import React from 'react';

function FormField({ label, name, type, value, onChange }){

  
  const Field = () => {
    if ( type === 'textarea' ) {
      return (

        <div>
          <label>
            {label}:
          <textarea
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={label}
        />
          </label>
        </div>
      )
    }
    else {
      return (
        <div>
          <label>
            {label}:
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={label}
          />
          </label>
        </div>
      )
    }
  }

  return (

      Field()
  
)
}
export default FormField;