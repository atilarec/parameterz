//globals
var useBSA = false; //boolean
var index;


//site/data objects
//data are organized in descending order of bsa/wt, based on the table data in the publication:
//Normal values of M mode echocardiographic measurements of more than 2000 healthy infants and children in central Europe.
//C Kampmann, et al.,
//Heart. 2000 June; 83(6): 667–672.
//http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1760862/pdf/v083p00667.pdf

var sites = {
    RVDD: { label: 'RVDD', bsaData: {
        mean: [17.5, 16.5, 15.6, 14, 13.5, 12.4, 11.8, 11.2, 11, 10.5, 10.1, 9.9, 9.6, 9.5, 9.3, 9, 8.9, 8.8, 8.7, 8.7, 8.7],
        lower: [11.5, 10.3, 10.0, 9.0, 8.5, 7.6, 7.4, 6.4, 6.4, 5.8, 5.7, 5.5, 5.2, 5.0, 4.8, 4.5, 4.4, 4.3, 4.2, 4.2, 4.2],
        upper: [23.5, 22.7, 21.2, 19.0, 18.5, 17.2, 16.2, 16.0, 15.6, 15.2, 14.5, 14.3, 14.0, 14.0, 13.8, 13.5, 13.4, 13.3, 13.2, 13.2, 13.2]
    },
        wtData: {
            mean: [8.6, 8.6, 8.5, 8.4, 8.4],
            lower: [4.1, 4.1, 4.1, 4.0, 4.0],
            upper: [13.1, 13.1, 12.9, 12.8, 12.8]
        }
    },
    IVS: { label: 'IVS',
        bsaData: {
            mean: [9.3, 8, 7.4, 6.7, 6.6, 6.5, 6.2, 5.8, 5.6, 5.2, 5, 4.8, 4.8, 4.6, 4.3, 4.2, 4.1, 3.9, 3.9, 3.8, 3.8],
            lower: [6.8, 5.6, 5.2, 4.9, 4.8, 4.7, 4.3, 4.0, 3.8, 3.6, 3.5, 3.3, 3.3, 3.1, 2.7, 2.6, 2.6, 2.5, 2.5, 2.4, 2.4],
            upper: [11.8, 10.4, 9.6, 8.5, 8.4, 8.3, 8.1, 7.6, 7.4, 6.8, 6.5, 6.3, 6.3, 6.1, 5.9, 5.8, 5.6, 5.3, 5.3, 5.2, 5.2]
        },
        wtData: {
            mean: [3.8, 3.7, 3.6, 3.5, 3.5],
            lower: [2.4, 2.3, 2.3, 2.1, 2.1],
            upper: [5.2, 5.1, 4.9, 4.7, 4.7]
        }
    },
    LVEDD: { label: 'LVEDD',
        bsaData: {
            mean: [53.4, 46.8, 45.4, 43.3, 42.4, 41.7, 39.4, 38.5, 37.1, 35.8, 33.9, 33.2, 31.6, 31, 29, 27.1, 26, 23.6, 22.9, 21.2, 20],
            lower: [45.4, 36.8, 39.0, 37.3, 35.8, 35.5, 32.5, 31.7, 31.0, 29.6, 27.4, 27.2, 26.0, 25.6, 23.4, 22.0, 21.0, 19.0, 18.0, 17.0, 16.4],
            upper: [61.4, 54.8, 51.8, 49.3, 49.0, 47.9, 46.3, 45.3, 43.2, 42.0, 40.4, 39.2, 37.2, 36.4, 34.6, 32.1, 31.0, 27.2, 25.8, 25.4, 23.6]
        },
        wtData: {
            mean: [19.9, 18.8, 18.2, 18.1, 17.1],
            lower: [16.5, 15.4, 15.1, 15.0, 15.0],
            upper: [23.3, 22.2, 21.3, 21.1, 19.2]
        }
    },
    LVESD: { label: 'LVESD',
        bsaData: {
            mean: [34.4, 29.8, 28.6, 27.6, 27.1, 27.1, 25.2, 24.4, 23.6, 22.7, 21.3, 20.4, 19.9, 19.3, 18, 17, 16.1, 14.8, 14.8, 13.6, 13.2],
            lower: [25.6, 23.4, 22.5, 22.0, 21.5, 21.5, 19.6, 18.6, 18.0, 17.7, 16.1, 15.7, 15.4, 15.0, 14.0, 13.0, 12.0, 10.8, 10.8, 10.4, 10.2],
            upper: [43.2, 36.2, 34.7, 33.2, 32.7, 32.7, 30.8, 30.2, 29.2, 27.7, 26.5, 25.1, 24.4, 23.6, 22.0, 21.0, 20.1, 18.8, 18.8, 16.8, 16.2]
        },
        wtData: {
            mean: [12.7, 11.9, 11.7, 11.7, 11.0],
            lower: [10.2, 9.5, 9.2, 9.2, 9.7],
            upper: [15.2, 14.3, 14.2, 14.2, 12.3]
        }
    },
    LVPW: { label: 'LVPW',
        bsaData: {
            mean: [8.1, 8.1, 7.7, 6.9, 6.9, 6.6, 6.3, 5.9, 5.9, 5.7, 5.2, 4.9, 4.8, 4.8, 4.6, 4.6, 4.2, 4.1, 4.1, 3.8, 3.6],
            lower: [5.1, 5.1, 4.9, 4.3, 4.3, 4.0, 3.9, 3.7, 3.7, 3.6, 3.5, 3.4, 3.3, 3.3, 3.1, 3.1, 2.9, 2.8, 2.8, 2.7, 2.6],
            upper: [11.1, 11.1, 10.5, 9.5, 9.5, 9.2, 8.7, 8.1, 8.1, 7.8, 6.9, 6.4, 6.3, 6.3, 6.1, 6.1, 5.5, 5.4, 5.4, 4.9, 4.6]
        },
        wtData: {
            mean: [3.7, 3.6, 3.5, 3.2, 2.7],
            lower: [2.6, 2.5, 2.4, 2.2, 1.9],
            upper: [4.8, 4.7, 4.6, 4.2, 3.5]
        }
    },
    LAD: { label: 'LAD',
        bsaData: {
            mean: [32.5, 30.4, 29.9, 28.2, 27.3, 26.0, 25.2, 25.0, 23.2, 22.5, 21.2, 20.8, 20.1, 19.7, 18.7, 17.8, 16.8, 16.3, 15.3, 15.1, 14.0],
            lower: [23.7, 23.8, 23.7, 22.8, 21.7, 20.9, 19.5, 19.2, 17.0, 16.5, 16.2, 16.1, 16.1, 15.3, 14.5, 13.8, 13.0, 12.0, 11.5, 11.5, 10.5],
            upper: [41.3, 37.0, 36.1, 33.6, 32.9, 31.1, 30.9, 30.8, 29.4, 28.5, 26.2, 25.5, 24.1, 24.1, 22.9, 21.8, 20.6, 20.6, 19.1, 18.7, 17.5]
        },
        wtData: {
            mean: [13.7, 13.2, 12.6, 12.1, 11.5],
            lower: [10.5, 10.2, 9.4, 8.5, 8.3],
            upper: [16.9, 16.2, 15.8, 15.6, 14.7]
        }
    }
};

