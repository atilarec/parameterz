/*
example reference:
test = {

id: "Label",
citation: {
title: 'title',
authors: 'authors',
journal: 'journal',
linkUrl: 'url'
},
requiresGender: false,
aov: {
mean: function () {
return ;
},
sd: function () {
return ;
},
zscore: function (score) {
return zScore(score, this.mean(), this.sd());
}
},
sov: {} //etc...
};

*/

// globals
var REF,
    BSA = 0,
    GENDER = "f", //the html/form has this defaulting to 'f'...
    REFS, Bos, Cin, Det, Hal, Par, Wes;  // will become the Boston, Cincinnatti, etc. reference sites

function zScore(s, m, sd) {
    //the generic z-score model, used and abused (by some).
    //this generic function doesn't care if the units are 'natural' or 'transformed'
    return (s - m) / sd;
}

function fnPolynomial(intercept, b1, b2, b3) {
    //basic polynomial equation used by Detroit equations
    return intercept + (b1 * BSA) + (b2 * Math.pow(BSA, 2)) + (b3 * Math.pow(BSA, 3));
}
function fnLogLinear(intercept, slope) {
    //basic form of several types of equations (Cincinnatti, Halifax, Paris, etc)
    var bsa = Math.log(BSA);
    return intercept + slope * bsa;
}

function updateBSA() {
    // if ht & wt exist, calculate the BSA
    var ht, wt, method;
    ht = parseFloat($('#txtHT').val());
    wt = parseFloat($('#txtWT').val());
    method = $('#cmbBSA').val();
    if (ht && wt) {
        BSA = CalcBSA(ht, wt, method).toFixed(2);
        BSA = +BSA; //type converts back to 'number'; ensures we are making all calcs from her on using the displayed bsa
    } else if (wt && method == 'Dreyer') {
        BSA = CalcBSA('', wt, method).toFixed(2);
        BSA = +BSA; //type converts back to 'number', see note above
    } else {
        return;
    }
    $('#BSA').html(BSA.toFixed(2) + ' M<sup>2</sup>');
    calculateZScores();

} //end updateBSA

function updateGender() {
    GENDER = $('#cmbGender').val();
    calculateZScores();
} //end updateGender
function displayRef() {
    $('.title').text(REF.citation.title);
    $('.linkUrl').attr('href', REF.citation.linkUrl);
    $('.authors').text(REF.citation.authors);
    $('.journal').text(REF.citation.journal);
}//end displayRef fx

function updateRef() {
    var use_ref
    //determine which reference was selected
    use_ref = $('#cmbUseRef').val();
    if (use_ref !== '') {
        REF = REFS[use_ref];
        if (REF.requiresGender) {
            $('.gender').show();
        }
        else {
            $('.gender').hide();
        }
        calculateZScores();
        displayRef();

    } else {
        return;
    }
} //end updateRef

function calculateZScores() {
    // main function
    if (REF) {
        var allSites = ['aov', 'sov', 'stj', 'aao'];
        $.each(allSites, function(key, val) {
            if (val in REF) {
                $('.' + val).show();
                if (BSA) {
                    $('#txt' + val).change();
                }
            }
            else {
                $('.' + val).hide();
                $('#' + val + 'z').text('').removeClass('normal borderline mild moderate severe').attr('title', '');
            }
        });
    }
} //end calculateScores

function updateSite(site, score) {
    if (score) {
        //debug
        //alert('in function "updateSite"')
        var z = REF[site]['zscore'](score);
        //debug
        //alert(site + ': ' + z.toFixed(2))
        $('#' + site + 'z').text(z.toFixed(2)).
            removeClass('normal borderline mild moderate severe').
            addClass(zscoreFlag(z)).attr('title', (poz(z) * 100).toFixed(2) + '%-ile');
    }
} //end updateSite

function resetForm() {
    $('.results').text('').
    removeClass('normal borderline mild moderate severe');
    $('.gender, .aov, .sov, .stj, .aao').show();
    $('.title, .authors, .journal').text('');

} //end resetForm

