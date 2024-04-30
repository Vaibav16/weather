const searchInput = document.querySelector('input');
const searchButton = document.querySelector('button');
const images = document.querySelector('.img-fluid');



async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7cd362a0021211993104a6d8513df58&units=metric`);

    var data = await res.json();

    console.log(data);

    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.wind-speed').innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds") {
        image.src = "images/clouds.png"
    }

    else if (data.weather[0].main == "Clear") {
        image.src = "images/clear.png"
    }

    else if (data.weather[0].main == "Rain") {
        image.src = "images/rain.png"
    }

    else if (data.weather[0].main == "Drizzle") {
        image.src = "images/drizzle.png"
    }

    else if (data.weather[0].main == "Mist") {
        image.src = "images/mist.png"
    }

    else if (data.weather[0].main == "Humidity") {
        image.src = "images/humidity.png"
    }

}

searchButton.addEventListener('click', () => {
    getWeather(searchInput.value);
})



