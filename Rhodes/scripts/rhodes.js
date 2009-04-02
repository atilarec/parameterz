function calcRhodes() {
    var ht = parseFloat($('#ht').val());
    var wt = parseFloat($('#wt').val());
    var aoroot = parseFloat($('#aoroot').val());
    var mvlax = parseFloat($('#mvlax').val());
    var mva4c = parseFloat($('#mva4c').val());
    var lvlax = parseFloat($('#lvlax').val());
    var heartlax = parseFloat($('#heartlax').val());
    var bsa = calcBSA(ht, wt);
    var aorooti = aoroot / bsa;
    var lar = lvlax / heartlax;
    var mva = Math.PI * (mvlax / 2 + mva4c / 2);
    var mvai = mva / bsa;

    if (!isNaN(bsa)) {
        $('#bsa').val(bsa.toFixed(2));
    };
    
    if (!isNaN(aorooti)) {
        $('#aorooti').val(aorooti.toFixed(2));
    };

    if (!isNaN(lar)) {
        $('#lar').val(lar.toFixed(2));
    };
    
    if (!isNaN(mva)) {
        $('#mva').val(mva.toFixed(2));
        if (!isNaN(bsa)) {
            $('#mvai').val(mvai.toFixed(2));
        }
    };

    //Score = 14.0 (BSA) +0.943(ROOT1) +4.78 (LAR) + 0.157(MVA1) - 12.03

    var score = 14 * bsa + 0.943 * aorooti + 4.78 * lar + 0.157 * mvai - 12.03;
    score = 1 * score.toFixed(2);

    if (!isNaN(score)) {
        if (score >= -0.35) {
            $('#results').html("This score is <b>" + score + "</b>, which <em>favors</em> a biventricular repair.");
        }
        else {
            $('#results').html("This score is <b>" + score + "</b>, which <em>does not favor</em> a biventricular repair.");
        }
    };
} //end main fx

function calcBSA(ht, wt) {
    if (isNaN(ht)) {
        return 0.1 * Math.pow(wt, (2 / 3));
    }
    else {
        return 0.007184 * Math.pow(ht, 0.725) * Math.pow(wt, 0.425);

    }
}//end calcBSA fx