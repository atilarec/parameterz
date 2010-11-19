// based on: Dallaire and Dahdah, JASE 2010
//globals
var bsa;
var zlimit = 2.0; // sets the limit for upper and lower range values
var sites = {
    'LMCA': { label: 'LMCA', data: { a1: -0.1817, b1: 2.9238, a2: 0.1801, b2: 0.2530} },
    'LAD': { label: 'LAD', data: { a1: -0.1502, b1: 2.2672, a2: 0.1709, b2: 0.2293} },
    'CIRC': { label: 'CIRC', data: { a1: -0.2716, b1: 2.3458, a2: 0.1142, b2: 0.3423} },
    'PROXRCA': { label: 'PROXRCA', data: {a1: -0.3039, b1: 2.7521, a2: 0.1626, b2: 0.2881} },
    'MIDRCA':  { label: 'MIDRCA', data: {a1: -0.3060, b1: 2.4078, a2: 0.1324, b2: 0.3259} },
    'DISTRCA':  { label: 'DISTRCA', data: {a1: -0.3185, b1: 2.3295, a2: 0.1099, b2: 0.3198} }
};

//functions to provide mean/sd/zscores etc
function mean(o) {
    // 'o' is the data object
    return o.a1 + o.b1 * Math.sqrt(bsa);
}

function sd(o) {
    return o.a2 + o.b2 * Math.sqrt(bsa);
}

function zscore(o, score) {
    return (score - mean(o)) / sd(o);
}

function range(o) {
    //returns: string
    //returns a string in the format "(min - max)" given a zscore range (eg., +/- 1.65 sd)
    z = zlimit; //configured as a global variable
    var min, max
    min = (mean(o) - z * sd(o)).toFixed(2);
    max = (mean(o) + z * sd(o)).toFixed(2);
    return '(' + min + ' - ' + max + ')';
}

function CalculateZScores() {
    // if ht & wt exist, calculate the BSA
    var ht, wt, method;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    method = $('#cmbBSA').val();
    if (ht && wt) {
        bsa = CalcBSA(ht, wt, method);
    } else if (wt && method == 'Dreyer') {
        bsa = CalcBSA('', wt, method);
    }
    else {
        return false;
    }
    $('#BSA').html(bsa.toFixed(2) + ' M<sup>2</sup>');
    //update mean/ranges
    $.each(sites, function() {
        var meanElement, rangeElement, str_mean, str_range;
        meanElement = $('#' + this.label + 'Mean');
        rangeElement = $('#' + this.label + 'Range');
        str_mean = mean(this.data).toFixed(2);
        meanElement.text(str_mean);
        str_range = range(this.data);
        rangeElement.text(str_range);
    });
    //now update all the inputs
    $('.site').change();
}
function updateSite(site, value) {
    value = parseFloat(value);
    site = sites[site];
    var zelement = $('#' + site.label + 'Z');
    if (bsa && !isNaN(value)) {
        var z = zscore(site.data, value);
        zelement.text(z.toFixed(2)).removeClass('normal borderline mild moderate severe')
            .addClass(zscoreFlag(z))
            .attr('title', calcPercentile(z) + ' %-ile');
    } else {
        zelement.text('').removeClass('normal borderline mild moderate severe')
            .attr('title', '');
        ;
    }
}
function resetForm() {
    $('#BSA, .results').text('').removeClass('normal borderline mild moderate severe');
    bsa = null;
}



//Copyright (c) November 17, 2010: Dan Dyar

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