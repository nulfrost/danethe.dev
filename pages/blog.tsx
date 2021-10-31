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

  // @ts-ignore
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts: sortedPosts,
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
      <form onSubmit={onSubmit} className="flex flex-col gap-2 lg:flex-row">
        <label htmlFor="search" className="block sr-only">
          Search for a blog post
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full px-5 py-3 bg-gray-200 border-transparent border-none rounded-md lg:w-10/12 focus:bg-offwhite focus:ring-yellow-600 focus:ring-4"
          placeholder="Looking for something?"
          ref={searchInputRef}
        />
        <button
          type="submit"
          className="w-full px-2 py-3 font-bold duration-150 rounded-md lg:w-2/12 bg-kinda-black text-offwhite hover:bg-gray-700"
        >
          Search
        </button>
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
