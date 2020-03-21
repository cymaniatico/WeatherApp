const location = "Santa Marta, co";
const api_key = "b6a1324d8cceb779bf86545ec7ec5bec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather= `${url_base_weather}?q=${location}&appid=${api_key}`;