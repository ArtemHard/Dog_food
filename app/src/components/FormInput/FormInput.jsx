import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [val, setVal] = useState(props.val || "");

  const changeVal = (e) => {
    setVal(e.target.value);
  };

  return (
    <input
      className='inp'
      name={props.name}
      placeholder={props.text}
      type={props.type}
      value={val}
      onChange={changeVal}
    />
  );
};

export default FormInput;
