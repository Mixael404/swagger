import { memo, useRef, useState } from "react";
import classes from "./requiest-query.module.css";
import { validationService } from "../../services/validation.service";
import { Reset } from "../reset/reset";
import { Input } from "../input/input";
import { SelectWrapper } from "../select-wrapper/select-wrapper";
import { QueryName } from "../query-name/query-name";

function RequestQuery(props) {
  const [error, setError] = useState(null);
  const [reset, setReset] = useState(false);

  const action = props.reqControls[props.type];

  const validation = (node) => {
    let value = node.value;
    let result = true;
    let error;

    if (props.inputType === "number") {
      [result, error] = validationService.isOnlyNumbers(value, true);
    }
    if (props.required) {
      [result, error] = validationService.isNotEmpty(value);
    }

    if (!result) {
      node.classList.add(classes.invalid);
      setError(error);
      props.addError(`${props.reqId}-${props.name}`);
    } else {
      props.removeError(`${props.reqId}-${props.name}`);
    }
    return result;
  };

  const onReset = () => {
    setReset((prev) => !prev);
    action(props.name, props.defaultValue);
  };

  const onFocus = (node) => {
    setError("");
    node.classList.remove(classes.invalid);
  };

  return (
    <div className={classes.request_query}>
      <QueryName 
      name={props.name}
      required={props.required}
      inputType={props.inputType}
      />
      
      <div className={classes.description_container}>
        <p> {props.description}</p>
        <div className={classes.input_group}>
          {props.options ? (
            <SelectWrapper
              {...props}
              reset={reset}
              action={action}
              onFocus={onFocus}
              validation={validation}
            />
          ) : (
            <Input
              {...props}
              reset={reset}
              action={action}
              onFocus={onFocus}
              validation={validation}
            />
          )}
          {!props.disabled && <Reset onClick={onReset} />}
        </div>
        <p className={classes.error}>{error}</p>
      </div>
    </div>
  );
}

export default memo(RequestQuery);
