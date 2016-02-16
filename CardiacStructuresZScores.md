## Intro ##

[This z-score calculator](http://parameterz.blogspot.com/2008/09/z-scores-of-cardiac-structures.html) is based on the data published in the 2008 JASE article
> Regression Equations for Calculation of Z Scores of Cardiac Structures in a Large Cohort of Healthy Infants, Children, and Adolescents: An Echocardiographic Study. ([PubMed link](http://www.ncbi.nlm.nih.gov/pubmed/18406572))

In an effort to provide even more transparency into the manner in which the calculations are made, this summary is provided.


## About the Calculations ##

The published data has been fashioned into a series of JavaScript objects. Each "site" (i.e., LVIDd, aortic valve, etc.) has an associated label and data object. The site objects are collected together in yet another object, "sites":

```
var sites = {     
     'RVD': { label: 'RVD', data: { intercept: -0.317, b1: 1.85, b2: -1.274, b3: 0.335, mse: 0.058} },
     'IVSd': { label: 'IVSd', data: { intercept: -1.242, b1: 1.272, b2: -0.762, b3: 0.208, mse: 0.046 } },
     'IVSs': { label: 'IVSs', data: { intercept: -1.048, b1: 1.751, b2: -1.177, b3: 0.318, mse: 0.034 } },
     'LVIDd': { label: 'LVIDd', data: { intercept: 0.105, b1: 2.859, b2: -2.119, b3: 0.552, mse: 0.01 } },
     //etc. 
}; 
```

Two important functions make use of this data: mean() and zscore(). The mean() function is a generic function that accepts a data object and uses the intercept and beta multipliers to calculate the log transformed mean value. (the global variable
`bsa` is calculated by a [separate function](CalculatingBSA.md)):

```
function mean(data) {
    //returns: number
    //returns the log-transformed mean value, used in other calculations
    var intercept, b1, b2, b3;
    intercept = data.intercept;
    b1 = data.b1;
    b2 = data.b2;
    b3 = data.b3;
    return intercept + (b1 * bsa) + (b2 * Math.pow(bsa, 2)) + (b3 * Math.pow(bsa, 3));
}            
```

When data from an individual site is passed to this function, the returned mean value can be back-transformed (exponetiated) to provide the "natural" mean value. The log-transformed mean values is also specifically used in the calculation of the z-score, using the published equation:
> `z = ln(score) - mean / rmse`

```
function zscore(data, score) {
    //returns: number
    //returns the z score given a site and score
    var x, sd;
    x = mean(data);
    score = Math.log(score);
    sd = Math.sqrt(data.mse);
    return (score - x) / sd;
}     
```

(Note that z-score equations of this form treat the regression rmse as equal to—and interchangeable with—the population standard deviation.)

The upper and lower limit range values are calculated by re-arranging the z-score formula:
> `z = (score- mean) / sd`

and instead solves for a known z-score:
> `score = mean + z * sd`

The solving of these equations is handled by the range function:

```
function range(data) {
    //returns: string
    //returns a string in the format "(min - max)" given a zscore range (eg., +/- 1.65 sd)
    z = zlimit; //configured as a global variable
    var min, max, x, sd;
    x = mean(data);
    sd = Math.sqrt(data.mse);
    min = Math.exp((x - z * sd)).toFixed(2);
    max = Math.exp((x + z * sd)).toFixed(2);
    return '(' + min + ' - ' + max + ')';
}
```

By editing the global variable `zlimit`, users can customize the predicted range limits.

The uncompressed js file is here: [Michigan06.js](http://assets.parameterz.com/js/Michigan06.js); the live version of the calculator uses a [minified version](http://assets.parameterz.com/js/Michigan.min.js).



---

[Disclaimer](Disclaimer.md)