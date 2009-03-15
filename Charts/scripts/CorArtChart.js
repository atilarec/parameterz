
//setup myEcho object
//will hold inputs and calculated values
var myEcho = {};
myEcho.height = new Array(4);
myEcho.weight = new Array(4);
myEcho.bsa = new Array(4);
myEcho.lmca = new Array(4);
myEcho.zscore = new Array(4);

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


function calcZero(form) {

//loop to get the data

for (i = 0; i <= 3; i++) {
    myEcho.height[i] = parseFloat(form["ht" + i].value);
    myEcho.weight[i] = parseFloat(form["wt" + i].value);
    myEcho.lmca[i] = parseFloat(form["lmca" + i].value);
}// end for loop

//calculate each bsa and z-score
for (i = 0; i <= 3; i++) {
    myEcho.bsa[i] = calcBSA(i);
    form["bsa" + i].value = myEcho.bsa[i].toFixed(2);
    var x = calcZScore(i).toFixed(2);
    form["lmcaZ" + i].value = x;
    myEcho.zscore[i] = x;
}  //end for loop

graphIt();

}//end calcZero

//calculate the BSA
function calcBSA (index) {
var height = myEcho.height[index];
var weight = myEcho.weight[index];
    if (!isNaN(height) && !isNaN(weight)) {
        return 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);           
    }
    else if (isNaN(height) && !isNaN(weight)) {
        return 0.1 * Math.pow(weight, 0.6667);
    }

}//end calcBSA fx

//calculate the z-score
function calcZScore(index) {
var score = myEcho.lmca[index] / 10;
var mean = calcMean(myEcho.bsa[index]);
var sd = calcSD(myEcho.bsa[index]);
return (score - mean) / sd;

}//end calcZScore fx

function calcMean(bsa) {
return 0.31747 * Math.pow(bsa,0.36008) - 0.02887;
}//end calcMean fx

function calcSD(bsa) {
return 0.03040 + (0.01514 * bsa);
}//end calcSD fx


function graphIt() {
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

    //get the lmca and zscores to be charted from the myEcho object
    var lmcaData = myEcho.lmca.join();
 

    //build the data portion of the string
    //data pairs are separated by 'pipes' ( | )
    //and the '-1' refers to the x data defaulting to 'space the data points evenly along the x-axis'
    chartData = chartData + lmcaData;



    //find the max values, used for proper scaling
    var lmcaMax = myEcho.lmca.max();
    var lmcaMin = myEcho.lmca.min();
    lmcaMax = (lmcaMax * 1.2).toFixed(1);
    lmcaMin = (lmcaMin * 0.5).toFixed(1);
    
    chartYScale = chartYScale + lmcaMin + "," + lmcaMax;
    chartYAxis = chartYAxis + "&chxr=0," + lmcaMin + "," + lmcaMax;

    //build the image src string
    chartString = chartURL + chartSize + chartType + chartData + chartYScale + chartYAxis + chartColor + chartAxisStyle;
    document.images["zscoreGraph"].src = chartString;
             
}//end main graphIt fx

