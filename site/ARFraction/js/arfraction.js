﻿function CalculateRF() {
    var bsa, ht, wt, pvc, pvca, pvca_bsa, vti_a, vti_r, vti_ratio, exponent, rf;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    if (ht && wt) {
        bsa = CalcBSA(ht, wt, 'Haycock');
    } else if (wt) {
        bsa = CalcBSA('', wt, 'Dreyer');
    }
    else {
        return false;
    }
    $('#BSA').html(bsa.toFixed(2) + '&nbsp;m<sup>2</sup>').attr('title', 'BSA');
    pvc = $('#txtPVC').val();
    //split the string into an array
    pvc = pvc.split(","); //pvc is now an array of strings
    
    vti_a = parseFloat($('#txtVTI-antegrade').val());
    vti_r = parseFloat($('#txtVTI-retro').val());

    if (bsa && pvc && vti_a && vti_r) {
        //calculate the combined vena contracta area
        //by looping through the pvc array
        pvca = 0;
        for (var i = 0; i <= pvc.length - 1; i++) {
            pvca += Math.PI * Math.pow((parseFloat(pvc[i]) / 2), 2);

        }
        
        //calculate the ratios
        pvca_bsa = pvca / bsa;
        vti_ratio = vti_r / vti_a;
        //calculate the exponent
        if (pvca_bsa <= 0.05) {
            exponent = -2.62 + (31.42 * pvca_bsa) + (2.33 * vti_ratio);
        }
        else if (pvca_bsa > 0.05) {
            exponent = -1.18 + (2.66 * pvca_bsa) + (2.33 * vti_ratio);
        } 
        //solve the rf
        rf = 0.6 / (1 + Math.exp(-exponent));
        $('#RF').text(rf.toFixed(2));
    }


} // end calcRF fx

function resetForm() {
    $('.results').text('').attr('title', '');
}