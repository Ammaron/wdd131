document.getElementById('currentyear').textContent = new Date().getFullYear();
const temperature = 8;
const windSpeed = 12;


function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = Math.round(windchill) + "C";
} else {
    document.getElementById('windchill').textContent = "N/A";
}