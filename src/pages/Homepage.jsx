import React from "react";
import post from "../data/post";
import BlogCard from "../components/Blogcard";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="p-6">

       <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">Welcome to GreenLeaves</h1>
       <p className="text-lg text-gray-700 mb-6 text-center">
        GreenLeaves is your trusted companion for indoor plant care.
        Whether you're new to plants or a seasoned plant parent,
        <br></br> 
        we’re here to help you grow happier, healthier greens.
      </p>
      <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Latest Posts</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/blog"
          className="bg-emerald-800 text-white px-6 py-2 rounded hover:bg-green-700">
            View All Blog Posts
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
