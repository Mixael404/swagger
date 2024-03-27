import { memo } from "react";
import "./collapse-card.css";

function CollapseCard({id, title, color, children}) {
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
        >
          {title}
        </button>
      </p>
      <div className="collapse" id={`collapse${id}`}>
        <div className="card card-body">
          {children}
        </div>
      </div>
    </>
  );
}

export default memo(CollapseCard)
