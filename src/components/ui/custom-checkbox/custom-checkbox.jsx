import { forwardRef, memo } from "react"
import classes from "./custom-checkbox.module.css"

function CustomCheckboxComponent({fieldName, value, onChange, onBlur, name}, ref) {
    const descriptionTextPart = fieldName.split('-')[2]
    return (
        <div className={classes.wrapper}>
            <span className={classes.field_description}>{descriptionTextPart}?</span>
            <input
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            id={fieldName}
            type="checkbox" 
            className={classes.checkbox}/>
            <label htmlFor={fieldName} className={classes.custom_checkbox} />
        </div>
    )
}

export const CustomCheckbox = memo(forwardRef(CustomCheckboxComponent))