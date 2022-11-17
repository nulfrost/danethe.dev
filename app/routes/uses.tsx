import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = ({}) => ({
  title: "Dane's site | Uses",
});

export default function Uses() {
  return (
    <>
      <h1 className="mt-4 mb-8 text-2xl font-bold text-snes-black">Uses</h1>
      <h2 className="text-lg font-bold text-snes-black">Hardware</h2>
      <ul className="pl-5 mb-8 list-disc">
        <li>Macbook Pro 2019 15 inch (Work)</li>
        <li>Macbook Air 2021 13 inch (Personal)</li>
        <li>Caldigit TS3 Plus</li>
        <li>NK65 Mechanical Keyboard</li>
        <ul className="pl-5 list-disc">
          <li>Loobedswitches Gateron Milky Yellow Switches, Lubed</li>
          <li>CHERRY PROFILE CEMENT GREY JAPANESE PBT DYE-SUB KEYCAPS SET</li>
        </ul>
      </ul>
      <h2 className="text-lg font-bold text-snes-black">Software</h2>
      <ul className="pl-5 list-disc">
        <li>Visual Studio Code</li>
        <li>Notion</li>
        <li>Microsoft Edge</li>
        <li>iTerm 2</li>
        <li>Docker</li>
      </ul>
    </>
  );
}
