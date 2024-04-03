const apiKey = "2f824fae95087f04d29f3c298ff3a779";
var Data;
var cityData = Data;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`latitude : ${lat} longitude : ${lng}`);
    fetchWeatherData(lat, lng);
  }
  async function fetchWeatherData(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    updateWeather(data);
  }

  const cityName = document.querySelector(".city-label");
  const dis = document.querySelector(".info");
  const temperature = document.querySelector(".temp-label");
  const feel = document.querySelector(".feel-label");
  const windspeed = document.querySelector(".wind-label");
  const humidity = document.querySelector(".humidity-label");
  const pressure = document.querySelector(".pressure-label");
  const visibility = document.querySelector(".visibility-label");

  function updateWeather(data) {
    cityName.textContent = data.name;
    dis.textContent = data.weather[0].main;
    temperature.textContent = `Temp : ${Math.round(data.main.temp)}ºC`;
    feel.textContent = `Feel : ${Math.floor(data.main.feels_like)}ºC`;
    windspeed.textContent = `Wind : ${data.wind.speed}kmph`;
    humidity.textContent = `Humidity : ${data.main.humidity}%`;
    pressure.textContent = `Pressure : ${data.main.pressure / 10}kPa`;
    visibility.textContent = `Visibility : ${data.visibility / 1000}km`;
  }
}

function daysForcast() {
  async function fetchWeatherData(Data) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${Data}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    updateWeather(data);
  }

  const temperature1 = document.querySelector(".temp-label1");
  const windspeed1 = document.querySelector(".wind-label1");
  const humidity1 = document.querySelector(".humidity-label1");
  const date1 = document.querySelector(".date-label1");
  const condition1 = document.querySelector(".dis1");

  const temperature2 = document.querySelector(".temp-label2");
  const windspeed2 = document.querySelector(".wind-label2");
  const humidity2 = document.querySelector(".humidity-label2");
  const date2 = document.querySelector(".date-label2");
  const condition2 = document.querySelector(".dis2");

  const temperature3 = document.querySelector(".temp-label3");
  const windspeed3 = document.querySelector(".wind-label3");
  const humidity3 = document.querySelector(".humidity-label3");
  const date3 = document.querySelector(".date-label3");
  const condition3 = document.querySelector(".dis3");

  const temperature4 = document.querySelector(".temp-label4");
  const windspeed4 = document.querySelector(".wind-label4");
  const humidity4 = document.querySelector(".humidity-label4");
  const date4 = document.querySelector(".date-label4");
  const condition4 = document.querySelector(".dis4");

  const temperature5 = document.querySelector(".temp-label5");
  const windspeed5 = document.querySelector(".wind-label5");
  const humidity5 = document.querySelector(".humidity-label5");
  const date5 = document.querySelector(".date-label5");
  const condition5 = document.querySelector(".dis5");

  function updateWeather(data) {
    DataE.textContent = `Weather Forecast of ${Data.toUpperCase()}`;

    temperature1.textContent = `Temp : ${Math.round(data.list[0].main.temp)}ºC`;
    windspeed1.textContent = `Wind : ${data.list[0].wind.speed}kmph`;
    humidity1.textContent = `Humidity : ${data.list[0].main.humidity}%`;
    const currentDate1 = data.list[0].dt_txt;
    date1.textContent = currentDate1;
    condition1.textContent = data.list[0].weather[0].description;

    temperature2.textContent = `Temp : ${Math.round(data.list[8].main.temp)}ºC`;
    windspeed2.textContent = `Wind : ${data.list[8].wind.speed}kmph`;
    humidity2.textContent = `Humidity : ${data.list[8].main.humidity}%`;
    const currentDate2 = data.list[8].dt_txt;
    date2.textContent = currentDate2;
    condition2.textContent = data.list[8].weather[0].main;

    temperature3.textContent = `Temp : ${Math.round(
      data.list[13].main.temp
    )}ºC`;
    windspeed3.textContent = `Wind : ${data.list[16].wind.speed}kmph`;
    humidity3.textContent = `Humidity : ${data.list[16].main.humidity}%`;
    const currentDate3 = data.list[16].dt_txt;
    date3.textContent = currentDate3;
    condition3.textContent = data.list[16].weather[0].main;

    temperature4.textContent = `Temp : ${Math.round(
      data.list[21].main.temp
    )}ºC`;
    windspeed4.textContent = `Wind : ${data.list[24].wind.speed}kmph`;
    humidity4.textContent = `Humidity : ${data.list[24].main.humidity}%`;
    const currentDate4 = data.list[24].dt_txt;
    date4.textContent = currentDate4;
    condition4.textContent = data.list[24].weather[0].main;

    temperature5.textContent = `Temp : ${Math.round(
      data.list[32].main.temp
    )}ºC`;
    windspeed5.textContent = `Wind : ${data.list[32].wind.speed}kmph`;
    humidity5.textContent = `Humidity : ${data.list[32].main.humidity}%`;
    const currentDate5 = data.list[32].dt_txt;
    date5.textContent = currentDate5;
    condition5.textContent = data.list[32].weather[0].main;
  }
  let formElement = document.querySelector(".search-form");

  const inputElement = document.querySelector(".city-input");
  const DataE = document.querySelector(".city-info");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    Data = inputElement.value;

    if (Data !== "") {
      fetchWeatherData(Data);
    }
  });
}

