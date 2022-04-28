import { FC } from "react";

import ProviderItem from "./ProviderItem";
import Provider from "../../interfaces/Provider";
import { StyledUl } from "./Providers.style";

type ProviderListProps = {
  providers: Provider[];
};

const ProviderList: FC<ProviderListProps> = ({ providers }) => (
  <StyledUl>
    {providers.map((provider) => (
      <ProviderItem {...provider} key={provider.id} />
    ))}
  </StyledUl>
);

export default ProviderList;
