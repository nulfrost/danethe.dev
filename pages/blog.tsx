import { Text } from "../components/common/Text";
import fs from "fs";
import path from "path";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Post } from "../components/Post";

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "/pages/posts");
  const markdownFiles = fs.readdirSync(postsDir);
  const posts = markdownFiles.map((file) => {
    const meta = require(`./posts/${file}`).metadata;
    const slug = file.replace(".mdx", "");

    return {
      title: meta.title,
      description: meta.description,
      date: meta.date,
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
      staggerChildren: 0.2,
    },
  },
};

const Blog = ({ posts }) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [filteredPosts, setFilteredPosts] = useState<any[]>(posts);

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
      <div className="mt-6">
        {!filteredPosts.length ? (
          <span className="text-lg text-grayish">
            Hmm..I can&apos;t find that post, try searching again maybe?
          </span>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {filteredPosts.map((post) => (
              <Post {...post} key={post.title} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;
