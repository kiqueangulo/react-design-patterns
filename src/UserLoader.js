import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
