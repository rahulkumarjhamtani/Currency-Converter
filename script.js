var selectFrom = document.getElementById("country1");
var selectTo = document.getElementById("country2");

var options = [
  "",
  "AED",
  "ARS",
  "AUD",
  "BGN",
  "BRL",
  "BSD",
  "CAD",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CZK",
  "DKK",
  "DOP",
  "EGP",
  "EUR",
  "FJD",
  "GBP",
  "GTQ",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "KZT",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PAB",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "RON",
  "RUB",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "TWD",
  "UAH",
  "USD",
  "UYU",
  "VND",
  "ZAR",
];

selectFrom.innerHTML = "";
selectTo.innerHTML = "";
// Populate list with options:
for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  selectFrom.innerHTML += '<option value="' + opt + '">' + opt + "</option>";
}
for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  selectTo.innerHTML += '<option value="' + opt + '">' + opt + "</option>";
}

var key = "c29d8699fcmsh0e01dcc25077e12p158e23jsna910357d9e53";
var baseURL = "https://currency-exchange.p.rapidapi.com/exchange";

const apioptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c29d8699fcmsh0e01dcc25077e12p158e23jsna910357d9e53",
    "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
  },
};

var rate = 0;

async function calculateCurrency() {
  var from = document.getElementById("country1").value;
  var to = document.getElementById("country2").value;

  console.log(from, to);

  fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}`,
    apioptions
  )
    .then((response) => response.json())
    .then((response) => {
      if (from != "" && to != "") {
        console.log(response);
        rate = response;
        document.getElementById("currencyRate").innerHTML =
          "1 " + from + " = " + response + " " + to;
      }
    })
    .catch((err) => console.error(err));
}

async function swapCurrency() {
  var from = document.getElementById("country1").value;
  var to = document.getElementById("country2").value;

  document.getElementById("country1").value = to;
  document.getElementById("country2").value = from;

  from = document.getElementById("country1").value;
  to = document.getElementById("country2").value;

  fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}`,
    apioptions
  )
    .then((response) => response.json())
    .then((response) => {
      if (from != "" && to != "") {
        console.log(response);
        rate = response;
        document.getElementById("currencyRate").innerHTML =
          "1 " + from + " = " + response + " " + to;

        calculatedRate1();
        //calculatedRate2();
      }
    })
    .catch((err) => console.error(err));
}

function calculatedRate1() {
  var from = document.getElementById("fromAmount").value;
  document.getElementById("toAmount").value = from * rate;
}

function calculatedRate2() {
  var to = document.getElementById("toAmount").value;
  document.getElementById("fromAmount").value = to * rate;
}
