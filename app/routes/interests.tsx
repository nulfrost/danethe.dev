import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site | Interests",
});

export default function Interests() {
  return <img src="./construction.gif" alt="" />;
}
