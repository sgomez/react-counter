import React from "react";

import { CounterButtons as StyledCounterButtons } from "./styles";

type Props = {
  children: React.ReactNode;
};

const CounterButtons: React.FunctionComponent<Props> = ({ children }) => {
  console.debug("CounterButtons");

  return <StyledCounterButtons>{children}</StyledCounterButtons>;
};

// export default CounterButtons;
export default React.memo(CounterButtons);
