import classes from "./execute-clear-group.module.css"

export function ExecuteClearGroup({onExecute, onClear}){
    return(
        <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
              onClick={onExecute}
              type="button"
              className="btn btn-info"
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