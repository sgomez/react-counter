import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { MouseEventHandler } from "react";

import { CounterButton as StyledCounterButton } from "./styles";

type ButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  step: number;
};

const IncrementButton: React.FunctionComponent<ButtonProps> = ({
  onClickHandler,
  step,
}) => {
  console.debug(`IncrementButton ${step}`);
  return (
    <StyledCounterButton onClick={onClickHandler} data-step={step}>
      <ChevronRightIcon height={12} /> {step}
    </StyledCounterButton>
  );
};

export default React.memo(IncrementButton);
