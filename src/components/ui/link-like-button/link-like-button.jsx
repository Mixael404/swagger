import { memo } from "react"
import classes from "./link-like-button.module.css"
import { Link } from "react-router-dom"

function LinkLikeButtonComponent({url, isLinkToOuterService, text}){
    return(
        (
            isLinkToOuterService ?
            <a className={classes.button} href={url} target={"blank"}>{text}</a>
            :
            <Link to={url} className={classes.button}>{text}</Link> 
        )
    )
}

export const LinkLikeButton = memo(LinkLikeButtonComponent)