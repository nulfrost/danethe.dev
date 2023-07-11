import { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = ({}) => [
  {
    title: "Dane's site / Blog",
  },
];

export default function Blog() {
  return <img src="./construction.gif" alt="" />;
}
