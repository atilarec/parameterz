﻿function calculateLVM() {
    //set up variables/arrays data from published table
    var lambdaArray = new Array(0.261254, 0.258986, 0.254448, 0.249902, 0.245348, 0.240786, 0.236218, 0.231648, 0.227075, 0.222501, 0.217927, 0.213354, 0.208779, 0.204195, 0.199591, 0.194952, 0.190264, 0.185513, 0.180684, 0.175771, 0.170774, 0.165698, 0.160549, 0.155323, 0.150019, 0.144644, 0.139212, 0.133727, 0.128199, 0.122631, 0.117026, 0.111387, 0.105722, 0.100036, 0.0943, 0.0886, 0.0829, 0.0772, 0.0714, 0.0656, 0.0599, 0.0541, 0.0483, 0.0425, 0.0366, 0.030784, 0.0249, 0.019077, 0.0132, 0.00732, 0.00141, -0.00451, -0.0104, -0.01641, -0.0224, -0.0284, -0.0345, -0.0405, -0.0467, -0.0529, -0.0591, -0.0654, -0.0718, -0.0783, -0.08483, -0.09147, -0.09822, -0.10506, -0.11203, -0.11911, -0.12633, -0.13368, -0.14116, -0.14879, -0.15657, -0.16451, -0.17259, -0.18083, -0.18923, -0.19779, -0.20651, -0.21539, -0.22443, -0.23364, -0.24303, -0.25259, -0.26233, -0.27224, -0.28234, -0.29261, -0.30306, -0.31368, -0.32447, -0.33544, -0.34658, -0.35787, -0.36933, -0.38093, -0.39268, -0.40457, -0.41661, -0.42877, -0.44107, -0.4535, -0.46605, -0.47872, -0.49152, -0.50444, -0.51747, -0.53062, -0.54389, -0.55726, -0.57074, -0.58432, -0.59798, -0.61173, -0.62556, -0.63945, -0.6534, -0.66741, -0.68147, -0.69558, -0.70973, -0.72392, -0.73814, -0.7524, -0.76667, -0.78097, -0.79529, -0.80962, -0.82396, -0.83831, -0.85266, -0.86703, -0.8814, -0.89578, -0.91016, -0.92455, -0.93894, -0.95334, -0.96774, -0.98215, -0.99655, -1.01096, -1.02536);
    var muArray = new Array(11.34566, 11.63413, 12.21147, 12.78999, 13.36976, 13.9508, 14.5327, 15.11491, 15.69732, 16.27968, 16.86186, 17.44364, 18.02536, 18.60813, 19.19364, 19.78411, 20.3818, 20.98909, 21.60829, 22.24043, 22.88553, 23.54292, 24.21185, 24.89288, 25.58613, 26.29073, 27.00431, 27.72582, 28.45382, 29.18755, 29.92662, 30.67021, 31.41724, 32.16656, 32.91732, 33.66879, 34.42044, 35.17218, 35.92416, 36.67657, 37.42941, 38.18268, 38.93634, 39.68972, 40.44245, 41.19418, 41.94491, 42.69462, 43.44349, 44.19156, 44.93907, 45.68615, 46.43288, 47.17943, 47.92592, 48.67273, 49.42077, 50.17117, 50.92488, 51.68263, 52.44502, 53.21351, 53.98868, 54.77184, 55.564, 56.36608, 57.17921, 58.00458, 58.84351, 59.69722, 60.56714, 61.4543, 62.35979, 63.28413, 64.22863, 65.19349, 66.1794, 67.18694, 68.21635, 69.26768, 70.34142, 71.43801, 72.55832, 73.70374, 74.87627, 76.07749, 77.3086, 78.5706, 79.8646, 81.19117, 82.55081, 83.94411, 85.37162, 86.83343, 88.32863, 89.85613, 91.41457, 93.00259, 94.61938, 96.26445, 97.93725, 99.63726, 101.3643, 103.1185, 104.9003, 106.7104, 108.5509, 110.424, 112.3314, 114.2748, 116.2553, 118.274, 120.3305, 122.4227, 124.5476, 126.7027, 128.8849, 131.0918, 133.3214, 135.572, 137.8425, 140.1322, 142.4401, 144.7655, 147.1068, 149.4619, 151.8295, 154.2079, 156.595, 158.989, 161.389, 163.7942, 166.2038, 168.6179, 171.0371, 173.4621, 175.8924, 178.3274, 180.7666, 183.2098, 185.6562, 188.1056, 190.5575, 193.0109, 195.4649);
    var sigmaArray = new Array(0.186716, 0.186724, 0.18674, 0.186757, 0.186773, 0.186789, 0.186806, 0.186822, 0.186839, 0.186855, 0.186871, 0.186888, 0.186904, 0.186921, 0.186938, 0.186954, 0.186971, 0.186988, 0.187006, 0.187024, 0.187042, 0.187061, 0.187079, 0.187099, 0.187118, 0.187138, 0.187158, 0.187179, 0.187199, 0.18722, 0.187241, 0.187263, 0.187284, 0.187306, 0.187328, 0.187351, 0.187373, 0.187396, 0.187419, 0.187442, 0.187465, 0.187489, 0.187513, 0.187537, 0.187561, 0.187586, 0.187611, 0.187636, 0.187662, 0.187687, 0.187714, 0.18774, 0.187767, 0.187794, 0.187822, 0.18785, 0.187878, 0.187907, 0.187937, 0.187967, 0.187997, 0.188029, 0.188061, 0.188094, 0.188128, 0.188162, 0.188198, 0.188234, 0.188272, 0.18831, 0.18835, 0.188391, 0.188434, 0.188478, 0.188523, 0.18857, 0.188618, 0.188668, 0.188719, 0.188772, 0.188827, 0.188884, 0.188942, 0.189002, 0.189065, 0.189129, 0.189195, 0.189263, 0.189334, 0.189407, 0.189482, 0.189559, 0.189639, 0.18972, 0.189805, 0.189891, 0.18998, 0.190071, 0.190164, 0.190259, 0.190357, 0.190457, 0.190559, 0.190663, 0.190769, 0.190877, 0.190987, 0.191099, 0.191213, 0.191329, 0.191447, 0.191566, 0.191688, 0.191811, 0.191936, 0.192062, 0.19219, 0.19232, 0.19245, 0.192583, 0.192716, 0.19285, 0.192986, 0.193122, 0.193259, 0.193398, 0.193537, 0.193676, 0.193817, 0.193957, 0.194099, 0.19424, 0.194382, 0.194524, 0.194667, 0.194809, 0.194952, 0.195095, 0.195238, 0.195381, 0.195525, 0.195668, 0.195811, 0.195955, 0.196098);
    var ht = parseFloat(document.getElementById("txtHeight").value);
    var lvmass = parseFloat(document.getElementById("txtLVMass").value);
    //make sure the height is within range
    if (ht < 47 || ht > 191 || isNaN(ht)) {
        document.getElementById("info").innerHTML = "Height out of range!<br/>Height must be between 47 and 191 cm";
        document.getElementById("info").className = "info";
    }
    //make sure there is something in the LVMass input
    else if (isNaN(lvmass)) {
        document.getElementById("info").innerHTML = "LV Mass is not a number...";
        document.getElementById("info").className = "info";
    } 

    else {
        //find the index ht
        var index = gimmieIndex(Math.round(ht));
        //lookup the L,M,S values from the array, using the index
        var lambda = lambdaArray[index];
        var mu = muArray[index];
        var sigma = sigmaArray[index];
        //plug'em in to the formula
        var zscore = (Math.pow((lvmass / mu), lambda) - 1) / (lambda * sigma);
        //write the results
        document.getElementById("zscore").value = zscore.toFixed(2);
        document.getElementById("zscore").className = [ZscoreFlag(zscore)];
        var lower = -1.65; //z-score for the 5th percentile
        lower = lower * lambda * sigma;
        lower = lower + 1;
        lower = Math.pow(lower, (1 / lambda)) * mu;
        var upper = 1.65; //z-score for the 95th percentile
        upper = upper * lambda * sigma;
        upper = upper + 1;
        upper = Math.pow(upper, (1 / lambda)) * mu;
        document.getElementById("range").value = lower.toFixed(2) + " - " + upper.toFixed(2);
        document.getElementById("mean").value = mu.toFixed(2);
        document.getElementById("info").innerHTML = "";
    }

}//end calculateLVM function

