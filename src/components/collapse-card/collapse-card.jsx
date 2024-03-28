import { memo, useEffect, useRef } from "react";
import "./collapse-card.css";

function CollapseCard({id, title, color, method, children}) {

  const buttonRef = useRef(null)

  // To make requiest collapsed button full circled after mounting (without it button without border-radius in the bottom)
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
              {method}
          </div>
          {title}
        </button>
      </p>
      <div className={`collapse`} id={`collapse${id}`}>
        <div className={`card card-body ${color}`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default memo(CollapseCard)
