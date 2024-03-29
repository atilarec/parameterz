﻿var pz = {
    fetalLV: [],
    fetalRV: []
};
pz.fetalLV[15] = [1.1, 1.8, 2.1];//values are 10th, 50th(mean), 90th percentiles
pz.fetalLV[16] = [1.2, 1.9, 2.3];
pz.fetalLV[17] = [1.2, 2.0, 2.5];
pz.fetalLV[18] = [1.3, 2.1, 2.7];
pz.fetalLV[19] = [1.4, 2.2, 2.9];
pz.fetalLV[20] = [1.5, 2.4, 3.0];
pz.fetalLV[21] = [1.6, 2.5, 3.2];
pz.fetalLV[22] = [1.7, 2.6, 3.4];
pz.fetalLV[23] = [1.8, 2.7, 3.6];
pz.fetalLV[24] = [1.8, 2.8, 3.7];
pz.fetalLV[25] = [1.9, 2.9, 3.9];
pz.fetalLV[26] = [2.0, 3.0, 4.0];
pz.fetalLV[27] = [2.1, 3.1, 4.2];
pz.fetalLV[28] = [2.1, 3.2, 4.3];
pz.fetalLV[29] = [2.2, 3.3, 4.5];
pz.fetalLV[30] = [2.3, 3.4, 4.6];
pz.fetalLV[31] = [2.3, 3.5, 4.7];
pz.fetalLV[32] = [2.4, 3.6, 4.9];
pz.fetalLV[33] = [2.5, 3.7, 5.0];
pz.fetalLV[34] = [2.5, 3.7, 5.1];
pz.fetalLV[35] = [2.6, 3.8, 5.2];
pz.fetalLV[36] = [2.6, 3.9, 5.3];
pz.fetalLV[37] = [2.7, 4.0, 5.4];
pz.fetalLV[38] = [2.7, 4.1, 5.5];
pz.fetalLV[39] = [2.8, 4.2, 5.6];
pz.fetalLV[40] = [2.8, 4.2, 5.7];
pz.fetalLV[41] = [2.9, 4.3, 5.8];
pz.fetalLV[42] = [2.9, 4.4, 5.9];

pz.fetalRV[15] = [0.8, 1.7, 2.0];
pz.fetalRV[16] = [0.9, 1.7, 2.1];
pz.fetalRV[17] = [1.0, 1.8, 2.2];
pz.fetalRV[18] = [1.0, 1.8, 2.3];
pz.fetalRV[19] = [1.1, 1.9, 2.5];
pz.fetalRV[20] = [1.2, 1.9, 2.6];
pz.fetalRV[21] = [1.2, 2.0, 2.7];
pz.fetalRV[22] = [1.3, 2.1, 2.8];
pz.fetalRV[23] = [1.4, 2.1, 2.9];
pz.fetalRV[24] = [1.4, 2.2, 3.0];
pz.fetalRV[25] = [1.5, 2.3, 3.1];
pz.fetalRV[26] = [1.6, 2.3, 3.3];
pz.fetalRV[27] = [1.6, 2.4, 3.4];
pz.fetalRV[28] = [1.7, 2.5, 3.5];
pz.fetalRV[29] = [1.7, 2.6, 3.6];
pz.fetalRV[30] = [1.8, 2.6, 3.8];
pz.fetalRV[31] = [1.9, 2.7, 3.9];
pz.fetalRV[32] = [1.9, 2.8, 4.0];
pz.fetalRV[33] = [2.0, 2.9, 4.2];
pz.fetalRV[34] = [2.0, 3.0, 4.3];
pz.fetalRV[35] = [2.1, 3.1, 4.4];
pz.fetalRV[36] = [2.1, 3.2, 4.6];
pz.fetalRV[37] = [2.2, 3.3, 4.7];
pz.fetalRV[38] = [2.2, 3.4, 4.9];
pz.fetalRV[39] = [2.3, 3.5, 5.0];
pz.fetalRV[40] = [2.3, 3.6, 5.1];
pz.fetalRV[41] = [2.4, 3.7, 5.3];
pz.fetalRV[42] = [2.4, 3.8, 5.4];

pz.firpo = function(ega) {
    this.ega = ega;
    //these return the mean values from the published regression equations
    this.rvMean = function() {
        return (-0.1473 + 0.02045 * this.ega - 0.0002 * Math.pow(this.ega, 2));
    };
    this.ivsMean = function() {
        return (-0.1321 + 0.01927 * this.ega - 0.00018 * Math.pow(this.ega, 2));
    };
    this.lvMean = function() {
        return (-0.136 + 0.01967 * this.ega - 0.00019 * Math.pow(this.ega, 2));
    };
    //these are the published SEE's
    this.rvSEE = 0.0322;
    this.ivsSEE = 0.0356;
    this.lvSEE = 0.0305;
    //return the upper and lower limits (1.65 = 90% CI's)
    this._lower = function(mean, SEE) {
        return (mean - (1.65 * SEE));
    };
    this._upper = function(mean, SEE) {
        return (mean + (1.65 * SEE));
    };
    //internal arrays of min/mean/max values
    this._rvfw = [this._lower(this.rvMean(), this.rvSEE), this.rvMean(), this._upper(this.rvMean(), this.rvSEE)];
    this._ivs = [this._lower(this.ivsMean(), this.ivsSEE), this.ivsMean(), this._upper(this.ivsMean(), this.ivsSEE)];
    this._lvfw = [this._lower(this.lvMean(), this.lvSEE), this.lvMean(), this._upper(this.lvMean(), this.lvSEE)];
    //'public' methods to return data in >> millimeters <<
    this.rvfw = function() {
        var a = [];
        for (var x in this._rvfw) {
            a[x] = this._rvfw[x] * 10;
        }
        return a;
    };
    this.ivs = function() {
        var a = [];
        for (var x in this._ivs) {
            a[x] = this._ivs[x] * 10;
        }
        return a;
    };
    this.lvfw = function() {
        var a = [];
        for (var x in this._lvfw) {
            a[x] = this._lvfw[x] * 10;
        }
        return a;
    };
};


