import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site | Blog",
});

export default function Blog() {
  return <img src="./construction.gif" alt="" />;
}
