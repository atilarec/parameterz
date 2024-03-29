﻿var Intercept = new Array(-0.317,-1.242,-1.048,0.105,-0.371,-1.586,-0.947,-0.874,-0.500,-0.759,-0.790,-1.072,-0.976,-0.922,-0.761,-0.707,-1.360,-1.348,-0.271,-0.164,-0.208)
var Beta1 = new Array(1.85,1.272,1.751,2.859,2.833,1.849,1.907,2.708,2.537,2.643,3.02,2.539,2.469,2.1,2.774,2.746,3.394,2.884,2.446,2.341,2.164)
var Beta2 = new Array(-1.274,-0.762,-1.177,-2.119,-2.081,-1.188,-1.259,-1.841,-1.707,-1.797,-2.484,-1.627,-1.746,-1.411,-1.808,-1.807,-2.508,-1.954,-1.7,-1.596,-1.597)
var Beta3 = new Array(0.335,0.208,0.318,0.552,0.538,0.313,0.33,0.452,0.42,0.442,0.712,0.368,0.445,0.371,0.436,0.424,0.66,0.466,0.425,0.387,0.429)
var MSE = new Array(0.058,0.046,0.034,0.01,0.016,0.037,0.023,0.01,0.012,0.018,0.023,0.027,0.026,0.018,0.023,0.024,0.027,0.028,0.022,0.036,0.02)
function thinkAboutIt() {
//runs this check first before calculating everything
var wt = document.getElementById("txtWT").value;
if (isNaN(wt) || wt == "") {
return;
}
else CalculateZScores();
}// end thinkAboutIt function

