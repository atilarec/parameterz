## Introduction ##

Several published works are available that aim to use echocardiographic data to help determine the nature of surgical repair for neonates with "critical aortic stenosis". Based upon these publications, I present herein a series of web-based tools to aid in the calculation of these various scores.

These are _works in progress_:

  * [Rhodes Score Calculator](http://parameterz.googlecode.com/svn/trunk/Rhodes/rhodes-score.htm)
  * [CHSS Calculator](http://parameterz.googlecode.com/svn/trunk/Rhodes/CHSS2-score.htm)
  * [Discriminant Score Calculator](http://parameterz.googlecode.com/svn/trunk/Rhodes/discriminant-score.htm)

### UPDATE (Jan 2012) ###

A worksheet that consolidates the reporting of these scores and the latest CHSS score can now be found at **[dev.parameterz.com/borderline/](http://dev.parameterz.com/borderline/)**

## Notes: ##

#### Rhodes Score ####
There is an error in the original article: the formula for the "area of an ellipse" used to calculate the mitral valve area (actually the mitral _annulus_ area) is incorrect; an erratum was later published with the correct formula:

> `Area = pi * (D1 / 2 * D2 / 2)`

In addition to the actual score, the article also presents four "threshold values".
Owing to the authors' impression that

> "... LV mass is subject to the greatest measurement error among these variables"

this calculator omits the estimation of LV mass, and uses only three indices (aortic root index, mitral valve index, and long axis ratio).

#### CHSS Score ####
This calculator is based on the earlier (2001) work from the CHSS- not the current (2007) CHSS calculator (available from the [CHSSDC website](http://www.ctsnet.org/aortic_stenosis_calc/)).

The original article refers to an older source for the z-scores; a more current aortic root z-score is available with the Discriminant Score article. This version of the CHSS Score calculator lets you optionally select either z-score reference, to an interesting effect.

#### Discriminant Score ####
This is the updated score which supersedes the Rhodes score.


---

**[Disclaimer](Disclaimer.md)**