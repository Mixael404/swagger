import { memo } from "react"
import classes from "./page-title.module.css"

function PageTitleComponent({title}){
    return(
        <h1 className={classes.page_title}>
            {title}
        </h1>
    )
}

export const PageTitle = memo(PageTitleComponent)