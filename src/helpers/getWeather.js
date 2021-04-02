export const getWeather = async (request, type = "weather") => {
  const url = `https://api.openweathermap.org/data/2.5/${type}?q=${request}&units=metric&appid=7a813f835eb65c845ef78fc9d4ff6ad0`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};
