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
    var mva = Math.PI * ((mvlax / 2) * (mva4c / 2));
    var mvai = mva / bsa;

    if (!isNaN(bsa)) {
        $('#bsa').val(bsa.toFixed(2));
    }
    
    if (!isNaN(aorooti)) {
        $('#aorooti').val(aorooti.toFixed(2));
    }

    if (!isNaN(lar)) {
        $('#lar').val(lar.toFixed(2));
    }
    
    if (!isNaN(mva)) {
        $('#mva').val(mva.toFixed(2));
        if (!isNaN(bsa)) {
            $('#mvai').val(mvai.toFixed(2));
        }
    }

    //Score = 14.0 (BSA) +0.943(ROOT1) +4.78 (LAR) + 0.157(MVA1) - 12.03

    var score = 14 * bsa + 0.943 * aorooti + 4.78 * lar + 0.157 * mvai - 12.03;
    score = 1 * score.toFixed(2);

    if (!isNaN(score)) {
        $('#results').html(score);
        $('#interpretation').toggleClass("highlight", score <= -0.35);
    };
} //end main fx

function calcBSA(ht, wt) {
    if (isNaN(ht)) {
        return 0.1 * Math.pow(wt, (2 / 3));
    }
    else {
        return 0.007184 * Math.pow(ht, 0.725) * Math.pow(wt, 0.425);

    }
} //end calcBSA fx
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