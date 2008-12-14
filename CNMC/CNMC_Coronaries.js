//set up globals
function CNMCCoronaryArtery()
{
    this.beta1 = 0;
    this.beta2 = 0;
    this.mse = 0;
    this.score = 0;
    this.mean = 0;
    this.zscore = NaN;
    
}
function CNMCPatient()
{
    this.height = 0;
    this.weight = 0;
    this.bsa = 0;
}
var LMCA = new CNMCCoronaryArtery();
var LAD = new CNMCCoronaryArtery();
var RCA = new CNMCCoronaryArtery();
var MyPatient = new CNMCPatient();

//data is straight from the publication
LMCA.beta1 = -1.31625;
LMCA.beta2 = 0.37442;
LMCA.mse = 0.028467;
LAD.beta1 = -1.50927;
LAD.beta2 = 0.41164;
LAD.mse = 0.033031;
RCA.beta1 = -1.46115;
RCA.beta2 = 0.37870;
RCA.mse = 0.040172;

function calcCNMC(form)
{
    MyPatient.height = parseFloat(form.txtHT.value);
    MyPatient.weight = parseFloat(form.txtWT.value);
    MyPatient.bsa = calcCNMCBSA();
    form.BSA.value = MyPatient.bsa.toFixed(2);
    //calculate the mean values, converting to mm
    form.LMCAMean.value = (10 * Math.exp(calcCAMean(LMCA))).toFixed(2);
    form.LADMean.value = (10 * Math.exp(calcCAMean(LAD))).toFixed(2);
    form.RCAMean.value = (10 * Math.exp(calcCAMean(RCA))).toFixed(2);
    //calculate the range of values (+/- 1.65 SD's), converting to mm
    form.LMCARange.value = calcCARange(LMCA);
    form.LADRange.value = calcCARange(LAD);
    form.RCARange.value = calcCARange(RCA);
    //parse the coronary artery values and calculate the z-scores
    LMCA.score = parseFloat(form.txtLMCA.value) / 10;
    LAD.score = parseFloat(form.txtLAD.value) / 10;
    RCA.score = parseFloat(form.txtRCA.value) / 10;

    form.LMCAZ.value = calcCAZ(LMCA).toFixed(2);
    form.LMCAZ.className = [ZscoreFlag(LMCA.zscore)];
    form.LMCAPct.value = calcPercentile(LMCA.zscore);
    
    form.LADZ.value = calcCAZ(LAD).toFixed(2);
    form.LADZ.className = [ZscoreFlag(LAD.zscore)];
    form.LADPct.value = calcPercentile(LAD.zscore);
    
    form.RCAZ.value = calcCAZ(RCA).toFixed(2);
    form.RCAZ.className = [ZscoreFlag(RCA.zscore)];
    form.RCAPct.value = calcPercentile(RCA.zscore);
    
}

function calcCNMCBSA() 
{
    if (isNaN(MyPatient.height) || MyPatient.height === 0)
    {
        return 0.1 * Math.pow(MyPatient.weight, (2 / 3));
    }
    else
    {    
        return 0.024265 * Math.pow(MyPatient.height, 0.3964) * Math.pow(MyPatient.weight, 0.5378);
    }
}
function thinkAboutIt(form)
{
    if (MyPatient.weight === 0 || isNaN(MyPatient.weight))
    {
        return;
    }
    else
    {
        calcCNMC(form);
    }
}

function calcCAMean(coronary)
{
    coronary.mean = coronary.beta1 + coronary.beta2 * Math.log(MyPatient.bsa);
    return coronary.mean;
}

function calcCARange(coronary)
{
    var lower = coronary.mean - (1.65 * Math.sqrt(coronary.mse));
    var upper = coronary.mean + (1.65 * Math.sqrt(coronary.mse));
    lower = Math.exp(lower) * 10;
    upper = Math.exp(upper) * 10;
    return lower.toFixed(2) + " - " + upper.toFixed(2);
    
}

function calcCAZ(coronary)
{
    coronary.zscore = (Math.log(coronary.score) - coronary.mean) / Math.sqrt(coronary.mse);
    return coronary.zscore;
}

function ZscoreFlag(zScore)
{

    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.65) 
    {
        return "borderline";
    }
    else if (zScore >= 1.96 && zScore < 3 || zScore > -3 && zScore <= -1.96) 
    {
        return "mild";
    }
    else if (zScore >= 3 && zScore < 4 || zScore > -4 && zScore <= -3) 
    {
        return "moderate";
    }
    else if (zScore >= 4 || zScore <= -4) 
    {
        return "severe";
    }
    else 
    {
        return "normal";
    }
}

function ResetZscoreCSS(form) 
{
    form.LMCAZ.className = "results";
    form.LADZ.className = "results";
    form.RCAZ.className = "results";

}//end CSS reset fx

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