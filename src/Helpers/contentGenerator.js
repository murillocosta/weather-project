const contentGenerator = (content, index) => {
  return {
    temp: content[index].main.temp,
    humidity: content[index].main.humidity,
    feelsLike: content[index].main.feels_like,
    weatherDescription: content[index].weather[0].description,
    windDeg: content[index].wind.deg,
    windSpeed: content[index].wind.speed,
    sunrise: content[index].sys.sunrise,
    sunset: content[index].sys.sunset,
  };
};

export default contentGenerator;
