import axios from "axios";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user ? (
        <div key={user.username}>{user.username}</div>
      ) : (
        <div>please login</div>
      )}
    </>
  );
};

export default Navbar;
