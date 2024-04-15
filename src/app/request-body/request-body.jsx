import { memo } from "react";
import RequestItem from "../../components/request-item/request-item";
import RequiestsLayout from "../../components/layouts/requiests-layout/requiests-layout";

function RequestBody({ data, selectedService }) {
  const requests = data[selectedService].requiests;

  return (
    <RequiestsLayout>

      {requests.map((req) => (
        <RequestItem key={req.id} req={req} />
      ))}

      <div>Base url: {selectedService}</div>
    </RequiestsLayout>
  );
}

export default memo(RequestBody);

// request
