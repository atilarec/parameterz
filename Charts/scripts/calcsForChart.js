var myEcho = {
    calcRCA: {
        mean: function(bsa) { return 0.26117 * Math.pow(bsa, 0.39992) - 0.02756 },
        sd: function(bsa) { return 0.02407 + (0.01597 * bsa) }
    },
    calcLMCA: {
        mean: function(bsa) { return 0.31747 * Math.pow(bsa, 0.36008) - 0.02887 },
        sd: function(bsa) { return 0.03040 + (0.01514 * bsa) }
    },
    calcLAD: {
        mean: function(bsa) { return 0.26108 * Math.pow(bsa, 0.37893) - 0.02852 },
        sd: function(bsa) { return 0.01465 + (0.01996 * bsa) }
    }
}
function updateRow(index, site) {
    //first get row data
    var ht = parseFloat(document.getElementById('ht' + [index]).value);
    var wt = parseFloat(document.getElementById('wt' + [index]).value);
    if (isNaN(wt)) { return };//bail out if wt does not exist
    var score = parseFloat(document.getElementById([site] + [index]).value);
    var bsa = calcBSA(ht, wt);
    var zscore = calcZ(bsa, site, score);
    document.getElementById('bsa' + [index]).innerHTML = bsa.toFixed(2);
    document.getElementById([site] + 'Z' + [index]).innerHTML = zscore.toFixed(2);
} //end updateRow fx

function calcBSA(height, weight) {
        if (!isNaN(height) && !isNaN(weight)) {
        return 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378);
    }
    else if (isNaN(height) && !isNaN(weight)) {
        return 0.1 * Math.pow(weight, 0.6667);
    }

} //end calcBSA fx

function calcZ(bsa, site, score) {
    //define the correct method
    switch (site) {
        case 'rca':
            var method = myEcho.calcRCA;
            break;
        case 'lad':
            var method = myEcho.calcLAD;
            break;
        case 'lmca':
            var method = myEcho.calcLMCA;
            break;
            
    }
    
    //correct the score to 'cm'
    score /= 10;

    //calculate the z-score 
    
    return (score - method.mean(bsa)) / method.sd(bsa)
    
    
    
}//end calcZ fx

function flotTest(numScores, site) {
    var mean = new Array;
    var upper = new Array;
    var lower = new Array;
    var twosd = new Array;
    var threesd = new Array;

    switch (site) {//accesses the global object 'myEcho' from calcsForChart.js 
        case 'rca':
            var method = myEcho.calcRCA;
            break;
        case 'lad':
            var method = myEcho.calcLAD;
            break;
        case 'lmca':
            var method = myEcho.calcLMCA;
            break;

    }
    for (var i = 0.1; i <= 2.2; i += .01) {
        mean.push([i, 10 * method.mean(i)]);
        upper.push([i, 10 * (method.mean(i) + 1.65 * method.sd(i))]);
        lower.push([i, 10 * (method.mean(i) - 1.65 * method.sd(i))]);
        twosd.push([i, 10 * (method.mean(i) + 2 * method.sd(i))]);
        threesd.push([i, 10 * (method.mean(i) + 3 * method.sd(i))]);
    } //setup local arrays
    var coronary = new Array;
    var bsa = new Array;
    var plotData = new Array;

    //empty the local arrays
    coronary.length = 0;
    bsa.length = 0;
    plotData.length = 0;
    //loop to get the data
    for (i = 0; i <= numScores; i++) {
        coronary[i] = parseFloat(document.getElementById([site] + i).value);
        bsa[i] = document.getElementById("bsa" + i).innerHTML;
    } // end for loop

    //build the data array- contains x,y pairs to be graphed
    for (i = 0; i <= numScores; i++) {
        plotData[i] = [bsa[i], coronary[i]]

    } //end for loop

    $(function() {

        $.plot($("#placeholder"), [
        //first data series object
        {
        data: plotData,
        color: '#333333',
        label: site.toUpperCase() + ', mm',
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
} // end flotTest fx