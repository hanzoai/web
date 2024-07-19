"use client";

import React, { type Dispatch, type SetStateAction } from 'react';
import "./dash-input.css"

interface InputFieldProps<T> {
  placeHolder: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}

const InputField = <T,>({ placeHolder, value, setValue }: InputFieldProps<T>) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={value as unknown as string} // Assuming value is of type string or coercible to string
        onChange={(e) => setValue(e.target.value as unknown as T)}
        className="input-field"
      />
      <label className={`placeholder ${value ? 'filled' : ''}`}>
        {placeHolder}
      </label>
    </div>
  );
};

export default InputField;
