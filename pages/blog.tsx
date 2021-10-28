import { Text } from "../components/common/Text";

const Blog = () => {
  return (
    <div className="flex flex-col flex-1 mt-24">
      <Text as="h1" className="mb-8 text-4xl font-bold">
        Blog
      </Text>
      <form>
        <label htmlFor="search" className="block sr-only">
          Search
        </label>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full bg-gray-200 border-transparent border-none rounded-md focus:bg-offwhite focus:ring-yellow-600 focus:ring-4"
          placeholder="Looking for something?"
        />
      </form>
    </div>
  );
};

export default Blog;
