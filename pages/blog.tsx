import { Text } from "../components/common/Text";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "/pages/posts");
  const markdownFiles = fs.readdirSync(postsDir);
  const posts = markdownFiles.map((file) => {
    const filePath = path.join(postsDir, file);
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Blog = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFilteredPosts(
      posts?.filter((post) =>
        post.title
          .toLowerCase()
          .includes(searchInputRef?.current?.value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex flex-col flex-1 mt-24">
      <Text as="h1" className="mb-8 text-4xl font-bold">
        Blog
      </Text>
      <form onSubmit={onSubmit}>
        <label htmlFor="search" className="block sr-only">
          Search for a blog post
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full bg-gray-200 border-transparent border-none rounded-md focus:bg-offwhite focus:ring-yellow-600 focus:ring-4"
          placeholder="Looking for something?"
          ref={searchInputRef}
        />
      </form>
      <motion.div
        className="grid grid-cols-2 mt-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredPosts.map((post) => (
          <motion.article key={post.title} variants={item}>
            <Link href={`/posts/${post.slug}`}>
              <a aria-label={`Read ${post.title}`} className="w-max">
                <Text as="h2" className="text-xl font-semibold rounded-md">
                  {post.title}
                </Text>
              </a>
            </Link>
            <section className="mb-8">
              <Text as="p" className="text-grayish">
                {post.description}
              </Text>
            </section>
            <footer>
              <time className="text-sm text-grayish">
                {new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
                  new Date(post.date)
                )}
              </time>
            </footer>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
