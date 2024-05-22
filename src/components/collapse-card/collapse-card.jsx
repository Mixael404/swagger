import { memo, useEffect, useRef } from "react";
import "./collapse-card.css";
import { getColor } from "../../utils/get-color/get-color";

function CollapseCard({id, title, method, children}) {

  const buttonRef = useRef(null)
  const color = method ? getColor(method) : 'grey'
  useEffect(() => {
    buttonRef.current.classList.add("collapsed")
  }, [id])
  return (
    <>
      <p>
        <button
          className={`btn btn-primary ${color}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls="collapseExample"
          ref={buttonRef}
        >
          <div className="method">
              {method || ""}
          </div>
          {title}
        </button>
      </p>
      <div className={`collapse`} id={`collapse${id}`}>
        <div className={method ? `card card-body ${color}` : `card card-body empty-bg`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default memo(CollapseCard)
