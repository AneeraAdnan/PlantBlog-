import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="bg-white rounded shadow w-full max-w-sm m-4">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-800">{post.title}</h3>
        <p className="text-sm text-black-700 mt-2">
          {post.summary.length > 100 ? post.summary.substring(0, 100) + "..." : post.summary}
        </p>
        <p className="text-xs text-gray-500 mt-2">{post.date}</p>
        
        {/* <Link to='/blog'>
           Read Me
        </Link> */}

        <Link
          to={`/post/${post.slug}`}
          className=" mt-3 text-green-600 text-sm">
          Read More
        </Link>

      </div>
    </div>
  );
};

export default BlogCard;

