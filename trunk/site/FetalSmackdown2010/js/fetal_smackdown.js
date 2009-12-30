function fetal_b(ega) {
/*
From:
Predictors of Technical Success and Postnatal Biventricular Outcome
After In Utero Aortic Valvuloplasty for Aortic Stenosis With 
Evolving Hypoplastic Left Heart Syndrome.
Circulation. 2009;120:1482-1490
Published online before print September 28, 2009, doi: 10.1161/CIRCULATIONAHA.109.848994
*/
    this.ega = parseFloat(ega);
    this.aov = {
        mean: function() { return (0.02415 * ega) - 0.17158 },
        sd: function() { return (0.00206 * ega) - 0.00519 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
    this.lvMinor = {
        mean: function() { return (0.05981 * ega) - 0.51997 },
        sd: function() { return (0.00784 * ega) - 0.06281 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };

} //end fb constructor

function fetal_rb(ega) {
    /*
    From:
    Development of Z-scores for fetal cardiac dimensions from echocardiography.
    Schneider C, McCrindle BW, Carvalho JS, Hornberger LK, McCarthy KP, Daubeney PE.
    Ultrasound Obstet Gynecol. 2005 Nov;26(6):599-605.
    */
    this.ega = parseFloat(ega);
    this.aov = {
        "intercept": -5.019,
        "multiplier": 1.263,
        "rmse": 0.1282,
        "zscore": function(score) {
            var predicted = this.multiplier * Math.log(ega) + this.intercept;
            return (Math.log(score) - predicted) / this.rmse;
        },
        "limit": function(zscore) {
            var predicted = this.multiplier * Math.log(ega) + this.intercept;
            return Math.exp(predicted + (zscore * this.rmse));
        },
        "mean": function() {
            return Math.exp(this.multiplier * Math.log(ega) + this.intercept);
        }
    };
    this.lvMinor = {
        "intercept": -4.292,
        "multiplier": 1.298,
        "rmse": 0.1560,
        "zscore": function(score) {
            var predicted = this.multiplier * Math.log(ega) + this.intercept;
            return (Math.log(score) - predicted) / this.rmse;
        },
        "limit": function(zscore) {
            var predicted = this.multiplier * Math.log(ega) + this.intercept;
            return Math.exp(predicted + (zscore * this.rmse));
        },
        "mean": function() {
            return Math.exp(this.multiplier * Math.log(ega) + this.intercept);
        }
    };

} // end frb constructor

function fetal_mi(ega) {
    /*
    FROM:
    Fetal echocardiography: z-score reference ranges for a large patient population
    W. Lee et al
    Ultrasound in Obstetrics and Gynecology
    Volume 35 Issue 1, Pages 28 - 34
    Published Online: 15 Dec 2009
    */
    this.ega = parseFloat(ega);
    this.aov = {
        "mean": function() { return ((0.288 * ega) - 2.59) / 10; },
        "sd": function() { return ((0.0165 * ega) + 0.064) / 10; },
        "zscore": function(score) { return (score - this.mean()) / this.sd(); },
        "limit": function(z) { return (+z * this.sd()) + this.mean(); }
    };
    this.lvMinor = {
        "mean": function() { return (0.513 * ega) - 3.81; },
        "sd": function() { return (0.0394 * ega) + 0.059; },
        "zscore": function(score) { return (+score - this.mean()) / this.sd(); },
        "limit": function(z) { return (+z * this.sd()) + this.mean(); }
    };
} //end fetal_mi constructor

$(function() {
    // do something on document ready
if ($.browser.msie) {
    $('input:radio').click(function() {
        this.blur();
        this.focus();
    });
}

$(':input').change(CalculateZScore);
    
});
function CalculateZScore() {
    var ega = parseInt($('#Weeksddl').val());
    var score = parseFloat($('#txtaov').val());
    var ref = $('input[name=output]:checked').val();
    var fetal, range, data;
    if(!isNaN(score)) {
        switch (ref) {
            case "Boston":
                fetal = new fetal_b(ega);
                break;
            case "Royal":
                fetal = new fetal_rb(ega);
                break;
            case "Michigan":
                fetal = new fetal_mi(ega);
                break;

        }//end switch
        $('#mean').text(fetal.aov.mean().toFixed(2));
        var zscore = fetal.aov.zscore(score);
        $('#zscore').text(zscore.toFixed(1));
        var lower = fetal.aov.limit(-1.65).toFixed(2);
        var upper = fetal.aov.limit(1.65).toFixed(2);
        range = lower + " - " + upper;
        $('#range').text(range);
        $('.results').removeClass('normal borderline mild moderate severe').addClass(zscoreFlag(zscore));
        data = [ega, score];
        plotIt(data, ref);
    }//end if


} //end CalculateZScore fx



//Copyright (c) 2009: Dan Dyar

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.
