﻿function calcCHSS() {
    var ht = parseFloat($('#ht').val());
    var wt = parseFloat($('#wt').val());
    var age = parseFloat($('#age').val());
    var aoroot = parseFloat($('#aorticroot').val());
    var efe = parseInt($('#efe').val());
    var aao = parseFloat($('#aao').val());
    var tr = parseInt($('#tr').val());
    var lvlax = parseFloat($('#lvlax').val());
    var bsa = calcBSA(ht, wt);

    //setup age variable
    age += 1;
    age = 1 / age; //'inverse of age +1d'

    //setup zscores, calcs
    var aorootz = calcAoRootZ(bsa, aoroot);
    var lvlaxz = calcLVLaxZ(bsa, lvlax);
    aao = Math.log(aao * 10);

    //write preliminary results
    if (!isNaN(bsa)) {
        $('#bsa').html(bsa.toFixed(2));
    }
    if (!isNaN(aorootz)) {
        $('#aorticrootz').html(aorootz.toFixed(2));
    }
    if (!isNaN(lvlaxz)) {
        $('#lvlaxz').html(lvlaxz.toFixed(2));
    }

    //      work the CHSS score calculation

//    Survival benefit = Intercept + b1 (age at entry)
//    + b2 (z-score of aortic valve at the sinuses) + b3
//    (grade of EFE) + b4 (ascending aorta diameter) + b5
//    (presence of moderate or severe tricuspid regurgitation) <<<<<<<< WTF
//    + b6 (z-score of the left ventricular length)

    //from the article, the table values are:
//    Intercept –86.47 (6.36)
//    Higher grade of endocardial fibroelastosis 12.14 (0.96) 
//    Lower z-score of aortic valve at the level of the sinuses of Valsalva –6.20 (0.25) 
//    Younger age at entry (d)† 30.55 (1.79) 
//    Larger ascending aorta diameter (mm)‡ 23.33 (2.24) 
//    Absence of moderate or severe tricuspid regurgitation –28.30 (2.60) <<<<<< WTF
    //    Lower z-score of the LV length –0.70 (0.22) 

    var intercept = -86.47;
    var b1 = 30.55;
    var b2 = -6.20;
    var b3 = 12.14;
    var b4 = 23.33;
    var b5 = -28.30;
    var b6 = -0.70;

    var CHSS_score = intercept + b1 * age + b2 * aorootz + b3 * efe + b4 * aao + b5 * tr + b6 * lvlaxz;
    if (!isNaN(CHSS_score)) {
        if (CHSS_score >= 0) {
            $('#results').html('+' + CHSS_score.toFixed(2));
            $('#norwood, #results').effect("highlight", { color: "#E1817B" }, 4000);
        }
        else {
            $('#results').html(CHSS_score.toFixed(2));
            $('#biv, #results').effect("highlight", { color: "#E1817B" }, 4000);
        }
    };
} //end main fx

function calcAoRootZ(bsa, aoroot) {
    var score = Math.log(aoroot);
    var mean = 0.7224 + 0.5082 * Math.log(bsa);
    return (score - mean) / 0.07284;

} //end AoRootZ fx

function calcLVLaxZ(bsa, lvlax) {
    var score = Math.log(lvlax);
    var mean = 1.893 + 0.4936 * Math.log(bsa);
    return (score - mean) / 0.09847;
    
} //end calcLVLaxZ fx

function calcBSA(ht, wt) {
    if (isNaN(ht)) {
        return 0.1 * Math.pow(wt, (2 / 3));
    }
    else {
        return 0.024265 * Math.pow(ht, 0.3964) * Math.pow(wt, 0.5378);

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