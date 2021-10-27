import React from "react";
import clsx from "clsx";

type Props = {
  // what the hell do i type this as
  as: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export const Text: React.FunctionComponent<Props> = ({
  as,
  children,
  className,
  ...props
}) => {
  const Component = as || "p";

  return (
    <Component className={clsx("dark:text-offwhite", className)} {...props}>
      {children}
    </Component>
  );
};
