

const input = document.querySelector('input') as HTMLInputElement | null
const button = document.querySelector('button') as HTMLBRElement | null
const cityName = document.querySelector('.city-name') as Element | null
const warning = document.querySelector('.warning') as Element | null
const photo = document.querySelector('.photo') as Element | null
const weather = document.querySelector('.weather') as Element | null
const temperature = document.querySelector('.temperature') as Element | null
const humidity = document.querySelector('.humidity') as Element | null

const API_LINK: string = 'http://api.openweathermap.org/data/2.5/weather?q='
const API_UNITS = '&units=metric'
const API_KEY: string = '&appid=f1f968f3871bc2cf31dc3f825861f3af'

const getWeather = () => {
    const city = input?.value || 'London'
    const URL: string = API_LINK + city + API_KEY + API_UNITS
    axios.get(URL).then((res: object) => console.log(res))
}

getWeather()