function newForcast() {
  async function fetchWeatherData(Data) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${Data}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    updateWeather(data);
  }

  const temperature11 = document.querySelector(".temp-label11");
  const feel11 = document.querySelector(".feel-label11");
  const windspeed11 = document.querySelector(".wind-label11");
  const humidity11 = document.querySelector(".humidity-label11");
  const date11 = document.querySelector(".date-label11");
  const condition11 = document.querySelector(".dis11");
  const visibility11 = document.querySelector(".visibility-label11");

  const temperature12 = document.querySelector(".temp-label12");
  const windspeed12 = document.querySelector(".wind-label12");
  const humidity12 = document.querySelector(".humidity-label12");
  const date12 = document.querySelector(".date-label12");
  const condition12 = document.querySelector(".dis12");
  const visibility12 = document.querySelector(".visibility-label12");

  const temperature13 = document.querySelector(".temp-label13");
  const windspeed13 = document.querySelector(".wind-label13");
  const humidity13 = document.querySelector(".humidity-label13");
  const date13 = document.querySelector(".date-label13");
  const condition13 = document.querySelector(".dis13");
  const visibility13 = document.querySelector(".visibility-label13");

  const temperature14 = document.querySelector(".temp-label14");
  const windspeed14 = document.querySelector(".wind-label14");
  const humidity14 = document.querySelector(".humidity-label14");
  const date14 = document.querySelector(".date-label14");
  const condition14 = document.querySelector(".dis14");
  const visibility14 = document.querySelector(".visibility-label14");

  const temperature15 = document.querySelector(".temp-label15");
  const windspeed15 = document.querySelector(".wind-label15");
  const humidity15 = document.querySelector(".humidity-label15");
  const date15 = document.querySelector(".date-label15");
  const condition15 = document.querySelector(".dis15");
  const visibility15 = document.querySelector(".visibility-label15");

  const temperature16 = document.querySelector(".temp-label16");
  const windspeed16 = document.querySelector(".wind-label16");
  const humidity16 = document.querySelector(".humidity-label16");
  const date16 = document.querySelector(".date-label16");
  const condition16 = document.querySelector(".dis16");
  const visibility16 = document.querySelector(".visibility-label16");

  const temperature17 = document.querySelector(".temp-label17");
  const windspeed17 = document.querySelector(".wind-label17");
  const humidity17 = document.querySelector(".humidity-label17");
  const date17 = document.querySelector(".date-label17");
  const condition17 = document.querySelector(".dis17");
  const visibility17 = document.querySelector(".visibility-label17");

  const temperature18 = document.querySelector(".temp-label18");
  const windspeed18 = document.querySelector(".wind-label18");
  const humidity18 = document.querySelector(".humidity-label18");
  const date18 = document.querySelector(".date-label18");
  const condition18 = document.querySelector(".dis18");
  const visibility18 = document.querySelector(".visibility-label18");

  const temperature21 = document.querySelector(".temp-label21");
  const feel21 = document.querySelector(".feel-label21");
  const windspeed21 = document.querySelector(".wind-label21");
  const humidity21 = document.querySelector(".humidity-label21");
  const date21 = document.querySelector(".date-label21");
  const condition21 = document.querySelector(".dis21");
  const visibility21 = document.querySelector(".visibility-label21");

  const temperature22 = document.querySelector(".temp-label22");
  const windspeed22 = document.querySelector(".wind-label22");
  const humidity22 = document.querySelector(".humidity-label22");
  const date22 = document.querySelector(".date-label22");
  const condition22 = document.querySelector(".dis22");
  const visibility22 = document.querySelector(".visibility-label22");

  const temperature23 = document.querySelector(".temp-label23");
  const windspeed23 = document.querySelector(".wind-label23");
  const humidity23 = document.querySelector(".humidity-label23");
  const date23 = document.querySelector(".date-label23");
  const condition23 = document.querySelector(".dis23");
  const visibility23 = document.querySelector(".visibility-label23");

  const temperature24 = document.querySelector(".temp-label24");
  const windspeed24 = document.querySelector(".wind-label24");
  const humidity24 = document.querySelector(".humidity-label24");
  const date24 = document.querySelector(".date-label24");
  const condition24 = document.querySelector(".dis24");
  const visibility24 = document.querySelector(".visibility-label24");

  const temperature25 = document.querySelector(".temp-label25");
  const windspeed25 = document.querySelector(".wind-label25");
  const humidity25 = document.querySelector(".humidity-label25");
  const date25 = document.querySelector(".date-label25");
  const condition25 = document.querySelector(".dis25");
  const visibility25 = document.querySelector(".visibility-label25");

  const temperature26 = document.querySelector(".temp-label26");
  const windspeed26 = document.querySelector(".wind-label26");
  const humidity26 = document.querySelector(".humidity-label26");
  const date26 = document.querySelector(".date-label26");
  const condition26 = document.querySelector(".dis26");
  const visibility26 = document.querySelector(".visibility-label26");

  const temperature27 = document.querySelector(".temp-label27");
  const windspeed27 = document.querySelector(".wind-label27");
  const humidity27 = document.querySelector(".humidity-label27");
  const date27 = document.querySelector(".date-label27");
  const condition27 = document.querySelector(".dis27");
  const visibility27 = document.querySelector(".visibility-label27");

  const temperature28 = document.querySelector(".temp-label28");
  const windspeed28 = document.querySelector(".wind-label28");
  const humidity28 = document.querySelector(".humidity-label28");
  const date28 = document.querySelector(".date-label28");
  const condition28 = document.querySelector(".dis28");
  const visibility28 = document.querySelector(".visibility-label28");

  const temperature31 = document.querySelector(".temp-label31");
  const feel31 = document.querySelector(".feel-label31");
  const windspeed31 = document.querySelector(".wind-label31");
  const humidity31 = document.querySelector(".humidity-label31");
  const date31 = document.querySelector(".date-label31");
  const condition31 = document.querySelector(".dis31");
  const visibility31 = document.querySelector(".visibility-label31");

  const temperature32 = document.querySelector(".temp-label32");
  const windspeed32 = document.querySelector(".wind-label32");
  const humidity32 = document.querySelector(".humidity-label32");
  const date32 = document.querySelector(".date-label32");
  const condition32 = document.querySelector(".dis32");
  const visibility32 = document.querySelector(".visibility-label32");

  const temperature33 = document.querySelector(".temp-label33");
  const windspeed33 = document.querySelector(".wind-label33");
  const humidity33 = document.querySelector(".humidity-label33");
  const date33 = document.querySelector(".date-label33");
  const condition33 = document.querySelector(".dis33");
  const visibility33 = document.querySelector(".visibility-label33");

  const temperature34 = document.querySelector(".temp-label34");
  const windspeed34 = document.querySelector(".wind-label34");
  const humidity34 = document.querySelector(".humidity-label34");
  const date34 = document.querySelector(".date-label34");
  const condition34 = document.querySelector(".dis34");
  const visibility34 = document.querySelector(".visibility-label34");

  const temperature35 = document.querySelector(".temp-label35");
  const windspeed35 = document.querySelector(".wind-label35");
  const humidity35 = document.querySelector(".humidity-label35");
  const date35 = document.querySelector(".date-label35");
  const condition35 = document.querySelector(".dis35");
  const visibility35 = document.querySelector(".visibility-label35");

  const temperature36 = document.querySelector(".temp-label36");
  const windspeed36 = document.querySelector(".wind-label36");
  const humidity36 = document.querySelector(".humidity-label36");
  const date36 = document.querySelector(".date-label36");
  const condition36 = document.querySelector(".dis36");
  const visibility36 = document.querySelector(".visibility-label36");

  const temperature37 = document.querySelector(".temp-label37");
  const windspeed37 = document.querySelector(".wind-label37");
  const humidity37 = document.querySelector(".humidity-label37");
  const date37 = document.querySelector(".date-label37");
  const condition37 = document.querySelector(".dis37");
  const visibility37 = document.querySelector(".visibility-label37");

  const temperature38 = document.querySelector(".temp-label38");
  const windspeed38 = document.querySelector(".wind-label38");
  const humidity38 = document.querySelector(".humidity-label38");
  const date38 = document.querySelector(".date-label38");
  const condition38 = document.querySelector(".dis38");
  const visibility38 = document.querySelector(".visibility-label38");

  const temperature41 = document.querySelector(".temp-label41");
  const feel41 = document.querySelector(".feel-label41");
  const windspeed41 = document.querySelector(".wind-label41");
  const humidity41 = document.querySelector(".humidity-label41");
  const date41 = document.querySelector(".date-label41");
  const condition41 = document.querySelector(".dis41");
  const visibility41 = document.querySelector(".visibility-label41");

  const temperature42 = document.querySelector(".temp-label42");
  const windspeed42 = document.querySelector(".wind-label42");
  const humidity42 = document.querySelector(".humidity-label42");
  const date42 = document.querySelector(".date-label42");
  const condition42 = document.querySelector(".dis42");
  const visibility42 = document.querySelector(".visibility-label42");

  const temperature43 = document.querySelector(".temp-label43");
  const windspeed43 = document.querySelector(".wind-label43");
  const humidity43 = document.querySelector(".humidity-label43");
  const date43 = document.querySelector(".date-label43");
  const condition43 = document.querySelector(".dis43");
  const visibility43 = document.querySelector(".visibility-label43");

  const temperature44 = document.querySelector(".temp-label44");
  const windspeed44 = document.querySelector(".wind-label44");
  const humidity44 = document.querySelector(".humidity-label44");
  const date44 = document.querySelector(".date-label44");
  const condition44 = document.querySelector(".dis44");
  const visibility44 = document.querySelector(".visibility-label44");

  const temperature45 = document.querySelector(".temp-label45");
  const windspeed45 = document.querySelector(".wind-label45");
  const humidity45 = document.querySelector(".humidity-label45");
  const date45 = document.querySelector(".date-label45");
  const condition45 = document.querySelector(".dis45");
  const visibility45 = document.querySelector(".visibility-label45");

  const temperature46 = document.querySelector(".temp-label46");
  const windspeed46 = document.querySelector(".wind-label46");
  const humidity46 = document.querySelector(".humidity-label46");
  const date46 = document.querySelector(".date-label46");
  const condition46 = document.querySelector(".dis46");
  const visibility46 = document.querySelector(".visibility-label46");

  const temperature47 = document.querySelector(".temp-label47");
  const windspeed47 = document.querySelector(".wind-label47");
  const humidity47 = document.querySelector(".humidity-label47");
  const date47 = document.querySelector(".date-label47");
  const condition47 = document.querySelector(".dis47");
  const visibility47 = document.querySelector(".visibility-label47");

  const temperature48 = document.querySelector(".temp-label48");
  const windspeed48 = document.querySelector(".wind-label48");
  const humidity48 = document.querySelector(".humidity-label48");
  const date48 = document.querySelector(".date-label48");
  const condition48 = document.querySelector(".dis48");
  const visibility48 = document.querySelector(".visibility-label48");

  const temperature51 = document.querySelector(".temp-label51");
  const feel51 = document.querySelector(".feel-label51");
  const windspeed51 = document.querySelector(".wind-label51");
  const humidity51 = document.querySelector(".humidity-label51");
  const date51 = document.querySelector(".date-label51");
  const condition51 = document.querySelector(".dis51");
  const visibility51 = document.querySelector(".visibility-label51");

  const temperature52 = document.querySelector(".temp-label52");
  const windspeed52 = document.querySelector(".wind-label52");
  const humidity52 = document.querySelector(".humidity-label52");
  const date52 = document.querySelector(".date-label52");
  const condition52 = document.querySelector(".dis52");
  const visibility52 = document.querySelector(".visibility-label52");

  const temperature53 = document.querySelector(".temp-label53");
  const windspeed53 = document.querySelector(".wind-label53");
  const humidity53 = document.querySelector(".humidity-label53");
  const date53 = document.querySelector(".date-label53");
  const condition53 = document.querySelector(".dis53");
  const visibility53 = document.querySelector(".visibility-label53");

  const temperature54 = document.querySelector(".temp-label54");
  const windspeed54 = document.querySelector(".wind-label54");
  const humidity54 = document.querySelector(".humidity-label54");
  const date54 = document.querySelector(".date-label54");
  const condition54 = document.querySelector(".dis54");
  const visibility54 = document.querySelector(".visibility-label54");

  const temperature55 = document.querySelector(".temp-label55");
  const windspeed55 = document.querySelector(".wind-label55");
  const humidity55 = document.querySelector(".humidity-label55");
  const date55 = document.querySelector(".date-label55");
  const condition55 = document.querySelector(".dis55");
  const visibility55 = document.querySelector(".visibility-label55");

  const temperature56 = document.querySelector(".temp-label56");
  const windspeed56 = document.querySelector(".wind-label56");
  const humidity56 = document.querySelector(".humidity-label56");
  const date56 = document.querySelector(".date-label56");
  const condition56 = document.querySelector(".dis56");
  const visibility56 = document.querySelector(".visibility-label56");

  const temperature57 = document.querySelector(".temp-label57");
  const windspeed57 = document.querySelector(".wind-label57");
  const humidity57 = document.querySelector(".humidity-label57");
  const date57 = document.querySelector(".date-label57");
  const condition57 = document.querySelector(".dis57");
  const visibility57 = document.querySelector(".visibility-label57");

  const temperature58 = document.querySelector(".temp-label58");
  const windspeed58 = document.querySelector(".wind-label58");
  const humidity58 = document.querySelector(".humidity-label58");
  const date58 = document.querySelector(".date-label58");
  const condition58 = document.querySelector(".dis58");
  const visibility58 = document.querySelector(".visibility-label58");

  function updateWeather(data) {
    DataE.textContent = `Weather Forecast of ${Data.toUpperCase()}`;

    temperature11.textContent = `Temp : ${Math.round(
      data.list[0].main.temp
    )}ºC`;
    feel11.textContent = `Feel : ${Math.floor(data.list[0].main.feels_like)}ºC`;
    windspeed11.textContent = `Wind : ${data.list[0].wind.speed}kmph`;
    humidity11.textContent = `Humidity : ${data.list[0].main.humidity}%`;
    const currentDate11 = data.list[0].dt_txt;
    date11.textContent = currentDate11;
    condition11.textContent = data.list[0].weather[0].main;
    visibility11.textContent = `Visibility : ${
      data.list[0].visibility / 1000
    }km`;

    temperature12.textContent = `Temp : ${Math.round(
      data.list[1].main.temp
    )}ºC`;
    windspeed12.textContent = `Wind : ${data.list[1].wind.speed}kmph`;
    humidity12.textContent = `Humidity : ${data.list[1].main.humidity}%`;
    const currentDate12 = data.list[1].dt_txt;
    date12.textContent = currentDate12;
    condition12.textContent = data.list[1].weather[0].main;
    visibility12.textContent = `Visibility : ${
      data.list[1].visibility / 1000
    }km`;

    temperature13.textContent = `Temp : ${Math.round(
      data.list[2].main.temp
    )}ºC`;
    windspeed13.textContent = `Wind : ${data.list[2].wind.speed}kmph`;
    humidity13.textContent = `Humidity : ${data.list[2].main.humidity}%`;
    const currentDate13 = data.list[2].dt_txt;
    date13.textContent = currentDate13;
    condition13.textContent = data.list[2].weather[0].main;
    visibility13.textContent = `Visibility : ${
      data.list[2].visibility / 1000
    }km`;

    temperature14.textContent = `Temp : ${Math.round(
      data.list[3].main.temp
    )}ºC`;
    windspeed14.textContent = `Wind : ${data.list[3].wind.speed}kmph`;
    humidity14.textContent = `Humidity : ${data.list[3].main.humidity}%`;
    const currentDate14 = data.list[3].dt_txt;
    date14.textContent = currentDate14;
    condition14.textContent = data.list[3].weather[0].main;
    visibility14.textContent = `Visibility : ${
      data.list[3].visibility / 1000
    }km`;

    temperature15.textContent = `Temp : ${Math.round(
      data.list[4].main.temp
    )}ºC`;
    windspeed15.textContent = `Wind : ${data.list[4].wind.speed}kmph`;
    humidity15.textContent = `Humidity : ${data.list[4].main.humidity}%`;
    const currentDate15 = data.list[4].dt_txt;
    date15.textContent = currentDate15;
    condition15.textContent = data.list[4].weather[0].main;
    visibility15.textContent = `Visibility : ${
      data.list[4].visibility / 1000
    }km`;

    temperature16.textContent = `Temp : ${Math.round(
      data.list[5].main.temp
    )}ºC`;
    windspeed16.textContent = `Wind : ${data.list[5].wind.speed}kmph`;
    humidity16.textContent = `Humidity : ${data.list[5].main.humidity}%`;
    const currentDate16 = data.list[5].dt_txt;
    date16.textContent = currentDate16;
    condition16.textContent = data.list[5].weather[0].main;
    visibility16.textContent = `Visibility : ${
      data.list[5].visibility / 1000
    }km`;

    temperature17.textContent = `Temp : ${Math.round(
      data.list[6].main.temp
    )}ºC`;
    windspeed17.textContent = `Wind : ${data.list[6].wind.speed}kmph`;
    humidity17.textContent = `Humidity : ${data.list[6].main.humidity}%`;
    const currentDate17 = data.list[6].dt_txt;
    date17.textContent = currentDate17;
    condition17.textContent = data.list[6].weather[0].main;
    visibility17.textContent = `Visibility : ${
      data.list[6].visibility / 1000
    }km`;

    temperature18.textContent = `Temp : ${Math.round(
      data.list[7].main.temp
    )}ºC`;
    windspeed18.textContent = `Wind : ${data.list[7].wind.speed}kmph`;
    humidity18.textContent = `Humidity : ${data.list[7].main.humidity}%`;
    const currentDate18 = data.list[7].dt_txt;
    date18.textContent = currentDate18;
    condition18.textContent = data.list[7].weather[0].main;
    visibility18.textContent = `Visibility : ${
      data.list[7].visibility / 1000
    }km`;

    temperature21.textContent = `Temp : ${Math.round(
      data.list[8].main.temp
    )}ºC`;
    feel21.textContent = `Feel : ${Math.floor(data.list[8].main.feels_like)}ºC`;
    windspeed21.textContent = `Wind : ${data.list[8].wind.speed}kmph`;
    humidity21.textContent = `Humidity : ${data.list[8].main.humidity}%`;
    const currentDate21 = data.list[8].dt_txt;
    date21.textContent = currentDate21;
    condition21.textContent = data.list[8].weather[0].main;
    visibility21.textContent = `Visibility : ${
      data.list[8].visibility / 1000
    }km`;

    temperature22.textContent = `Temp : ${Math.round(
      data.list[9].main.temp
    )}ºC`;
    windspeed22.textContent = `Wind : ${data.list[9].wind.speed}kmph`;
    humidity22.textContent = `Humidity : ${data.list[9].main.humidity}%`;
    const currentDate22 = data.list[9].dt_txt;
    date22.textContent = currentDate22;
    condition22.textContent = data.list[9].weather[0].main;
    visibility22.textContent = `Visibility : ${
      data.list[9].visibility / 1000
    }km`;

    temperature23.textContent = `Temp : ${Math.round(
      data.list[10].main.temp
    )}ºC`;
    windspeed23.textContent = `Wind : ${data.list[10].wind.speed}kmph`;
    humidity23.textContent = `Humidity : ${data.list[10].main.humidity}%`;
    const currentDate23 = data.list[10].dt_txt;
    date23.textContent = currentDate23;
    condition23.textContent = data.list[10].weather[0].main;
    visibility23.textContent = `Visibility : ${
      data.list[10].visibility / 1000
    }km`;

    temperature24.textContent = `Temp : ${Math.round(
      data.list[21].main.temp
    )}ºC`;
    windspeed24.textContent = `Wind : ${data.list[11].wind.speed}kmph`;
    humidity24.textContent = `Humidity : ${data.list[11].main.humidity}%`;
    const currentDate24 = data.list[11].dt_txt;
    date24.textContent = currentDate24;
    condition24.textContent = data.list[11].weather[0].main;
    visibility24.textContent = `Visibility : ${
      data.list[11].visibility / 1000
    }km`;

    temperature25.textContent = `Temp : ${Math.round(
      data.list[28].main.temp
    )}ºC`;
    windspeed25.textContent = `Wind : ${data.list[12].wind.speed}kmph`;
    humidity25.textContent = `Humidity : ${data.list[12].main.humidity}%`;
    const currentDate25 = data.list[12].dt_txt;
    date25.textContent = currentDate25;
    condition25.textContent = data.list[12].weather[0].main;
    visibility25.textContent = `Visibility : ${
      data.list[12].visibility / 1000
    }km`;

    temperature26.textContent = `Temp : ${Math.round(
      data.list[13].main.temp
    )}ºC`;
    windspeed26.textContent = `Wind : ${data.list[13].wind.speed}kmph`;
    humidity26.textContent = `Humidity : ${data.list[13].main.humidity}%`;
    const currentDate26 = data.list[13].dt_txt;
    date26.textContent = currentDate26;
    condition26.textContent = data.list[13].weather[0].main;
    visibility26.textContent = `Visibility : ${
      data.list[13].visibility / 1000
    }km`;

    temperature27.textContent = `Temp : ${Math.round(
      data.list[14].main.temp
    )}ºC`;
    windspeed27.textContent = `Wind : ${data.list[14].wind.speed}kmph`;
    humidity27.textContent = `Humidity : ${data.list[14].main.humidity}%`;
    const currentDate27 = data.list[14].dt_txt;
    date27.textContent = currentDate27;
    condition27.textContent = data.list[14].weather[0].main;
    visibility27.textContent = `Visibility : ${
      data.list[14].visibility / 1000
    }km`;

    temperature28.textContent = `Temp : ${Math.round(
      data.list[15].main.temp
    )}ºC`;
    windspeed28.textContent = `Wind : ${data.list[15].wind.speed}kmph`;
    humidity28.textContent = `Humidity : ${data.list[15].main.humidity}%`;
    const currentDate28 = data.list[15].dt_txt;
    date28.textContent = currentDate28;
    condition28.textContent = data.list[15].weather[0].main;
    visibility28.textContent = `Visibility : ${
      data.list[15].visibility / 1000
    }km`;

    temperature31.textContent = `Temp : ${Math.round(
      data.list[16].main.temp
    )}ºC`;
    feel31.textContent = `Feel : ${Math.floor(
      data.list[16].main.feels_like
    )}ºC`;
    windspeed31.textContent = `Wind : ${data.list[16].wind.speed}kmph`;
    humidity31.textContent = `Humidity : ${data.list[16].main.humidity}%`;
    const currentDate31 = data.list[16].dt_txt;
    date31.textContent = currentDate31;
    condition31.textContent = data.list[16].weather[0].main;
    visibility31.textContent = `Visibility : ${
      data.list[16].visibility / 1000
    }km`;

    temperature32.textContent = `Temp : ${Math.round(
      data.list[17].main.temp
    )}ºC`;
    windspeed32.textContent = `Wind : ${data.list[17].wind.speed}kmph`;
    humidity32.textContent = `Humidity : ${data.list[17].main.humidity}%`;
    const currentDate32 = data.list[17].dt_txt;
    date32.textContent = currentDate32;
    condition32.textContent = data.list[17].weather[0].main;
    visibility32.textContent = `Visibility : ${
      data.list[17].visibility / 1000
    }km`;

    temperature33.textContent = `Temp : ${Math.round(
      data.list[18].main.temp
    )}ºC`;
    windspeed33.textContent = `Wind : ${data.list[18].wind.speed}kmph`;
    humidity33.textContent = `Humidity : ${data.list[18].main.humidity}%`;
    const currentDate33 = data.list[18].dt_txt;
    date33.textContent = currentDate33;
    condition33.textContent = data.list[18].weather[0].main;
    visibility33.textContent = `Visibility : ${
      data.list[18].visibility / 1000
    }km`;

    temperature34.textContent = `Temp : ${Math.round(
      data.list[19].main.temp
    )}ºC`;
    windspeed34.textContent = `Wind : ${data.list[19].wind.speed}kmph`;
    humidity34.textContent = `Humidity : ${data.list[19].main.humidity}%`;
    const currentDate34 = data.list[19].dt_txt;
    date34.textContent = currentDate34;
    condition34.textContent = data.list[19].weather[0].main;
    visibility34.textContent = `Visibility : ${
      data.list[19].visibility / 1000
    }km`;

    temperature35.textContent = `Temp : ${Math.round(
      data.list[28].main.temp
    )}ºC`;
    windspeed35.textContent = `Wind : ${data.list[20].wind.speed}kmph`;
    humidity35.textContent = `Humidity : ${data.list[20].main.humidity}%`;
    const currentDate35 = data.list[20].dt_txt;
    date35.textContent = currentDate35;
    condition35.textContent = data.list[20].weather[0].main;
    visibility35.textContent = `Visibility : ${
      data.list[20].visibility / 1000
    }km`;

    temperature36.textContent = `Temp : ${Math.round(
      data.list[21].main.temp
    )}ºC`;
    windspeed36.textContent = `Wind : ${data.list[21].wind.speed}kmph`;
    humidity36.textContent = `Humidity : ${data.list[21].main.humidity}%`;
    const currentDate36 = data.list[21].dt_txt;
    date36.textContent = currentDate36;
    condition36.textContent = data.list[21].weather[0].main;
    visibility36.textContent = `Visibility : ${
      data.list[21].visibility / 1000
    }km`;

    temperature37.textContent = `Temp : ${Math.round(
      data.list[22].main.temp
    )}ºC`;
    windspeed37.textContent = `Wind : ${data.list[22].wind.speed}kmph`;
    humidity37.textContent = `Humidity : ${data.list[22].main.humidity}%`;
    const currentDate37 = data.list[2].dt_txt;
    date37.textContent = currentDate37;
    condition37.textContent = data.list[22].weather[0].main;
    visibility37.textContent = `Visibility : ${
      data.list[22].visibility / 1000
    }km`;

    temperature38.textContent = `Temp : ${Math.round(
      data.list[23].main.temp
    )}ºC`;
    windspeed38.textContent = `Wind : ${data.list[23].wind.speed}kmph`;
    humidity38.textContent = `Humidity : ${data.list[23].main.humidity}%`;
    const currentDate38 = data.list[23].dt_txt;
    date38.textContent = currentDate38;
    condition38.textContent = data.list[23].weather[0].main;
    visibility38.textContent = `Visibility : ${
      data.list[23].visibility / 1000
    }km`;

    temperature41.textContent = `Temp : ${Math.round(
      data.list[24].main.temp
    )}ºC`;
    feel41.textContent = `Feel : ${Math.floor(
      data.list[24].main.feels_like
    )}ºC`;
    windspeed41.textContent = `Wind : ${data.list[24].wind.speed}kmph`;
    humidity41.textContent = `Humidity : ${data.list[24].main.humidity}%`;
    const currentDate41 = data.list[24].dt_txt;
    date41.textContent = currentDate41;
    condition41.textContent = data.list[24].weather[0].main;
    visibility41.textContent = `Visibility : ${
      data.list[24].visibility / 1000
    }km`;

    temperature42.textContent = `Temp : ${Math.round(
      data.list[25].main.temp
    )}ºC`;
    windspeed42.textContent = `Wind : ${data.list[25].wind.speed}kmph`;
    humidity42.textContent = `Humidity : ${data.list[25].main.humidity}%`;
    const currentDate42 = data.list[25].dt_txt;
    date42.textContent = currentDate42;
    condition42.textContent = data.list[25].weather[0].main;
    visibility42.textContent = `Visibility : ${
      data.list[25].visibility / 1000
    }km`;

    temperature43.textContent = `Temp : ${Math.round(
      data.list[26].main.temp
    )}ºC`;
    windspeed43.textContent = `Wind : ${data.list[26].wind.speed}kmph`;
    humidity43.textContent = `Humidity : ${data.list[26].main.humidity}%`;
    const currentDate43 = data.list[26].dt_txt;
    date43.textContent = currentDate43;
    condition43.textContent = data.list[26].weather[0].main;
    visibility43.textContent = `Visibility : ${
      data.list[26].visibility / 1000
    }km`;

    temperature44.textContent = `Temp : ${Math.round(
      data.list[27].main.temp
    )}ºC`;
    windspeed44.textContent = `Wind : ${data.list[27].wind.speed}kmph`;
    humidity44.textContent = `Humidity : ${data.list[27].main.humidity}%`;
    const currentDate44 = data.list[27].dt_txt;
    date44.textContent = currentDate44;
    condition44.textContent = data.list[27].weather[0].main;
    visibility44.textContent = `Visibility : ${
      data.list[27].visibility / 1000
    }km`;

    temperature45.textContent = `Temp : ${Math.round(
      data.list[28].main.temp
    )}ºC`;
    windspeed45.textContent = `Wind : ${data.list[28].wind.speed}kmph`;
    humidity45.textContent = `Humidity : ${data.list[28].main.humidity}%`;
    const currentDate45 = data.list[28].dt_txt;
    date45.textContent = currentDate45;
    condition45.textContent = data.list[28].weather[0].main;
    visibility45.textContent = `Visibility : ${
      data.list[28].visibility / 1000
    }km`;

    temperature46.textContent = `Temp : ${Math.round(
      data.list[29].main.temp
    )}ºC`;
    windspeed46.textContent = `Wind : ${data.list[29].wind.speed}kmph`;
    humidity46.textContent = `Humidity : ${data.list[29].main.humidity}%`;
    const currentDate46 = data.list[29].dt_txt;
    date46.textContent = currentDate46;
    condition46.textContent = data.list[29].weather[0].main;
    visibility46.textContent = `Visibility : ${
      data.list[29].visibility / 1000
    }km`;

    temperature47.textContent = `Temp : ${Math.round(
      data.list[30].main.temp
    )}ºC`;
    windspeed47.textContent = `Wind : ${data.list[30].wind.speed}kmph`;
    humidity47.textContent = `Humidity : ${data.list[30].main.humidity}%`;
    const currentDate47 = data.list[30].dt_txt;
    date47.textContent = currentDate47;
    condition47.textContent = data.list[30].weather[0].main;
    visibility47.textContent = `Visibility : ${
      data.list[30].visibility / 1000
    }km`;

    temperature48.textContent = `Temp : ${Math.round(
      data.list[31].main.temp
    )}ºC`;
    windspeed48.textContent = `Wind : ${data.list[31].wind.speed}kmph`;
    humidity48.textContent = `Humidity : ${data.list[31].main.humidity}%`;
    const currentDate48 = data.list[31].dt_txt;
    date48.textContent = currentDate48;
    condition48.textContent = data.list[31].weather[0].main;
    visibility48.textContent = `Visibility : ${
      data.list[31].visibility / 1000
    }km`;

    temperature51.textContent = `Temp : ${Math.round(
      data.list[32].main.temp
    )}ºC`;
    feel51.textContent = `Feel : ${Math.floor(
      data.list[32].main.feels_like
    )}ºC`;
    windspeed51.textContent = `Wind : ${data.list[32].wind.speed}kmph`;
    humidity51.textContent = `Humidity : ${data.list[32].main.humidity}%`;
    const currentDate51 = data.list[32].dt_txt;
    date51.textContent = currentDate51;
    condition51.textContent = data.list[32].weather[0].main;
    visibility51.textContent = `Visibility : ${
      data.list[32].visibility / 1000
    }km`;

    temperature52.textContent = `Temp : ${Math.round(
      data.list[33].main.temp
    )}ºC`;
    windspeed52.textContent = `Wind : ${data.list[33].wind.speed}kmph`;
    humidity52.textContent = `Humidity : ${data.list[33].main.humidity}%`;
    const currentDate52 = data.list[33].dt_txt;
    date52.textContent = currentDate52;
    condition52.textContent = data.list[33].weather[0].main;
    visibility52.textContent = `Visibility : ${
      data.list[33].visibility / 1000
    }km`;

    temperature53.textContent = `Temp : ${Math.round(
      data.list[34].main.temp
    )}ºC`;
    windspeed53.textContent = `Wind : ${data.list[34].wind.speed}kmph`;
    humidity53.textContent = `Humidity : ${data.list[34].main.humidity}%`;
    const currentDate53 = data.list[34].dt_txt;
    date53.textContent = currentDate53;
    condition53.textContent = data.list[34].weather[0].main;
    visibility53.textContent = `Visibility : ${
      data.list[34].visibility / 1000
    }km`;

    temperature54.textContent = `Temp : ${Math.round(
      data.list[35].main.temp
    )}ºC`;
    windspeed54.textContent = `Wind : ${data.list[35].wind.speed}kmph`;
    humidity54.textContent = `Humidity : ${data.list[35].main.humidity}%`;
    const currentDate54 = data.list[35].dt_txt;
    date54.textContent = currentDate54;
    condition54.textContent = data.list[35].weather[0].main;
    visibility54.textContent = `Visibility : ${
      data.list[35].visibility / 1000
    }km`;

    temperature55.textContent = `Temp : ${Math.round(
      data.list[36].main.temp
    )}ºC`;
    windspeed55.textContent = `Wind : ${data.list[36].wind.speed}kmph`;
    humidity55.textContent = `Humidity : ${data.list[36].main.humidity}%`;
    const currentDate55 = data.list[36].dt_txt;
    date55.textContent = currentDate55;
    condition55.textContent = data.list[36].weather[0].main;
    visibility55.textContent = `Visibility : ${
      data.list[36].visibility / 1000
    }km`;

    temperature56.textContent = `Temp : ${Math.round(
      data.list[37].main.temp
    )}ºC`;
    windspeed56.textContent = `Wind : ${data.list[37].wind.speed}kmph`;
    humidity56.textContent = `Humidity : ${data.list[37].main.humidity}%`;
    const currentDate56 = data.list[37].dt_txt;
    date56.textContent = currentDate56;
    condition56.textContent = data.list[37].weather[0].main;
    visibility56.textContent = `Visibility : ${
      data.list[37].visibility / 1000
    }km`;

    temperature57.textContent = `Temp : ${Math.round(
      data.list[38].main.temp
    )}ºC`;
    windspeed57.textContent = `Wind : ${data.list[38].wind.speed}kmph`;
    humidity57.textContent = `Humidity : ${data.list[38].main.humidity}%`;
    const currentDate57 = data.list[38].dt_txt;
    date57.textContent = currentDate57;
    condition57.textContent = data.list[38].weather[0].main;
    visibility57.textContent = `Visibility : ${
      data.list[38].visibility / 1000
    }km`;

    temperature58.textContent = `Temp : ${Math.round(
      data.list[39].main.temp
    )}ºC`;
    windspeed58.textContent = `Wind : ${data.list[39].wind.speed}kmph`;
    humidity58.textContent = `Humidity : ${data.list[39].main.humidity}%`;
    const currentDate58 = data.list[39].dt_txt;
    date58.textContent = currentDate58;
    condition58.textContent = data.list[39].weather[0].main;
    visibility58.textContent = `Visibility : ${
      data.list[39].visibility / 1000
    }km`;
  }
  let formElement = document.querySelector(".search-form");

  const inputElement = document.querySelector(".city-input");
  const DataE = document.querySelector(".city-info");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    Data = inputElement.value;

    if (Data !== "") {
      fetchWeatherData(Data);
      //inputElement.value = "";
    }
  });
}
