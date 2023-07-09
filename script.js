
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74a2d21c73msh20815746f49ddeep123f76jsn7862345d3efe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{

	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		tinfo.innerHTML = response.temp
		hinfo.innerHTML = response.humidity
		winfo.innerHTML = response.wind_speed


		
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degree.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		console.log(response)
	})
	.catch(err => console.error(err));
};

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})
    //Watch at 21:57
getWeather('Seattle');



