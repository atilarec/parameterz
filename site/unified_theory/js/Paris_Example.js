function LogLinear(o) {
    /*
    a basic constructor function;
    assumes GENDER, BSA are global variables;
    constructed with an object with male and female objects of this pattern:
    {male: {slope: xx, intercept: xx, mse: xx}, female: {...}}
    
    */
    this.male = o.male;
    this.female = o.female;

}
LogLinear.prototype.mean = function() {
    var o;
    if (GENDER === 'm') {
        o = this.male;
    } else {
        o = this.female;
    }
    return Math.exp((Math.log(BSA) * o.slope + o.intercept)) / 10; //returns value in 'cm'
}
LogLinear.prototype.zscore = function(score) {
    var o;
    if (GENDER === 'm') {
        o = this.male;
    } else {
        o = this.female;
    }
    return (Math.log(score * 10) - this.logMean()) / o.mse; //expects 'score' to arrive in 'cm'
}
LogLinear.prototype.logMean = function() {
    var o;
    if (GENDER === 'm') {
        o = this.male;
    } else {
        o = this.female;
    }
    return Math.log(BSA) * o.slope + o.intercept;
}

//test:
Paris = {
    id: "Paris",
    citation: {
        title: 'Nomograms for aortic root diameters in children using two-dimensional echocardiography.',
        authors: 'Gautier M, Detaint D, Fermanian C, Aegerter P, Delorme G, Arnoult F, Milleron O, Raoux F, Stheneur C, Boileau C, Vahanian A, Jondeau G.',
        journal: 'Am J Cardiol. 2010 Mar 15;105(6):888-94.',
        linkUrl: 'http://www.ncbi.nlm.nih.gov/pubmed/20211339'
    },
    requiresGender: true,
    aov: new LogLinear({
        male: { intercept: 2.78, slope: 0.47, mse: 0.1 },
        female: { intercept: 2.75, slope: 0.44, mse: 0.1 }
    }),
    sov: new LogLinear({
        male: { intercept: 3.1, slope: 0.49, mse: 0.1 },
        female: { intercept: 3.1, slope: 0.44, mse: 0.09 }
    }),
    stj: new LogLinear({
        male: { intercept: 2.9, slope: 0.47, mse: 0.1 },
        female: { intercept: 2.9, slope: 0.42, mse: 0.09 }
    }),
    aao: new LogLinear({
        male: { intercept: 2.9, slope: 0.46, mse: 0.11 },
        female: { intercept: 2.9, slope: 0.46, mse: 0.1 }
    })
};

