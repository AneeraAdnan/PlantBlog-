import about from '../assets/about.jpeg';
import about2 from '../assets/about2.jpeg';

const About = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-900 text-center mb-4">
        Welcome to GreenLeaves!
      </h1>
      <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">
        ABOUT US
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <p>
            We’re a small team of plant lovers who believe that everyone can enjoy the beauty of nature indoors.
            Our blog is dedicated to sharing helpful tips, guides, and inspiration about growing and caring for indoor plants.
            Whether you're a beginner or an experienced gardener, we aim to make plant care easy, fun, and stress-free.
            From choosing the right plants to solving common problems, we’re here to support your green journey.
            Thank you for visiting our website. Let’s grow together!
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={about} alt="about" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-green-700 mb-2">Our Mission</h3>
        <p className="text-gray-700">
          To inspire and guide people to grow healthy, beautiful indoor plants.<br></br>
          Our mission is to help every home bloom with green life by making plant care easy and enjoyable for all.<br></br>
          We aim to reconnect people with nature through accessible, friendly, and reliable plant care guidance.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Easy plant care tips</li>
          <li>Guides for beginners</li>
          <li>Common problem solutions</li>
          <li>Plant recommendations by season</li>
        </ul>
      </div>

      <div className="text-center">
        <img src={about2} alt="plants" className="w-full max-w-md mx-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default About;
