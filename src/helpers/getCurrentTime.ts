import { ITime } from "../interfaces/Time";

export const convertUnitsToDecimal = (value: number) => {
  return value < 10 ? "0" + value : value;
};

export const getCurrentTime: () => ITime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
};
