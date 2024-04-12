import { memo } from "react";
import classes from "./header.module.css";

function Header({ changeSelectedService, services, selectedService }) {
  const onSelect = (e) => {
    changeSelectedService(e.target.value);
  };

  return (
    <div className={classes.Header}>
      <select
        onChange={onSelect}
        // defaultValue={services.indexOf("jsonplaceholder")}
        defaultValue={selectedService}
        // defaultValue={"cheese"}
      >
        {services.map((service) => (
          <option 
            key={service} 
            value={service}
          >
            {service}
          </option>
        ))}
      </select>
      <button>Click me</button>
    </div>
  );
}

export default memo(Header);
