import { memo } from "react"
import classes from "./link-like-button.module.css"

function LinkLikeButtonComponent({url, isBlank}){
    return(
        <a className={classes.button} href={url} target={isBlank ? "blank" : '_self'}>Repo</a>
    )
}

export const LinkLikeButton = memo(LinkLikeButtonComponent)