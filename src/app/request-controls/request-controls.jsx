import { memo, useState, useCallback, useEffect } from "react";
import { QueriesBlock } from "../../components/queries-block/queries-block";
import { ExecuteClearGroup } from "../../components/execute-clear-group/execute-clear-group";
import { ResponsesBlock } from "../../components/responses-block/responses-block";
import { filterEmptyFields } from "../../utils/filter-empty-fields/filter-empty-fields";
import { apiService } from "../../api-service/api.service";

function RequestControlsComponent({isAccess, url, headers, body, method, onClear}) {
    const [response, setResponse] = useState(null)

    const callbacks = {
        onExecute: useCallback(async () => {
            const filteredHeaders = filterEmptyFields(headers);
      
            const data = await apiService.requiest(
              url,
              method,
              filteredHeaders,
              body
            );
            setResponse(data);
          }, [url, headers, body]),
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
        url={url}
        headers={headers}
        body={body}
        response={response}
      />
    </>
  );
}

export const RequestControls = memo(RequestControlsComponent);
