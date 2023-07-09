const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74a2d21c73msh20815746f49ddeep123f76jsn7862345d3efe',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url,options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    //Watch at 21:57