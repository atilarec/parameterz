
function plotTAPSE(age, score) {

    var datasets = [
        {
            "label": "Upper",
            "data": [
                [0, 1.15],
                [0.25, 1.42],
                [0.5, 1.65],
                [0.75, 1.77],
                [1, 1.88],
                [2, 1.94],
                [3, 2.02],
                [4, 2.07],
                [5, 2.13],
                [6, 2.18],
                [7, 2.25],
                [8, 2.28],
                [9, 2.30],
                [10, 2.31],
                [11, 2.36],
                [12, 2.43],
                [13, 2.54],
                [14, 2.65],
                [15, 2.75],
                [16, 2.78],
                [17, 2.88],
                [18, 2.91]]
        },
        {
            "label": "Mean",
            "data": [
                [0, 0.91],
                [0.25, 1.14],
                [0.5, 1.31],
                [0.75, 1.44],
                [1, 1.55],
                [2, 1.65],
                [3, 1.74],
                [4, 1.82],
                [5, 1.87],
                [6, 1.9],
                [7, 1.94],
                [8, 1.97],
                [9, 2.01],
                [10, 2.05],
                [11, 2.10],
                [12, 2.14],
                [13, 2.20],
                [14, 2.26],
                [15, 2.33],
                [16, 2.39],
                [17, 2.45],
                [18, 2.47]
            ]
        },
        {
            "label": "Lower",
            "data": [
                [0, 0.68],
                [0.25, 0.85],
                [0.5, 1.01],
                [0.75, 1.13],
                [1, 1.25],
                [2, 1.36],
                [3, 1.48],
                [4, 1.56],
                [5, 1.60],
                [6, 1.62],
                [7, 1.64],
                [8, 1.67],
                [9, 1.73],
                [10, 1.79],
                [11, 1.83],
                [12, 1.84],
                [13, 1.85],
                [14, 1.87],
                [15, 1.93],
                [16, 1.98],
                [17, 2.04],
                [18, 2.05]
            ]
        },
        {
            "label": "Score",
            "data": [[age, score]],
            "color": "black",
            "points": { "show": true, "radius": 3, "fill": true, "fillColor": "black" },
            "lines": { "show": false }
        }
];//end datasets

$.plot($("#placeholder"), datasets, {
 yaxis: { min: 0, max: 3.5 },
 xaxis: { tickDecimals: 0 }
});
  
}//end fx
function calcTAPSE() {
var TAPSE = { //values are mean, lower limit (-3SD)
    "1m": [0.91, 0.56],
    "3m": [1.14, 0.71],
    "6m": [1.31, 0.86],
    "12m": [1.44, 0.97],
    "1y": [1.55, 1.10],
    "2y": [1.65, 1.22],
    "3y": [1.74, 1.35],
    "4y": [1.82, 1.43],
    "5y": [1.87, 1.47],
    "6y": [1.9, 1.48],
    "7y": [1.94, 1.49],
    "8y": [1.97,1.52],
    "9y": [2.01, 1.58],
    "10y": [2.05, 1.65],
    "11y": [2.10, 1.69],
    "12y": [2.14, 1.68],
    "13y": [2.20, 1.68],
    "14y": [2.26, 1.68],
    "15y": [2.33, 1.74],
    "16y": [2.39, 1.78],
    "17y": [2.45, 1.83],
    "18y": [2.47, 1.84]
    };
    //get all the input values
    var age = $('#age').val();
    var score = parseFloat($('#tapse').val());
    //calculate the age-adjusted z-score if age,tapse exist:

    if (score && age != 'select age') {
        var mean = TAPSE[age][0];
        var sd = (mean - TAPSE[age][1]) / 3;
        var z = (score - mean) / sd;
        $('#zscore').text(z.toFixed(2));
        $('#zscore').removeClass('success notice error');
        if (z >= -1.65) {$('#zscore').addClass('success');}
        if (z < -1.65 && z >= -2) {$('#zscore').addClass('notice');}
        if (z < -2) { $('#zscore').addClass('error'); }
        //plot TAPSE vs. age
        var plot_age;
        switch (age) {
            case "1m":
                plot_age = 0;
                break;
            case "3m":
                plot_age = 0.25;
                break;
            case "6m":
                plot_age = 0.5;
                break;
            case "12m":
                plot_age = 0.75;
                break;
            default:
                plot_age = age.slice(0, age.length-1) * 1;
            }

            plotTAPSE(plot_age, score);
        
         
    }//end if tapse


}
function resetForm() {
    $('#zscore').text('').removeClass('success notice error');
}
