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
        chartIt(age, score)
    }//end if tapse

}
function resetForm() {
    $('#zscore,#mean,#range').text('').removeClass().attr('title', '');
    $('#chart1').attr('src', 'http://chart.apis.google.com/chart?chxl=0:|0|1m|3m|6m|1y|2y|3y|4y|5y|6y|7y|8y|9y|10y|11y|12y|13y|14y|15y|16y|17y|18y&chxr=0,0,5|1,0,4&chxt=x,y&chs=400x300&cht=lc&chco=224499,224499&chds=0,4,0,4&chd=t:1.15,1.42,1.65,1.77,1.88,1.94,2.02,2.07,2.13,2.18,2.25,2.28,2.3,2.31,2.36,2.43,2.54,2.65,2.75,2.78,2.88,2.91|0.68,0.85,1.01,1.13,1.25,1.36,1.48,1.56,1.6,1.62,1.64,1.67,1.73,1.79,1.83,1.84,1.85,1.87,1.93,1.98,2.04,2.05&chdl=%2B2+SD|-2+SD&chg=25,25&chls=0.75,-1,-1|0.75,-1,-1&chm=b,3399CC68,0,1,0&chtt=TAPSE+vs.+Age');
    $('#chart_link').attr('href', 'http://chart.apis.google.com/chart?chxl=0:|0m|1m|3m|6m|1y|2y|3y|4y|5y|6y|7y|8y|9y|10y|11y|12y|13y|14y|15y|16y|17y|18y&chxr=0,0,5|1,0,4&chxt=x,y&chs=600x400&cht=lc&chco=224499,224499&chds=0,4,0,4&chd=t:1.15,1.42,1.65,1.77,1.88,1.94,2.02,2.07,2.13,2.18,2.25,2.28,2.3,2.31,2.36,2.43,2.54,2.65,2.75,2.78,2.88,2.91|0.68,0.85,1.01,1.13,1.25,1.36,1.48,1.56,1.6,1.62,1.64,1.67,1.73,1.79,1.83,1.84,1.85,1.87,1.93,1.98,2.04,2.05&chdl=%2B2+SD|-2+SD&chg=25,25&chls=0.75,-1,-1|0.75,-1,-1&chm=b,3399CC68,0,1,0&chtt=TAPSE+vs.+Age');
}

function chartIt(age, score) {
    var ages = ['1m', '3m', '6m', '12m', '1y', '2y', '3y', '4y', '5y', '6y', '7y', '8y', '9y', '10y', '11y', '12y', '13y', '14y', '15y', '16y', '17y', '18y'];
    var datapoint = $.inArray(age, ages);
    var data_string = score;
    for (var i = 1; i <= 21; i++) {
        data_string += ',' + score;
    }

    var part1 = 'http://chart.apis.google.com/chart?chxl=0:|0|1m|3m|6m|1y|2y|3y|4y|5y|6y|7y|8y|9y|10y|11y|12y|13y|14y|15y|16y|17y|18y&chxr=0,0,5|1,0,4&chxt=x,y&chs=400x300&cht=lc&chco=224499,224499,000000&chds=0,4,0,4,0,4&chd=t2:1.15,1.42,1.65,1.77,1.88,1.94,2.02,2.07,2.13,2.18,2.25,2.28,2.3,2.31,2.36,2.43,2.54,2.65,2.75,2.78,2.88,2.91|0.68,0.85,1.01,1.13,1.25,1.36,1.48,1.56,1.6,1.62,1.64,1.67,1.73,1.79,1.83,1.84,1.85,1.87,1.93,1.98,2.04,2.05|';
    var part2 = '&chdl=%2B2+SD|-2+SD|your+data&chg=25,25&chls=0.75,-1,-1|0.75,-1,-1|1&chm=d,000000,2,';
    var part3 = ',10|b,3399CC68,0,1,0&chtt=TAPSE+vs.+Age';

    var url = part1;
    url += data_string;
    url += part2;
    url += datapoint;
    url += part3;

    $('#chart1').attr('src', url);
    var link_url = url.replace('&chs=500x300', '&chs=600x400')
    $('#chart_link').attr('href', link_url);
    
}//end chartIt fx