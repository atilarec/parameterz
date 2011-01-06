/*
example site:
test = {

id: "Label",
citation: {
title: 'title',
authors: 'authors',
journal: 'journal',
linkUrl: 'url'
},
requiresBSA: false,
aov: {
mean: function() {
return ;
},
sd: function() {
return ;
},
zscore: function(score) {
return zScore(score, this.mean(), this.sd());
}
},
sov: {} //etc...
};

*/

// globals
var SITE = {},
    BSA = 0,
    GENDER = "",
    B, C, D, H, P;  // will become the Boston, Cincinnatti, etc. sites

function zScore(s, m, sd) {
    //the generic z-score model, used and abused (by some).
    //this generic function doesn't care if the units are 'natural' or 'transformed'
    return (s - m) / sd;
}

function polynomial(intercept, b1, b2, b3) {
    //basic polynomial equation used by Detroit equations
    return intercept + (b1 * BSA) + (b2 * Math.pow(BSA, 2)) + (b3 * Math.pow(BSA, 3));
}
B = {
    id: "Boston",
    citation: {
        title: 'Validation and re-evaluation of a discriminant model predicting anatomic suitability for biventricular repair in neonates with aortic stenosis.',
        authors: 'Colan SD, McElhinney DB, Crawford EC, Keane JF, Lock JE.',
        journal: 'J Am Coll Cardiol. 2006 May 2;47(9):1858-65. Epub 2006 Apr 17.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16682313'
    },
    requiresBSA: false,
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

C = {
    id: 'Cincinnatti',
    citation: {
        title: 'Two-dimensional echocardiographic valve measurements in healthy children: gender-specific differences.',
        authors: 'Zilberman MV, Khoury PR, Kimball RT.',
        journal: 'Pediatr Cardiol. 2005 Jul-Aug;26(4):356-60.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16374684'
    },
    requiresBSA: true,
    aov: {
        mean: function() {
            //returns the back-transformed (natural units) mean value
            return Math.exp(this._mean());
        },
        _mean: function() {
            //returns the log-transformed mean value
            if (GENDER === 'm') {
                return 0.472 + 0.492 * Math.log(BSA);
            }
            if (GENDER === 'f') {
                return 0.437 + 0.461 * Math.log(BSA);
            }
        },
        zscore: function(score) {
            if (GENDER === 'm') {
                return zScore(Math.log(score), this._mean(), 0.141);
            }
            if (GENDER === 'f') {
                return zScore(Math.log(score), this._mean(), 0.127);
            }
        }
    }
};

D = {
    id: "Detroit",
    citation: {
        title: 'Regression equations for calculation of z scores of cardiac structures in a large cohort of healthy infants, children, and adolescents: an echocardiographic study.',
        authors: 'Pettersen MD, Du W, Skeens ME, Humes RA.',
        journal: 'J Am Soc Echocardiogr. 2008 Aug;21(8):922-34. Epub 2008 Apr 11',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/18406572'
    },
    requiresBSA: false,
    aov: {
        mean: function() {
            //returns the back-transformed (natural units) mean value
            return Math.exp(this._mean());
        },
        _mean: function() {
            //returns the log-transformed mean value
            return polynomial(-0.874, 2.708, -1.841, 0.452);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this._mean(), Math.sqrt(0.01));
        }
    },
    sov: {
        mean: function() {
            return Math.exp(this._mean());
        },
        _mean: function() {
            return polynomial(-0.5, 2.537, -1.707, 0.42);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this._mean(), Math.sqrt(0.012));
        }
    },
    stj: {
        mean: function() {
            return Math.exp(this._mean());
        },
        _mean: function() {
            return polynomial(-0.759, 2.643, -1.797, 0.442);
        },
        zscore: function(score) {
            return zScore(Math.log(score), this._mean(), Math.sqrt(0.018));
        }
    }
};
H = {
    id: "Halifax",
    citation: {
        title: 'Dilatation of the ascending aorta in paediatric patients with bicuspid aortic valve: frequency, rate of progression and risk factors.',
        authors: "Warren AE, Boyd ML, O'Connell C, Dodds L.",
        journal: 'Heart. 2006 Oct;92(10):1496-500. Epub 2006 Mar 17.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/16547208'
    },
    requiresBSA: false,
    // NOTE: these are modified from the published values to handle cm:mm conversions (the published values return 'mm')
    aov: {
        _mean: function() {
            return 2.732 + 0.426 * Math.log(BSA);
        },
        mean: function() {
            return (Math.exp(this._mean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this._mean(), 0.10392);
        }
    },
    sov: {
        _mean: function() {
            return 3.021 + 0.443 * Math.log(BSA);
        },
        mean: function() {
            return (Math.exp(this._mean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this._mean(), 0.10173);
        }
    },
    stj: {
        _mean: function() {
            return 2.819 + 0.434 * Math.log(BSA);
        },
        mean: function() {
            return (Math.exp(this._mean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this._mean(), 0.10961);
        }
    },
    aao: {
        _mean: function() {
            return 2.898 + 0.421 * Math.log(BSA);
        },
        mean: function() {
            return (Math.exp(this._mean())) / 10;
        },
        zscore: function(score) {
            return zScore(Math.log(score * 10), this._mean(), 0.09111);
        }
    }

};
        