// https://www.chartjs.org/docs/latest/getting-started/
function generatingChart() {
    fetch("./data.json")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            const inf = {
                labels: data.map((chart) => chart.day),
                datasets: [
                    {
                        data: data.map((chart) => chart.amount),
                        backgroundColor: ["hsl(10, 79%, 65%)"],
                        borderRadius: 5,
                        hoverBackgroundColor: "hsl(10, 79%, 75%)",
                    }
                ]
            };
            const titleTooltip = (e) => `$${e[0].formattedValue}`;
            const labelTooltip = (e) => "";
            const options = {
                scales: {
                    y: {
                        ticks: {
                            display: false,
                        },
                        gird: {
                            display: false,
                            drawTicks: false,
                            drawBorder: false,
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        yAlign: "bottom",
                        displayColors: false,
                        callbacks: {
                            title: titleTooltip,
                            label: labelTooltip,
                        },
                    }
                }
            }
            const config = {
                type: "bar",
                data: inf,
                options,
            };
            const displaychart = new Chart(document.getElementById("chart"), config);
        })
}




generatingChart();


