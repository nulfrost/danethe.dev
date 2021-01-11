import Layout from "@/components/layout";
import Container from "@/components/Container";

export default function About() {
  return (
    <Layout title="About">
      <Container>
        <div className="max-w-2xl px-5 text-sm text-justify lg:text-lg opacity-70">
          <p>
            Hello! My name is Dane and I am a fullstack web developer from
            Toronto, ON. My love for software development comes from the crazy
            (but practical) ideas I come up with and wanting to build them for
            fun or just to learn something new. Outside of making cool websites
            I enjoy photography, playing video games, reading and skateboarding.
          </p>
        </div>
      </Container>
    </Layout>
  );
}
