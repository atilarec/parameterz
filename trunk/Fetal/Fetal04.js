var fetal = {
    "ega": 18,
    "lmp": function() {
        //setup variables for dates: today, LMP, and EDD
        //initially, they will ALL be set to TODAY
        var dtToday = new Date();
        var dtLMP = new Date();
        var dtEDD = new Date();

        //and set today to noon
        dtToday.setHours(12, 0, 0, 0);

        //parse the input into an integer value
        var EGAw = fetal.ega;
        //find the decimal remainder if any
        var EGAd = parseFloat(fetal.ega - EGAw); //this is the 'decimal fraction' i.e., days

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
        var EGAw = fetal.ega;
        //find the decimal remainder if any
        var EGAd = parseFloat(fetal.ega - EGAw); //this is the 'decimal fraction' i.e., days

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
    "mitral": {
        "intercept": -4.084,
        "multiplier": 1.173,
        "rmse": 0.1315,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "tricuspid": {
        "intercept": -4.766,
        "multiplier": 1.395,
        "rmse": 0.1394,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "aortic": {
        "intercept": -5.019,
        "multiplier": 1.263,
        "rmse": 0.1282,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "pulmonary": {
        "intercept": -5.114,
        "multiplier": 1.352,
        "rmse": 0.1208,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "aao": {
        "intercept": -4.886,
        "multiplier": 1.261,
        "rmse": 0.1330,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "mpa": {
        "intercept": -5.025,
        "multiplier": 1.347,
        "rmse": 0.1570,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "rvminor": {
        "intercept": -4.455,
        "multiplier": 1.363,
        "rmse": 0.1442,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "rvmajor": {
        "intercept": -3.566,
        "multiplier": 1.277,
        "rmse": 0.1658,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "lvminor": {
        "intercept": -4.292,
        "multiplier": 1.298,
        "rmse": 0.1560,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "lvmajor": {
        "intercept": -3.231,
        "multiplier": 1.193,
        "rmse": 0.1376,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "mpa": {
        "intercept": -5.025,
        "multiplier": 1.347,
        "rmse": 0.1570,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "rpa": {
        "intercept": -5.307,
        "multiplier": 1.230,
        "rmse": 0.1802,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "lpa": {
        "intercept": -5.390,
        "multiplier": 1.231,
        "rmse": 0.1966,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "isthmus": {
        "intercept": -2.489,
        "multiplier": 1.109,
        "rmse": 0.182,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "isthmus3": {
        "intercept": -2.822,
        "multiplier": 1.224,
        "rmse": 0.164,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "ductus": {
        "intercept": -3.359,
        "multiplier": 1.396,
        "rmse": 0.176,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "dao": {
        "intercept": -5.365,
        "multiplier": 1.360,
        "rmse": 0.1216,
        "zscore": function(score) {
            return fetal.getZScore(this, score).toFixed(2);
        },
        "valueOf": function(zscore) {
            return fetal.getMeasurement(this, zscore).toFixed(2);
        }
    },
    "getZScore": function(site, score) {
        var predicted = site.multiplier * Math.log(fetal.ega) + site.intercept;
        return (Math.log(score) - predicted) / site.rmse;
    },
    "getMeasurement": function(site, zscore) {
        var predicted = site.multiplier * Math.log(fetal.ega) + site.intercept;
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
