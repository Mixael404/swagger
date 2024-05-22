import { memo, useRef, useEffect } from "react";
import classes from "./query-input.module.css";

function InputComponent(props) {
    const inputRef = useRef(null)

    const handleInputChange = (e) => {
        const input = e.target.value
        const trimmedInput = input.replaceAll(" ", "")
        e.target.value = trimmedInput
        props.action(props.name , trimmedInput)
    }

    useEffect(() => {
      inputRef.current.value = props.defaultValue ?? ''
      props.validation(inputRef.current)
    }, [props.clear, props.reset])

    useEffect(() => {
        inputRef.current.value = props.defaultValue ?? ''
        props.validation(inputRef.current)
        props.onFocus(inputRef.current)
    }, [props.isAccess])

  return (
    <input
      className={classes.input}
      required={props.required}
      id={`${props.reqId}-${props.name}`}
      ref={inputRef}
      onChange={handleInputChange}
      onFocus={() => props.onFocus(inputRef.current)}
      onBlur={() => props.validation(inputRef.current)}
      disabled={!props.isAccess || props.disabled}
      type="text"
    />
  );
}

export const Input = memo(InputComponent);
