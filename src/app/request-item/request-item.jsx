import { memo, useCallback, useMemo, useState } from "react";
import CollapseCard from "../../components/collapse-card/collapse-card";
import { ParamsControlBtn } from "../../components/params-control-btn/params-control-btn";
import { QueriesBlock } from "../../components/queries-block/queries-block";
import { WhiteCard } from "../../components/white-card/white-card";
import { RequestTitle } from "../../components/request-title/request-title";
import RequestControls from "../request-controls/request-controls";
import { SpaceBetweenLayout } from "../../components/layouts/space-between-layout/space-between-layout";
import { Tooltip } from "../../components/tooltip/tooltip";

function RequestItem({ req, params, setDefaultParams, reqControls }) {
  const [isAccess, setIsAccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [clear, setClear] = useState(false);
  
  const callbacks = {
    changeAccess: useCallback(() => {
      setIsAccess((prev) => !prev);
      setClear((prev) => !prev);
      setDefaultParams();
    }, []),

    onClear: useCallback(() => {
      setClear((prev) => !prev);
      setErrors([])
      setDefaultParams()
    }, []),
    
    addError: useCallback((name) => {
      setErrors(prev => {
        if(prev.includes(name)){
          return [...prev]
        }
        return [...prev, name]
      })
    }, []),

    removeError: useCallback((name) => {
      setErrors(prev => {
        const newErrors = prev.filter(error => error !== name)
        return newErrors
      })
    }, []),
  };

  const isAnyMistake = useMemo(() => errors.length === 0 ? false : true, [errors])

  return (
    <div style={{ width: "95%" }}>
      <CollapseCard
        id={req.id}
        title={req.title}
        method={req.method}
      >

        <SpaceBetweenLayout>
          <RequestTitle title={req.title} />
          <Tooltip text={req.tooltipContent} />
        </SpaceBetweenLayout>

        <WhiteCard title={"Parameters"}>
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
          addError={callbacks.addError}
          removeError={callbacks.removeError}
        />

        <RequestControls
          isAnyMistake={isAnyMistake}
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
