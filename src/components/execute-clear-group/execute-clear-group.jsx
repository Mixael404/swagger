import { useEffect, useState } from "react"
import "./execute-clear-group.css"

export function ExecuteClearGroup({onExecute, onClear, isAnyMistake}){
  const [isDisabled, setIsDisabled] = useState(false)

  function execute(){
    if(isAnyMistake){
      setIsDisabled(true)
      onClear()
    } else{
      setIsDisabled(false)
      onExecute()
    }
  }

  useEffect(() => {
    if(isAnyMistake){
      setIsDisabled(true)
    } else{
      setIsDisabled(false)
    }
  }, [isAnyMistake])

  useEffect(() =>{
    setIsDisabled(false)
  }, [])

    return(
        <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
              onClick={execute}
              type="button"
              className="btn btn-info"
              disabled={isDisabled}
              >
                Execute
              </button>
              <button
              onClick={onClear}
              type="button"
              className="btn btn-light"
              >
                Reset
              </button>
            </div>
    )
}