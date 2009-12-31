var Boston_lvminor_data = [
    {
        label: "Boston LV Minor Upper",
        color: 1,
        lines: { show: true, fill: true },
        data: [[16, 0.540],
[17, 0.613],
[18, 0.686],
[19, 0.759],
[20, 0.831],
[21, 0.904],
[22, 0.977],
[23, 1.050],
[24, 1.122],
[25, 1.195],
[26, 1.268],
[27, 1.341],
[28, 1.413],
[29, 1.486],
[30, 1.559],
[31, 1.632],
[32, 1.704],
[33, 1.777],
[34, 1.850],
[35, 1.923],
[36, 1.995],
[37, 2.068],
[38, 2.141],
[39, 2.213],
[40, 2.286]]
    },
            {
                label: "Boston LV Minor Lower",
                color: 1,
                lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
                data: [[16, 0.334],
[17, 0.381],
[18, 0.427],
[19, 0.474],
[20, 0.521],
[21, 0.568],
[22, 0.615],
[23, 0.662],
[24, 0.709],
[25, 0.756],
[26, 0.802],
[27, 0.849],
[28, 0.896],
[29, 0.943],
[30, 0.990],
[31, 1.037],
[32, 1.084],
[33, 1.131],
[34, 1.177],
[35, 1.224],
[36, 1.271],
[37, 1.318],
[38, 1.365],
[39, 1.412],
[40, 1.459]]
}];
var Royal_lvminor_data = [{
    label: "Royal Brompton LV Minor Upper",
    color: 1,
    lines: { show: true, fill: true },
    data: [[16, 0.647],
[17, 0.700],
[18, 0.754],
[19, 0.808],
[20, 0.864],
[21, 0.921],
[22, 0.978],
[23, 1.036],
[24, 1.095],
[25, 1.154],
[26, 1.215],
[27, 1.276],
[28, 1.337],
[29, 1.400],
[30, 1.463],
[31, 1.526],
[32, 1.590],
[33, 1.655],
[34, 1.721],
[35, 1.786],
[36, 1.853],
[37, 1.920],
[38, 1.988],
[39, 2.056],
[40, 2.125]]
},
            {
                label: "Royal Brompton LV Minor Lower",
                color: 1,
                lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
                data: [[16, 0.387],
[17, 0.418],
[18, 0.450],
[19, 0.483],
[20, 0.516],
[21, 0.550],
[22, 0.584],
[23, 0.619],
[24, 0.654],
[25, 0.690],
[26, 0.726],
[27, 0.762],
[28, 0.799],
[29, 0.836],
[30, 0.874],
[31, 0.912],
[32, 0.950],
[33, 0.989],
[34, 1.028],
[35, 1.068],
[36, 1.107],
[37, 1.147],
[38, 1.188],
[39, 1.229],
[40, 1.270]]
}];
var Michigan_lvminor_data = [
        { label: "Wm. Beaumont LV Minor Upper",
            color: 1,
            lines: { show: true, fill: true },
            data: [[16, 0.554],
[17, 0.611],
[18, 0.669],
[19, 0.727],
[20, 0.785],
[21, 0.843],
[22, 0.900],
[23, 0.958],
[24, 1.016],
[25, 1.074],
[26, 1.132],
[27, 1.189],
[28, 1.247],
[29, 1.305],
[30, 1.363],
[31, 1.421],
[32, 1.478],
[33, 1.536],
[34, 1.594],
[35, 1.652],
[36, 1.710],
[37, 1.767],
[38, 1.825],
[39, 1.883],
[40, 1.941]]
        },
        {
            label: "Wm. Beaumont LV Minor Lower",
            color: 1,
            lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
            data: [[16, 0.326],
[17, 0.371],
[18, 0.416],
[19, 0.460],
[20, 0.505],
[21, 0.550],
[22, 0.595],
[23, 0.640],
[24, 0.684],
[25, 0.729],
[26, 0.774],
[27, 0.819],
[28, 0.864],
[29, 0.908],
[30, 0.953],
[31, 0.998],
[32, 1.043],
[33, 1.088],
[34, 1.132],
[35, 1.177],
[36, 1.222],
[37, 1.267],
[38, 1.312],
[39, 1.356],
[40, 1.401]]
}];

function plotIt(array, ref) {
    var myData = {
        label: "Your Data",
        color: "#000000",
        data: [array],
        points: { show: true },
        lines: { show: false }
    };
    switch (ref) {
        case "Royal": Choice_data = Royal_lvminor_data;
            break;
        case "Boston": Choice_data = Boston_lvminor_data;
            break;
        case "Michigan": Choice_data = Michigan_lvminor_data;
            break;
    }
    var plotData = jQuery.extend(true, [], Choice_data); //makes a NEW array from the reference data

    plotData.push(myData); //puts 'myData' in with the reference data

    $.plot($("#lvminor-placeholder"), plotData, {
        yaxis: { min: 0, max: 2.2 },
        xaxis: { tickDecimals: 0 },
        grid: { show: true, aboveData: true },
        legend: { position: 'nw' }
    });
}

//Copyright (c) 2009: Dan Dyar

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

