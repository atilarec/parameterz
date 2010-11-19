// based on: Dallaire and Dahdah, JASE 2010
//globals
var aov;
var zlimit = 2.0; // sets the limit for upper and lower range values
var sites = {
    'LMCA': { label: 'LMCA', data: { a1: 0.3593, b1: 0.1398, se: 0.3507} },
    'LAD': { label: 'LAD', data: { a1: 0.2364, b1: 0.1109, se: 0.3409} },
    'CIRC': { label: 'CIRC', data: { a1: 0.1940, b1: 0.1081, se: 0.3673} },
    'PROXRCA': { label: 'PROXRCA', data: {a1: 0.1812, b1: 0.1320, se: 0.3579} },
    'MIDRCA':  { label: 'MIDRCA', data: {a1: 0.1827, b1: 0.1104, se: 0.3748} },
    'DISTRCA':  { label: 'DISTRCA', data: {a1: 0.2191, b1: 0.1003, se: 0.3627} }
};

//functions to provide mean/sd/zscores etc
function mean(o) {
    // 'o' is the data object
    return o.a1 + o.b1 * aov;
}

function zscore(o, score) {
    return (score - mean(o)) / o.se;
}

function range(o) {
    //returns: string
    //returns a string in the format "(min - max)" given a zscore range (eg., +/- 1.65 sd)
    var min, max, z;
    z = zlimit; //configured as a global variable
    min = (mean(o) - z * o.se).toFixed(2);
    max = (mean(o) + z * o.se).toFixed(2);
    return '(' + min + ' - ' + max + ')';
}

function CalculateZScores() {
    aov = parseFloat($('#txtAOV').val());
    //update mean/ranges
    $.each(sites, function () {
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
    if (aov && !isNaN(value)) {
        var z = zscore(site.data, value);
        zelement.text(z.toFixed(2)).removeClass('normal borderline mild moderate severe')
            .addClass(zscoreFlag(z))
            .attr('title', calcPercentile(z) + ' %-ile');
    } else {
        zelement.text('').removeClass('normal borderline mild moderate severe')
            .attr('title', '');
    }
}
function resetForm() {
    $('.results').text('').removeClass('normal borderline mild moderate severe').attr('title', '');
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