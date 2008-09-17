//values are entered as girls then boys for each: MV,TV,AOV,PV
var Intercept = new Array(0.733, 0.765, 0.755, 0.817, 0.437, 0.472, 0.597, 0.618);
var Slope = new Array(0.408, 0.425, 0.364, 0.391, 0.461, 0.492, 0.476, 0.498);
var MSE = new Array(0.18, 0.169, 0.186, 0.171, 0.127, 0.141, 0.144, 0.152);
var Size = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50);
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
    //calculate the mean
    BSA = Math.log(BSA);
    mean = 0.364 * BSA + 0.755;
    document.getElementById("Mean").innerHTML= (10 * Math.exp(mean)).toFixed(2) + "mm";
    DoIt2TheTable(mean, 0.186) // the published RMSE for girls TV
    break;
case "boys":
    //calculate the mean
    BSA = Math.log(BSA);
    mean = 0.391 * BSA + 0.817;
    document.getElementById("Mean").innerHTML= (10 * Math.exp(mean)).toFixed(2) + "mm";
    DoIt2TheTable(mean, 0.171) // the published RMSE for boys TV
    break;
}//end switch
}//end CalcByGender function

function DoIt2TheTable(mean, RMSE){
var zScore = 0;

    for (i=1; i<=40; i++)//calculate the z-score for each mm from 1 to 40 (converting mm to cm)

    {
    zScore = (Math.log(i/10) - mean) / RMSE;
    document.getElementById("mm" + [i]).innerHTML = zScore.toFixed(2);
    document.getElementById("mm" + [i]).className = [ZscoreFlag(zScore)];
    }//end for loop

}//end DoIt2TheTable function
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