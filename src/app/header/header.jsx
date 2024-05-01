import { memo, useContext } from "react";
import { serviceContext } from "../../context/service-context";
import { SpaceBetweenLayout } from "../../components/layouts/space-between-layout/space-between-layout";
import { CustomSelect } from "../../components/custom-select/custom-select";
import { LinkLikeButton } from "../../components/link-like-button/link-like-button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config/constants/url.constant";
function Header() {

  const {selectedService, servicesList} = useContext(serviceContext)
  const options = Object.keys(servicesList)

  const navigate = useNavigate()

  const onSelect = (e) => {
    const selected = servicesList[e.target.value]
    navigate(`?service=${selected.title}`)
  };

  return (
    <SpaceBetweenLayout>

      <CustomSelect
      onSelect={onSelect}
      selectedService={selectedService.title}
      options={options}
      />
      
      <LinkLikeButton url={"https://github.com/Mixael404/swagger"} isBlank={true} />
    </SpaceBetweenLayout>
  );
}

export default memo(Header);
