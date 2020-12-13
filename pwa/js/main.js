/* MAIN */

// Detects if device is on iOS

var water = 0;

const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
// this is a react function and we currently have no idea how it works, however, because it throws an exception in the browser we deactivated it
//if (isIos() && !isInStandaloneMode()) {
//    this.setState({ showInstallMessage: true });
//}
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

function inputScreenChangeWaterCount(value) {
    if (isNumber(value)) {
        var waterCountInput = document.getElementById('input-screen-water-count');
        var waterCount = parseInt(waterCountInput.value);
        waterCount += value;
        if (waterCount < 0) {
            waterCount = 0;
        }
        waterCountInput.value = waterCount;
    }
}

document.getElementById("btn-plus").addEventListener("click", function () {
    water++;
    document.getElementById("number").innerHTML = water;
});

document.getElementById("btn-minus").addEventListener("click", function () {
    if (water != 0) {
        water--;
        document.getElementById("number").innerHTML = water;
    }
});

/*function generateChart() {
    var LineChartCanvas = $("#line-chart-sample").get(0).getContext("2d");
    var LineChartSample = new Chart(LineChartCanvas);

    var LineChartSampleData = {
        labels: ["Water", "Sugar", "Vitamins"],
        datasets: [
            {
                label: "LineChart",
                data: [700, 500, 300],
                backgroundColor:[
                    "#3D99D8",
                    "#7FE0E3",
                    "#FFE269",
                ]
            }
        ]
    };
    LineChartSample.Line(LineChartSampleData);

    //Bar Chart Sample        
    var BarChartCanvas = $("#bar-chart").get(0).getContext("2d");
    var BarChartSample = new Chart(BarChartCanvas);

    var BarChartSampleData = {
        labels: ["Water", "Sugar", "Vitamins"],
        datasets: [
            {
                label: "BarChart",
                data: [700,500,300,],
                backgroundColor:[
                    "#3D99D8",
                    "#7FE0E3",
                    "#FFE269",
                ]
            }
        ]
    };
    BarChartSample.Bar(BarChartSampleData);

    //Bar Chart Sample        
    var DoughnutChartCanvas = $("#doughnut-chart").get(0).getContext("2d");
    var DoughnutChartSample = new Chart(DoughnutChartCanvas);

    var DoughnutChartSampleData = {
        labels: ["Water", "Sugar", "Vitamins"],
        datasets: [
            {
                label: "BarChart",
                data: [700,500,300,],
                backgroundColor:[
                    "#3D99D8",
                    "#7FE0E3",
                    "#FFE269",
                ]
            }
        ]
    };
    DoughnutChartSample.Doughnut(DoughnutChartSampleData);
}
generateChart();*/

//Bar Chart Sample  


let DoughnutChartCanvas = document.getElementById("doughnut-chart").getContext("2d");
var DoughnutChartSample = new Chart(DoughnutChartCanvas, {
    type: 'doughnut',
    data: {
        labels: ["Water", "Sugar", "Vitamins"],
        datasets: [
            {
                label: "BarChart",
                data: [700, 500, 300,],
                backgroundColor: [
                    "#3D99D8",
                    "#7FE0E3",
                    "#FFE269",
                ]
            }
        ]
    }

});