//setup myEcho object
//will hold inputs and calculated values
var myEcho = {};
myEcho.lmca = new Array();
myEcho.zscore = new Array();

Array.prototype.max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
    return max;
}
Array.prototype.min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
    return min;
}

function updateRow(index) {
    //first get row data
    var ht = parseFloat(document.getElementById('ht' + [index]).value);
    var wt = parseFloat(document.getElementById('wt' + [index]).value);
    if (isNaN(wt)) { return };
    var lmca = parseFloat(document.getElementById('rca' + [index]).value);
    var bsa = calcBSA(ht, wt);
    var zscore = calcZ(bsa, lmca);
    document.getElementById('bsa' + [index]).innerHTML = bsa.toFixed(2);
    document.getElementById('rcaZ' + [index]).innerHTML = zscore.toFixed(2);
} //end updateRow fx

function calcBSA(height, weight) {
        if (!isNaN(height) && !isNaN(weight)) {
        return 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);
    }
    else if (isNaN(height) && !isNaN(weight)) {
        return 0.1 * Math.pow(weight, 0.6667);
    }

} //end calcBSA fx

function calcZ(bsa, score) {
    score = score / 10;
    var mean = (0.26117 * Math.pow(bsa, 0.39992)) - 0.02756;
    var sd = 0.02407 + (0.01597 * bsa);
    return (score - mean) / sd;
} //end calcZ fx


