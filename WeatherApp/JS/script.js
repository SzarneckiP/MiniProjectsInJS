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
    const city = input.value || 'Bialystok';
    const URL = API_LINK + city + API_KEY + API_UNITS;
    axios.get(URL).then((res) => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = Object.assign({}, ...res.data.weather)

        cityName.textContent = res.data.name
        temperature.textContent = `${Math.floor(temp)} °C`
        humidity.textContent = `${hum} %`
        weather.textContent = status.main

        input.value = ''
        warning.textContent = ''

        if (status.id >= 801 && status.id <= 899) {
            photo.setAttribute('src', './img/cloud.png')
        } else if (status.id === 800) {
            photo.setAttribute('src', './img/sun.png')
        } else if (status.id >= 200 && status.id <= 299) {
            photo.setAttribute('src', './img/thunderstorm.png')
        } else if (status.id >= 300 && status.id <= 399) {
            photo.setAttribute('src', './img/drizzle.png')
        } else if (status.id >= 500 && status.id <= 599) {
            photo.setAttribute('src', './img/rain.png')
        } else if (status.id >= 600 && status.id <= 699) {
            photo.setAttribute('src', './img/ice.png')
        } else if (status.id >= 700 && status.id <= 799) {
            photo.setAttribute('src', './img/fog.png')
        } else {
            photo.setAttribute('src', './img/unknown.png')
        }

    }).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta')
}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        getWeather()
    }
}

button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKeyCheck)
getWeather()

