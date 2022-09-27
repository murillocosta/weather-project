const weatherCap = weatherDescription => {
  return (
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
  );
};

export default weatherCap;
