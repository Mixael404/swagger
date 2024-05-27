import { forwardRef, memo } from "react"
import classes from "./input.module.css"

function InputComponent({value, onBlur, label, changeState = Function.prototype, onChange, error}, ref){
    return(
        <div className={classes.wrapper}>
            <label className={classes.label}>
                <input
                type="text"
                value={value}
                onBlur={onBlur}
                className={classes.input}
                onChange={(e) => {
                    onChange(e)
                    changeState(e.target.value)
                }}
                />
                {label}
            </label>
            <span className={classes.error}>{error}</span>
        </div>
    )
}

export const Input = memo(forwardRef(InputComponent))