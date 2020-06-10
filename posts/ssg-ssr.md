---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---
# Test
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.   

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

```javascript
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
```