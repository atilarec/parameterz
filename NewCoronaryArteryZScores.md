## Introduction ##

A coronary artery z-score calculator is available on [ParameterZ.com](http://parameterz.blogspot.com/2010/11/montreal-coronary-artery-z-scores.html), based on the article

> [New Equations and a Critical Appraisal of Coronary Artery Z Scores in Healthy Children.](http://www.ncbi.nlm.nih.gov/pubmed/21074965)

In an effort to remain transparent about the nature of the calculations, this summary is provided.


### BSA-adjusted calculations ###

There are two basic approaches to the new z-score equations: bsa-adjusted and aortic valve-adjusted z-scores. The bsa-adjusted calculations are based on slope and intercepts working with the square root of bsa. The constructor function I designed for these basic objects is:

```
//these are bsa-adjusted coronaries
function Cor_b(o) {
    this.a1 = o.a1;
    this.b1 = o.b1;
    this.a2 = o.a2;
    this.b2 = o.b2;
}
```

Since all of the coronary arteries of this type have the same pattern for calculating the mean, standard deviation, and z-score, they all share the same prototype:

```
Cor_b.prototype.mean = function() {
    return this.a1 + this.b1 * Math.sqrt(bsa);
};
Cor_b.prototype.sd = function() {
    return Math.sqrt(bsa) * this.b2 + this.a2;
};
Cor_b.prototype.zscore = function(score) {
    return (score - this.mean()) / this.sd();
};
Cor_b.prototype.limit = function(z) {
    return z * this.sd() + this.mean();
};
```

**NOTE:** The methods have access to global variables _bsa_ and _aov_ (A bit sloppy, I know, but the chance of colliding with other similarly named global variables in this context is _remote_).

The individual coronary artery objects are then built- using the values published in the paper- and collected in a larger object, _sites\_b_:

```
var sites_b = {
    'LMCA': { label: 'LMCA', cor: new Cor_b({ a1: -0.1817, b1: 2.9238, a2: 0.1801, b2: 0.2530 }) },
    'LAD': { label: 'LAD', cor: new Cor_b({ a1: -0.1502, b1: 2.2672, a2: 0.1709, b2: 0.2293 }) },
    'CIRC': { label: 'CIRC', cor: new Cor_b({ a1: -0.2716, b1: 2.3458, a2: 0.1142, b2: 0.3423 }) },
    'PROXRCA': { label: 'PROXRCA', cor: new Cor_b({ a1: -0.3039, b1: 2.7521, a2: 0.1626, b2: 0.2881 }) },
    'MIDRCA': { label: 'MIDRCA', cor: new Cor_b({ a1: -0.3060, b1: 2.4078, a2: 0.1324, b2: 0.3259 }) },
    'DISTRCA': { label: 'DISTRCA', cor: new Cor_b({ a1: -0.3185, b1: 2.3295, a2: 0.1099, b2: 0.3198 }) }
};
```

The properties(_methods_, really) of the coronary objects are then accessed using jQuery to iterate across the _sites_ objects.

### AOV-adjusted calculations ###

The same approach is used for these objects/calculations, but they are somewhat simpler due to the fact that the standard deviation (_standard error_ in the publication) is fixed, i.e., not calculated:

```
//these are aov-adjusted coronaries
function Cor_a(o) {
    this.a1 = o.a1;
    this.b1 = o.b1;
    this.sd = o.sd;
}
Cor_a.prototype.mean = function() {
    return this.a1 + this.b1 * aov;
};
Cor_a.prototype.zscore = function(score) {
    return (score - this.mean()) / this.sd;
};
Cor_a.prototype.limit = function(z) {
    return z * this.sd + this.mean();
};

var sites_a = {
    'LMCA': { label: 'LMCA', cor: new Cor_a({ a1: 0.3593, b1: 0.1398, sd: 0.3507 }) },
    'LAD': { label: 'LAD', cor: new Cor_a({ a1: 0.2364, b1: 0.1109, sd: 0.3409 }) },
    'CIRC': { label: 'CIRC', cor: new Cor_a({ a1: 0.1940, b1: 0.1081, sd: 0.3673 }) },
    'PROXRCA': { label: 'PROXRCA', cor: new Cor_a({ a1: 0.1812, b1: 0.1320, sd: 0.3579 }) },
    'MIDRCA': { label: 'MIDRCA', cor: new Cor_a({ a1: 0.1827, b1: 0.1104, sd: 0.3748 }) },
    'DISTRCA': { label: 'DISTRCA', cor: new Cor_a({ a1: 0.2191, b1: 0.1003, sd: 0.3627 }) }
};

```


The uncompressed version-controlled js file can be found [here](http://code.google.com/p/parameterz/source/browse/trunk/site/CoronaryArteries2010/js/cor_bsa_aov.js?r=442); the actual calculator uses a [minified](http://assets.parameterz.com/js/cor_bsa_aov.min.js) version.


---

[Disclaimer](Disclaimer.md)

---