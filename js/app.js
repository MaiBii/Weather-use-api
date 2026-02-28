var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");

async function changeWeatherUi() {
  let capitalSearch = search.value.trim();
  if (!capitalSearch) return;

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=2df2c4c8a2caaa752c1e878517a359d6`;

  try {
    let res = await fetch(apiURL);
    let data = await res.json();

    if (data.cod == 200) {
      content.classList.remove("hide");

      city.innerText = data.name;
      country.innerText = data.sys.country;
      visibility.innerText = data.visibility + " m";
      wind.innerText = data.wind.speed + " m/s";
      sun.innerText = data.main.humidity + " %";
      value.innerHTML = Math.round(data.main.temp - 273.15) + " <sup>o</sup>C";
      shortDesc.innerText = data.weather[0].main;
      time.innerText = new Date().toLocaleString("ja-JP");
    } else {
      content.classList.add("hide");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    changeWeatherUi();
  }
});
