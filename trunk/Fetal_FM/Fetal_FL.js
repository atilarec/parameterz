var fetal = {
    "fl": 0,
    "ega": function() {
        //AU: D. G. Altman, L. S. Chitty
        //TI: New charts for ultrasound dating of pregnancy
        //SO: Ultrasound in Obstetrics and Gynecology
        //VL: 10
        //NO: 3
        //PG: 174-191
        //YR: 1997
        var fl = 10 * fetal.fl;
        return Math.exp(0.034375 * fl - 0.0037254 * fl * Math.log(fl) + 2.306);
    },
    "lmp": function() {
        //setup variables for dates: today, LMP, and EDD
        //initially, they will ALL be set to TODAY
        var dtToday = new Date();
        var dtLMP = new Date();
        var dtEDD = new Date();

        //and set today to noon
        dtToday.setHours(12, 0, 0, 0);

        //get the integer value
        var EGAw = Math.floor(fetal.ega());
        //find the decimal remainder if any
        var EGAd = fetal.ega() - EGAw; //this is the 'decimal fraction' i.e., days

        //convert the EGA weeks into milliseconds
        EGAw = EGAw * 7; //weeks into days
        EGAw = EGAw * 24; //hours per day
        EGAw = EGAw * 60; //minutes per hr
        EGAw = EGAw * 60; //secs per minute
        EGAw = EGAw * 1000; //msec per sec

        EGAd = 7 * EGAd; // get the number of days
        ////convert the days to msec
        EGAd = EGAd * 24 * 60 * 60 * 1000;

        //add the two togeter
        var EGA = EGAw + EGAd;

        //subtract the EGA from today for LMP
        dtLMP.setTime(dtToday.getTime() - EGA);
        return dtLMP.toDateString();
    },
    "edd": function() {
        var gestation = new Number
        var dtToday = new Date();
        //and set today to noon
        dtToday.setHours(12, 0, 0, 0);

        //set up the 40 week gestation in ms to get the remaining time of the gestation
        gestation = 40 * 7 * 24 * 60 * 60 * 1000;
        //parse the input into an integer value
        var EGAw = fetal.ega();
        //find the decimal remainder if any
        var EGAd = parseFloat(fetal.ega() - EGAw); //this is the 'decimal fraction' i.e., days

        //convert the EGA weeks into milliseconds
        EGAw = EGAw * 7; //weeks into days
        EGAw = EGAw * 24; //hours per day
        EGAw = EGAw * 60; //minutes per hr
        EGAw = EGAw * 60; //secs per minute
        EGAw = EGAw * 1000; //msec per sec

        EGAd = 7 * EGAd; // get the number of days
        ////convert the days to msec
        EGAd = EGAd * 24 * 60 * 60 * 1000;

        //add the two togeter
        var EGA = EGAw + EGAd;
        //the EDD is today plus the difference between a 40 week gestation and the time already passed (EGA)
        var remainingTime = new Number
        remainingTime = gestation - EGA;
        var dtEDD = new Date;
        dtEDD.setTime(dtToday.getTime() + remainingTime);
        return dtEDD.toDateString();
    },
    "MV": {
        "intercept": -1.550,
        "multiplier": 0.8473,
        "rmse": 0.1202,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "TV": {
        "intercept": -1.735,
        "multiplier": 0.9937,
        "rmse": 0.1386,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "AOV": {
        "intercept": -2.274,
        "multiplier": 0.8972,
        "rmse": 0.1103,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "PV": {
        "intercept": -2.148,
        "multiplier": 0.9437,
        "rmse": 0.1110,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "AAO": {
        "intercept": -2.141,
        "multiplier": 0.8968,
        "rmse": 0.1225,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "MPA": {
        "intercept": -2.072,
        "multiplier": 0.9465,
        "rmse": 0.1645,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "RV1": {
        "intercept": -1.485,
        "multiplier": 0.9625,
        "rmse": 0.1435,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "RV2": {
        "intercept": -0.8249,
        "multiplier": 0.9305,
        "rmse": 0.1520,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "LV1": {
        "intercept": -1.516,
        "multiplier": 0.9554,
        "rmse": 0.1403,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "LV2": {
        "intercept": -0.6751,
        "multiplier": 0.8772,
        "rmse": 0.1216,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "MPA": {
        "intercept": -2.072,
        "multiplier": 0.9465,
        "rmse": 0.1645,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "RPA": {
        "intercept": -2.623,
        "multiplier": 0.8685,
        "rmse": 0.1780,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "LPA": {
        "intercept": -2.785,
        "multiplier": 0.9219,
        "rmse": 0.1935,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "Isthmus": {
        "intercept": -2.261,
        "multiplier": 0.879,
        "rmse": 0.181,
        "zscore": function(score) {
            return fetal.getArchZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getArchMeasurement(this, zscore).toFixed(2);
        }
    },
    "Isthmus3": {
        "intercept": -2.560,
        "multiplier": 0.967,
        "rmse": 0.163,
        "zscore": function(score) {
            return fetal.getArchZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getArchMeasurement(this, zscore).toFixed(2);
        }
    },
    "Duct3": {
        "intercept": -3.009,
        "multiplier": 1.090,
        "rmse": 0.179,
        "zscore": function(score) {
            return fetal.getArchZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getArchMeasurement(this, zscore).toFixed(2);
        }
    },
    "DAO": {
        "intercept": -2.368,
        "multiplier": 0.9415,
        "rmse": 0.1224,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "getZScore": function(site, score) {
        var predicted = site.multiplier * Math.log(fetal.fl) + site.intercept;
        return (Math.log(score) - predicted) / site.rmse;
    },
    "getMeasurement": function(site, zscore) {
        var predicted = site.multiplier * Math.log(fetal.fl) + site.intercept;
        return Math.exp(predicted + (zscore * site.rmse));
    },
    "getArchZScore": function(site, score) {
        var predicted = site.multiplier * Math.log(fetal.fl * 10) + site.intercept;
        return (Math.log(score) - predicted) / site.rmse;
    },
    "getArchMeasurement": function(site, zscore) {
        var predicted = site.multiplier * Math.log(fetal.fl * 10) + site.intercept;
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
