document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById("solarChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6AM", "9AM", "12PM", "3PM", "6PM"],
            datasets: [{
                label: "Solar Energy Output (kWh)",
                data: [0, 20, 50, 40, 10],
                borderColor: "#FFC107",
                fill: false
            }]
        }
    });

    document.getElementById("predictionForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = {};
        const inputs = document.querySelectorAll("#predictionForm input, #predictionForm select");
        inputs.forEach(input => {
            formData[input.id] = input.value;
        });

        document.getElementById("predictionResult").innerText =
            `Predicted Solar Energy for ${formData.location}: 45 kWh\n` +
            `Details:\nDay of Year: ${formData.dayOfYear}\nYear: ${formData.year}\nMonth: ${formData.month}\nDay: ${formData.day}\n` +
            `First Hour of Period: ${formData.firstHour}\nIs Daylight: ${formData.isDaylight}\nDistance to Solar Noon: ${formData.distanceSolarNoon}\n` +
            `Avg Temperature (Day): ${formData.avgTemp}\nAvg Wind Direction (Day): ${formData.avgWindDir}\nAvg Wind Speed (Day): ${formData.avgWindSpeedDay}\n` +
            `Sky Cover: ${formData.skyCover}\nVisibility: ${formData.visibility}\nRelative Humidity: ${formData.relativeHumidity}\n` +
            `Avg Wind Speed (Period): ${formData.avgWindSpeedPeriod}\nAvg Barometric Pressure (Period): ${formData.avgBarometricPressure}`;
    });
});
