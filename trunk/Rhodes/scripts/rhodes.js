var Rhodes = {
    ht: Number,
    wt: Number,
    bsa: function() {
        if (isNaN(this.ht)) {
            return 0.1 * Math.pow(this.wt, (2 / 3));
        }
        else {
            return 0.024265 * Math.pow(this.ht, 0.3964) * Math.pow(this.wt, 0.5378);
        }
    },
    aoroot: Number,
    aorooti: function() {
        return this.aoroot / this.bsa();
    },
    mvlax: Number,
    mva4c: Number,
    mva: function() {
        return Math.PI * ((this.mvlax / 2) * (this.mva4c / 2));
    },
    mvai: function() {
        return this.mva() / this.bsa();
    },
    lvlax: Number,
    heartlax: Number,
    lar: function() {
        return this.lvlax / this.heartlax;
    },
    score: function() {
        //Score = 14.0 (BSA) +0.943(ROOT1) +4.78 (LAR) + 0.157(MVA1) - 12.03
        return 14 * this.bsa() + 0.943 * this.aorooti() + 4.78 * this.lar() + 0.157 * this.mvai() - 12.03;
    },
    risk: {
        factor: {
            aortic: false,
            lar: false,
            mitral: false
        },
        factors: function() {
            return this.factor.aortic + this.factor.lar + this.factor.mitral;
        },
        description: {
            aortic: "<li>indexed aortic root diameter of 3.5 cm/m2 or less;</li>",
            lar: "<li>left ventricular long axis to heart long-axis ratio of 0.8 or less;</li>",
            mitral: "<li>indexed mitral valve area of 4.75 cm2/m2 or less;</li>"

        },
        getList: function() {
            var string = '';
            if (this.factor.aortic) {
                string += this.description.aortic;
            }
            if (this.factor.lar) {
                string += this.description.lar;
            }
            if (this.factor.mitral) {
                string += this.description.mitral;
            }
            return string;

        }


    }
};
function calcRhodes() {
    Rhodes.ht = parseFloat($('#ht').val());
    Rhodes.wt = parseFloat($('#wt').val());
    Rhodes.aoroot = parseFloat($('#aoroot').val());
    Rhodes.mvlax = parseFloat($('#mvlax').val());
    Rhodes.mva4c = parseFloat($('#mva4c').val());
    Rhodes.lvlax = parseFloat($('#lvlax').val());
    Rhodes.heartlax = parseFloat($('#heartlax').val());

    if (!isNaN(Rhodes.bsa())) {
        $('#bsa').html(Rhodes.bsa().toFixed(2));
    }

    if (!isNaN(Rhodes.aorooti())) {
        $('#aorooti').html(Rhodes.aorooti().toFixed(2));
        if (Rhodes.aorooti() <= 3.5) {
            Rhodes.risk.factor.aortic = true;
            $('#aorooti').addClass('riskfactor');

        }
        else {
            $('#aorooti').removeClass('riskfactor');
            Rhodes.risk.factor.aortic = false;

        }
    }

    if (!isNaN(Rhodes.lar())) {
        $('#lar').html(Rhodes.lar().toFixed(2));
        if (Rhodes.lar() <= 0.8) {
            Rhodes.risk.factor.lar = true;
            $('#lar').addClass('riskfactor');
        }
        else {
            $('#lar').removeClass('riskfactor');
            Rhodes.risk.factor.lar = false;

        }
    }
    
    if (!isNaN(Rhodes.mva())) {
        $('#mva').html(Rhodes.mva().toFixed(2));
        if (!isNaN(Rhodes.bsa())) {
            $('#mvai').html(Rhodes.mvai().toFixed(2));
            if (Rhodes.mvai() <= 4.75) {
                Rhodes.risk.factor.mitral = true;
                $('#mvai').addClass('riskfactor');
            }
            else {
                $('#mvai').removeClass('riskfactor');
                Rhodes.risk.factor.mitral = false;

            }
        }
    }


    if (!isNaN(Rhodes.score())) {
        $('#results').html(Rhodes.score().toFixed(2));
        if (Rhodes.score() <= -0.35) {
            $('#norwood, #results').effect("highlight", { color: "#E1817B" }, 4000);
        }

    }
    $('#riskfactors').html(Rhodes.risk.factors());
    if (Rhodes.risk.factors() > 0) {
        $('#riskfactors').addClass('riskfactor');
    }
    else {
        $('#riskfactors').removeClass('riskfactor');
    }
    $('#risks').html(Rhodes.risk.getList());
} //end main fx


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