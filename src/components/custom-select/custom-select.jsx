import { memo } from "react";
import classes from "./custom-select.module.css";

function CustomSelectComponent({onSelect, selectedService, options}) {
  return (
      <select className={classes.select} onChange={onSelect} value={selectedService}>
        {options.map((service) => (
          <option className={classes.option} key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
  );
}

export const CustomSelect = memo(CustomSelectComponent);


