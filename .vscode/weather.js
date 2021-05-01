"using strict";
const apiKey = "1bcb602dcfb4192cf10d775f25dc9564";
//indow.alert("connected");
//add click handler for button
document.getElementById("forecast").addEventListener("click", getData);

function getData(){
    console.log("get data");
    // need zipcode
    let zipcode = document.getElementById("zipcode").value;
    console.log("zipcode is " + zipcode);
    //set up for api call
    const endpoint = 
    "https://api.openweathermap.org/data/2.5/weather";
    // ?zip={zip code},{country code}&appid={API key}
    const query = "?zip=" + zipcode + 
    "&units=imperial&appid=" + apiKey;
    const url = endpoint + query;
    console.log(url);
    const xhr = new XMLHttpRequest();
    //set up response
    xhr.addEventListener("load", responseReceivedHandler);
    //required for json
    xhr.responseType = "json";
    //open connection
    xhr.open("GET", url);
    //send data
    xhr.send();
}

function responseReceivedHandler(){
    const weatherInfo = document.getElementById("weatherInfo");
    if (this.status === 200){
        //console.log(this.response);
        const data = this.response;
        //console.log("city is " + data.name);
        //console.log("temp is " + data.main.temp);
        //console.log("current weather is " + data.weather[0].description);
        //console.log("humidity is " + data.main.humidity);
        //put data on page
        let output = "<p>City: " + data.name + "</p>";
        output += "<p>Current temp: " + data.main.temp + "&deg;F</p>";
        output += "<p>Description: " + data.weather[0].description + "</p>";
        output += "<p>Humidity: " + data.main.humidity + "%</p>";
        // display this in the div
        weatherInfo.innerHTML = output;
    }
    else {
        weatherInfo.innerHTML = "Weather data unavailable."
    }
}