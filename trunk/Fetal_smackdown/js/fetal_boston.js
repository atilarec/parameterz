﻿/*
From:
Predictors of Technical Success and Postnatal Biventricular Outcome
After In Utero Aortic Valvuloplasty for Aortic Stenosis With 
Evolving Hypoplastic Left Heart Syndrome.

Circulation. 2009;120:1482-1490
Published online before print September 28, 2009, doi: 10.1161/CIRCULATIONAHA.109.848994

Aortic annulus diameter (cm)
Mean = (0.02415 x GA) - 0.17158
SD = (0.00206 x GA) - 0.00519
Ascending aortic diameter (cm)
Mean = (0.02413 x GA) - 0.12588
SD = (0.00205 x GA) + 0.00587
LV long-axis dimension (cm)
Mean = (0.09541 x GA) - 0.55304
SD = (0.01149 x GA) - 0.06876
LV short -axis dimension (cm)
Mean = (0.05981 x GA) - 0.51997
SD = (0.00784 x GA) - 0.06281
MV annulus diameter (cm)
Mean = (0.03482 x GA) - 0.21035
SD = (0.00222 x GA) + 0.01698
RV long-axis dimension (cm)
Mean = (0.09512 x GA) - 0.68831
SD = (0.00890 x GA) - 0.01642
*/
function fb(ega) {
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
