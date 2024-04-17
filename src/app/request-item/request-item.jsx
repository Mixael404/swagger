import { memo, useCallback, useEffect, useMemo, useState } from "react";
import CollapseCard from "../../components/collapse-card/collapse-card";
import { ParamsControlBtn } from "../../components/params-control-btn/params-control-btn";
import { getColor } from "../../utils/get-color/get-color";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";
import { QueriesBlock } from "../../components/queries-block/queries-block";
import { apiService } from "../../api-service/api.service";
import { WhiteCard } from "../../components/white-card/white-card";
import { RequestTitle } from "../../components/request-title/request-title";
import { RequestControls } from "../request-controls/request-controls";
import { addParamsToUrl } from "../../utils/add-params-to-url/add-params-to-url";
import { SpaceBetweenLayout } from "../../components/layouts/space-between-layout/space-between-layout";
import { Tooltip } from "../../components/tooltip/tooltip";

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

  const params = useMemo(() => {
   return {url, queryParams, headers, body}
  }, [url, headers, body]) 


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
    setUrl(addParamsToUrl(req.base_url, queryParams));
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
        <SpaceBetweenLayout>
          <RequestTitle title={req.title} />
          <Tooltip text={req.tooltipContent}/>
        </SpaceBetweenLayout>

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
          isAccess={isAccess}
        />

        <RequestControls 
        isAccess={isAccess}
        params={params}
        method={req.method}
        onClear={callbacks.onClear}
        />

      </CollapseCard>
    </div>
  );
}

export default memo(RequestItem);
