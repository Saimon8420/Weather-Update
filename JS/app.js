const API_KEY = `ce3302465c29ee6cfa30c1e3c799006f`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temp => {
    console.log(temp);
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('feels-temp', temp.main.feels_like);
    setInnerText('temp-status', temp.weather[0].main);
    // console.log(temp.weather[0].icon);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}