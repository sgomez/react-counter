import React from "react";

import { CounterNumber as StyledCounterNumber } from "./styles";

type Props = {
  value: number;
};

const CounterNumber: React.FunctionComponent<Props> = ({ value }) => {
  console.debug("CounterNumber");

  if (value > 10 || value < -10) {
    throw new Error("Value out of range");
  }

  return <StyledCounterNumber>{value}</StyledCounterNumber>;
};

export default React.memo(CounterNumber);
