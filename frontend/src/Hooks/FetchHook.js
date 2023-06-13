import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API = axios.create({
    baseURL: "http://localhost:3001/api",
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      console.log("url is ", url);
      try {
        const res = await API.get(`/${url}`);
        console.log("response is ", res);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const RefetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error, RefetchData };
};

export default useFetch;
