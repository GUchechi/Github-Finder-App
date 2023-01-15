import { useReducer } from "react";
import { createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com/users";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //   Fetching/Getting users data

  const fetchUsers = async () => {
    const response = await fetch(GITHUB_URL);
    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
