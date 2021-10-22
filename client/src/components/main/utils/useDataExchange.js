import { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";

const useDataExchange = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [body, setBody] = useState(null)
  const [action, setAction] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await action;
      setResponse(res.data);
      setBody(res.body)
      setLoading(false);
      console.log(response, body)
    } catch (error) {
      console.log(error.response)
      setError(error.response?.data);
      setLoading(false);
      if (error.response?.status === 403) {
        alert("Unauthorized");
        signOut();
        history.push("/login");
      }
    }
  };

  useEffect(() => {
    if (!action) return;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return { loading, error, response, body, setAction };
};

export default useDataExchange;
