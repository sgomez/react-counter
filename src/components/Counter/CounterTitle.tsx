import React, { ReactNode } from "react";

import { StyledCounterTitle } from "./styles";

type Props = {
  children: ReactNode;
};

const CounterTitle: React.FunctionComponent<Props> = ({ children }) => {
  console.debug("CounterTitle");
  return <StyledCounterTitle>{children}</StyledCounterTitle>;
};

export default React.memo(CounterTitle);
