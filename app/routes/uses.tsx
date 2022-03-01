export default function Uses() {
  return (
    <>
      <h1 className="text-6xl font-bold font-lexend mb-4 text-secondary-3">
        Uses
      </h1>
      <div className="max-w-5xl prose prose-headings:text-accent prose-h2:font-bold prose-h2:text-2xl prose-ul:text-accent prose-a:text-highlight prose-a:font-bold prose-a:underline">
        <h2 id="hardware">Hardware</h2>
        <ul aria-labelledby="hardware">
          <li>2021 13 inch M1 Macbook air</li>
          <li>2019 15 inch Macbook PRO</li>
          <li>iPhone 12</li>
          <li>
            NK65 Mechanical keyboard with{" "}
            <a
              href="https://kbdfans.com/products/cherry-profile-cement-grey-japanese-pbt-dye-sub-keycaps-set"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHERRY PROFILE CEMENT GREY JAPANESE PBT DYE-SUB KEYCAPS
            </a>{" "}
            and{" "}
            <a
              href="https://loobedswitches.com/products/gateron-yellows-lubed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gateron Milky Yellow switches, lubed
            </a>
          </li>
        </ul>
        <h2 id="dev">Dev</h2>
        <ul aria-labelledby="dev">
          <li>Chrome</li>
          <li>Notion</li>
          <li>JavaScript, TypeScript, Golang</li>
          <li>VS Code</li>
        </ul>
        <h2 id="miscellaneous">Miscellaneous</h2>
        <ul aria-labelledby="miscellaneous">
          <li>Spotify</li>
          <li>Slack</li>
          <li>Discord</li>
        </ul>
      </div>
    </>
  );
}
