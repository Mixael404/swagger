import { memo } from "react"
import classes from "./code-block.module.css"

function CodeBlockComponent({title,code}){
    return(
        <>
          <p className={classes.title}>{title} :</p>
          <div className={classes.code_block}>
              <code>{code}</code>
          </div>
        </>
    )
}

export const CodeBlock = memo(CodeBlockComponent)