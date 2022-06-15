document.getElementById('display-data').style.display='none';

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
    document.getElementById('display-data').style.display='block';
    setInnerText('city', temp.name);
    setInnerText('temp', temp.main.temp);
    setInnerText('feels-temp', temp.main.feels_like);
    setInnerText('temp-status', temp.weather[0].main);
    setInnerText('sun-status', temp.sys.sunrise);
    setInnerText('sun-status2', temp.sys.sunset);
    setInnerText('humidity', temp.main.humidity);
    setInnerText('pressure', temp.main.pressure);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}