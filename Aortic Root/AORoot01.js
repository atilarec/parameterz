var MYECHO = {
    bsa: 0,
    AVAmean: 0,
    AVAsd: 0,
    ROOTmean: 0,
    ROOTsd: 0
};
function calcBSA() {
    var height = parseFloat(document.getElementById("txtHT").value); 
    var weight = parseFloat(document.getElementById("txtWT").value);
    if (!isNaN(height) && !isNaN(weight)) {
        MYECHO.bsa = 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);           
    }
    else if (isNaN(height) && !isNaN(weight)) {
        MYECHO.bsa = 0.1 * Math.pow(weight, 0.6667);
    }
    else { //ht and wt are empty
        MYECHO.bsa = 0;
        
    }
    //now update the mean and ranges
    document.getElementById("BSA").innerHTML = MYECHO.bsa.toFixed(2);
    MYECHO.AVAmean = (1.55 * Math.pow(MYECHO.bsa, 0.5));
    MYECHO.AVAsd = 0.06 + (0.083 * MYECHO.bsa);
    document.getElementById("AVAMean").innerHTML = MYECHO.AVAmean.toFixed(2);
    document.getElementById("AVARange").innerHTML = getRange(MYECHO.AVAmean, MYECHO.AVAsd);
    MYECHO.ROOTmean = (2.02 * Math.pow(MYECHO.bsa, 0.5));
    MYECHO.ROOTsd = 0.098 + (0.12 * MYECHO.bsa);
    document.getElementById("RootMean").innerHTML = MYECHO.ROOTmean.toFixed(2);
    document.getElementById("RootRange").innerHTML = getRange(MYECHO.ROOTmean, MYECHO.ROOTsd);
    //and run the z-scores
    calcAVA();
    calcRoot();     

}

function calcAVA() {
    var AVA = parseFloat(document.getElementById("txtAVA").value);
    if (!isNaN(AVA)) {
        var zScore = getZScore(AVA, MYECHO.AVAmean, MYECHO.AVAsd);
        document.getElementById("AVAZ").innerHTML = zScore;
        document.getElementById("AVAZ").className = [ZscoreFlag(zScore)];
        document.getElementById("AVAPercentile").innerHTML = calcPercentile(zScore);
    }
    
}
function calcRoot() {
    var ROOT = parseFloat(document.getElementById("txtRoot").value);
    if (!isNaN(ROOT)) {
        var zScore = getZScore(ROOT, MYECHO.ROOTmean, MYECHO.ROOTsd);
        document.getElementById("RootZ").innerHTML = zScore;
        document.getElementById("RootZ").className = [ZscoreFlag(zScore)];
        document.getElementById("RootPercentile").innerHTML = calcPercentile(zScore);

    }
}


function getRange(mean, sd) {
        return lower(mean, sd) + " - " + upper(mean, sd);

}
function getZScore(score, mean, sd){
        return ((score - mean) / sd).toFixed(2);

}
function upper(mean,sd) {
    return (mean + 1.65 * sd).toFixed(2);
}

function lower(mean,sd) {
    return (mean - 1.65 * sd).toFixed(2);
}
function ZscoreFlag(zScore) {
    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.67) {
        return "borderline";
    }
    else if (zScore >= 1.96 && zScore<3 || zScore > -3 && zScore <= -1.96) {
        return "mild";
    }
    else if (zScore >= 3 && zScore <4 || zScore >-4 && zScore <= -3) {
        return "moderate";
    }
    else if (zScore >= 4 || zScore <= -4){
        return "severe";
    }
    else return "normal";
}
//Percentiles function for z-scores (adapted by Dan Dyar)
//The following JavaScript functions for calculating normal and
//chi-square probabilities and critical values were adapted by
//John Walker from C implementations
//written by Gary Perlman of Wang Institute, Tyngsboro, MA
//01879.  Both the original C code and this JavaScript edition
//are in the public domain.

function calcPercentile(z) {
    if (z == 0) {var qz = 0.5}
    else if (z > -6 && z < 6) {
        var qz = poz(z);}
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