function gimmieIndex(ht) {
    //this finds the matching height in the array, and passes it back to the referring fx
    // SPECIAL NOTE:
    //I rounded DOWN the published first value of "47.5"- to "47"... this was
    //the only decimal fraction in the array; by rounding it down ALL the array values are integers
    //rounding it up would have resulted in conflicting data for the 48cm heights...
    var height = new Array(47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191); 
    var index = 0;
    for (index = 0; index < height.length; index++) {
        if (ht === height[index]) { 
            return index; //exact match
        }
    }//end for loop
}//end GimmieIndex function
function ZscoreFlag(zScore) {
    if (zScore >= 1.65 && zScore < 1.96 || zScore > -1.96 && zScore <= -1.65) {
        return "borderline";
    }
    else if (zScore >= 1.96 && zScore < 3 || zScore > -3 && zScore <= -1.96) {
        return "mild";
    }
    else if (zScore >= 3 && zScore < 4 || zScore > -4 && zScore <= -3) {
        return "moderate";
    }
    else if (zScore >= 4 || zScore <= -4) {
        return "severe";
    }
    else {
        return "normal";
    }
}//end ZscoreFlag function
function ResetZscoreCSS() {
    //find the element that has the name 'zscore' and set the css to 'empty'
    document.getElementById("zscore").className = "results";

}//end CSS reset fx


//Copyright (c) 2008: Dan Dyar

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