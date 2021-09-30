import { useState, useEffect } from "react";

const useDataExchange = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [action, setAction] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    setApiData(null);
    try {
      const res = await action;
      setApiData(res.data);
      setLoading(false);
      //console.log(res);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      //console.log(error.message);
    }
  };
  useEffect(() => {
    if (!action) return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return { loading, error, apiData, setAction };
};

export default useDataExchange;
