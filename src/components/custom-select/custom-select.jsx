import { memo } from "react";
import classes from "./custom-select.module.css";

function CustomSelectComponent({ onSelect, selectedService, options, label }) {
  return (
    <>
      <select
      className={classes.select} 
      onChange={(e) => onSelect(e.target.value)} 
      value={selectedService}
      >
        {options.map((service) => (
          <option className={classes.option} key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
      <p className={classes.label}>{label}</p>
    </>
  );
}

export const CustomSelect = memo(CustomSelectComponent);


