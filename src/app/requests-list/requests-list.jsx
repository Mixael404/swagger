import { memo, useContext } from "react";
import RequestItem from "../request-item/request-item";
import RequestsLayout from "../../components/layouts/requiests-layout/requiests-layout";
import { serviceContext } from "../../context/service-context";

function RequestsList() {
  const {selectedService} = useContext(serviceContext)
  const requests = selectedService.requests;

  const requestsExist = requests && requests.length
  return (
    <RequestsLayout>

      {requestsExist && requests.map((req) => (
        <RequestItem key={req.id} req={req} />
      ))}

      <div style={{textTransform: "uppercase", fontWeight: 'bold'}}>Service: {selectedService.title}</div>
    </RequestsLayout>
  );
}

export default memo(RequestsList);
