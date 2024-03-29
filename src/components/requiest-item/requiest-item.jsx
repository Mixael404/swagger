import { memo, useCallback, useEffect, useMemo, useState } from "react";
import CollapseCard from "../collapse-card/collapse-card";
import "./requiest-item.css";
import { RequiestQuery } from "../requiest-query/requiest-query";
import { ExecuteClearGroup } from "../execute-clear-group/execute-clear-group";
import { ParamsTitle } from "../params-title/params-title";
import { ParamsControlBtn } from "../params-control-btn/params-control-btn";
import { getColor } from "../../utils/get-color/get-color";
import { CodeBlock } from "../code-block/code-block";
import { arrayToObject } from "../../utils/array-to-object/array-to-object";

function RequiestItem({ req }) {
  const [access, setAccess] = useState(false);
  const [url, setUrl] = useState(req.base_url);
  const [queryParams, setQueryParams] = useState(arrayToObject(req.params.filter(param => param.type === "changeQuery").map(param => param.name)))
  const [headers, setHeaders] = useState(arrayToObject(req.params.filter(param => param.type === "changeHeader").map(param => param.name)))
  const [response, setResponse] = useState(null)
  const [clear, setClear] = useState(false)

  const callbacks = {
    changeAccess: useCallback(() => {
      setAccess((prev) => !prev)
      setClear(prev => !prev)
      setResponse('')
    }, []),
    onExecute: useCallback(async () => {
      const response = await fetch(`${url}`)
      const data = await response.text()
      setResponse(data)
    }, [url]),
    onClear: useCallback(() => {
      setClear(prev => !prev)
    },[])
  };

  const color = getColor(req.method);

  const reqControls = {
    changeUrl: useCallback((value) => {
      setUrl(req.base_url + `/${value}`);
    }, []),

    changeQuery: useCallback((key, value) => {
      setQueryParams((prev) => {
        return {...prev, [key]: value}
      })
    }, []),
    changeHeader: useCallback((key, value) => {
      setHeaders((prev) => {
        return {...prev, [key]: value}
      })
    }, [])
  };
  
  useEffect(() => {
    setUrl(req.base_url)
  }, [clear])
  
  
  useEffect(() => {
    const queryString = ["?"]
    for (const key in queryParams) {
      if(queryParams[key]){
        const string = `${key}=${queryParams[key]}&`;
        queryString.push(string)
      }
    }
    const params = queryString.join("").slice(0, -1);
    setUrl(`${req.base_url}${params}`)
  }, [queryParams])
  

  return (
    <div className="requiest_item">
      <CollapseCard
        id={req.id}
        title={req.title}
        method={req.method}
        color={color}
      >
        <div className="body">
          <p className="requiest_title"> {req.title}</p>
          <div className="requiest_white_card">
            <p>Parameters</p>
            <ParamsControlBtn
              access={access}
              setAccess={callbacks.changeAccess}
            />
          </div>

          {req.params && req.params.length && (
            <div className="requiest_params_body">
              <ParamsTitle />
              {req.params.map((param) => (
                <RequiestQuery
                  reqControls={reqControls}
                  key={param.name}
                  {...param}
                  access={access}
                  clear={clear}
                />
              ))}
            </div>
          )}

          {access && <ExecuteClearGroup onExecute={callbacks.onExecute} onClear={callbacks.onClear} />}
          <div className="requiest_white_card">
            <p>Responses</p>
          </div>
          <CodeBlock title={"url"} code={url} />
          <CodeBlock title={"headers"} code={headers} />
          {response && access && <CodeBlock title={"Response"} code={response} />}
        </div>
      </CollapseCard>
    </div>
  );
}

export default memo(RequiestItem);
