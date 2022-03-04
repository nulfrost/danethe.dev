import { ReactNode } from "react";

export function Heading({
  level,
  children,
  classNames,
  ...props
}: {
  level: "1" | "2" | "3" | "4" | "5" | "6";
  children: ReactNode;
  classNames?: string;
  [x: string]: any;
}) {
  let Tag = `h${level}`;
  return (
    // @ts-ignore
    <Tag
      {...props}
      className={`${classNames} text-4xl mt-32 lg:mt-52 lg:text-6xl font-bold font-lexend mb-4`}
    >
      {children}
    </Tag>
  );
}
