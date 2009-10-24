//values are entered as girls then boys for each: MV,TV,AOV,PV
var Intercept = new Array(0.733, 0.765, 0.755, 0.817, 0.437, 0.472, 0.597, 0.618);
var Slope = new Array(0.408, 0.425, 0.364, 0.391, 0.461, 0.492, 0.476, 0.498);
var MSE = new Array(0.18, 0.169, 0.186, 0.171, 0.127, 0.141, 0.144, 0.152);
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

CalcByGender(document.getElementById("cmbGender").value);
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

function CalcByGender(gender){
switch (gender)
{
case "girls":
    if (!isNaN(document.getElementById("txtMV").value) && document.getElementById("txtMV").value!="") {
        Doit2TheZ("MV",0,BSA,parseFloat(document.getElementById("txtMV").value));
        }
    if (!isNaN(document.getElementById("txtTV").value) && document.getElementById("txtTV").value!="") {
        Doit2TheZ("TV",2,BSA,parseFloat(document.getElementById("txtTV").value));
        }
    if (!isNaN(document.getElementById("txtAOV").value) && document.getElementById("txtAOV").value!="") {
        Doit2TheZ("AOV",4,BSA,parseFloat(document.getElementById("txtAOV").value));
        }
    if (!isNaN(document.getElementById("txtPV").value) && document.getElementById("txtPV").value!="") {
        Doit2TheZ("PV",6,BSA,parseFloat(document.getElementById("txtPV").value));
        }
    break;
case "boys":
    if (!isNaN(document.getElementById("txtMV").value) && document.getElementById("txtMV").value!="") {
        Doit2TheZ("MV",1,BSA,parseFloat(document.getElementById("txtMV").value));
        }
    if (!isNaN(document.getElementById("txtTV").value) && document.getElementById("txtTV").value!="") {
        Doit2TheZ("TV",3,BSA,parseFloat(document.getElementById("txtTV").value));
        }
    if (!isNaN(document.getElementById("txtAOV").value) && document.getElementById("txtAOV").value!="") {
        Doit2TheZ("AOV",5,BSA,parseFloat(document.getElementById("txtAOV").value));
        }
    if (!isNaN(document.getElementById("txtPV").value) && document.getElementById("txtPV").value!="") {
        Doit2TheZ("PV",7,BSA,parseFloat(document.getElementById("txtPV").value));
        }
    break;
}//end switch
}//end CalcByGender function
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
mean = Slope[index]*BSA + Intercept[index];
document.getElementById([strMean]).innerHTML= Math.exp(mean).toFixed(2);
//doit2 the SD/Range
stdDev=MSE[index];
lower=Math.exp(mean-1.65*stdDev); 
upper=Math.exp(mean+1.65*stdDev);
document.getElementById([strRange]).innerHTML = lower.toFixed(2)+" - "+upper.toFixed(2);
//doit2 the ZScore
score=Math.log(score);
zScore=(score-mean)/stdDev; 
document.getElementById([strZ]).innerHTML = zScore.toFixed(2);
document.getElementById([strZ]).className=[ZscoreFlag(zScore)];

}//end doit2it function

function ZscoreFlag(zScore){
    if (zScore >=1.65 && zScore<1.96||zScore>-1.96&&zScore<=-1.67){
    return "borderline";
    }
    else if (zScore>=1.96&& zScore<3||zScore>-3&&zScore<=-1.96){
    return "mild";
    }
    else if (zScore>=3&& zScore<4||zScore>-4&&zScore<=-3){
    return "moderate";
    }
    else if (zScore>=4||zScore<=-4){
    return "severe";
    }
    return "normal";
}//end zscore flag function

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