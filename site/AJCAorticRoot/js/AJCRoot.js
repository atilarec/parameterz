//globals
var bsa, gender;
var sites = {
    boys: {
        'AVA': { label: 'AVA', data: { intercept: 2.78, slope: 0.47, mse: 0.1, sFactor: 19.57} },
        'Sinuses': { label: 'Sinuses', data: { intercept: 3.1, slope: 0.49, mse: 0.1, sFactor: 26.95} },
        'STJ': { label: 'STJ', data: { intercept: 2.9, slope: 0.47, mse: 0.1, sFactor: 22.29} },
        'AAO': { label: 'AAO', data: { intercept: 2.9, slope: 0.46, mse: 0.11, sFactor: 22.74} }
    },
    girls: {
        'AVA': { label: 'AVA', data: { intercept: 2.75, slope: 0.44, mse: 0.1, sFactor: 19.11} },
        'Sinuses': { label: 'Sinuses', data: { intercept: 3.1, slope: 0.44, mse: 0.09, sFactor: 26.36} },
        'STJ': { label: 'STJ', data: { intercept: 2.9, slope: 0.42, mse: 0.09, sFactor: 21.76} },
        'AAO': { label: 'AAO', data: { intercept: 2.9, slope: 0.46, mse: 0.1, sFactor: 22.20} }
    }
};

function mean(data) {
    //returns: number
    //returns the log-transformed mean value, used in other calculations
    var intercept, slope;
    intercept = data.intercept;
    slope = data.slope;
    return intercept + slope * Math.log(bsa);
}

function uln(data) {
    //returns: number
    //returns the upper limit of normal (per the article: "+2 SD")
    var sFactor, slope;
    sFactor = data.sFactor;
    slope = data.slope;
    return sFactor * Math.pow(bsa, slope);
}

function CalculateZScores() {
    // if ht & wt exist, calculate the BSA
    var ht, wt, method;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    gender = $('#cmbGender').val();
    method = $('#cmbBSA').val();
    if (ht && wt) {
        bsa = CalcBSA(ht, wt, method).toFixed(2);
        bsa = +bsa;//type converts back to 'number'
    } else if (wt && method == 'Dreyer') {
        bsa = CalcBSA('', wt, method).toFixed(2);
        bsa = +bsa;//type converts back to 'number'
    }
    else {
        return false;
    }
    $('#BSA').html(bsa.toFixed(2) + ' M<sup>2</sup>');
    //update mean/uln
    $.each(sites[gender], function() {
        var meanElement, ulnElement, str_mean, str_uln;
        meanElement = $('#' + this.label + 'Mean');
        ulnElement = $('#' + this.label + 'ULN');
        str_mean = Math.exp(mean(this.data)).toFixed(2);
        meanElement.text(str_mean);
        str_uln = uln(this.data).toFixed(2);
        ulnElement.text(str_uln);
    });
    //now update all the inputs
    $('.site').change();
}

function zscore(data, score) {
    //returns: number
    //returns the z score given a site and score
    var x, sd;
    x = mean(data);
    score = Math.log(score);
    sd = data.mse;
    return (score - x) / sd;
}

function updateSite(site, value) {
    value = parseFloat(value);
    site = sites[gender][site];
    var zelement = $('#' + site.label + 'Z');
    if (bsa && !isNaN(value)) {
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
    $('#BSA, .results').text('').removeClass('normal borderline mild moderate severe');
    bsa = null;
}
