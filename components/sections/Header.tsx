import Image from "next/image";

import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center min-h-screen text-center">
        <div>
          <Image
            src="/images/dane2.png"
            height={250}
            width={250}
            alt="A picture of dane but in cartoon version"
            className="mb-8 rounded-full"
          />
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
            Hey, I'm Dane.
          </h1>
          <div className="text-center text-gray-500 lg:text-lg">
            <p>
              I'm a{" "}
              <span className="font-bold text-black">Frontend Developer</span>{" "}
              from Toronto.
            </p>
            <p className="mb-4">
              I specialize in making{" "}
              <span className="font-bold text-black">fast</span> and{" "}
              <span className="font-bold text-black">responsive</span> websites
              using the latest web technologies
            </p>
            <ul className="flex justify-center mb-3 space-x-3">
              <li>
                <a
                  href="https://github.com/nulfrost"
                  className="mb-4 text-lg text-gray-400 duration-150 hover:text-gray-600"
                  target="_blank"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/hybridearth"
                  className="mb-4 text-lg text-gray-400 duration-150 hover:text-gray-600"
                  target="_blank"
                >
                  <FaTwitter className="text-3xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dmiller94/"
                  className="mb-4 text-lg text-gray-400 duration-150 hover:text-gray-600"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <hr
        style={{
          borderTop: "5px solid #7E90A0",
          marginBottom: "2.5rem",
        }}
      />
    </>
  );
}
