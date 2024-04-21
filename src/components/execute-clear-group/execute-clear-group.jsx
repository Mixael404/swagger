import "./execute-clear-group.css"

export function ExecuteClearGroup({onExecute, onClear, isAnyMistake}){
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
              disabled={isAnyMistake}
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