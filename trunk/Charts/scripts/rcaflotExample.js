//global arrays
    var mean = new Array;
    var upper = new Array;
    var lower = new Array;
    var twosd = new Array;
    var threesd = new Array;
    for (var i = 0.1; i <= 2.2; i += .01) {
        var caMean = (0.26117 * Math.pow(i, 0.39992)) - 0.02756;
        var caSD = 0.02407 + (0.01597 * i);
        mean.push([i, 10 * (caMean)]);
        upper.push([i, 10 * (caMean) + 16.5 * (caSD)]);
        lower.push([i, 10 * (caMean) - 16.5 * (caSD)]);
        twosd.push([i, 10 * (caMean) + 20 * (caSD)]);
        threesd.push([i, 10 * (caMean) + 30 * (caSD)]);
        }
Array.prototype.max = function() {
    var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] > max) max = this[i];
    return max;
}
Array.prototype.min = function() {
    var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++) if (this[i] < min) min = this[i];
    return min;
}

function flotTest(numScores) {
//setup local arrays
    var rca = new Array;
    var bsa = new Array;
    var rcaData = new Array;

    //empty the local arrays
    rca.length = 0;
    bsa.length = 0;
    rcaData.length = 0;
    //loop to get the data
    for (i = 0; i <= numScores; i++) {
        rca[i] = parseFloat(document.getElementById("rca" + i).value);
        bsa[i] = document.getElementById("bsa" + i).innerHTML;
    } // end for loop

    //build the data array- contains x,y pairs to be graphed
    for (i = 0; i <= numScores; i++) {
        rcaData[i] = [bsa[i], rca[i]]
    
    }//end for loop
    
    $(function() {

        $.plot($("#placeholder"), [
        //first data series object
        {
            data: rcaData,
        color: '#333333',
        label: 'RCA, mm',
        lines: { show: false },
        points: { show: true }
        }, 

    // plus three sd's
    {
    label: "+3 SD's",
    data: threesd
    },
// plus two sd's
    {
    label: "+2 SD's",
    data: twosd
    },
//plus 1.65 sd's
    {
    label: "+1.65 SD's",
    data: upper
    },

//last data series object, mean (z=0)
{
data: mean,
label: 'Mean'
}
],
//options

    {
    shadowSize: 0
});
});
}// end flotTest fx