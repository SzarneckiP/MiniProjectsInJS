"use strict";
const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const API_LINK = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_UNITS = '&units=metric';
const API_KEY = '&appid=f1f968f3871bc2cf31dc3f825861f3af';
const getWeather = () => {
    const city = input?.value || 'London';
    const URL = API_LINK + city + API_KEY + API_UNITS;
    axios.get(URL).then((res) => console.log(res));
};
getWeather();
