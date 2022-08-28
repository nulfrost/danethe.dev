import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";

export function loader({}: LoaderArgs) {
  // ideally return the most recent things I've bookmarked
  return json({});
}

export default function Index() {
  return (
    <>
      <section className="text-center">
        <h1 className="text-2xl font-bold">Hi, I'm Dane</h1>
        <p className="max-w-lg mx-auto">
          I am a developer that enjoys building cool experiences on the web with
          the latest web technologies and an advocate for accessibility.
        </p>
      </section>
      <section className="text-center">
        <div>
          <h2 className="text-2xl font-bold">Bookmarks</h2>
          <p>Interesting things I've found on the web</p>
        </div>
        <ul className="grid grid-cols-3">
          <li>
            <a href="https://testingaccessibility.com/introducing-keyboard-testing-library-by-grunet">
              Bringing Together Keyboard-only and Click-based UI Tests with
              keyboard-testing-library
            </a>
          </li>
          <li>
            <a href="https://github.com">github</a>
          </li>
          <li>
            <a href="https://github.com">github</a>
          </li>
        </ul>
      </section>
    </>
  );
}
