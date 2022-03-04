import { ReactNode } from "react";

export function PageSection({
  children,
  ...props
}: {
  children: ReactNode;
  [x: string]: any;
}) {
  return <section {...props}>{children}</section>;
}
