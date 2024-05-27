import { memo } from "react"
import classes from "./add-string.module.css"

function AddStringComponent({ text, onClick, align }) {
    return (
        <div className={classes.wrapper}>
            <button
            type="button"
                onClick={onClick}
                className={align === "center" ? `${classes.add_string} ${classes.center}` : `${classes.add_string} ${classes.start}`}
            >
                {text}
            </button>
        </div>
    )
}

export const AddString = memo(AddStringComponent)