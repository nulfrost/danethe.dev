export default function Uses() {
  return (
    <section>
      <h1 className="mb-2 text-6xl font-bold">Uses</h1>
      <p className="mb-16 text-gray-400">
        Things I use on a daily basis for development
      </p>
      <Hardware />
      <Software />
    </section>
  );
}

function Hardware() {
  return (
    <>
      <h2 id="gear" className="text-3xl font-bold">
        Gear
      </h2>
      <ul
        aria-labelledby="gear"
        className="list-disc [&>li]:ml-5 mb-16"
        role="list"
      >
        <li role="listitem">13 inch M1 Macbook Air (Personal)</li>
        <li role="listitem">15 inch 2019 Macbook Pro (Work)</li>
        <li role="listitem">AirPods Pro</li>
        <li role="listitem">LG 27GL83A</li>
        <li role="listitem">
          Gameboy Advance with AGS-101 screen modification
        </li>
        <li role="listitem">
          NK65 Mechanical keyboard
          <h2 id="components" className="sr-only">
            Keyboard components
          </h2>
          <ul
            className="list-[circle] [&>li]:ml-5"
            aria-labelledby="components"
            role="list"
          >
            <li role="listitem">
              <a
                href="https://kbdfans.com/products/cherry-profile-cement-grey-japanese-pbt-dye-sub-keycaps-set"
                className="text-sm font-bold uppercase hover:underline link-focus"
              >
                Cherry Profile Cement Grey PBT Keycaps
              </a>
            </li>
            <li role="listitem">
              <a
                href="https://loobedswitches.com/products/gateron-yellows-lubed"
                className="text-sm font-bold uppercase hover:underline link-focus"
              >
                Gateron Milky Yellow Switches, lubed
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

function Software() {
  return (
    <>
      <h2 id="development" className="text-3xl font-bold">
        Development
      </h2>
      <ul
        aria-labelledby="development"
        className="list-disc [&>li]:ml-5"
        role="list"
      >
        <li role="listitem">VSCode</li>
        <li role="listitem">Figma</li>
        <li role="listitem">Microsoft Edge</li>
        <li role="listitem">Spotify</li>
        <li role="listitem">Discord</li>
        <li role="listitem">Notion</li>
        <li role="listitem">iTerm</li>
      </ul>
    </>
  );
}
