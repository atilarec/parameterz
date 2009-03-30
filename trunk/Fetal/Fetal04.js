var fetal = {
    "ega": 18,
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
    "rv minor": {
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
    "rv major": {
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
    "lv minor": {
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
    "lv major": {
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
    "getZScore": function(site, score) {
        var predicted = site.multiplier * Math.log(fetal.ega) + site.intercept;
        return (Math.log(score) - predicted) / site.rmse;
    },
    "getMeasurement": function(site, zscore) {
        var predicted = site.multiplier * Math.log(fetal.ega) + site.intercept;
        return Math.exp(predicted + (zscore * site.rmse));
    }
};

