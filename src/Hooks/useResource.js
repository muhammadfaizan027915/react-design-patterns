import axios from "axios";
import React, { useEffect, useState } from "react";

const useResource = (rescourceUrl) => {
  const [resource, setRescource] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axios.get(rescourceUrl, {
          signal: controller.signal,
        });

        setRescource(response.data);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => controller.abort();
  }, []);

  return resource;
};

export default useResource;
