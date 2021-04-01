import { useState, useEffect, useRef } from "react";
import { getWeather } from "../helpers/getWeather";

export const useFetch = (request) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null,
    });

    getWeather(request).then((data) => {
      setState({
        loading: false,
        error: null,
        data,
      });
    });
  }, [request]);

  return state;
};
