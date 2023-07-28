import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React, { MouseEventHandler } from "react";

import { CounterButton as StyledCounterButton } from "./styles";

type Props = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

const ResetButton: React.FunctionComponent<Props> = ({ onClickHandler }) => {
  console.debug(`ResetButton`);
  return (
    <StyledCounterButton onClick={onClickHandler}>
      <ArrowPathIcon height={12} />
    </StyledCounterButton>
  );
};

export default React.memo(ResetButton);
