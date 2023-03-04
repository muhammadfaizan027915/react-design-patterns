import axios from "axios";
import React, { useEffect, useState } from "react";

const hocWithDataLoading = (Component, path) => {
  return props => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const controller = new AbortController();

      (async () => {
        try {
          const response = await axios.get(path, { signal: controller.signal });
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
      
    }, []);
    return <Component {...data} {...props} />;
  };
};

export default hocWithDataLoading;
