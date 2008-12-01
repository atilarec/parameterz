var Intercept = new Array(2.732, 3.021, 2.819, 2.898);
var Slope = new Array(0.426, 0.443, 0.434, 0.421);
var MSE = new Array(0.10392, 0.10173, 0.10961, 0.09111);
var BSA = 0

function thinkAboutIt() {
//runs this check first before calculating everything
var wt = document.getElementById("txtWT").value;
if (isNaN(wt) || wt == "") {
return;
}
else Calculate();
}// end thinkAboutIt function

function Calculate() {
// get the ht and weight
    var ht=parseFloat(document.getElementById("txtHT").value);
var wt=parseFloat(document.getElementById("txtWT").value);
// calculate the BSA
var BSAMethod=document.getElementById("cmbBSA").value;
BSA = CalcBSA(ht,wt,BSAMethod);
// write the BSA
document.getElementById("BSA").innerHTML=BSA.toFixed(2)+" m<sup>2</sup>";

//only run it further if BSA exists i.e., dinking with ht and wt...
if (isNaN(BSA)) return;
//iterate through the measurements:

if (!isNaN(document.getElementById("txtAOV").value) && document.getElementById("txtAOV").value!="") {
    Doit2TheZ("AOV", 0, BSA, parseFloat(document.getElementById("txtAOV").value) * 10)
    }
if (!isNaN(document.getElementById("txtSinuses").value) && document.getElementById("txtSinuses").value!=""){
    Doit2TheZ("Sinuses", 1, BSA, parseFloat(document.getElementById("txtSinuses").value) * 10)
    }
if (!isNaN(document.getElementById("txtSTJ").value) && document.getElementById("txtSTJ").value!=""){
    Doit2TheZ("STJ", 2, BSA, parseFloat(document.getElementById("txtSTJ").value) * 10)
    }
if (!isNaN(document.getElementById("txtAAO").value) && document.getElementById("txtAAO").value!=""){
    Doit2TheZ("AAO", 3, BSA, parseFloat(document.getElementById("txtAAO").value) * 10)
    }
}// end main function

function CalcBSA(ht,wt,BSAMethod){
switch(BSAMethod)
{
case "DuBois":
return 0.007184 * Math.pow(ht,0.725) * Math.pow(wt,0.425);
case "Haycock":
return 0.024265 * Math.pow(ht,0.3964) * Math.pow(wt,0.5378);
case "Gehan":
return 0.0235 * Math.pow(ht, 0.42246) * Math.pow(wt, 0.51456);
case "Mosteller":
return Math.sqrt((ht * wt) / 3600);
case "Boyd":
wt = wt * 1000
var exponent = 0.7285 - 0.0188 * (Math.LOG10E*Math.log(wt))//necessary to get the Log base 10 of (wt)
return 0.0003207 * Math.pow(ht, 0.3) * Math.pow(wt, exponent)
case "Dreyer":
return 0.1*Math.pow(wt,(2/3));
}//end switch

}// end BSA function


function Doit2TheZ(site,index,BSA,score){
var strMean = site+"Mean";
var strRange = site+"Range";
var strZ = site+"Z";
var strPercentile = site+"Pct";
var mean;
var stdDev;
var lower;
var upper;
var zScore;

//doit2 the mean
BSA = Math.log(BSA);
mean = Slope[index] * BSA + Intercept[index];
document.getElementById([strMean]).innerHTML = (Math.exp(mean) / 10).toFixed(2);
//doit2 the SD/Range
stdDev = MSE[index];
lower = Math.exp(mean - 1.65 * stdDev) / 10; 
upper = Math.exp(mean + 1.65 * stdDev) / 10;
document.getElementById([strRange]).innerHTML = lower.toFixed(2) + " - " + upper.toFixed(2);
//doit2 the ZScore
score = Math.log(score);
zScore = (score-mean)/stdDev; 
document.getElementById([strZ]).innerHTML = zScore.toFixed(2);
document.getElementById([strZ]).className = [ZscoreFlag(zScore)];
//doit2 the percentile
document.getElementById([strPercentile]).innerHTML = calcPercentile(zScore);


}//end doit2it function

function ZscoreFlag(zScore){
    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.67) {
    return "borderline";
    }
    else if (zScore >= 1.96 && zScore < 3 || zScore > -3 && zScore <= -1.96) {
    return "mild";
    }
    else if (zScore >= 3 && zScore < 4 || zScore > -4 && zScore <= -3) {
    return "moderate";
    }
    else if (zScore >= 4 || zScore <= -4) {
    return "severe";
    }
    return "normal";
}//end zscore flag function


//Percentiles function for z-scores (adapted by Dan Dyar)
//The following JavaScript functions for calculating normal and
//chi-square probabilities and critical values were adapted by
//John Walker from C implementations
//written by Gary Perlman of Wang Institute, Tyngsboro, MA
//01879.  Both the original C code and this JavaScript edition
//are in the public domain.

function calcPercentile(z) {
    var qz;
    if (z === 0) {qz = 0.5;}
    else if (z > -6 && z < 6) {
        qz = poz(z);}
    else {//the z score is beyond 6
        return "*";}
    return (qz * 100).toFixed(2);

}//end Percentiles fx

//poz ---  probability of normal z value
function poz(z) {
    var y, x, w;
    var Z_MAX = 6;
    if (z == 0.0) {
        x = 0.0;
    } else {
        y = 0.5 * Math.abs(z);
        if (y > (Z_MAX * 0.5)) {
            x = 1.0;
        } else if (y < 1.0) {
            w = y * y;
            x = ((((((((0.000124818987 * w
                     - 0.001075204047) * w + 0.005198775019) * w
                     - 0.019198292004) * w + 0.059054035642) * w
                     - 0.151968751364) * w + 0.319152932694) * w
                     - 0.531923007300) * w + 0.797884560593) * y * 2.0;
        } else {
            y -= 2.0;
            x = (((((((((((((-0.000045255659 * y
                           + 0.000152529290) * y - 0.000019538132) * y
                           - 0.000676904986) * y + 0.001390604284) * y
                           - 0.000794620820) * y - 0.002034254874) * y
                           + 0.006549791214) * y - 0.010557625006) * y
                           + 0.011630447319) * y - 0.009279453341) * y
                           + 0.005353579108) * y - 0.002141268741) * y
                           + 0.000535310849) * y + 0.999936657524;
        }
    }
    return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
}// end poz

//Copyright (c) <year> <copyright holders>

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