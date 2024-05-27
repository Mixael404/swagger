import { memo } from "react"
import classes from "./delete-cross.module.css"

function DeleteCrossComponent({ id ,onClick }) {
    return (
        <svg onClick={() => onClick(id)}
        className={classes.delete_cross}
        width="25" 
        height="25" 
        viewBox="0 0 25 25" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="rotate(45 12.5 12.5)">
                <rect x="11.5" y="0" width="2" height="25" fill="red" />
                <rect x="0" y="11.5" width="25" height="2" fill="red" />
            </g>
        </svg>
    )
}

export const DeleteCross = memo(DeleteCrossComponent)