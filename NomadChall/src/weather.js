const API_KEY = "f8b716f1f08e582a50400aa42c558fc8";

// const weather = document.querySelector("#weather div:first-child");
// const city = document.querySelector("#weather div:last-child");

const weather = document.querySelector("#temp");
// const city = document.querySelector("#city");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url
        ).then(response => response.json())
        .then(data => {
            weather.innerText = `${data.weather[0].main} ${data.main.temp}'C ${data.name}`;
            // city.innerText = data.name;
    })

}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
