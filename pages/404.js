import Layout from "@/components/layout";

export default function Custom404() {
  return (
    <Layout title="4 Oh 4">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="p-5 text-center text-white bg-green-500 rounded-lg md:w-1/2">
          <h1 className="mb-2 text-4xl font-bold">404!</h1>
          <p className="text-sm">
            Oh that's embarassing, there doesn't seem to be anything here!
            ...yet
          </p>
        </div>
      </div>
    </Layout>
  );
}
