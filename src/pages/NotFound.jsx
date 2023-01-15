import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import dribble from "../Assets/dribbble_1.gif";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold mb-8">Ooops!!!</h1>
          <p className="text-2xl mb-8">404 - Page Not Found!</p>
          <div className="flex justify-center items-center w-full ">
            <img
              src={dribble}
              alt="Page Not found"
              className="rounded-2xl  h-[170px]"
            />
          </div>
          <Link className="btn btn-primary btn-sm mt-5" to="/">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
