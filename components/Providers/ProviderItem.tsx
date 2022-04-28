import { FC } from "react";
import { useRouter } from "next/router";

import { Item } from "./Providers.style";
import Title from "../Title";
import Provider from "../../interfaces/Provider";

const ProviderItem: FC<Provider> = (props) => {
  const { id, name, icon } = props;
  const router = useRouter();

  return (
    <Item onClick={() => router.push(`/providers/${id}`)}>
      <img src={icon} alt={name} width="40" height="40" />
      <Title fontSize="normal">{name}</Title>
    </Item>
  );
};

export default ProviderItem;
