import React from "react";

type Props = {
  // what the hell do i type this as
  as: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children: React.ReactNode;
};

export const Text: React.FunctionComponent<Props> = ({ as, children }) => {
  const Component = as || "p";

  return <Component>{children}</Component>;
};
