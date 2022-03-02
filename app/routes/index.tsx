import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "phosphor-react";
import { MetaFunction } from "remix";

export const meta: MetaFunction = () => ({
  title: "Dane - Frontend Developer",
  description:
    "Hi, I'm Dane. Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "og:title": "Dane - Frontend Developer",
  "og:url": "https://danethe.dev",
  "og:site_name": "Dane Miller",
  "og:type": "website",
  "og:description":
    "Hi, I'm Dane. Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "og:image:width": "1280",
  "og:image:height": "640",
  "og:image":
    "https://og-image-six-ashen.vercel.app/**Dane%20-%20Frontend%20Developer**.png?md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets&widths=1280&heights=640",
  "og:image:secure_url":
    "https://og-image-six-ashen.vercel.app/**Dane%20-%20Frontend%20Developer**.png?md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets&widths=1280&heights=640",
  "twitter:creator": "@hybridearth",
  "twitter:site": "@hybridearth",
  "twitter:title": "Dane - Frontend Developer",
  "twitter:description":
    "Hi, I'm Dane. Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "twitter:card": "summary_large_image",
  "twitter:image":
    "https://og-image-six-ashen.vercel.app/**Dane%20-%20Frontend%20Developer**.png?md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets&widths=1280&heights=640",
});

export default function Index() {
  return (
    <div className="flex justify-center flex-col flex-1">
      <h1 className="text-6xl font-bold font-lexend mb-2">Dane</h1>
      <p className="text-2xl mb-6">
        Currently working at{" "}
        <abbr title="Bank of Montreal" className="font-bold text-secondary-2">
          BMO
        </abbr>{" "}
        as a frontend developer on the accessibility team.
      </p>
      <ul className="flex gap-6">
        <li className="hover:rotate-12 duration-150">
          <a
            href="http://github.com/nulfrost"
            title="github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to github profile, opens in a new tab"
          >
            <GithubLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li className="hover:-rotate-12 duration-150">
          <a
            href="https://www.linkedin.com/in/dmiller94/"
            title="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to linkedin profile, opens in a new tab"
          >
            <LinkedinLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li className="hover:rotate-12 duration-150">
          <a
            href="https://twitter.com/hybridearth"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
            aria-label="Go to twitter profile, opens in a new tab"
          >
            <TwitterLogo size={32} weight="bold" aria-hidden="true" />
          </a>
        </li>
        <li className="hover:-rotate-12 duration-150">
          <address>
            <a
              href="mailto:khadane.miller@gmail.com"
              title="e-mail"
              aria-label="Send an e-mail to dane, opens an e-mail client"
            >
              <EnvelopeSimple size={32} weight="bold" aria-hidden="true" />
            </a>
          </address>
        </li>
      </ul>
    </div>
  );
}
