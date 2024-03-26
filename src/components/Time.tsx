import useGetCurrentTime from "../hooks/useGetCurrentTime";

const Time = () => {
  const { AmOrPm, hours, minutes, seconds } = useGetCurrentTime();
  return (
    <h4 className="text-right">
      {`${hours}:${minutes}:${seconds}`} {AmOrPm}
    </h4>
  );
};

export default Time;
