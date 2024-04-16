import { memo } from "react";
import RequestItem from "../request-item/request-item";
import RequestsLayout from "../../components/layouts/requiests-layout/requiests-layout";

function RequestsList({ data, selectedService }) {
  const requests = data[selectedService].requests;

  return (
    <RequestsLayout>

      {requests.map((req) => (
        <RequestItem key={req.id} req={req} />
      ))}

      <div>Base url: {selectedService}</div>
    </RequestsLayout>
  );
}

export default memo(RequestsList);

// request
