import { memo, useState, useCallback, useEffect} from "react";
import { ExecuteClearGroup } from "../../components/execute-clear-group/execute-clear-group";
import ResponsesBlock  from "../../components/responses-block/responses-block";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";
import { apiService } from "../../services/api.service";
import { Loading } from "../../components/loading/loading";

function RequestControls({ isAccess, params, method, onClear, isAnyMistake }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callbacks = {
    onExecute: useCallback(async () => {
      const filteredHeaders = filterEmptyFields(params.headers);
      setIsLoading(true)
      const data = await apiService.request(
        params.url,
        method,
        filteredHeaders,
        params.body
      );
      setResponse(data);
      setIsLoading(false)
    }, [params.url, params.headers, params.body]),
  };

  useEffect(() => {
    if (!isAccess) {
      setResponse("");
    }
  }, [isAccess]);

  return (
    <Loading isLoading={isLoading}>
        {isAccess && (
          <ExecuteClearGroup
            onExecute={callbacks.onExecute}
            onClear={onClear}
            isAnyMistake={isAnyMistake}
          />
        )}

        <ResponsesBlock
          url={params.url}
          headers={params.headers}
          body={params.body}
          response={response ? JSON.stringify(response) : null}
        />
    </Loading>
  );
}

export default memo(RequestControls);
