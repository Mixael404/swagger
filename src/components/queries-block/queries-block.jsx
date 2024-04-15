import { memo } from "react"
import classes from "./queries-block.module.css"
import RequestQuery from "../request-query/request-query";
import { ParamsTitle } from "../params-title/params-title";

function QueriesBlockComponent({req, reqControls, clear, access}){
    return(
        <>
        {
            req.params && req.params.length ? (
            <div className={classes.queries_block}>
              <ParamsTitle />
              {req.params.map((param) => (
                <RequestQuery
                  reqControls={reqControls}
                  key={param.name}
                  {...param}
                  access={access}
                  clear={clear}
                  reqId={req.id}
                />
              ))}
            </div>
          ) : null
        }
        </>
    )
}

export const QueriesBlock = memo(QueriesBlockComponent)