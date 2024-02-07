import { useState } from "react";
import './Input.css';

const Input = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
    setFocused(true);
    };

    return (
    <div className="formInput">
        <label>{label}</label>
        <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            onFocus={() =>
                inputProps.name = setFocused(true)
            }
            focused={focused.toString()}
            onInvalid={(e) => {
                e.target.setCustomValidity('');
                handleFocus();
            }}
        />
        <span>{errorMessage}</span>
    </div>
    )
}

export default Input;