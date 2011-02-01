var BSA, AREA, LENGTH, LVEDV;

function CalculateZScore() {
    // if ht & wt exist, calculate the BSA
    var ht, wt, method;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    if (ht && wt) {
        BSA = CalcBSA(ht, wt, 'Haycock');
        BSA = +BSA.toFixed(2);

    } else if (wt && method == 'Dreyer') {
        BSA = CalcBSA('', wt, method);
        BSA = +BSA.toFixed(2);
    }
    else {
        return false;
    }
    $('#BSA').html(BSA.toFixed(2) + ' M<sup>2</sup>')

    //now update the inputs
    $('.site').change();
}

function updateVolume() {
    // test for valid inputs already done
    LVEDV = (5 / 6) * AREA * LENGTH;
    var lvedvi = LVEDV / (Math.pow(BSA, 1.38));
    var z = (lvedvi - 70.4) / 9.1;
    //update results
    $('#LVEDV').text(LVEDV.toFixed(2) + ' ml');
    $('#LVEDVi').html(lvedvi.toFixed(2) + ' ml per M<sup>2.76</sup>');
    $('#zscore').text(z.toFixed(1))
        .removeClass('normal borderline mild moderate severe')
        .addClass(zscoreFlag(z))
        .attr('title', calcPercentile(z) + ' %-ile');
    $('.results').show();
}

function noResults() {
    $('.results').hide();
}

function updateArea(value) {
    AREA = parseFloat(value);
    if (BSA && LENGTH && AREA) {
        updateVolume();
    } else {
        noResults();
    }
}

function updateLength(value) {
    LENGTH = parseFloat(value);
    if (BSA && LENGTH && AREA) {
        updateVolume();
    } else {
        noResults();
    }
}

function resetForm() {
    $('#BSA, .results').text('').removeClass('normal borderline mild moderate severe').attr('title', '');
    BSA = null;

}
