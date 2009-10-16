﻿function getTC(ega) {
/*
from Julia A Drose 'Fetal Echocardiography'
chapter 20; table 20-2
*/
    var tc = [];
    tc[16] = [6.40, 9.10, 11.9]; //values are the 5th, 50th, and 95th percentiles
    tc[17] = [7.30, 10.0, 12.8];
    tc[18] = [8.20, 11.0, 13.7];
    tc[19] = [9.10, 11.9, 14.6];
    tc[20] = [10.0, 12.8, 15.5];
    tc[21] = [11.0, 13.7, 16.4];
    tc[22] = [11.9, 14.6, 17.3];
    tc[23] = [12.8, 15.5, 18.2];
    tc[24] = [13.7, 16.4, 19.1];
    tc[25] = [14.6, 17.3, 20.0];
    tc[26] = [15.5, 18.2, 21.0];
    tc[27] = [16.4, 19.1, 21.9];
    tc[28] = [17.3, 20.0, 22.8];
    tc[29] = [18.2, 21.0, 23.7];
    tc[30] = [19.1, 21.9, 24.6];
    tc[31] = [20.0, 22.8, 25.5];
    tc[32] = [20.9, 23.7, 26.4];
    tc[33] = [21.8, 24.6, 27.3];
    tc[34] = [22.8, 25.5, 28.2];
    tc[35] = [23.7, 26.4, 29.1];
    tc[36] = [24.6, 27.3, 30.0];
    tc[37] = [25.5, 28.2, 30.9];
    tc[38] = [26.4, 29.1, 31.9];
    tc[39] = [27.3, 30.0, 32.8];
    tc[40] = [28.2, 30.9, 33.7];

    if (ega >= 16 && ega <= 40) {
        var lower = tc[ega][0];
        var upper = tc[ega][2];
    return lower + " - " + upper;
    } else {
        return "Error: EGA out of range (expected: 16 - 40)"
    }
} //end getTC()