//determine lookup method (bsa vs. wt) and set the index for lookups
function setLookup(bsa, wt) {
    if (bsa >= 0.25) {
        useBSA = true;
        var array = [2, 1.75, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.275, 0.25];
        for (var i = 0; i < array.length; i++) {
            if (bsa >= array[i]) {
                index = i;
                return;
            }
        }
    }
    else {
        useBSA = false;
        var array = [4, 3.5, 3, 2.5, 2];
        for (var i = 0; i < array.length; i++) {
            if (wt >= array[i]) {
                index = i;
                return;
            }
        }
    }
};
function Calculate() {
    // if ht & wt exist, calculate the BSA
    var data, ht, wt, method;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    method = $('#cmbBSA').val();
    if (ht && wt) {
        bsa = calcBSA(wt, ht, method);
    } else if (wt && method == 'Dreyer') {
        bsa = calcBSA(wt);
    }
    else {
        return false;
    }
    $('#BSA').html(bsa.toFixed(2) + ' M<sup>2</sup>');
    if (bsa < 2.25 && wt > 2.0) {
        $('#info').html('').removeClass();
        setLookup(bsa, wt);
        //write the mean and ranges
        if (useBSA) {
            data = 'bsaData';
        }
        else {
            data = 'wtData';
        }
        $.each(sites, function() {
            var meanElement, rangeElement, str_mean, str_range;
            meanElement = $('#' + this.label + 'Mean');
            rangeElement = $('#' + this.label + 'Range');
            //pull the mean value out of the object/array
            str_mean = (this[data]['mean'][index]);
            meanElement.text(str_mean);
            //pull the upper and lower limit values
            str_range = "(" + this[data]['lower'][index] + " - " + this[data]['upper'][index] + ")";
            rangeElement.text(str_range);
        });
        //now update all the inputs
        $('.site').change();

    }
    else {
        $('#info').html('Sorry, patient size is out of range...<br />(expecting BSA < 2.25 M<sup>2</sup> and weight > 2 kg)')
            .addClass('severe');
    }
};
function updateSite(site, score) {
    score = parseFloat(score);
    site = sites[site];
    var zelement = $('#' + site.label + 'Z');
    if (!isNaN(index) && !isNaN(score)) {
        var data, z, mean, sd;
        if (useBSA) {
            data = site.bsaData;
        }
        else {
            data = site.wtData;
        }
        mean = data.mean[index];
        //determine if score is above/below mean and calculate the derived 1sd
        if (score >= mean) {
            sd = (data.upper[index] - data.mean[index]) / 2;
        }
        else {
            sd = (data.mean[index] - data.lower[index]) / 2;
        }
        //calculate the z-score
        z = (score - mean) / sd;
        zelement.text(z.toFixed(2)).removeClass('normal borderline mild moderate severe')
            .addClass(zscoreFlag(z))
            .attr('title', calcPercentile(z) + ' %-ile');
    } else {
        zelement.text('').removeClass('normal borderline mild moderate severe')
            .attr('title', '');
    }
};
function resetForm() {
    $('#BSA, .results').text('').removeClass('normal borderline mild moderate severe');
    index = null;
    useBSA = null;
};
