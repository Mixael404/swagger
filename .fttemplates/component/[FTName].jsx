import { memo } from "react"
import classes from "./[FTName].module.css"

function <FTName | pascalcase>Component(){
    return(
        <div className={classes.<FTName | snakecase>}>

        </div>
    )
}

export const <FTName | pascalcase> = memo(<FTName | pascalcase>Component)