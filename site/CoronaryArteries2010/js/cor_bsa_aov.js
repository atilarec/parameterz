//globals   
var aov, bsa, limit, sites;
limit = 2; // z-score to use for upper/lower limits

//these are bsa-adjusted coronaries
function Cor_b(o) {
    this.a1 = o.a1;
    this.b1 = o.b1;
    this.a2 = o.a2;
    this.b2 = o.b2;
}
Cor_b.prototype.mean = function() {
    return this.a1 + this.b1 * Math.sqrt(bsa);
};
Cor_b.prototype.sd = function() {
    return Math.sqrt(bsa) * this.b2 + this.a2;
};
Cor_b.prototype.zscore = function(score) {
    return (score - this.mean(bsa)) / this.sd(bsa);
};
Cor_b.prototype.limit = function(z) {
    return z * this.sd(bsa) + this.mean(bsa);
};
var sites_b = {
    'LMCA': { label: 'LMCA', cor: new Cor_b({ a1: -0.1817, b1: 2.9238, a2: 0.1801, b2: 0.2530 }) },
    'LAD': { label: 'LAD', cor: new Cor_b({ a1: -0.1502, b1: 2.2672, a2: 0.1709, b2: 0.2293 }) },
    'CIRC': { label: 'CIRC', cor: new Cor_b({ a1: -0.2716, b1: 2.3458, a2: 0.1142, b2: 0.3423 }) },
    'PROXRCA': { label: 'PROXRCA', cor: new Cor_b({ a1: -0.3039, b1: 2.7521, a2: 0.1626, b2: 0.2881 }) },
    'MIDRCA': { label: 'MIDRCA', cor: new Cor_b({ a1: -0.3060, b1: 2.4078, a2: 0.1324, b2: 0.3259 }) },
    'DISTRCA': { label: 'DISTRCA', cor: new Cor_b({ a1: -0.3185, b1: 2.3295, a2: 0.1099, b2: 0.3198 }) }
};

//these are aov-adjusted coronaries
function Cor_a(o) {
    this.a1 = o.a1;
    this.b1 = o.b1;
    this.sd = o.sd;
}
Cor_a.prototype.mean = function() {
    return this.a1 + this.b1 * aov;
};
Cor_a.prototype.zscore = function(score) {
    return (score - this.mean(aov)) / this.sd;
};
Cor_a.prototype.limit = function(z) {
    return z * this.sd + this.mean(aov);
};

var sites_a = {
    'LMCA': { label: 'LMCA', cor: new Cor_a({ a1: 0.3593, b1: 0.1398, sd: 0.3507 }) },
    'LAD': { label: 'LAD', cor: new Cor_a({ a1: 0.2364, b1: 0.1109, sd: 0.3409 }) },
    'CIRC': { label: 'CIRC', cor: new Cor_a({ a1: 0.1940, b1: 0.1081, sd: 0.3673 }) },
    'PROXRCA': { label: 'PROXRCA', cor: new Cor_a({ a1: 0.1812, b1: 0.1320, sd: 0.3579 }) },
    'MIDRCA': { label: 'MIDRCA', cor: new Cor_a({ a1: 0.1827, b1: 0.1104, sd: 0.3748 }) },
    'DISTRCA': { label: 'DISTRCA', cor: new Cor_a({ a1: 0.2191, b1: 0.1003, sd: 0.3627 }) }
};

function CalculateZScores() {
    //add logic for switching between bsa and aov adjusted series here:
    var ind_var = $('input[name=ind_var]:checked').val();

    switch (ind_var) {
        case "bsa":
            //alter input functionality:
            $('.aov_row input').attr('disabled', true);
            $('.bsa_row input, .bsa_row select').attr('disabled', false);
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
            $('#BSA').html(bsa.toFixed(2) + ' M<sup>2</sup>').attr('title', bsa);
            //switch the sites object to sites_b
            sites = sites_b;
            if (!isNaN(bsa)) {
                updateAll();
            }
            break;
        case "aov":
            $('.bsa_row input, .bsa_row select').attr('disabled', true);
            $('.aov_row input').attr('disabled', false);
            aov = parseFloat($('#txtAOV').val());
            sites = sites_a;
            if (!isNaN(aov)) {
                updateAll();
            }
            break;

    }
}
function updateAll() {
    //update mean/ranges
    $.each(sites, function() {
        var meanElement, rangeElement, str_mean, str_range;
        meanElement = $('#' + this.label + 'Mean');
        rangeElement = $('#' + this.label + 'Range');
        str_mean = this.cor.mean().toFixed(2);
        meanElement.text(str_mean);
        str_range = '(' + this.cor.limit(-limit).toFixed(2) + ' - ' + this.cor.limit(limit).toFixed(2) + ')';
        rangeElement.text(str_range);
    });
    //now update all the inputs
    $('.site').change();
}
function updateSite(site, value) {
    value = parseFloat(value);
    site = sites[site];
    var zelement = $('#' + site.label + 'Z');
    if (!isNaN(value)) {
        var z = site.cor.zscore(value);
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
    aov = null;
    $('.bsa_row input, .bsa_row select').removeAttr('disabled');
    $('.aov_row input').attr('disabled', true);

}

$(function() {
    // do something on document ready
    if ($.browser.msie) {
        $('input:radio').click(function() {
            this.blur();
            this.focus();
        });
    }

    $(':input:radio').change(CalculateZScores);

});



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
