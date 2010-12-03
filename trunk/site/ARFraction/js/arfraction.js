function GetExponent(pvca_bsa, vti_ratio) {
    if (pvca_bsa <= 0.05) {
        return -2.62 + (31.42 * pvca_bsa) + (2.33 * vti_ratio);
    } 
    else if (pvca_bsa > 0.05) {
        return -1.18 + (2.66 * pvca_bsa) + (2.33 * vti_ratio);
    }
}//end GetExponent fx

function CalculateRF() {
    var bsa, ht, wt, method, pvc, pvca, pvca_bsa, vti_a, vti_r, vti_ratio, exponent, rf;
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
    $('#BSA').text(bsa.toFixed(2))
    pvc = parseFloat($('#txtPVC').val());
    vti_a = parseFloat($('#txtVTI-antegrade').val());
    vti_r = parseFloat($('#txtVTI-retro').val());

    if (bsa && pvc && vti_a && vti_r) {
        pvca = Math.PI * Math.pow((pvc / 2), 2);
        pvca_bsa = pvca / bsa;
        vti_ratio = vti_r / vti_a;
        exponent = GetExponent(pvca_bsa, vti_ratio);
        rf = 0.6 / (1 + Math.exp(-exponent));
        $('#RF').text(rf.toFixed(2))
    }


}// end calcRF fx