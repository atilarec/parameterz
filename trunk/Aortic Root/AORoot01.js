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
        document.getElementById("AVAZ").innerHTML = zScore
        document.getElementById("AVAZ").className = [ZscoreFlag(zScore)];

    }
    
}
function calcRoot() {
    var ROOT = parseFloat(document.getElementById("txtRoot").value);
    if (!isNaN(ROOT)) {
        var zScore = getZScore(ROOT, MYECHO.ROOTmean, MYECHO.ROOTsd);
        document.getElementById("RootZ").innerHTML = zScore;
        document.getElementById("RootZ").className = [ZscoreFlag(zScore)];
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
