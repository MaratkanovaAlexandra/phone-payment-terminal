import { FC } from "react";

import { ProviderItem } from "./ProviderItem";
import { IProvider } from "../../interfaces/Provider";
import { StyledUl } from "./Providers.style";

type ProviderListProps = {
  providers: IProvider[];
};

export const ProviderList: FC<ProviderListProps> = ({ providers }) => (
  <StyledUl>
    {providers.map((provider) => (
      <ProviderItem {...provider} key={provider.id} />
    ))}
  </StyledUl>
);
