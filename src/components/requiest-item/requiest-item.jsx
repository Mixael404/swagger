import { memo, useCallback, useEffect, useMemo, useState } from "react";
import CollapseCard from "../collapse-card/collapse-card";
import "./requiest-item.css";
import RequiestQuery from "../requiest-query/requiest-query";
import { ExecuteClearGroup } from "../execute-clear-group/execute-clear-group";
import { ParamsTitle } from "../params-title/params-title";
import { ParamsControlBtn } from "../params-control-btn/params-control-btn";
import { getColor } from "../../utils/get-color/get-color";
import { CodeBlock } from "../code-block/code-block";
import { arrayToObject } from "../../utils/array-to-object/array-to-object";
import { isNonEmptyFields } from "../../utils/non-emtpy-fields/non-empty-fields";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";

import { apiService } from "../../api-service/api.service";

function RequiestItem({ req }) {
  const [access, setAccess] = useState(false);
  const [url, setUrl] = useState(req.base_url);

  const [queryParams, setQueryParams] = useState(
    arrayToObject(
      req.params
        .filter((param) => param.type === "changeQuery")
        .map((param) => param.name)
    )
  );
  const [headers, setHeaders] = useState(
    arrayToObject(
      req.params
        .filter((param) => param.type === "changeHeader")
        .map((param) => param.name)
    )
  );
  const [body, setBody] = useState(
    arrayToObject(
      req.params
        .filter((param) => param.type === "changeBody")
        .map((param) => param.name)
    )
  );

  const [response, setResponse] = useState(null);
  const [clear, setClear] = useState(false);

  const isheadersNotEmpty = useMemo(() => isNonEmptyFields(headers), [headers]);
  const isBodyNotEmpty = useMemo(() => isNonEmptyFields(body), [body]);
  // console.log("Item rerender");

  const setDefaultHeaders = useCallback(function () {
    const headers = {};
    const queries = {};
    const body = {};
    req.params.forEach((param) => {
      if (param.defaultValue) {
        if(param.inputType === "header")  headers[param.name] = param.defaultValue;
        if(param.inputType === "body")  body[param.name] = param.defaultValue;
        if(param.inputType === "query")  queries[param.name] = param.defaultValue;
      }
    });
    setHeaders(headers);
    setQueryParams(queries);
    setBody(body)
  }, []);

  const resetAllParams = useCallback(() => {
    setDefaultHeaders()
  }, [])

  const callbacks = {
    changeAccess: useCallback(() => {
      setAccess((prev) => !prev);
      setClear((prev) => !prev);
      setResponse("");
      setDefaultHeaders();
    }, []),

    onExecute: useCallback(async () => {
      const filteredHeaders = filterEmptyFields(headers);

      const data = await apiService.requiest(
        url,
        req.method,
        filteredHeaders,
        body
      );
      setResponse(data);
    }, [url, headers, body]),

    onClear: useCallback(() => {
      setClear((prev) => !prev);
      resetAllParams()
    }, []),
  };

  const color = getColor(req.method);

  const reqControls = {
    changeUrl: useCallback((key, value) => {
      setUrl(req.base_url + `/${value}`);
    }, []),

    changeQuery: useCallback((key, value) => {
      setQueryParams((prev) => {
        return { ...prev, [key]: value };
      });
    }, []),

    changeHeader: useCallback((key, value) => {
      setHeaders((prev) => {
        return { ...prev, [key]: value };
      });
    }, []),

    changeBody: useCallback((key, value) => {
      setBody((prev) => {
        return { ...prev, [key]: value };
      });
    }, []),
  };

  useEffect(() => {
    const queryString = ["?"];
    for (const key in queryParams) {
      if (queryParams[key]) {
        const string = `${key}=${queryParams[key]}&`;
        queryString.push(string);
      }
    }
    const params = queryString.join("").slice(0, -1);
    setUrl(`${req.base_url}${params}`);
  }, [queryParams]);

  useEffect(() => {
    setDefaultHeaders();
  }, []);


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

          {req.params && req.params.length ? (
            <div className="requiest_params_body">
              <ParamsTitle />
              {req.params.map((param) => (
                <RequiestQuery
                  reqControls={reqControls}
                  key={param.name}
                  {...param}
                  access={access}
                  clear={clear}
                  reqId={req.id}
                />
              ))}
            </div>
          ) : null}

          {access && (
            <ExecuteClearGroup
              onExecute={callbacks.onExecute}
              onClear={callbacks.onClear}
            />
          )}
          <div className="requiest_white_card">
            <p>Responses</p>
          </div>
          <CodeBlock
            title={"url"}
            code={typeof url !== "undefined" ? url : "In progress"}
          />
          {isheadersNotEmpty && <CodeBlock title={"headers"} code={headers} />}
          {isBodyNotEmpty && <CodeBlock title={"body"} code={body} />}
          {response && access && (
            <CodeBlock title={"Response"} code={response} />
          )}
        </div>
      </CollapseCard>
    </div>
  );
}

export default memo(RequiestItem);