Bos = {
    id: "Boston",
    citation: {
        title: 'Validation and re-evaluation of a discriminant model predicting anatomic suitability for biventricular repair in neonates with aortic stenosis.',
        authors: 'Colan SD, McElhinney DB, Crawford EC, Keane JF, Lock JE.',
        journal: 'J Am Coll Cardiol. 2006 May 2;47(9):1858-65. Epub 2006 Apr 17.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16682313'
    },
    requiresGender: false,
    aov: {
        mean: function() {
            return 1.55 * Math.pow(BSA, 0.5);
        },
        sd: function() {
            return 0.06 + (0.083 * BSA);
        },
        zscore: function(score) {
            return zScore(score, this.mean(), this.sd());
        }
    },
    sov: {
        mean: function() {
            return 2.02 * Math.pow(BSA, 0.5);
        },
        sd: function() {
            return 0.098 + (0.12 * BSA);
        },
        zscore: function(score) {
            return zScore(score, this.mean(), this.sd());
        }
    }
};

Cin = {
    id: 'Cincinnatti',
    citation: {
        title: 'Two-dimensional echocardiographic valve measurements in healthy children: gender-specific differences.',
        authors: 'Zilberman MV, Khoury PR, Kimball RT.',
        journal: 'Pediatr Cardiol. 2005 Jul-Aug;26(4):356-60.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16374684'
    },
    requiresGender: true,
    aov: {
        mean: function() {
            //returns the back-transformed (natural units) mean value
            return Math.exp(this.logMean());
        },
        logMean: function() {
            //returns the log-transformed mean value
            if (GENDER === 'm') {
                return fnLogLinear(0.472, 0.492);
            }
            if (GENDER === 'f') {
                return fnLogLinear(0.437, 0.461);
            }
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score), this.logMean(), 0.141);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score), this.logMean(), 0.127);
            }
        }
    }
};

