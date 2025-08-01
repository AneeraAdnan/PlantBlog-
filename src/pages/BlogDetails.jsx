import { useParams } from "react-router-dom";
import post from '../data/post';

const BlogDetail = () => {

    const {id} = useParams();
    const blog = post.find((p) => p.id === id);

    return(
        <div className="py-2">
            <h1 className="text-3xl text-center bg-[#f2f2e6] font-bold">{blog.title}</h1>
            <img src={blog.image} alt={blog.title} className="my-4 w-full max-w-xl block mx-auto" />
            {blog.content.map((content, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xl font-bold mb-2 px-3">{content.heading}</h2>
                    <p className="text-gray-700 px-3">{content.text}</p>
                </div>
            ))}

        </div>
    );
};

export default BlogDetail;

