var CAS_APP = {
    echo: {
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
        lvlax: Number,
        heartlax: Number,
        LAR: function() {
            return this.lvlax / this.heartlax;
        },
        aortic: {
            score: Number,
            zscore: function() {
                return (this.score - (1.55 * Math.pow(CAS_APP.echo.bsa(), 0.5))) / (0.06 + 0.083 * CAS_APP.echo.bsa());

            }
        },
        efe: "",
        discriminantScore: function() {
            if (this.efe === 'false') {
                //If EFE is omitted from the analysis (owing to high
                //interobserver variability in grading), the most accurate
                //model for predicting survival with a biventricular circulation
                //is: 12.16 (BSA) + 0.59 (aortic valve annulus z-score) + 5.73 (LAR) - 7.02,
                return 12.16 * this.bsa() + 0.59 * this.aortic.zscore() + 5.73 * this.LAR() - 7.02;
            }
            if(this.efe === '2' || this.efe === '3') {
                //10.98 (BSA) + 0.56 (aortic valve annulus
                //z-score) + 5.89 (LAR) - 0.79 (presence of grade 2 or 3
                //EFE) - 6.78.                
                    return 10.98 * this.bsa() + 0.56 * this.aortic.zscore() + 5.89 * this.LAR() - 0.79 - 6.78;
                }
             if (this.efe === '0' || this.efe === '1') {
                    return 10.98 * this.bsa() + 0.56 * this.aortic.zscore() + 5.89 * this.LAR() - 6.78;
                }
        }
    } //end echo object

}; //end CAS_APP object

function calcDiscriminant() {
    //gather data from inputs
    CAS_APP.echo.ht = parseFloat($('#ht').val());
    CAS_APP.echo.wt = parseFloat($('#wt').val());
    CAS_APP.echo.aortic.score = parseFloat($('#aov').val());
    CAS_APP.echo.lvlax = parseFloat($('#lvlax').val());
    CAS_APP.echo.heartlax = parseFloat($('#heartlax').val());
    CAS_APP.echo.efe = $('#efe').val();

    //write the calculations
    
    if (!isNaN(CAS_APP.echo.bsa())) {
        $('#bsa').html(CAS_APP.echo.bsa().toFixed(2));
    }
    
    if (!isNaN(CAS_APP.echo.aortic.zscore())) {
        $('#aovz').html(CAS_APP.echo.aortic.zscore().toFixed(2));
    }
    
    if (!isNaN(CAS_APP.echo.LAR())) {
        $('#lar').html(CAS_APP.echo.LAR().toFixed(2))
    }

    if (!isNaN(CAS_APP.echo.discriminantScore())) {
        $('#results').html(CAS_APP.echo.discriminantScore().toFixed(2));
    }

    //format the results
    if (CAS_APP.echo.efe === 'false') {
        if (CAS_APP.echo.discriminantScore() <= -0.46) {
            $('#cutoff, #results').effect("highlight", { color: "#E1817B" }, 4000);

        }
    }
    if (CAS_APP.echo.efe !== 'false') {
        if (CAS_APP.echo.discriminantScore() <= -0.65) {
            $('#efeCutoff, #results').effect("highlight", { color: "#E1817B" }, 4000);

        }
    }
} //end calcDiscriminant fx

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
