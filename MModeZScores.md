## Introduction ##

[This](http://parameterz.blogspot.com/2008/09/m-mode-z-scores.html) z-score calculator is based on the data published in the June 2000 issue of _Heart_

> Normal values of M mode echocardiographic measurements of more than 2000 healthy infants and children in central Europe. ([PubMed link](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1760862/?tool=pubmed))

In an effort to provide even more transparency into the manner in which the calculations are made, this summary is provided.

## About the Calculations ##

Unlike most of the other z-score calculators, the m-mode z-score calculator does not use any prediction equations. Rather, the mean and +/- 2SD data from the published tables (one for weight-indexed and one for BSA-indexed values) have been transformed into JavaScript objects:

```
var sites = {
    RVDD: { label: 'RVDD', bsaData: {
        mean: [17.5, 16.5, 15.6, 14, 13.5, 12.4, 11.8, 11.2, 11, 10.5, 10.1, 9.9, 9.6, 9.5, 9.3, 9, 8.9, 8.8, 8.7, 8.7, 8.7],
        lower: [11.5, 10.3, 10.0, 9.0, 8.5, 7.6, 7.4, 6.4, 6.4, 5.8, 5.7, 5.5, 5.2, 5.0, 4.8, 4.5, 4.4, 4.3, 4.2, 4.2, 4.2],
        upper: [23.5, 22.7, 21.2, 19.0, 18.5, 17.2, 16.2, 16.0, 15.6, 15.2, 14.5, 14.3, 14.0, 14.0, 13.8, 13.5, 13.4, 13.3, 13.2, 13.2, 13.2]
    },
        wtData: {
            mean: [8.6, 8.6, 8.5, 8.4, 8.4],
            lower: [4.1, 4.1, 4.1, 4.0, 4.0],
            upper: [13.1, 13.1, 12.9, 12.8, 12.8]
        }
    },
//etc
}

```

**Note:** The data is arranged within the arrays in _descending order_ of weight/BSA.

The position (global variable `index`) within these arrays that we will pull data from is determined by passing the BSA and weight into another function and looping through corresponding arrays (also arranged in _descending order_) to find the nearest matching value:

```

    if (bsa >= 0.25) {
        useBSA = true;
        var array = [2, 1.75, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.275, 0.25];//BSA arranged in descending order
        for (var i = 0; i < array.length; i++) {
            if (bsa >= array[i]) {
                index = i;
                return;
            }
        }
    }
    
```

The `index` is then used to fetch the mean and range limits from the corresponding positions within the data object(s):

```
            //pull the mean value out of the object/array
            str_mean = (this[data]['mean'][index]);
            meanElement.text(str_mean);
            //pull the upper and lower limit values
            str_range = "(" + this[data]['lower'][index] + " - " + this[data]['upper'][index] + ")";
            rangeElement.text(str_range);

```

The z-score is calculated by first comparing the measured value to the mean value and determining which of the published 2 SD limits to use:

```
        //determine if score is above/below mean and calculate the derived 1sd
        if (score >= mean) {
            sd = (data.upper[index] - data.mean[index]) / 2;
        }
        else {
            sd = (data.mean[index] - data.lower[index]) / 2;
        }
        //calculate the z-score
        z = (score - mean) / sd;

```

The uncompressed js file can be found [here](http://assets.parameterz.com/js/Mmode.js); the actual calculator uses a [minified version](http://assets.parameterz.com/js/Mmode.min.js).


---

[Disclaimer](Disclaimer.md)