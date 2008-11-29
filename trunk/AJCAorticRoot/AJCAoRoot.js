var MYECHO = {
    bsa: 0,
    AVAmean: 0,
    AVAsd: 0,
    AVAlower: 0,
    AVAupper: 0,
    ROOTmean: 0,
    ROOTlower: 0,
    ROOTupper: 0,
    STJmean: 0,
    STJlower: 0,
    STJupper: 0,
    AAOmean: 0,
    AAOlower: 0,
    AAOupper: 0
};

function calcAll(form) {
var ht = parseFloat(form.HT.value);
var wt = parseFloat(form.WT.value);
var AVA = parseFloat(form.txtAVA.value);
var Root = parseFloat(form.txtRoot.value);
var STJ = parseFloat(form.txtSTJ.value);
var AAO = parseFloat(form.txtAAO.value);

calcBSA(ht,wt);

if (!isNaN(AVA)) {
    calcZScore(AVA, MYECHO.AVAmean, MYECHO.AVAupper, "AJCAVA");
}

if (!isNaN(Root)) {
    calcZScore(Root, MYECHO.ROOTmean, MYECHO.ROOTupper, "AJCRoot");
}
//the STJ is the only site that has a different range for upper and lower limits; branch accordingly
if (!isNaN(STJ)) {
    if (STJ <= MYECHO.STJmean) {
        calcZScore(STJ, MYECHO.STJmean, MYECHO.STJlower, "AJCSTJ");
        }
    else 
        calcZScore(STJ, MYECHO.STJmean, MYECHO.STJupper, "AJCSTJ");
}

if (!isNaN(AAO)) {
    calcZScore(AAO, MYECHO.AAOmean, MYECHO.AAOupper, "AJCAAO");
}

}//end calcAll fx

function calcBSA(height, weight) {//calculates BSA via Haycock or Dreyer and Ray (wt only)
    if (!isNaN(height) && !isNaN(weight)) {
        MYECHO.bsa = 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);
        //write the BSA results
        document.getElementById("AJCBSA").value = (MYECHO.bsa).toFixed(2);
        getDefaultValues();           
    }
    else if (isNaN(height) && !isNaN(weight)) {
        MYECHO.bsa = 0.1 * Math.pow(weight, 0.6667);
        //write the BSA results
        document.getElementById("AJCBSA").value = (MYECHO.bsa).toFixed(2);
        getDefaultValues();
    }
    else { //ht and wt are empty
        MYECHO.bsa = 0;
        
    }
    
}//end calcBSA fx

function getDefaultValues() {
    MYECHO.AVAmean = 1.55 * Math.pow(MYECHO.bsa, 0.5);
    MYECHO.AVAsd = 0.06 + (0.083 * MYECHO.bsa);
    MYECHO.AVAlower = MYECHO.AVAmean - 1.96 * MYECHO.AVAsd;
    MYECHO.AVAupper = MYECHO.AVAmean + 1.96 * MYECHO.AVAsd;
    //at this point, all the mean and range values
    //are dependent upon the previously predicted normal value of the aortic valve
    MYECHO.ROOTmean = 1.37 * MYECHO.AVAmean;
    MYECHO.ROOTlower = 1.18 * MYECHO.AVAmean;
    MYECHO.ROOTupper = 1.556 * MYECHO.AVAmean;
    MYECHO.STJmean = 1.11 * MYECHO.AVAmean;
    MYECHO.STJlower = 0.95 * MYECHO.AVAmean;
    MYECHO.STJupper = 1.28 * MYECHO.AVAmean;
    MYECHO.AAOmean = 1.16 * MYECHO.AVAmean;
    MYECHO.AAOlower = 0.97 * MYECHO.AVAmean;
    MYECHO.AAOupper = 1.35 * MYECHO.AVAmean;
    
    //write the means
    document.getElementById("AJCAVAMean").value = MYECHO.AVAmean.toFixed(2);
    document.getElementById("AJCRootMean").value = MYECHO.ROOTmean.toFixed(2);
    document.getElementById("AJCSTJMean").value = MYECHO.STJmean.toFixed(2);
    document.getElementById("AJCAAOMean").value = MYECHO.AAOmean.toFixed(2);
    
    //write the ranges
    document.getElementById("AJCRootRange").value = MYECHO.ROOTlower.toFixed(2) + " - " + MYECHO.ROOTupper.toFixed(2);
    document.getElementById("AJCSTJRange").value = MYECHO.STJlower.toFixed(2) + " - " + MYECHO.STJupper.toFixed(2);
    document.getElementById("AJCAAORange").value = MYECHO.AAOlower.toFixed(2) + " - " + MYECHO.AAOupper.toFixed(2);
    document.getElementById("AJCAVARange").value = MYECHO.AVAlower.toFixed(2) + " - " + MYECHO.AVAupper.toFixed(2);
    
}//end getDefaultValues

function calcZScore(score, mean, CI, element) {
    var sd = Math.abs((CI - mean) / 1.96);
    var zScore = (score - mean) / sd;
    document.getElementById([element + "Z"]).value = zScore.toFixed(2);
    document.getElementById([element + "Z"]).className = [ZscoreFlag(zScore)];
    document.getElementById([element + "Pct"]).value = calcPercentile(zScore);


}//end calcZScores fx


function ZscoreFlag(zScore) {
    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.65) {
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
    else {
        return "normal";
    }
}//end ZscoreFlag function

function ResetZscoreCSS() {
    //find the element that has the name 'zscore' and set the css to 'empty'
    document.getElementById("AJCAVAZ").className = "results";
    document.getElementById("AJCRootZ").className = "results";
    document.getElementById("AJCSTJZ").className = "results";
    document.getElementById("AJCAAOZ").className = "results";
    
}//end CSS reset fx

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
