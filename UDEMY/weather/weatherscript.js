window.addEventListener("load", () => {
    
    let long, lat,image;
    let temp = document.querySelector("#temp");
    let city = document.querySelector("#city");
    let windSpeed = document.querySelector("#windSpeed");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(Position => {
            long = Position.coords.longitude;
            lat = Position.coords.latitude;
            // console.log(Position);
            // console.log(lat);
            // console.log(long);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const key = "fe4e680cecb06f4150b9d503a6b07160";
            const api= `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
            // const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=`;

            fetch(api).then(response =>{
                return response.json();
            }).then(data => {
                console.log(data);
                temp.innerHTML = "<b>"+convertTemp(data.main.temp)+"<b> &degC";
                city.textContent = data.name;
                windSpeed.textContent = data.wind.speed+"Km/hr";
                getIcon(data.weather[0].main);
                
                // console.log((300)-data.main.feels_like);
                // console.log(data.weather[0].description);

                // ! another way of pulling only wanted object form an object
                // const {main, description} = data.weather[0]
                // console.log(main,description);
            });
        });
    }
});

function convertTemp(value){
    return Math.floor(value) - 273;
}
function getIcon(value){
    switch(value){
        case "Clouds": 
        console.log(value);
        document.querySelector(".cloud").style.display = "inline";
        break;
    }
}

    