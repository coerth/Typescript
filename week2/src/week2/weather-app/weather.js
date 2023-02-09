
const getLocation = async () => {
    return await new Promise(function (resolve, reject) {
        try {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve(position.coords);
            });
        } catch (e) {
            reject(new Error(e));
        }
    });
}


const getWeather = async () => {
    coords = await getLocation()
    return await new Promise((resolve, reject) => {
        

    const apiKey = "2807f89c353c55b56efe883661ec4fd7";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
        if (req.status === 200) {
            data = JSON.parse(req.response)
            resolve(data);
        }
         else {
            reject(req.statusText);
        }
    };
    req.send();
    })
}


/* const getWeather = async () => {
    
    coords = await getLocation()

    const apiKey = "2807f89c353c55b56efe883661ec4fd7";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const data = await fetch(url)
    const json = await data.json()

    return json
} */


/*  getLocation().then(res => {
    getWeather(res).then(result => console.log(result))
})   */

/* let location
getLocation().then(res => location = res)
console.log(location) */

let weather = {
    main: {
        temp: "Not loaded"
    },
}

getLocation().then(res => {
    getWeather(res).then(weather => document.getElementById('weather').innerHTML = weather.main.temp + ' ' + weather.weather[0].description)
})