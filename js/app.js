var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var value = document.querySelector(".value span");

async function changeWeatherUi() {
  let capitalSearch = search.value.strim();
  let apiURL = `search.value.trim(https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=2df2c4c8a2caaa752c1e878517a359d6)`;
  fetch(apiURL).then((res) => res.json());
  console.log(Data);
  city.innerText = data.name;
  country.innerText = data.sys.country;
  visibility.innerText = data.visibility + "m";
  wind.innerText = data.wind.speed + "m/s";
  sun.innerText = data.main.humidity + "%";
  value.innerText = data.main.temp - 273.15;
  shortDesc.innerText = data.weather.main;
  time.innerText = new Date().toLocaleDateString("vi");
}
changeWeatherUi;
