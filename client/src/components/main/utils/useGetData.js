import { useState, useEffect } from "react";

const useGetData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { apiData, setApiData } = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await url;
      //setApiData(res);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, error, apiData };
};

export default useGetData;
