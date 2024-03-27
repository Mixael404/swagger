import { memo } from "react";
import CollapseCard from "../collapse-card/collapse-card";
import "./requiest-item.css";

function RequiestItem({req}) {
  let color
  switch (req.method) {
    case "GET":
      color = "blue"
      break;
    case "POST":
      color = "green";
      break;
    case "DELETE":
      color = 'red'
      break;
    default:
      color = 'transparent'
      break;
  }
  return (
    <div className="requiest_item">
      <CollapseCard id={req.id} title={req.title} color={color}>
        <div className="body">
          
        </div>
      </CollapseCard>
    </div>
  );
}

export default memo(RequiestItem)
