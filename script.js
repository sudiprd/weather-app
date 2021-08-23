// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherAPI = {
    key: "0ba055d115586b4c752caba0402aab71",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}



const searchBox = document.getElementById('search-box'); //when using ID as source
// const searchbox = document.querySelector('.search-box'); // when using class as source

//Event Listener Function on Keypress 

searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getWeatherReport(searchBox.value);
        // document.querySelector('.weather-body').style.display = 'block';
    }
});

//Get Weather Reports

function getWeatherReport(city){
    fetch(`${weatherAPI.baseUrl}?q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }) .then(showWeatherReport);
}

//Show Weather Reports
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText= `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C /  
    ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'clear')
    {
        document.body.style.backgroundImage = "url('images/clear.jpeg')";
    }
    else if (weatherType.textContent == 'cloudy')
    {
        document.body.style.backgroundImage = "url('images/cloudy.jpeg')";

    }
    else if (weatherType.textContent == 'rainy')
    {
        document.body.style.backgroundImage = "url ('images/rainy.jpg')";

    }
    else if (weatherType.textContent == 'snowy')
    {
        document.body.style.backgroundImage = "url('images/snowy.jpeg')";

    }
    else if (weatherType.textContent == 'sunny')
    {
        document.body.style.backgroundImage = "url('images/sunny.jpg')";

    }

    else if (weatherType.textContent == 'thunderstorm')
    {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpeg')";

    }
    else if (weatherType.textContent == 'haze')
    {
        document.body.style.backgroundImage = "url('images/haze.jpeg')";

    }
}


//Date Manage

function dateManage(dateArg)
{
    let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

     let months = ['January', 'Febraury','March', 'April', 'May' ,'June', 'July', 'August', 'September', 'October', 'November', 'December'];

     let year = dateArg.getFullYear();
     let month = months[dateArg.getMonth()];
     let date = dateArg.getDate();
     let day = days[dateArg.getDay()];

     return `${date} ${month} ${day} ${year}`;
}
 function googleSearch() {

    let searchInput = 'search-box';

    // // ${document}.ready(function() {
    // //     let autocomplete;
    //     autocomplete =
     new google.maps.places.Autocomplete(document.getElementById('searchInput'), 
      )
    
    };
    //  {
    //         types: ['geocode'] ,
        // });
    
    //     google.maps.event.addListener(autocomplete, 'place_changed', function(){
    //         let near_place = autocomplete.getPlace(); 
    //  }); 

    // });      
    