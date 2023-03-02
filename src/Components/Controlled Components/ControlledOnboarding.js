import React from "react";

const ControlledOnboarding = ({ children, step, next, back }) => {
  const currentComponent = React.Children.toArray(children)[step];

  if (React.isValidElement(currentComponent))
    return React.cloneElement(currentComponent, { next, back });

  return currentComponent;
};

export default ControlledOnboarding;
