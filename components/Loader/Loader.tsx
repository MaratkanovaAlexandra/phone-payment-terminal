import { FC } from "react";

import Center from "../Center";
import { Back, LoadRing } from "./Loader.style";

type LoaderProps = {
  fullScreen?: boolean;
};

const Loader: FC<LoaderProps> = ({ fullScreen }) => (
  <Back fullScreen={fullScreen}>
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

Loader.defaultProps = {
  fullScreen: false,
};

export default Loader;
