//globals
var bsa;
var zlimit = 1.65; // sets the limit for upper and lower range values
var sites = {
    'RVD': { label: 'RVD', data: { intercept: -0.317, b1: 1.85, b2: -1.274, b3: 0.335, mse: 0.058} },
    'IVSd': { label: 'IVSd', data: { intercept: -1.242, b1: 1.272, b2: -0.762, b3: 0.208, mse: 0.046 } },
    'IVSs': { label: 'IVSs', data: { intercept: -1.048, b1: 1.751, b2: -1.177, b3: 0.318, mse: 0.034 } },
    'LVIDd': { label: 'LVIDd', data: { intercept: 0.105, b1: 2.859, b2: -2.119, b3: 0.552, mse: 0.01 } },
    'LVIDs': { label: 'LVIDs', data: { intercept: -0.371, b1: 2.833, b2: -2.081, b3: 0.538, mse: 0.016 } },
    'LVPWd': { label: 'LVPWd', data: { intercept: -1.586, b1: 1.849, b2: -1.188, b3: 0.313, mse: 0.037 } },
    'LVPWs': { label: 'LVPWs', data: { intercept: -0.947, b1: 1.907, b2: -1.259, b3: 0.33, mse: 0.023 } },
    'AVA': { label: 'AVA', data: { intercept: -0.874, b1: 2.708, b2: -1.841, b3: 0.452, mse: 0.01 } },
    'Sinuses': { label: 'Sinuses', data: { intercept: -0.5, b1: 2.537, b2: -1.707, b3: 0.42, mse: 0.012 } },
    'STJ': { label: 'STJ', data: { intercept: -0.759, b1: 2.643, b2: -1.797, b3: 0.442, mse: 0.018 } },
    'Transv': { label: 'Transv', data: { intercept: -0.79, b1: 3.02, b2: -2.484, b3: 0.712, mse: 0.023 } },
    'Isthmus': { label: 'Isthmus', data: { intercept: -1.072, b1: 2.539, b2: -1.627, b3: 0.368, mse: 0.027 } },
    'DistalAO': { label: 'DistalAO', data: { intercept: -0.976, b1: 2.469, b2: -1.746, b3: 0.445, mse: 0.026 } },
    'AbdAO': { label: 'AbdAO', data: { intercept: -0.922, b1: 2.1, b2: -1.411, b3: 0.371, mse: 0.018 } },
    'PV': { label: 'PV', data: { intercept: -0.761, b1: 2.774, b2: -1.808, b3: 0.436, mse: 0.023 } },
    'MPA': { label: 'MPA', data: { intercept: -0.707, b1: 2.746, b2: -1.807, b3: 0.424, mse: 0.024 } },
    'RPA': { label: 'RPA', data: { intercept: -1.36, b1: 3.394, b2: -2.508, b3: 0.66, mse: 0.027 } },
    'LPA': { label: 'LPA', data: { intercept: -1.348, b1: 2.884, b2: -1.954, b3: 0.466, mse: 0.028 } },
    'MV': { label: 'MV', data: { intercept: -0.271, b1: 2.446, b2: -1.7, b3: 0.425, mse: 0.022 } },
    'TV': { label: 'TV', data: { intercept: -0.164, b1: 2.341, b2: -1.596, b3: 0.387, mse: 0.036 } },
    'LA': { label: 'LA', data: { intercept: -0.208, b1: 2.164, b2: -1.597, b3: 0.429, mse: 0.02} }
};
//functions to get zscore, mean, range values
function mean(data) {
    //returns: number
    //returns the log-transformed mean value, used in other calculations
    var intercept, b1, b2, b3;
    intercept = data.intercept;
    b1 = data.b1;
    b2 = data.b2;
    b3 = data.b3;
    return intercept + (b1 * bsa) + (b2 * Math.pow(bsa, 2)) + (b3 * Math.pow(bsa, 3));
}
function zscore(data, score) {
    //returns: number
    //returns the z score given a site and score
    var x, sd;
    x = mean(data);
    score = Math.log(score);
    sd = Math.sqrt(data.mse);
    return (score - x) / sd;
}
function range(data) {
    //returns: string
    //returns a string in the format "(min - max)" given a zscore range (eg., +/- 1.65 sd)
    z = zlimit; //configured as a global variable
    var min, max, x, sd;
    x = mean(data);
    sd = Math.sqrt(data.mse);
    min = Math.exp((x - z * sd)).toFixed(2);
    max = Math.exp((x + z * sd)).toFixed(2);
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
        str_mean = Math.exp(mean(this.data)).toFixed(2);
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

