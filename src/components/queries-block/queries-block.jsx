import { memo } from "react"
import classes from "./queries-block.module.css"
import RequestQuery from "../request-query/request-query";
import { ParamsTitle } from "../params-title/params-title";

function QueriesBlockComponent({req, reqControls, clear, isAccess, setErrors, removeError}){
    return(
        <form>
        {
            req.params && req.params.length ? (
            <div className={classes.queries_block}>
              <ParamsTitle />
              {req.params.map((param) => (
                <RequestQuery
                  removeError = {removeError}
                  setErrors={setErrors}
                  reqControls={reqControls}
                  key={param.name}
                  {...param}
                  isAccess={isAccess}
                  clear={clear}
                  reqId={req.id}
                />
              ))}
            </div>
          ) : null
        }
        </form>
    )
}

export const QueriesBlock = memo(QueriesBlockComponent)