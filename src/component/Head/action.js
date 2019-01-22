import fetch from 'cross-fetch'

function extractCity(data, id) {
    let city = {
        id,
        data: []
    };
    for (let info of data.list) {
        city.data.push(
            {
                time: info.dt_txt,
                temp: info.main.temp,
                temp_max: info.main.temp_max,
                temp_min: info.main.temp_min,
                pressure: info.main.pressure,
                humidity: info.main.humidity,
                wind_speed: info.wind.speed,
                wind_deg: info.wind.deg,
                weather_id: info.weather[0].id,
                weather_main: info.weather[0].main,
                weather_description: info.weather[0].description,
                weather_icon: info.weather[0].icon
            }
        )
    }
    return city
}

export const fetchWeather = id => (dispatch) => {
    dispatch({type: 'FETCH', id});
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=862f6ea3d5a071f3e2ae81ba1ed2fb18&units=metric`)
        .then(res => res.json())
        .then(json => {
            dispatch({type: 'SUCCESS', city: extractCity(json, id), id})
        });
};

