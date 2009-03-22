//global arrays
    var mean = new Array;
    var upper = new Array;
    var lower = new Array;
    var twosd = new Array;
    var threesd = new Array;
for (var i = 0.1; i <= 2.2; i += .01) {
            mean.push([i, 10 * (0.31747 * Math.pow(i, 0.36008) - 0.02887)]);
            upper.push([i, 10 * (0.31747 * Math.pow(i, 0.36008) - 0.02887) + 16.5 * (0.03040 + (0.01514 * i))]);
            lower.push([i, 10 * (0.31747 * Math.pow(i, 0.36008) - 0.02887) - 16.5 * (0.03040 + (0.01514 * i))]);
            twosd.push([i, 10 * (0.31747 * Math.pow(i, 0.36008) - 0.02887) + 20 * (0.03040 + (0.01514 * i))]);
            threesd.push([i, 10 * (0.31747 * Math.pow(i, 0.36008) - 0.02887) + 30 * (0.03040 + (0.01514 * i))]);
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
    var lmca = new Array;
    var bsa = new Array;
    var lmcaData = new Array;

    //empty the local arrays
    lmca.length = 0;
    bsa.length = 0;
    lmcaData.length = 0;
    //loop to get the data
    for (i = 0; i <= numScores; i++) {
        lmca[i] = parseFloat(document.getElementById("lmca" + i).value);
        bsa[i] = document.getElementById("bsa" + i).innerHTML;
    } // end for loop

    //build the data array- contains x,y pairs to be graphed
    for (i = 0; i <= numScores; i++) {
        lmcaData[i] = [bsa[i], lmca[i]]
    
    }//end for loop
    
    $(function() {

        $.plot($("#placeholder"), [
        //first data series object
        {
            data: lmcaData,
        color: '#333333',
        label: 'LMCA, mm',
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