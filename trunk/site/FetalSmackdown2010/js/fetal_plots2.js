var Boston_aov_data = [
    {
        label: "Boston AoV Upper",
        color: 1,
        lines: { show: true, fill: true },
        data: [[16, 0.261],
            [17, 0.288],
            [18, 0.316],
            [19, 0.343],
            [20, 0.371],
            [21, 0.398],
            [22, 0.426],
            [23, 0.453],
            [24, 0.481],
            [25, 0.509],
            [26, 0.536],
            [27, 0.564],
            [28, 0.591],
            [29, 0.619],
            [30, 0.646],
            [31, 0.674],
            [32, 0.701],
            [33, 0.729],
            [34, 0.757],
            [35, 0.784],
            [36, 0.812],
            [37, 0.839],
            [38, 0.867],
            [39, 0.894],
            [40, 0.922]]
    },
            {
                label: "Boston AoV Lower",
                color: 1,
                lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
                data: [[16, 0.169],
                [17, 0.190],
                [18, 0.211],
                [19, 0.231],
                [20, 0.252],
                [21, 0.273],
                [22, 0.294],
                [23, 0.314],
                [24, 0.335],
                [25, 0.356],
                [26, 0.377],
                [27, 0.397],
                [28, 0.418],
                [29, 0.439],
                [30, 0.460],
                [31, 0.480],
                [32, 0.501],
                [33, 0.522],
                [34, 0.543],
                [35, 0.563],
                [36, 0.584],
                [37, 0.605],
                [38, 0.626],
                [39, 0.646],
                [40, 0.667]]
}];
var Royal_aov_data = [{
    label: "Royal Brompton AoV Upper",
    color: 1,
    lines: { show: true, fill: true },
    data: [[16, 0.271],
                [17, 0.293],
                [18, 0.314],
                [19, 0.337],
                [20, 0.359],
                [21, 0.382],
                [22, 0.405],
                [23, 0.429],
                [24, 0.452],
                [25, 0.476],
                [26, 0.500],
                [27, 0.525],
                [28, 0.549],
                [29, 0.574],
                [30, 0.599],
                [31, 0.625],
                [32, 0.650],
                [33, 0.676],
                [34, 0.702],
                [35, 0.728],
                [36, 0.755],
                [37, 0.781],
                [38, 0.808],
                [39, 0.835],
                [40, 0.862]]
},
            {
                label: "Royal Brompton AoV Lower",
                color: 1,
                lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
                data: [[16, 0.178],
                [17, 0.192],
                [18, 0.206],
                [19, 0.221],
                [20, 0.235],
                [21, 0.250],
                [22, 0.265],
                [23, 0.281],
                [24, 0.296],
                [25, 0.312],
                [26, 0.328],
                [27, 0.344],
                [28, 0.360],
                [29, 0.376],
                [30, 0.393],
                [31, 0.409],
                [32, 0.426],
                [33, 0.443],
                [34, 0.460],
                [35, 0.477],
                [36, 0.494],
                [37, 0.512],
                [38, 0.529],
                [39, 0.547],
                [40, 0.565]]
}];
var Michigan_aov_data = [
        { label: "Michigan AoV Upper",
            color: 1,
            lines: { show: true, fill: true },
            data: [[16, 0.256],
            [17, 0.287],
            [18, 0.319],
            [19, 0.350],
            [20, 0.382],
            [21, 0.414],
            [22, 0.445],
            [23, 0.477],
            [24, 0.508],
            [25, 0.540],
            [26, 0.571],
            [27, 0.603],
            [28, 0.634],
            [29, 0.666],
            [30, 0.697],
            [31, 0.729],
            [32, 0.760],
            [33, 0.792],
            [34, 0.823],
            [35, 0.855],
            [36, 0.886],
            [37, 0.918],
            [38, 0.949],
            [39, 0.981],
            [40, 1.012]]
        },
        {
            label: "Michigan AoV Lower",
            color: 1,
            lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
            data: [[16, 0.148],
            [17, 0.174],
            [18, 0.200],
            [19, 0.226],
            [20, 0.252],
            [21, 0.278],
            [22, 0.304],
            [23, 0.330],
            [24, 0.356],
            [25, 0.382],
            [26, 0.408],
            [27, 0.435],
            [28, 0.461],
            [29, 0.487],
            [30, 0.513],
            [31, 0.539],
            [32, 0.565],
            [33, 0.591],
            [34, 0.617],
            [35, 0.643],
            [36, 0.669],
            [37, 0.695],
            [38, 0.721],
            [39, 0.747],
            [40, 0.774]]
            }];

function plotIt(array, ref) {
    var myData = {
        label: "your data",
        color: "#000000",
        data: [array],
        points: { show: true },
        lines: { show: false }
    };
    switch (ref) {
        case "Royal": Choice_data = Royal_aov_data;
            break;
        case "Boston": Choice_data = Boston_aov_data;
            break;
        case "Michigan": Choice_data = Michigan_aov_data;
            break;
    }
    var plotData = jQuery.extend(true, [], Choice_data); //makes a NEW array from the reference data

    plotData.push(myData); //puts 'myData' in with the reference data

    $.plot($("#aov-placeholder"), plotData, {
        yaxis: { min: 0, max: 1 },
        xaxis: { tickDecimals: 0 },
        grid: { show: true, aboveData: true },
        legend: {position: 'nw'}
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

