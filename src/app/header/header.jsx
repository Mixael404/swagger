import { memo, useContext } from "react";
import { serviceContext } from "../../context/service-context";
import { SpaceBetweenLayout } from "../../components/layouts/space-between-layout/space-between-layout";
import { CustomSelect } from "../../components/custom-select/custom-select";
import { LinkLikeButton } from "../../components/link-like-button/link-like-button";
function Header() {

  const {selectedService, servicesList, selectService} = useContext(serviceContext)

  const options = Object.keys(servicesList)

  const onSelect = (e) => {
    const selected = servicesList[e.target.value]
    selectService(selected)
  };

  return (
    <SpaceBetweenLayout>

      <CustomSelect
      onSelect={onSelect}
      selectedService={selectedService}
      options={options}
      />
      
      <LinkLikeButton url={"https://github.com/Mixael404/swagger"} isBlank={true} />
    </SpaceBetweenLayout>
  );
}

export default memo(Header);
