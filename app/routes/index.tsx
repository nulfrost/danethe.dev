import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "phosphor-react";

export default function Index() {
  return (
    <>
      <h1 className="text-6xl font-bold font-lexend mb-2">Dane</h1>
      <p className="text-2xl mb-6">
        Currently working at{" "}
        <abbr title="Bank of Montreal" className="font-bold text-secondary-2">
          BMO
        </abbr>{" "}
        as a frontend developer on the accessibility team.
      </p>
      <ul className="flex gap-6">
        <li>
          <a
            href="http://github.com/nulfrost"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to github profile, opens in a new tab"
          >
            <GithubLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dmiller94/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to linkedin profile, opens in a new tab"
          >
            <LinkedinLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/hybridearth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to twitter profile, opens in a new tab"
          >
            <TwitterLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li>
          <address>
            <a
              href="mailto:khadane.miller@gmail.com"
              aria-label="Send an e-mail to dane, opens an e-mail client"
            >
              <EnvelopeSimple size={32} weight="bold" aria-hidden="true" />
            </a>
          </address>
        </li>
      </ul>
    </>
  );
}
