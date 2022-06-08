import { useEffect, useState } from "react";

const useData = () => {
  const [breakfasts, setBreakfasts] = useState([]);
  const [lunch, setLaunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);

  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setLaunch(data));
  }, []);

  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);
  return [breakfasts, lunch, dinner];
};

export default useData;
