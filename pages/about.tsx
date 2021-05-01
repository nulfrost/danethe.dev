import Layout from "@/components/sections/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <motion.div
        className="mt-[88px] lg:mt-[184px] text-skin-base"
        layoutId="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-10">
          <h2 className="mb-2 text-4xl font-bold">About</h2>
          <p className=" text-skin-secondary">a little bit about myself</p>
        </div>
        <div className="pb-10 space-y-8 leading-relaxed lg:space-y-20 lg:text-2xl lg:pb-0 text-md text-skin-secondary">
          <p style={{ textIndent: 50 }}>
            As a young lad I've always been interested in technology. I remember
            the day my family got our first computer, it wasn't the fastest
            thing in the world but I enjoyed the time I got to spend on it even
            if it wasn't much. These days I spend a lot of time at my computer
            whether it be gaming away with friends or deciding if I should buy
            another domain for the side project I thought about five minutes
            prior. Joking aside, that's what I love about web development, I can
            go from an idea to hacking up a prototype within minutes and that's
            something that keeps me going.
          </p>
          <p style={{ textIndent: 50 }}>
            Currently I'm focusing on continuing to build my skills as a
            developer and delving deeper into the cloud computing space. My
            current technology stack of choice is React/Next.js, TypeScript,
            TailwindCSS and AWS Amplify. Depending on what I'm working on though
            it usually changes but not drastically. When I'm not trying to think
            about the next billion dollar app idea I enjoy playing video games
            with my friends, discovering new music to listen to as well as doing
            cool tricks on my skateboard.
          </p>
        </div>
      </motion.div>
    </Layout>
  );
}
