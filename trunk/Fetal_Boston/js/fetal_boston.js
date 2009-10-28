/*
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



function CalculateZScore(value, label) {
    var score = parseFloat(value);
    var ega = $('#txtEGA').val();
    var mean = '#' + label + 'Mean';
    var range = '#' + label + 'Range';
    var z = '#' + label + 'Z';
    if (!isNaN(score)) {
        var h = new fb(ega);
        var zscore = h[label].zscore(score);
        $(mean).text(h[label].mean().toFixed(2));
        $(z).text(zscore.toFixed(2));
        $(z).removeClass('normal mild moderate severe')
            .addClass(ZscoreFlag(zscore))
            .attr('title', calcPercentile(zscore));
        var lower = h[label].limit(-1.65).toFixed(2);
        var upper = h[label].limit(1.65).toFixed(2);
        $(range).text(lower + ' - ' + upper)
        
    } //end if
    else {
        $(mean + ',' + range + ',' + z).text('')
        .removeClass('normal mild moderate severe')
        .attr('title', '');
        return false;
    } // bail out
}