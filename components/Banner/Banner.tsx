import { FC } from "react";
import { BannerComponent } from "./Banner.style";

import { Center } from "../Center";

type BannerPrors = {
  ok: boolean;
  code: number;
  message: string;
};

export const Banner: FC<BannerPrors> = (props) => {
  const { ok, code, message } = props;
  return (
    <BannerComponent status={ok ? "success" : "error"}>
      <Center>
        {ok ? (
          <p>{message}</p>
        ) : (
          <p>
            Server responder with Banner code: {code} and message: {message}
          </p>
        )}
      </Center>
    </BannerComponent>
  );
};
