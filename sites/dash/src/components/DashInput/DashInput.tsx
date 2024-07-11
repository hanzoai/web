"use client";

import { type Dispatch, type SetStateAction } from 'react';
import "./DashInput.css"

const InputField = (props: { placeHolder: string; value: string, setValue: Dispatch<SetStateAction<string>> }) => {
  const { placeHolder, value, setValue } = props;

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input-field"
      />
      <label className={`placeholder ${value && 'filled'}`}>
        {placeHolder}
      </label>
    </div>
  );
};

export default InputField;
