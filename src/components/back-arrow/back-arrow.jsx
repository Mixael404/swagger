import { memo } from "react"
import classes from "./back-arrow.module.css"
import { useNavigate } from "react-router-dom"

function BackArrowComponent() {
    const navigate = useNavigate()
    return (
        <svg
            className={classes.back_arrow}
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate(-1)}
        >
            <path
                d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
                fill="currentColor"
            />
        </svg>
    )
}

export const BackArrow = memo(BackArrowComponent)