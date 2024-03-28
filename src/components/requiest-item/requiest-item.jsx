import { memo, useCallback, useState } from "react";
import CollapseCard from "../collapse-card/collapse-card";
import "./requiest-item.css";
import { RequiestQuery } from "../requiest-query/requiest-query";
import { ExecuteClearGroup } from "../execute-clear-group/execute-clear-group";
import { ParamsTitle } from "../params-title/params-title";
import { ParamsControlBtn } from "../params-control-btn/params-control-btn";
import { getColor } from "../../utils/get-color/get-color";
import { CodeBlock } from "../code-block/code-block";

function RequiestItem({ req }) {
  const [access, setAccess] = useState(false);
  const [url, setUrl] = useState(req.base_url)

  const callbacks = {
    changeAccess: useCallback(() => setAccess(prev => !prev), []),
  }

  const reqControls = {
    changeUrl: useCallback((value) => {
      setUrl(req.base_url + `/${value}`)
    }, []),
  }

  const color = getColor(req.method)

  return (
    <div className="requiest_item">
      <CollapseCard id={req.id} title={req.title} method={req.method} color={color}>
        <div className="body">
          <p className="requiest_title"> {req.title}</p>
          <div className="requiest_white_card">
            <p>Parameters</p>
            <ParamsControlBtn access={access} setAccess={callbacks.changeAccess} />
          </div>

          {req.queries && req.queries.length && (
            <div className="requiest_params_body">
              <ParamsTitle />
              {req.queries.map((query) => (
                <RequiestQuery reqControls={reqControls} key={query.name} {...query} access={access} />
              ))}
            </div>
          )}

          {access && <ExecuteClearGroup />}
          <div className="requiest_white_card">
            <p>Responses</p>
          </div>
          <CodeBlock title={"url"} code={url} />
        </div>
      </CollapseCard>
    </div>
  );
}

export default memo(RequiestItem);