function CalculateZScores()
{
var ht=parseFloat(document.getElementById("txtHT").value);
var wt=parseFloat(document.getElementById("txtWT").value);
var BSAMethod=document.getElementById("cmbBSA").value;
var BSA = CalcBSA(ht,wt,BSAMethod);

//write the BSA
//pfft. If the BSA is larger than their largest patient, forget it.
//eyeballing the data, it looks like 2.0 m^2 is the largest,
//so I will constrain the calculations to anything less than that...
if (BSA>2){
document.getElementById("BSA").innerHTML= "BSA out of range";
document.getElementById("BSA").className="severe";
return;
}
else{
document.getElementById("BSA").innerHTML="BSA = "+ BSA.toFixed(2) +"m<sup>2</sup>";
document.getElementById("BSA").className="";
}
//iterate through the measurements... there are 21 of them, so hold on
if (!isNaN(document.getElementById("txtRVD").value)&&document.getElementById("txtRVD").value!=""){
Doit2TheZ("RVD",0,BSA,parseFloat(document.getElementById("txtRVD").value));
}
if (!isNaN(document.getElementById("txtIVSd").value)&&document.getElementById("txtIVSd").value!=""){
Doit2TheZ("IVSd",1,BSA,parseFloat(document.getElementById("txtIVSd").value));
}
if (!isNaN(document.getElementById("txtIVSs").value)&&document.getElementById("txtIVSs").value!=""){
Doit2TheZ("IVSs",2,BSA,parseFloat(document.getElementById("txtIVSs").value));
}
if (!isNaN(document.getElementById("txtLVIDd").value)&&document.getElementById("txtLVIDd").value!=""){
Doit2TheZ("LVIDd",3,BSA,parseFloat(document.getElementById("txtLVIDd").value));
}
if (!isNaN(document.getElementById("txtLVIDs").value)&&document.getElementById("txtLVIDs").value!=""){
Doit2TheZ("LVIDs",4,BSA,parseFloat(document.getElementById("txtLVIDs").value));
}
if (!isNaN(document.getElementById("txtLVPWd").value)&&document.getElementById("txtLVPWd").value!=""){
Doit2TheZ("LVPWd",5,BSA,parseFloat(document.getElementById("txtLVPWd").value));
}
if (!isNaN(document.getElementById("txtLVPWs").value)&&document.getElementById("txtLVPWs").value!=""){
Doit2TheZ("LVPWs",6,BSA,parseFloat(document.getElementById("txtLVPWs").value));
}
if (!isNaN(document.getElementById("txtAVA").value)&&document.getElementById("txtAVA").value!=""){
Doit2TheZ("AVA",7,BSA,parseFloat(document.getElementById("txtAVA").value));
}
if (!isNaN(document.getElementById("txtSinuses").value)&&document.getElementById("txtSinuses").value!=""){
Doit2TheZ("Sinuses",8,BSA,parseFloat(document.getElementById("txtSinuses").value));
}
if (!isNaN(document.getElementById("txtSTJ").value)&&document.getElementById("txtSTJ").value!=""){
Doit2TheZ("STJ",9,BSA,parseFloat(document.getElementById("txtSTJ").value));
}
if (!isNaN(document.getElementById("txtTransv").value)&&document.getElementById("txtTransv").value!=""){
Doit2TheZ("Transv",10,BSA,parseFloat(document.getElementById("txtTransv").value));
}
if (!isNaN(document.getElementById("txtIsthmus").value)&&document.getElementById("txtIsthmus").value!=""){
Doit2TheZ("Isthmus",11,BSA,parseFloat(document.getElementById("txtIsthmus").value));
}
if (!isNaN(document.getElementById("txtDistalAO").value)&&document.getElementById("txtDistalAO").value!=""){
Doit2TheZ("DistalAO",12,BSA,parseFloat(document.getElementById("txtDistalAO").value));
}
if (!isNaN(document.getElementById("txtAbdAO").value)&&document.getElementById("txtAbdAO").value!=""){
Doit2TheZ("AbdAO",13,BSA,parseFloat(document.getElementById("txtAbdAO").value));
}
if (!isNaN(document.getElementById("txtPV").value)&&document.getElementById("txtPV").value!=""){
Doit2TheZ("PV",14,BSA,parseFloat(document.getElementById("txtPV").value));
}
if (!isNaN(document.getElementById("txtMPA").value)&&document.getElementById("txtMPA").value!=""){
Doit2TheZ("MPA",15,BSA,parseFloat(document.getElementById("txtMPA").value));
}
if (!isNaN(document.getElementById("txtRPA").value)&&document.getElementById("txtRPA").value!=""){
Doit2TheZ("RPA",16,BSA,parseFloat(document.getElementById("txtRPA").value));
}
if (!isNaN(document.getElementById("txtLPA").value)&&document.getElementById("txtLPA").value!=""){
Doit2TheZ("LPA",17,BSA,parseFloat(document.getElementById("txtLPA").value));
}
if (!isNaN(document.getElementById("txtMV").value)&&document.getElementById("txtMV").value!=""){
Doit2TheZ("MV",18,BSA,parseFloat(document.getElementById("txtMV").value));
}
if (!isNaN(document.getElementById("txtTV").value)&&document.getElementById("txtTV").value!=""){
Doit2TheZ("TV",19,BSA,parseFloat(document.getElementById("txtTV").value));
}
if (!isNaN(document.getElementById("txtLA").value)&&document.getElementById("txtLA").value!=""){
Doit2TheZ("LA",20,BSA,parseFloat(document.getElementById("txtLA").value));
}

}//end main function

function Doit2TheZ(site,index,BSA,score){
var strMean = site+"Mean";
var strRange = site+"Range";
var strZ = site+"Z";
var strPercentile = site+"Percentile";
var mean;
var stdDev;
var lower;
var upper;
var zScore;
var percentile;

//doit2 the mean
mean = Intercept[index] + Beta1[index]*BSA+Beta2[index]*Math.pow(BSA,2)+Beta3[index]*Math.pow(BSA,3);
document.getElementById([strMean]).innerHTML= Math.exp(mean).toFixed(2);
//doit2 the SD/Range
stdDev=Math.sqrt(MSE[index]);
lower=Math.exp(mean - 1.65 * stdDev);
upper=Math.exp(mean + 1.65 * stdDev);
document.getElementById([strRange]).innerHTML = lower.toFixed(2)+" - "+upper.toFixed(2);
//doit2 the ZScore
score=Math.log(score);
zScore=(score-mean)/stdDev;
document.getElementById([strZ]).innerHTML = zScore.toFixed(2);
document.getElementById([strZ]).className = [ZscoreFlag(zScore)];
//doit2 the percentile
document.getElementById([strPercentile]).innerHTML = calcPercentile(zScore);


}//end doit2it function

function ZscoreFlag(zScore) {
if (zScore >= 1.67 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.67) {
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

//Copyright (c) 2008: Dan Dyar

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