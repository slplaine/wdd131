function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = 10;
  const wind = 6;
  const windChillElement = document.getElementById("windChill");

  if (temp <= 10 && wind > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, wind)}°C`;
  } else {
    windChillElement.textContent = "N/A";
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
