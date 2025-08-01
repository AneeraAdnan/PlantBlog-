import React from "react";
import post from "../data/post";
import BlogCard from "../components/Blogcard";

const Blog = () => {
       return (
    <div className="p-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {post.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Blog;