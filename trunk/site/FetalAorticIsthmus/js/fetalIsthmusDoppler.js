function IsthmusDoppler(ega) {
    this.ega = ega;
    this.psvMean = function() { return -47.8 + (6.79 * ega) + (-0.002 * Math.pow(ega, 3)); };
    this.psvSD = function() { return 5.9302; };
    this.psvZ = function(score) { return (score - this.psvMean()) / this.psvSD(); };
    this.psvRange = function(z) { return (z * this.psvSD()) + this.psvMean(); };
    this.edvMean = function() { return 7.73 + (0.03 * ega); };
    this.edvSD = function() { return 5.79; };
    this.edvZ = function(score) { return (score - this.edvMean()) / this.edvSD(); };
    this.edvRange = function(z) { return z * this.edvSD() + this.edvMean(); };
    this.tamxvMean = function() { return -16.23 + (2.40 * ega) + (-0.0007 * Math.pow(ega, 3)); };
    this.tamxvSD = function() { return 2.6812; };
    this.tamxvZ = function(score) { return (score - this.tamxvMean()) / this.tamxvSD(); };
    this.tamxvRange = function(z) { return (z * this.tamxvSD()) + this.tamxvMean(); };
    this.piMean = function() { return 2.2562 + (0.0154 * ega); };
    this.piSD = function() { return 0.014199 + (0.011635 * ega); };
    this.piZ = function(score) { return (score - this.piMean()) / this.piSD(); };
    this.riMean = function() { return 0.8984 + (0.0007 * ega); };
    this.riZ = function(score) { return (score - this.riMean()) / 0.019298; };
}
function updateResults() {
    var ega = +($('#ega').val());
    var isth = new IsthmusDoppler(ega);
    var psv = parseFloat($('#psv').val());
    var edv = parseFloat($('#edv').val());
    var tamxv = parseFloat($('#tamxv').val());
    var pi, ri, min, max;
    var all = 'normal borderline mild moderate severe';

    if (!isNaN(psv)) {
        var z = isth.psvZ(psv);
        $('#psv-z').text(z.toFixed(1))
            .removeClass(all)
            .addClass(zscoreFlag(z));
        min = isth.psvRange(-1.65);
        max = isth.psvRange(1.65);
        $('#psv-range').text("(" + min.toFixed(1) + ", " + isth.psvMean().toFixed(1) + ", " + max.toFixed(1) + ")");        
    }

    if (!isNaN(edv)) {
        var z = isth.edvZ(edv);
        $('#edv-z').text(z.toFixed(1))
            .removeClass(all)
            .addClass(zscoreFlag(z));
        min = isth.edvRange(-1.65);
        max = isth.edvRange(1.65);
        $('#edv-range').text("(" + min.toFixed(1) + ", " + isth.edvMean().toFixed(1) + ", " + max.toFixed(1) + ")");
    }
    
    if (!isNaN(tamxv)) {
        var z = isth.tamxvZ(tamxv);
        $('#tamxv-z').text(z.toFixed(1))
            .removeClass(all)
            .addClass(zscoreFlag(z));
        min = isth.tamxvRange(-1.65);
        max = isth.tamxvRange(1.65);
        $('#tamxv-range').text("(" + min.toFixed(1) + ", " + isth.tamxvMean().toFixed(1) + ", " + max.toFixed(1) + ")");
    }
    if (!isNaN(psv) && !isNaN(edv) && !isNaN(tamxv)) {
        pi = (psv - edv) / tamxv;
        ri = (psv - edv) / psv;
        //update results
        $('#pi').text(pi.toFixed(2));
        $('#ri').text(ri.toFixed(2));
        var z1 = isth.piZ(pi);
        $('#pi-z').text(z1.toFixed(1))
            .removeClass(all)
            .addClass(zscoreFlag(z1));
        var z2 = isth.riZ(ri);
        $('#ri-z').text(z2.toFixed(1))
            .removeClass(all)
            .addClass(zscoreFlag(z2));
    }

}

function resetFx() {
    $('.results').text('').removeClass('normal borderline mild moderate severe');
}

