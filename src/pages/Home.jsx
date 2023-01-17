import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl mb-4">
        Hello There<span className="waving-hand">👋🏼</span>
      </h1>
      <p className="mb-4 text-2xl font-light">
        Search for Github Profiles, profile details and repositories here{" "}
        <span> 😊</span>
      </p>
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
