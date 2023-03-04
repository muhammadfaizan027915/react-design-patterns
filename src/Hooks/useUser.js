import React, { useEffect, useState } from "react";
import axios from "axios";

const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const resopnse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal }
        );
        setUser(resopnse.data);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => controller.abort();
  }, []);
  return user;
};

export default useUser;
