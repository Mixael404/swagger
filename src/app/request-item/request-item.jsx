import { memo, useCallback, useEffect, useState } from "react";
import CollapseCard from "../../components/collapse-card/collapse-card";
import { ParamsControlBtn } from "../../components/params-control-btn/params-control-btn";
import { getColor } from "../../utils/get-color/get-color";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";
import { QueriesBlock } from "../../components/queries-block/queries-block";
import { apiService } from "../../api-service/api.service";
import { WhiteCard } from "../../components/white-card/white-card";
import { RequestTitle } from "../../components/request-title/request-title";
import { RequestControls } from "../request-controls/request-controls";

// TODO: Добавить где нибудь тултип с расшифровкой принимаемых параметров и результата запроса
function RequestItem({ req }) {
  const [isAccess, setIsAccess] = useState(false);

  const [url, setUrl] = useState(req.base_url);
  const [queryParams, setQueryParams] = useState({});
  const [headers, setHeaders] = useState({});
  const [body, setBody] = useState({});

  const [clear, setClear] = useState(false);

  const setDefaultParams = useCallback(function () {
    const paramTypes = {
      header: {},
      query: {},
      body: {},
    };
    req.params.forEach((param) => {
      if (param.defaultValue) {
        paramTypes[param.inputType][param.name] = param.defaultValue;
      } else {
        paramTypes[param.inputType][param.name] = null;
      }
    });

    const { header, query, body } = paramTypes;

    setHeaders(header);
    setQueryParams(query);
    setBody(body);
  }, []);

  const callbacks = {
    changeAccess: useCallback(() => {
      setIsAccess((prev) => !prev);
      setClear((prev) => !prev);
      setDefaultParams();
    }, []),

    onClear: useCallback(() => {
      setClear((prev) => !prev);
    }, []),
  };

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
    setDefaultParams();
  }, [clear]);

  return (
    <div style={{width: '100%'}}>
      <CollapseCard
        id={req.id}
        title={req.title}
        method={req.method}
        color={getColor(req.method)}
      >
        <RequestTitle title={req.title} />

        <WhiteCard title={'Parameters'}>
          <ParamsControlBtn
            access={isAccess}
            setAccess={callbacks.changeAccess}
          />
        </WhiteCard>

        <QueriesBlock
          req={req}
          reqControls={reqControls}
          clear={clear}
          access={isAccess}
        />

        <RequestControls 
        isAccess={isAccess}
        url={url}
        headers={headers}
        body={body}
        method={req.method}
        onClear={callbacks.onClear}
        />
      </CollapseCard>
    </div>
  );
}

export default memo(RequestItem);
