import { memo } from "react"
import classes from "./input.module.css"

function InputComponent({label, onChange = Function.prototype}){
    return(
        <div className={classes.wrapper}>
            <label className={classes.label}>
                <input
                type="text"
                className={classes.input}
                onChange={(e) => onChange(e.target.value)}
                />
                {label}
            </label>
        </div>
    )
}

export const Input = memo(InputComponent)