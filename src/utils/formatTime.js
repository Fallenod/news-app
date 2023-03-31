const formatTime = (date = '2023-03-29T21:20:08Z') => {
  let hour = new Date(date).getHours();
  let minute = new Date(date).getMinutes();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;

  const result = `${hour}:${minute}`;

  return result;
};
export default formatTime;
