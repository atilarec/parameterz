function frb(ega) {
    this.ega = parseFloat(ega);
    this.mv = {
        "intercept": -4.084,
        "multiplier": 1.173,
        "rmse": 0.1315,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
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
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
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
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
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
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
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
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
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
            return fetal.getZScore(this, score).toFixed(2);
        },
        "limit": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        },
        "mean": function() {
            return Math.exp(this.multiplier * Math.log(ega) + this.intercept);
        }
    },
    this.getZScore = function(site, score) {
        var predicted = site.multiplier * Math.log(ega) + site.intercept;
        return (Math.log(score) - predicted) / site.rmse;
    },
    this.getMeasurement = function(site, zscore) {
        var predicted = site.multiplier * Math.log(ega) + site.intercept;
        return Math.exp(predicted + (zscore * site.rmse));
    }
};
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
