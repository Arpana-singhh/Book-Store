import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [userData, setUserData] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const getAuthState = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const { data } = await axios.get(backendUrl + "api/auth/is-auth", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const getUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const authToken = localStorage.getItem("authToken");
      const { data } = await axios.get(backendUrl + "api/auth/get-user", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          id: userId,
        },
      });

      if (data.success) {
        data.success ? setUserData(data.user) : toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const value = {
    backendUrl,
    getUserData,
    userData,
    setUserData,
    isLoggedin,
    setIsLoggedin,
  };
  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
