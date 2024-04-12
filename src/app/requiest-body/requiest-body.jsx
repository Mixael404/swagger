import { memo } from "react";
import RequiestItem from "../../components/requiest-item/requiest-item";
import RequiestsLayout from "../../components/layouts/requiests-layout/requiests-layout";

function RequiestBody({ data, selectedService }) {
  const requiests = data[selectedService].requiests;

  return (
    <RequiestsLayout>

      {requiests.map((req) => (
        <RequiestItem key={req.id} req={req} />
      ))}

      <div>Base url: {selectedService}</div>
    </RequiestsLayout>
  );
}

export default memo(RequiestBody);

// request
