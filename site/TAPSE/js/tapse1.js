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
        var sd = (mean - TAPSE[age][1]) / 3;//the sd is derived from the published mean, -3 sd lower limit
        var z = (score - mean) / sd;
        var range = (mean - 2 * sd).toFixed(2) + " - " + (mean + 2 * sd).toFixed(2);
        //write the results
        //mean:
        $('#mean').text(mean);
        //range:
        $('#range').text(range);
        //z-score:
        $('#zscore').text(z.toFixed(2))
        .removeClass()
        .addClass(zscoreFlag(z))
        .attr('title', calcPercentile(z) + ' %-ile');
        
    }//end if tapse

}
function resetForm() {
    $('#zscore,#mean,#range').text('').removeClass().attr('title', '');
}
