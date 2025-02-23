const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR API KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
    cityName.innerHTML =city
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +city, options)
	.then(responce => responce.json())
    .then((responce) => {
        console.log(responce)
        //cloud_pct.innerHTML = responce.cloud_pct
        temp.innerHTML = responce.temp
        temp2.innerHTML = responce.temp
        feels_like.innerHTML = responce.feels_like
        humidity.innerHTML = responce.humidity
        humidity2.innerHTML = responce.humidity
        min_temp.innerHTML = responce.min_temp
        max_temp.innerHTML = responce.max_temp
        wind_speed.innerHTML = responce.wind_speed
        wind_speed2.innerHTML = responce.wind_speed
        wind_degrees.innerHTML = responce.wind_degrees
        sunrise.innerHTML = responce.sunrise
        sunset.innerHTML = responce.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
