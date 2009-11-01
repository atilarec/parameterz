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
    this.aao = {
        mean: function() { return (0.02413 * ega) - 0.12588 },
        sd: function() { return (0.00205 * ega) + 0.00587 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
    this.lvMajor = {
        mean: function() { return (0.09541 * ega) - 0.55304 },
        sd: function() { return (0.01149 * ega) - 0.06876 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
    this.lvMinor = {
        mean: function() { return (0.05981 * ega) - 0.51997 },
        sd: function() { return (0.00784 * ega) - 0.06281 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
    this.mv = {
        mean: function() { return (0.03482 * ega) - 0.21035 },
        sd: function() { return (0.00222 * ega) + 0.01698 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
    this.rvMajor = {
        mean: function() { return (0.09512 * ega) - 0.68831 },
        sd: function() { return (0.00890 * ega) - 0.01642 },
        zscore: function(score) { return (+score - this.mean()) / this.sd() },
        limit: function(z) { return (z * this.sd()) + this.mean() }
    };
}; //end fb constructor

function fetal_rb(ega) {
    this.ega = parseFloat(ega);
    this.mv = {
        "intercept": -4.084,
        "multiplier": 1.173,
        "rmse": 0.1315,
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
    },
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
    },
    this.aao = {
        "intercept": -4.886,
        "multiplier": 1.261,
        "rmse": 0.1330,
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
    },
    this.rvMajor = {
        "intercept": -3.566,
        "multiplier": 1.277,
        "rmse": 0.1658,
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
    },
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
    },
    this.lvMajor = {
        "intercept": -3.231,
        "multiplier": 1.193,
        "rmse": 0.1376,
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
    }
}; // end frb constructor

function CalculateZScore(value, label) {
    var score = parseFloat(value);
    var ega = $('#Weeksddl').val();
    var output = $('input[name=output]:checked').val();
    var boston_output = '#' + label + 'B';
    var royal_output = '#' + label + 'RB';
    var b = new fetal_b(ega); 
    var rb = new fetal_rb(ega);
    if (!isNaN(score)) {
        //set the classes
        var bz = b[label].zscore(score);
        var rbz = rb[label].zscore(score);
        $(boston_output).removeClass('normal borderline mild moderate severe')
            .addClass(ZscoreFlag(bz));
        $(royal_output).removeClass('normal borderline mild moderate severe')
            .addClass(ZscoreFlag(rbz));
        switch (output) {
            case 'zscore':
                //set the boston_output
                $(boston_output).text(bz.toFixed(2));
                //set the royal_output
                $(royal_output).text(rbz.toFixed(2));
                break;
            case 'mean':
                //set the boston_output
                $(boston_output).text(b[label].mean().toFixed(2));
                //set the royal_output
                $(royal_output).text(rb[label].mean().toFixed(2));
                break;
            case 'range':
                //set the boston_output
                var lower = b[label].limit(-1.65).toFixed(2);
                var upper = b[label].limit(1.65).toFixed(2);
                $(boston_output).text(lower + ' - ' + upper)
                //set the royal_output
                var lower = rb[label].limit(-1.65).toFixed(2);
                var upper = rb[label].limit(1.65).toFixed(2);
                $(royal_output).text(lower + ' - ' + upper)
                break;
                
        }//end switch
    } //end if
    else {
        $(boston_output + ',' + royal_output).text('')
        .removeClass('normal borderline mild moderate severe');
        return false;
    } // bail out
    
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
