import { useState } from "react";
import axios from "axios";

const useRequest = ({ url, method, data, onSuccess, onError }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const makeRequest = async () => {
    setError(null);
    setResponse(null);
    try {
      const response = await axios[method](url, data);
      setResponse(response.data);
      if (onSuccess) onSuccess(response.data);
    } catch (e) {
      setError(e.response.data);
      if (onError) onError();
    }
  };
  return { makeRequest, response, error };
};

export default useRequest;
