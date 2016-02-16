## Introduction ##

Many formulas can be used to estimate body surface area. To better understand how these various different calculations can affect the prediction of cardiac z-scores, most of the calculators at [ParameterZ.com](http://parameterz.com) allow the user to select any of several different equations.

## The Code ##

```
function calcBSA(wt, ht, BSAMethod) {
    /// <summary>returns the body surface area in meters^2; calling with a single arg is assumed to be 'wt'</summary>
    /// <param name="ht">height, units = cm</param>
    /// <param name="wt">weight, units = kg</param>
    /// <param name="BSAMethod">optional; type = string (any of the following:"DuBois", "Haycock"(default), "Gehan", "Mosteller", "Boyd", or "Dreyer")</param>
    /// <returns>Number</returns>
    // allow for ht and method to be optional:
    if (!ht && !BSAMethod) {
        // only one arg was passed, 'wt'
        var BSAMethod = "Dreyer";
    }
    else if (!BSAMethod) {
        var BSAMethod = "Haycock";
    }
    switch (BSAMethod) {
        case "DuBois":
            return 0.007184 * Math.pow(ht, 0.725) * Math.pow(wt, 0.425);
        case "Haycock":
            return 0.024265 * Math.pow(ht, 0.3964) * Math.pow(wt, 0.5378);
        case "Gehan":
            return 0.0235 * Math.pow(ht, 0.42246) * Math.pow(wt, 0.51456);
        case "Mosteller":
            return Math.sqrt((ht * wt) / 3600);
        case "Boyd":
            wt = wt * 1000;
            var exponent = 0.7285 - 0.0188 * (Math.LOG10E * Math.log(wt)); //necessary to get the Log base 10 of (wt)
            return 0.0003207 * Math.pow(ht, 0.3) * Math.pow(wt, exponent);
        case "Dreyer":
            return 0.1 * Math.pow(wt, (2 / 3));
        default:
            return 0.024265 * Math.pow(ht, 0.3964) * Math.pow(wt, 0.5378);// returns Haycock in the event an unfamiliar method is passed in
    } //end switch

}
```