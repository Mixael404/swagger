import { forwardRef, memo } from "react";
import classes from "./custom-select.module.css";

function CustomSelectComponent({ selectedService, changeState = () => {}, options, label, onChange = Function.prototype, onBlur, value, error }, ref) {

  if(selectedService){
    value = selectedService
  }
  
  return (
    <div className={classes.wrapper}>
      <select
      className={classes.select} 
      onChange={(e) => {
        onChange(e)
        changeState(e.target.value)
      }} 
      value={value}
      onBlur={onBlur}
      >
        {options.map((service) => (
          <option className={classes.option} key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
      <p className={classes.label}>{label}</p>
      <span className={classes.error}>{error}</span>
    </div>
  );
}

export const CustomSelect = memo(forwardRef(CustomSelectComponent));


