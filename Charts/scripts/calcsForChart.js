//setup myEcho object
//will hold inputs and calculated values
var myEcho = {};
myEcho.lmca = new Array();
myEcho.zscore = new Array();

Array.prototype.max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
    return max;
}
Array.prototype.min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
    return min;
}

function updateRow(index) {
    //first get row data
    var ht = parseFloat(document.getElementById('ht' + [index]).value);
    var wt = parseFloat(document.getElementById('wt' + [index]).value);
    if (isNaN(wt)) { return };
    var lmca = parseFloat(document.getElementById('lmca' + [index]).value);
    var bsa = calcBSA(ht, wt);
    var zscore = calcZ(bsa, lmca);
    document.getElementById('bsa' + [index]).innerHTML = bsa.toFixed(2);
    document.getElementById('lmcaZ' + [index]).innerHTML = zscore.toFixed(2);
} //end updateRow fx

function calcBSA(height, weight) {
        if (!isNaN(height) && !isNaN(weight)) {
        return 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);
    }
    else if (isNaN(height) && !isNaN(weight)) {
        return 0.1 * Math.pow(weight, 0.6667);
    }

} //end calcBSA fx

function calcZ(bsa, score) {
    score = score / 10;
    var mean = 0.31747 * Math.pow(bsa, 0.36008) - 0.02887;
    var sd = 0.03040 + (0.01514 * bsa);
    return (score - mean) / sd;
} //end calcZ fx

function GraphIt(index) {
    //empty the arrays
    myEcho.lmca.length = 0;
    myEcho.zscore.length = 0;
    //loop to get the data
    for (i = 0; i <= index; i++) {
        myEcho.lmca[i] = parseFloat(document.getElementById("lmca" + i).value);
        myEcho.zscore[i] = document.getElementById("lmcaZ" + i).innerHTML;
    } // end for loop
    graphLMCA();
    graphLMCAZ();
} //end graphit fx
function graphLMCA() {
    //uses the Google chart API
    var chartString = "";
    var chartURL = "http://chart.apis.google.com/chart";
    var chartSize = "?chs=400x300";
    var chartColor = "&chco=FF0000"
    var chartType = "&cht=lc";
    var chartData = "&chd=t:";
    var chartLabel = "";
    var chartXAxis = "";
    var chartYAxis = "&chxt=y";
    var chartYScale = "&chds=";
    var chartAxisStyle = "&chxs=0,FF0000";

    //get the lmca values to be charted from the myEcho object
    var lmcaData = myEcho.lmca.join();


    //build the data portion of the string
    //data pairs are separated by 'pipes' ( | )
    //and the '-1' refers to the x data defaulting to 'space the data points evenly along the x-axis'
    chartData = chartData + lmcaData;



    //find the max values, used for proper scaling
    var lmcaMax = myEcho.lmca.max();
    var lmcaMin = 0;
    lmcaMax = (lmcaMax * 1.2).toFixed(1);

    chartYScale = chartYScale + lmcaMin + "," + lmcaMax;
    chartYAxis = chartYAxis + "&chxr=0," + lmcaMin + "," + lmcaMax;

    //build the image src string
    chartString = chartURL + chartSize + chartType + chartData + chartYScale + chartYAxis + chartColor + chartAxisStyle;
    document.images["lmcaGraph"].src = chartString;

} //end main graphIt fx

function graphLMCAZ() {
    //uses the Google chart API
    var chartString = "";
    var chartURL = "http://chart.apis.google.com/chart";
    var chartSize = "?chs=400x300";
    var chartColor = "&chco=0000DD"
    var chartType = "&cht=lc";
    var chartData = "&chd=t:";
    var chartLabel = "";
    var chartXAxis = "";
    var chartYAxis = "&chxt=y";
    var chartYScale = "&chds=";
    var chartAxisStyle = "&chxs=0,0000DD";

    //get the lmca values to be charted from the myEcho object
    var lmcaZData = myEcho.zscore.join();


    //build the data portion of the string
    //data pairs are separated by 'pipes' ( | )
    //and the '-1' refers to the x data defaulting to 'space the data points evenly along the x-axis'
    chartData = chartData + lmcaZData;



    //find the max values, used for proper scaling
    var lmcaMax = myEcho.zscore.max();
    var lmcaMin = myEcho.zscore.min();
    lmcaMax = (lmcaMax * 1.2).toFixed(1);
    if (lmcaMax < 2.0) { // forces the z score graph to have a minimum range of +/- 2
        lmcaMax = 2.0
    }
    lmcaMin = -2;

    chartYScale = chartYScale + lmcaMin + "," + lmcaMax;
    chartYAxis = chartYAxis + "&chxr=0," + lmcaMin + "," + lmcaMax;

    //find the total y-range scale (0 is baseline, 1.0 is max y)
    var range = lmcaMax - lmcaMin;
    var unit = 1 / range;
    var zeroPoint = (2 * unit);  //min is preset to be '-2', need to position the zero line 'up'
    var zeroPoint1 = zeroPoint.toFixed(2);
    var zeroPoint2 = zeroPoint + 0.01;
    zeroPoint2 = zeroPoint2.toFixed(2);

    //find the +/- 1.65 range markers, i.e., the 'normal range'
    var upper = zeroPoint + (1.65 * unit);
    upper = upper.toFixed(2);
    var lower = zeroPoint - (1.65 * unit);
    lower = lower.toFixed(2);
    //set the charting option to draw markers: zero baseline, range
    var chartMarkers = "&chm=r,E5ECF9,0," + lower + "," + upper + "|r,C0C0C0,0," + zeroPoint1 + "," + zeroPoint2;

    //build the image src string
    chartString = chartURL + chartSize + chartType + chartData + chartYScale + chartYAxis + chartColor + chartAxisStyle + chartMarkers;
    document.images["zscoreGraph"].src = chartString;

} //end main graph fx

