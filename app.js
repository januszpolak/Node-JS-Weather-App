const request = require("request");
const dotenv = require("dotenv").config();

const city = process.argv[2]; //trzeci index tablicy zwróconej po wpisaniu polecenia (node app.js nazwa miasta)
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.KEY}`;

if (!city) {
  console.log(
    "Proszę podać nazwę miasta po wywołaniu polecenia ... np. node app.js Krakow bez polskich znaków"
  );
}

request(url, function (err, response, body) {
  const data = JSON.parse(body);
  console.log(
    `Temperatura w mieście ${city} wynosi: ${data.main.temp} stopni C`
  );
  console.log(`Ciśnienie powietrza wynosi: ${data.main.pressure} hPa`);

  switch (data.weather[0].main) {
    case "Clouds":
      console.log("Chmury na niebie zaraz się rozpada, uciekaj do domu !");
      break;
    case "Clear":
      console.log("Piękne, błękitne niebo");
      break;
    case "Thunderstorm":
      console.log("Pioruny siarczyste :)");
      break;
    case "Drizzle":
      console.log("Mżawka, ale zaraz kto wie");
      break;
    case "Rain":
      console.log("Deszcz, masz parasol ?");
      break;
    case "Snow":
      console.log("Śnieg, biało aż miło");
      break;
    case "Atmosphere":
      console.log("Tak średnio bym powiedział :)");
      break;
  }
});
