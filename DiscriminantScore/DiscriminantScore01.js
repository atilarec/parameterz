// declare global MYECHO object
var MYECHO = {
    bsa: 0,
    AVAmean: 0,
    AVAsd: 0,
    AVAZ: 0,
    LAR: 0
};

function calc() {
    calcBSA();// calculate the BSA via the Haycock or Dreyer methods
    calcAVAZ();// calculate the z-score of the aortic valve
    calcLAR();// calculate the long axis ratio
    discriminate();// calculate the discriminant score from each of the above

}//end main function

// BSA routine
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
    //now update the bsa
    document.getElementById("BSA").value = MYECHO.bsa.toFixed(2);
       

}//end BSA function


// Z-Score routine
function calcAVAZ() {
    MYECHO.AVAmean = (1.55 * Math.pow(MYECHO.bsa, 0.5));
    MYECHO.AVAsd = 0.06 + (0.083 * MYECHO.bsa);
    var score = parseFloat(document.getElementById("txtAOV").value);
    MYECHO.AVAZ = (score - MYECHO.AVAmean) / MYECHO.AVAsd
    //write the z-score
    document.getElementById("ZScore").value = MYECHO.AVAZ.toFixed(2);
    //z-score flag 
    document.getElementById("ZScore").className = [ZscoreFlag(MYECHO.AVAZ)];
}//end z-score function

//Long Axis Ration routine
function calcLAR() {
    var LVLAX = document.getElementById("txtLVLAX").value;
    var HeartLAX = document.getElementById("txtHEARTLAX").value;
    MYECHO.LAR = LVLAX / HeartLAX;
    document.getElementById("LAR").value = MYECHO.LAR.toFixed(2);
    
}//end LAR fx

// Discriminant Score routine
//12.16 (BSA) + 0.59 (aortic valve annulus z-score) + 5.73 (LAR) - 7.02
function discriminate() {
    var score = 12.16 * MYECHO.bsa + 0.59 * MYECHO.AVAZ + 5.73 * MYECHO.LAR - 7.02;
    document.getElementById("Score").value = score.toFixed(3);
    document.getElementById("Score").className = [DiscriminantFlag(score)];
}//end discriminate fx

//flag routine
function ZscoreFlag(zScore) {
    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.67) {
        return "borderline";
    }
    else if (zScore >= 1.96 && zScore < 3 || zScore > -3 && zScore <= -1.96) {
        return "mild";
    }
    else if (zScore >= 3 && zScore < 4 || zScore >-4 && zScore <= -3) {
        return "moderate";
    }
    else if (zScore >= 4 || zScore <= -4){
        return "severe";
    }
    else return "normal";
}//end flag function

function DiscriminantFlag(score) {
    if (score == -0.46) {
        return "mild";
    }
    else if (score < -0.46) {
        return "severe";
    }
    else return "normal";
}//end discriminant flag fx
function ResetZscoreCSS() {
    //find the element that has the name 'zscore' and set the css to 'empty'
    document.getElementById("ZScore").className = "results";

}//end CSS reset fx

//Copyright (c) 2008 Dan Dyar

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