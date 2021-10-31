import Link from "next/link";
import { Text } from "../components/common/Text";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Post: React.FunctionComponent<Props> = ({
  title,
  slug,
  description,
  date,
}) => {
  return (
    <motion.article variants={item}>
      <Link href={`/posts/${slug}`}>
        <a
          aria-label={`Read ${title}`}
          className="text-xl font-semibold outline-none focus:ring-yellow-600 focus:ring-4"
        >
          {title}
        </a>
      </Link>
      <section className="mb-3">
        <Text as="p" className="text-sm text-grayish lg:text-md">
          {description}
        </Text>
      </section>
      <footer className="flex flex-col gap-4">
        <time className="text-sm text-grayish">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date(date))}
        </time>
        <Link href={`/posts/${slug}`}>
          <a
            aria-label={`Go to ${title}`}
            className="text-sm font-semibold outline-none focus:ring-yellow-600 focus:ring-4 w-max"
          >
            Read More &rarr;
          </a>
        </Link>
      </footer>
    </motion.article>
  );
};
