import { memo } from "react"
import classes from "./code-block.module.css"
import { objectToArray } from "../../utils/object-to-array/object-to-array";

function CodeBlockComponent({title,code}){
    let text; 
    if(typeof code === 'object'){
        text = objectToArray(code)
    }
    return(
        <>
          <p className={classes.title}>{title} :</p>
          <div className={classes.code_block}>
              {typeof code === "string" && <code>{code}</code>}
              {typeof code === 'object' && text.map(header => <code key={header[0]}> {`${header[0]}: ${header[1]}`} </code>)}
          </div>
        </>
    )
}

export const CodeBlock = memo(CodeBlockComponent)