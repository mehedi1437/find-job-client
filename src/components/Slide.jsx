import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <>
      <header>
        {/* Hero Section */}
        <div
          className="w-full bg-center bg-cover h-[38rem] mt-6"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl mb-8 font-semibold text-white lg:text-4xl">
                {text}
              </h1>
              <Link
                to="/add-job"
                className="w-full px-5 py-2 btn-login  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Post Job and Hire Expert
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Slide;
