import { useContext } from "react";
import { authContext } from "../pages";

function useAuth() {
  return useContext(authContext);
}

export default useAuth;