Det = {
    id: "Detroit",
    citation: {
        title: 'Regression equations for calculation of z scores of cardiac structures in a large cohort of healthy infants, children, and adolescents: an echocardiographic study.',
        authors: 'Pettersen MD, Du W, Skeens ME, Humes RA.',
        journal: 'J Am Soc Echocardiogr. 2008 Aug;21(8):922-34. Epub 2008 Apr 11',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/18406572'
    },
    requiresGender: false,
    aov: {
        mean: function() {
            //returns the back-transformed (natural units) mean value
            return Math.exp(this.logMean());
        },
        logMean: function() {
            //returns the log-transformed mean value
            return fnPolynomial(-0.874, 2.708, -1.841, 0.452);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), Math.sqrt(0.01));
        }
    },
    sov: {
        mean: function() {
            return Math.exp(this.logMean());
        },
        logMean: function() {
            return fnPolynomial(-0.5, 2.537, -1.707, 0.42);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), Math.sqrt(0.012));
        }
    },
    stj: {
        mean: function() {
            return Math.exp(this.logMean());
        },
        logMean: function() {
            return fnPolynomial(-0.759, 2.643, -1.797, 0.442);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), Math.sqrt(0.018));
        }
    }
};
Hal = {
    id: "Halifax",
    citation: {
        title: 'Dilatation of the ascending aorta in paediatric patients with bicuspid aortic valve: frequency, rate of progression and risk factors.',
        authors: "Warren AE, Boyd ML, O'Connell C, Dodds L.",
        journal: 'Heart. 2006 Oct;92(10):1496-500. Epub 2006 Mar 17.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16547208'
    },
    requiresGender: false,
    // NOTE: these are modified from the published values to handle cm:mm conversions (the published values return 'mm')
    aov: {
        logMean: function() {
            return fnLogLinear(2.732, 0.426);
        },
        mean: function() {
            return (Math.exp(this.logMean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this.logMean(), 0.10392);
        }
    },
    sov: {
        logMean: function() {
            return fnLogLinear(3.021, 0.443);
        },
        mean: function() {
            return (Math.exp(this.logMean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this.logMean(), 0.10173);
        }
    },
    stj: {
        logMean: function() {
            return fnLogLinear(2.819, 0.434);
        },
        mean: function() {
            return (Math.exp(this.logMean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this.logMean(), 0.10961);
        }
    },
    aao: {
        logMean: function() {
            return fnLogLinear(2.898, 0.421);
        },
        mean: function() {
            return (Math.exp(this.logMean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this.logMean(), 0.09111);
        }
    }

};
Par = {
    id: "Paris",
    citation: {
        title: 'Nomograms for aortic root diameters in children using two-dimensional echocardiography.',
        authors: 'Gautier M, Detaint D, Fermanian C, Aegerter P, Delorme G, Arnoult F, Milleron O, Raoux F, Stheneur C, Boileau C, Vahanian A, Jondeau G.',
        journal: 'Am J Cardiol. 2010 Mar 15;105(6):888-94.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/20211339'
    },
    requiresGender: true,
    aov: {
        logMean: function() {
            if (GENDER === 'm') {
                return fnLogLinear(2.78, 0.47);
            }
            if (GENDER === 'f') {
                return fnLogLinear(2.75, 0.44);
            }
        },
        mean: function() {
            return Math.exp(this.logMean()) / 10;
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score * 10), this.logMean(), 0.1);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score * 10), this.logMean(), 0.1);
            }
        }
    },
    sov: {
        logMean: function() {
            if (GENDER === 'm') {
                return fnLogLinear(3.1, 0.49);
            }
            if (GENDER === 'f') {
                return fnLogLinear(3.1, 0.44);
            }
        },
        mean: function() {
            return Math.exp(this.logMean()) / 10;
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score * 10), this.logMean(), 0.1);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score * 10), this.logMean(), 0.09);
            }
        }
    },
    stj: {
        logMean: function() {
            if (GENDER === 'm') {
                return fnLogLinear(2.9, 0.47);
            }
            if (GENDER === 'f') {
                return fnLogLinear(2.9, 0.42);
            }
        },
        mean: function() {
            return Math.exp(this.logMean()) / 10;
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score * 10), this.logMean(), 0.1);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score * 10), this.logMean(), 0.09);
            }
        }
    },
    aao: {
        logMean: function() {
            if (GENDER === 'm') {
                return fnLogLinear(2.9, 0.46);
            }
            if (GENDER === 'f') {
                return fnLogLinear(2.9, 0.46);
            }
        },
        mean: function() {
            return Math.exp(this.logMean()) / 10;
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score * 10), this.logMean(), 0.11);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score * 10), this.logMean(), 0.1);
            }
        }
    }

};
Wes = {
    id: "Wessex",
    citation: {
        title: 'Relationship of the dimension of cardiac structures to body size: an echocardiographic study in normal infants and children.',
        authors: 'Daubeney PE, Blackstone EH, Weintraub RG, Slavik Z, Scanlon J, Webber SA.',
        journal: 'Cardiol Young. 1999 Jul;9(4):402-10.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/10476831'
    },
    requiresGender: false,
    aov: {
        mean: function() {
            return Math.exp(this.logMean());
        },
        logMean: function() {
            return fnLogLinear(0.5183, 0.5347);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), 0.06726);
        }
    },
    sov: {
        mean: function() {
            return Math.exp(this.logMean());
        },
        logMean: function() {
            return fnLogLinear(0.7224, 0.5082);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), 0.07284);
        }
    },
    stj: {
        mean: function() {
            return Math.exp(this.logMean());
        },
        logMean: function() {
            return fnLogLinear(0.5417, 0.5490);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this.logMean(), 0.08656);
        }
    }
};

//put each of the references into an array
REFS = [Bos, Cin, Det, Hal, Par, Wes];
        