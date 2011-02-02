/* 
based on the data published in:
Normal Values for Left Ventricular Volume in Infants and Young Children by the Echocardiographic Subxiphoid Five-Sixth Area by Length (Bullet) Method. 
Journal of the American Society of Echocardiography - February 2011 (Vol. 24, Issue 2, Pages 214-218, DOI: 10.1016

Feb. 2011
Dan@ParameterZ.com
*/

//globals
var lv;
var limit = 2; //z-score to use as ULN/LLN

function NYlvedv(o) {
    this.bsa = o.bsa;
}

NYlvedv.prototype.mean = function() {
    return 70.4 * Math.pow(this.bsa, 1.38);
};

NYlvedv.prototype.zscore = function() {
    return (this.edvi() - 70.4) / 9.1;
};

NYlvedv.prototype.limit = function(z) {
    var limit = z * 9.1;
    limit += 70.4;
    limit *= Math.pow(this.bsa, 1.38);
    return +limit.toFixed(2);
};

NYlvedv.prototype.edv = function() {
    if (this.area && this.length) {
        return (5 / 6) * this.area * this.length;
    }
};

NYlvedv.prototype.edvi = function() {
    return this.edv() / Math.pow(this.bsa, 1.38);
};

function CalculateZScore() {
    // if ht & wt exist, calculate the BSA
    var ht, wt, bsa, area, length;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    area = parseFloat($('#txtArea').val());
    length = parseFloat();
    if (ht && wt) {
        bsa = CalcBSA(ht, wt, 'Haycock');
        bsa = +bsa.toFixed(2);

    } else if (wt) {
        bsa = CalcBSA('', wt, 'Dreyer');
        bsa = +bsa.toFixed(2);
    } else {
        return false;
    }
    $('#BSA').html(bsa + ' M<sup>2</sup>');

    //build new lv object
    lv = new NYlvedv({
        'bsa': bsa
    });
    //now update the inputs
    $('.site').change();

}

function updateVolume() {
    // test for valid data
    if (lv.hasOwnProperty('bsa') && lv.hasOwnProperty('area') && lv.hasOwnProperty('length')) {
        var z = lv.zscore();
        //update results
        $('#LVEDV').text(lv.edv().toFixed(2) + ' ml')
            .attr('title', lv.edvi().toFixed(2) + ' ml per M^2.76');
        $('#zscore').text(z.toFixed(1))
        .removeClass('normal borderline mild moderate severe')
        .addClass(zscoreFlag(z))
        .attr('title', calcPercentile(z) + ' %-ile');
        $('#mean').text(lv.mean().toFixed(2));
        $('#range').text(lv.limit(-limit) + ' - ' + lv.limit(limit));

        $('.results').show();
    }
}

function noResults() {
    $('.results').hide();
}

function updateArea(value) {
    var area = parseFloat(value);
    if (lv && area) {
        lv.area = area;
        updateVolume();
    } else {
        noResults();
    }
}

function updateLength(value) {
    var length = parseFloat(value);
    if (lv && length) {
        lv.length = length;
        updateVolume();
    } else {
        noResults();
    }
}

function resetForm() {
    $('#BSA, .results').text('').removeClass('normal borderline mild moderate severe').attr('title', '');
    lv = {};

}
