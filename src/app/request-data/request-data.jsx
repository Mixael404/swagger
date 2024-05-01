import { memo, useCallback, useEffect, useMemo, useState } from "react";
import RequestItem from "../request-item/request-item";
import { addParamsToUrl } from "../../utils/add-params-to-url/add-params-to-url";

function RequestData({ req }) {
    const [url, setUrl] = useState(req.base_url);
    const [queryParams, setQueryParams] = useState({});
    const [headers, setHeaders] = useState({});
    const [body, setBody] = useState({});

    const setDefaultParams = useCallback(function () {
        const paramTypes = {
            header: {},
            query: {},
            body: {},
        };
        req.params.forEach((param) => {
            if (param.defaultValue) {
                paramTypes[param.paramGroup][param.name] = param.defaultValue;
            } else {
                paramTypes[param.paramGroup][param.name] = null;
            }
        });

        const { header, query, body } = paramTypes;

        setHeaders(header);
        setQueryParams(query);
        setBody(body);
    }, []);

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

    const params = useMemo(() => {
        return { url, queryParams, headers, body };
    }, [url, headers, body]);

    useEffect(() => {
        setUrl(addParamsToUrl(req.base_url, queryParams));
    }, [queryParams]);

    return (
        <RequestItem
            req={req}
            params={params}
            setDefaultParams={setDefaultParams}
            reqControls={reqControls}
        />
    )
}

export default memo(RequestData)