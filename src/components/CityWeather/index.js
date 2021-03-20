import React from 'react'

const CityWeather = ({cityWeather})=> {
    
    let cityName = cityWeather['name'];
    // console.log();
    console.log("weather is",cityWeather);
    if(cityWeather.main!==undefined && cityWeather['weather'][0]['description']){
        var tempValue = cityWeather.main.temp;
        var description = cityWeather['weather'][0]['description']
    }
    console.log(tempValue);
    return (
        <div>
            <h1>{cityName}</h1>
            <p>{tempValue}</p>
            <p>{description}</p>
        </div>
    )
}

export default CityWeather;