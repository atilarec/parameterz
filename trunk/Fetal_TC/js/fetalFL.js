function getFL(ega) {
/*
mean = - 37.4948 + 3.7089 × EGA - 0.0006325 × EGA^3
SD = 0.8778 + 0.0465 × EGA

from:
New charts for ultrasound dating of pregnancy and assessment of 
fetal growth: longitudinal data from a population-based cohort study.
Verburg BO, Steegers EA, De Ridder M, et al.
Ultrasound Obstet Gynecol. 2008 Apr;31(4):388-96.
*/

    var mean = -37.4948 + 3.7089 * ega - 0.0006325 * Math.pow(ega, 3);
    var SD = 0.8778 + 0.0465 * ega;

    var lower = mean - 1.65 * SD;
    var upper = mean + 1.65 * SD;

    return lower.toFixed(1) + " - " + upper.toFixed(1);

} //end getFl()