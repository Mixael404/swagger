import classes from "./execute-clear-group.module.css"

export function ExecuteClearGroup(){
    return(
        <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-info">
                Execute
              </button>
              <button type="button" className="btn btn-light">
                Clear
              </button>
            </div>
    )
}