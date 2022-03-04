import { PageSection, Heading } from "~/components";

export default function About() {
  return (
    <PageSection>
      <Heading level="1" classNames="text-secondary-4">
        About
      </Heading>
      <div className="leading-loose max-w-5xl text-md md:text-lg lg:text-2xl">
        <p className="mb-6">
          Hiya, I'm Dane and welcome to my little corner of the internet. By day
          I'm a frontend developer working at{" "}
          <abbr title="Bank of Montreal">BMO</abbr> where I contribute to making
          sure their websites are accessible. By night I'm usually hacking on
          some side project, playing video games with friends, listening to
          music, or shopping for another mechanical keyboard.
        </p>
      </div>
    </PageSection>
  );
}
