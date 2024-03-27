import classes from "./[FTName].module.css"

export function <FTName | pascalcase>(){
    return(
        <div className={classes.<FTName | snakecase>}>

        </div>
    )
}