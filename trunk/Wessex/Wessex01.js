var Intercept = new Array(1.084, 1.823, 1.943, 2.795, 0.6367, 0.6067, 0.1396, 0.2024, 0.9445, 0.9651, 1.893, 3.141, 0.5183, 0.7224, 0.5417);
var Slope = new Array(0.4945, 0.4962, 0.6185, 0.9566, 0.5028, 0.4941, 0.5495, 0.6039, 0.5022, 0.4658, 0.4936, 1.020, 0.5347, 0.5082, 0.5490);
var MSE = new Array(0.08121, 0.1086, 0.1009, 0.1753, 0.1143, 0.1430, 0.1294, 0.1446, 0.09403, 0.09167, 0.09847, 0.1806, 0.06726, 0.07284, 0.08656);
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
if (!isNaN(document.getElementById("txtTV").value) && document.getElementById("txtTV").value!="") {
    Doit2TheZ("TV", 0, BSA, parseFloat(document.getElementById("txtTV").value))
    }
if (!isNaN(document.getElementById("txtRVin").value) && document.getElementById("txtRVin").value!="") {
    Doit2TheZ("RVin", 1, BSA, parseFloat(document.getElementById("txtRVin").value))
    }
if (!isNaN(document.getElementById("txtRVout").value) && document.getElementById("txtRVout").value!="") {
    Doit2TheZ("RVout", 2, BSA, parseFloat(document.getElementById("txtRVout").value))
    }
if (!isNaN(document.getElementById("txtRVarea").value) && document.getElementById("txtRVarea").value!="") {
    Doit2TheZ("RVarea", 3, BSA, parseFloat(document.getElementById("txtRVarea").value))
    }
if (!isNaN(document.getElementById("txtPV").value) && document.getElementById("txtPV").value!="") {
    Doit2TheZ("PV", 4, BSA, parseFloat(document.getElementById("txtPV").value))
    }
if (!isNaN(document.getElementById("txtMPA").value) && document.getElementById("txtMPA").value!="") {
    Doit2TheZ("MPA", 5, BSA, parseFloat(document.getElementById("txtMPA").value))
    }
if (!isNaN(document.getElementById("txtRPA").value) && document.getElementById("txtRPA").value!="") {
    Doit2TheZ("RPA", 6, BSA, parseFloat(document.getElementById("txtRPA").value))
    }
if (!isNaN(document.getElementById("txtLPA").value) && document.getElementById("txtLPA").value!="") {
    Doit2TheZ("LPA", 7, BSA, parseFloat(document.getElementById("txtLPA").value))
    }
if (!isNaN(document.getElementById("txtMVAP").value) && document.getElementById("txtMVAP").value!="") {
    Doit2TheZ("MVAP", 8, BSA, parseFloat(document.getElementById("txtMVAP").value))
    }
if (!isNaN(document.getElementById("txtMVLat").value) && document.getElementById("txtMVLat").value!="") {
    Doit2TheZ("MVLat", 9, BSA, parseFloat(document.getElementById("txtMVLat").value))
    }
if (!isNaN(document.getElementById("txtLVin").value) && document.getElementById("txtLVin").value!="") {
    Doit2TheZ("LVin", 10, BSA, parseFloat(document.getElementById("txtLVin").value))
    }
if (!isNaN(document.getElementById("txtLVarea").value) && document.getElementById("txtLVarea").value!="") {
    Doit2TheZ("LVarea", 11, BSA, parseFloat(document.getElementById("txtLVarea").value))
    }
if (!isNaN(document.getElementById("txtAOV").value) && document.getElementById("txtAOV").value!="") {
    Doit2TheZ("AOV", 12, BSA, parseFloat(document.getElementById("txtAOV").value))
    }
if (!isNaN(document.getElementById("txtSinuses").value) && document.getElementById("txtSinuses").value!=""){
    Doit2TheZ("Sinuses", 13, BSA, parseFloat(document.getElementById("txtSinuses").value))
    }
if (!isNaN(document.getElementById("txtSTJ").value) && document.getElementById("txtSTJ").value!=""){
    Doit2TheZ("STJ", 14, BSA, parseFloat(document.getElementById("txtSTJ").value))
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
var mean;
var stdDev;
var lower;
var upper;
var zScore;

//doit2 the mean
BSA = Math.log(BSA);
mean = Slope[index] * BSA + Intercept[index];
document.getElementById([strMean]).innerHTML = Math.exp(mean).toFixed(2);
//doit2 the SD/Range
stdDev = MSE[index];
lower = Math.exp(mean - 1.65 * stdDev); 
upper = Math.exp(mean + 1.65 * stdDev);
document.getElementById([strRange]).innerHTML = lower.toFixed(2) + " - " + upper.toFixed(2);
//doit2 the ZScore
score = Math.log(score);
zScore = (score-mean)/stdDev; 
document.getElementById([strZ]).innerHTML = zScore.toFixed(2);
document.getElementById([strZ]).className = [ZscoreFlag(zScore)];

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