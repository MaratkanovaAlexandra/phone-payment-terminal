import { FC } from "react";

import Center from "../Center";
import { Back, LoadRing } from "./Loader.style";

const Loader: FC = () => (
  <Back>
    <Center>
      <LoadRing>
        <div />
        <div />
        <div />
        <div />
      </LoadRing>
    </Center>
  </Back>
);

export default Loader;
