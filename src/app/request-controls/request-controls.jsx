import { memo, useState, useCallback, useEffect } from "react";
import { QueriesBlock } from "../../components/queries-block/queries-block";
import { ExecuteClearGroup } from "../../components/execute-clear-group/execute-clear-group";
import { ResponsesBlock } from "../../components/responses-block/responses-block";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";
import { apiService } from "../../api-service/api.service";

function RequestControlsComponent({isAccess, params, method, onClear}) {
    const [response, setResponse] = useState(null)
    const callbacks = {
        onExecute: useCallback(async () => {
            const filteredHeaders = filterEmptyFields(params.headers);
      
            const data = await apiService.request(
              params.url,
              method,
              filteredHeaders,
              params.body
            );
            setResponse(data);
          }, [params.url, params.headers, params.body]),
    }

    useEffect(() => {
        if(!isAccess){
            setResponse('')
        }
    }, [isAccess])

  return (
    <>
      {isAccess && (
        <ExecuteClearGroup
          onExecute={callbacks.onExecute}
          onClear={onClear}
        />
      )}

      <ResponsesBlock
        url={params.url}
        headers={params.headers}
        body={params.body}
        response={response}
      />
    </>
  );
}

export const RequestControls = memo(RequestControlsComponent);
