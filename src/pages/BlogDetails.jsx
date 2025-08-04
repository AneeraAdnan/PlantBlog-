// import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/Post"; // Adjust path as needed

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = posts.find((post) => post.slug === slug);

  if (!blog) {
    return <div className="text-red-600 text-center mt-10">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded" />
      <p className="text-gray-600 text-sm mt-2">{blog.date}</p>

      <div className="mt-6 space-y-4">
        {blog.content.map((section, idx) => (
          <div key={idx}>
            {section.heading && <h2 className="text-xl font-semibold text-green-700">{section.heading}</h2>}
            <p className="text-gray-800 mt-1 whitespace-pre-line">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
