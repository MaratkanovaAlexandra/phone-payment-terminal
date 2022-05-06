import { FC } from "react";
import ErrorComponent from "./Error.style";

import Center from "../Center";

type ErrorPrors = {
  errCode: number;
  message: string;
};

const Error: FC<ErrorPrors> = (props) => {
  const { errCode, message } = props;
  return (
    <ErrorComponent>
      <Center>
        <p>
          Server responder with error code: {errCode} and message: {message}
        </p>
      </Center>
    </ErrorComponent>
  );
};

export default Error;
