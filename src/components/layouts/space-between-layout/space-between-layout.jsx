import { memo } from "react"
import classes from "./space-between-layout.module.css"

function SpaceBetweenLayoutComponent({children, padding}){
    const mainClass = classes.space_between_layout
    const className = padding ? `${mainClass} ${classes.padding}` : mainClass
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export const SpaceBetweenLayout = memo(SpaceBetweenLayoutComponent)