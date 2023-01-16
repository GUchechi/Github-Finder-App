import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <>
      {/* <UserSearch />
      <UserResults /> */}
      {process.env.REACT_APP_GITHUB_TOKEN}
    </>
  );
};

export default Home;
