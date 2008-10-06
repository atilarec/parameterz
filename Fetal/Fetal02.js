var Intercept = new Array(-5.019,-5.114,-4.886,-5.025,-4.766,-4.084,-4.455,-4.292,-3.566,-3.231,-8.133,-7.430,-5.365,-5.140,-5.307,-5.390,-4.440,-2.822,-3.359,-2.489);
var Slope = new Array(1.263,1.352,1.261,1.347,1.395,1.173,1.363,1.298,1.277,1.193,2.625,2.432,1.360,1.201,1.230,1.231,1.013,1.224,1.396,1.109);
var MSE = new Array(0.1282,0.1208,0.1330,0.1570,0.1394,0.1315,0.1442,0.1560,0.1658,0.1376,0.2957,0.2564,0.1216,0.1893,0.1802,0.1966,0.1913,0.164,0.176,0.182);
//^^ these are the fetal values ^^

function CalculateZScores()
{
var EGA=parseFloat(document.getElementById("txtEGA").value);

//iterate through the measurements... 
if (!isNaN(document.getElementById("txtMV").value)&&document.getElementById("txtMV").value!=""){
    Doit2TheZ("MV",5,EGA,parseFloat(document.getElementById("txtMV").value));
    }
if (!isNaN(document.getElementById("txtLV1").value)&&document.getElementById("txtLV1").value!=""){
    Doit2TheZ("LV1",7,EGA,parseFloat(document.getElementById("txtLV1").value));
    }
if (!isNaN(document.getElementById("txtLV2").value)&&document.getElementById("txtLV2").value!=""){
    Doit2TheZ("LV2",9,EGA,parseFloat(document.getElementById("txtLV2").value));
    }
if (!isNaN(document.getElementById("txtAOV").value)&&document.getElementById("txtAOV").value!=""){
    Doit2TheZ("AOV",0,EGA,parseFloat(document.getElementById("txtAOV").value));
    }
if (!isNaN(document.getElementById("txtAAO").value)&&document.getElementById("txtAAO").value!=""){
    Doit2TheZ("AAO",2,EGA,parseFloat(document.getElementById("txtAAO").value));
    }
if (!isNaN(document.getElementById("txtDAO").value)&&document.getElementById("txtDAO").value!=""){
    Doit2TheZ("DAO",12,EGA,parseFloat(document.getElementById("txtDAO").value));
    }
if (!isNaN(document.getElementById("txtTV").value)&&document.getElementById("txtTV").value!=""){
    Doit2TheZ("TV",4,EGA,parseFloat(document.getElementById("txtTV").value));
    }
if (!isNaN(document.getElementById("txtRV1").value)&&document.getElementById("txtRV1").value!=""){
    Doit2TheZ("RV1",6,EGA,parseFloat(document.getElementById("txtRV1").value));
    }
if (!isNaN(document.getElementById("txtRV2").value)&&document.getElementById("txtRV2").value!=""){
    Doit2TheZ("RV2",8,EGA,parseFloat(document.getElementById("txtRV2").value));
    }
if (!isNaN(document.getElementById("txtPV").value)&&document.getElementById("txtPV").value!=""){
    Doit2TheZ("PV",1,EGA,parseFloat(document.getElementById("txtPV").value));
    }
if (!isNaN(document.getElementById("txtMPA").value)&&document.getElementById("txtMPA").value!=""){
    Doit2TheZ("MPA",3,EGA,parseFloat(document.getElementById("txtMPA").value));
    }
if (!isNaN(document.getElementById("txtRPA").value)&&document.getElementById("txtRPA").value!=""){
    Doit2TheZ("RPA",14,EGA,parseFloat(document.getElementById("txtRPA").value));
    } 
if (!isNaN(document.getElementById("txtLPA").value)&&document.getElementById("txtLPA").value!=""){
    Doit2TheZ("LPA",15,EGA,parseFloat(document.getElementById("txtLPA").value));
    }                        
if (!isNaN(document.getElementById("txtIsthmus3").value)&&document.getElementById("txtIsthmus3").value!=""){
    Doit2TheZ("Isthmus3",17,EGA,parseFloat(document.getElementById("txtIsthmus3").value));
    }                        
if (!isNaN(document.getElementById("txtDuct3").value)&&document.getElementById("txtDuct3").value!=""){
    Doit2TheZ("Duct3",18,EGA,parseFloat(document.getElementById("txtDuct3").value));
    }       
if (!isNaN(document.getElementById("txtIsthmus").value)&&document.getElementById("txtIsthmus").value!=""){
    Doit2TheZ("Isthmus",19,EGA,parseFloat(document.getElementById("txtIsthmus").value));
    }       
   
}//end main function

function Doit2TheZ(site,index,EGA,score){
var strMean = site+"Mean";
var strRange = site+"Range";
var strZ = site+"Z";
var mean;
var stdDev;
var lower;
var upper;
var zScore;

//doit2 the mean
EGA = Math.log(EGA);
mean = Slope[index]*EGA + Intercept[index];
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
function CalcEDD(weeks) {
//setup variables for dates: today, LMP, and EDD
//initially, they will ALL be set to TODAY
var dtToday = new Date();
var dtLMP = new Date();
var dtEDD = new Date();

//and set today to noon
dtToday.setHours(12,0,0,0);

//parse the input into an integer value
var EGAw = parseInt(weeks);
//find the decimal remainder if any
var EGAd = parseFloat(weeks - EGAw);//this is the 'decimal fraction' i.e., days

//convert the EGA weeks into milliseconds
EGAw = EGAw * 7; //weeks into days
EGAw = EGAw * 24; //hours per day
EGAw = EGAw * 60; //minutes per hr
EGAw = EGAw * 60; //secs per minute
EGAw = EGAw * 1000; //msec per sec

EGAd = 7 * EGAd;// get the number of days
////convert the days to msec
EGAd = EGAd * 24 * 60 * 60 * 1000;

//add the two togeter
var EGA = EGAw + EGAd;

//subtract the EGA from today for LMP
dtLMP.setTime(dtToday.getTime() - EGA);
document.getElementById("LMP").innerHTML = dtLMP.toDateString();

//set up the 40 week gestation in ms to get the remaining time of the gestation
var gestation = new Number
gestation = 40 * 7 * 24 * 60 * 60 * 1000;

//the EDD is today plus the difference between a 40 week gestation and the time already passed (EGA)
var remainingTime = new Number
remainingTime = gestation - EGA;
dtEDD.setTime(dtToday.getTime() + remainingTime);
document.getElementById("EDD").innerHTML = dtEDD.toDateString();
}//end EDD fx

function CalcEGA() {

var weeks = new Number;
var days = new Number;
weeks = parseInt(document.getElementById("Weeksddl").value);
days = parseInt(document.getElementById("Daysddl").value);
weeks = weeks + (days / 7);
weeks = weeks.toFixed(1)
document.getElementById("txtEGA").value = weeks;
CalcEDD(weeks);
CalculateZScores()

}//end EGA function

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