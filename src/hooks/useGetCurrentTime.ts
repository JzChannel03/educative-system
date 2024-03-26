import { useState, useEffect } from "react";
import {
  convertUnitsToDecimal,
  getCurrentTime,
} from "../helpers/getCurrentTime";

const useGetCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hours = convertUnitsToDecimal(currentTime.hours);
  const minutes = convertUnitsToDecimal(currentTime.minutes);
  const seconds = convertUnitsToDecimal(currentTime.seconds);
  const AmOrPm = currentTime.hours >= 12 ? "PM" : "AM";

  return {
    hours,
    minutes,
    seconds,
    AmOrPm,
  };
};

export default useGetCurrentTime;
