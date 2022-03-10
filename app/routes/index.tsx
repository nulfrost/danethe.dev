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
    "Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "og:title": "Dane - Frontend Developer",
  "og:url": "https://danethe.dev",
  "og:type": "website",
  "og:description":
    "Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "og:image:width": "1280",
  "og:image:height": "640",
  "og:image":
    "https://res.cloudinary.com/dda1jyofd/image/upload/v1646875027/danethe.dev/Home_Image_cdmm0n.png",
  "og:image:secure_url":
    "https://res.cloudinary.com/dda1jyofd/image/upload/v1646875027/danethe.dev/Home_Image_cdmm0n.png",
  "twitter:creator": "@hybridearth",
  "twitter:site": "@hybridearth",
  "twitter:title": "Dane - Frontend Developer",
  "twitter:description":
    "Frontend Developer from Toronto that's passionate about building fast and accessible websites.",
  "twitter:card": "summary_large_image",
  "twitter:image":
    "https://res.cloudinary.com/dda1jyofd/image/upload/v1646875027/danethe.dev/Home_Image_cdmm0n.png",
});

export default function Index() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <h1 className="mb-2 text-4xl font-bold md:text-6xl font-lexend">Dane</h1>
      <p className="mb-6 text-lg md:text-2xl">
        Currently working at{" "}
        <abbr title="Bank of Montreal" className="font-bold text-secondary-2">
          BMO
        </abbr>{" "}
        as a frontend developer on the accessibility team.
      </p>
      <ul className="flex gap-6 text-sm">
        <li className="duration-150 hover:rotate-12">
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
        <li className="duration-150 hover:-rotate-12">
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
        <li className="duration-150 hover:rotate-12">
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
        <li className="duration-150 hover:-rotate-12">
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
