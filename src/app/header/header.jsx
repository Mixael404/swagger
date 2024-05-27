import { memo, useContext } from "react";
import { serviceContext } from "../../context/service-context";
import { SpaceBetweenLayout } from "../../components/layouts/space-between-layout/space-between-layout";
import { CustomSelect } from "../../components/custom-select/custom-select";
import { LinkLikeButton } from "../../components/ui/link-like-button/link-like-button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/constants/url.constant";
function Header() {

  const {selectedService, servicesList} = useContext(serviceContext)
  const options = Object.keys(servicesList)

  const navigate = useNavigate()

  const onSelect = (serviceName) => {
    const selected = servicesList[serviceName]
    navigate(`?service=${selected.title}`)
  };

  return (
    <SpaceBetweenLayout>

      <CustomSelect
      changeState={onSelect}
      selectedService={selectedService.title}
      options={options}
      />
      
      <LinkLikeButton url={"/add-service"} isLinkToOuterService={false} text={"Add new service"} />
    </SpaceBetweenLayout>
  );
}

export default memo(Header);
