import React, { useEffect, useState } from "react";

const useDataSource = (getdata) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const response = await getdata();
        setResult(response.data);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => controller.abort();
  }, []);

  return result;
};

export default useDataSource;
