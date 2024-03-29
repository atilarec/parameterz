﻿
function Calculate(){
    // get the ht and weight
    var ht=parseFloat(document.getElementById("txtHT").value);
    var wt=parseFloat(document.getElementById("txtWT").value);
    // calculate the BSA
    var BSAMethod=document.getElementById("cmbBSA").value;
    var BSA = CalcBSA(ht,wt,BSAMethod);
    // write the BSA
    document.getElementById("BSA").innerHTML=BSA.toFixed(2)+" m<sup>2</sup>";
    
    //only run it further if BSA exists i.e., dinking with ht and wt...
    if (isNaN(BSA)) return;

    //bail out if out of range
    if (BSA < 0.25 && wt < 2.0|| BSA>2.25){
        document.getElementById("info").innerHTML= "Sorry, patient size is out of range...";
        document.getElementById("info").className="severe";
        return;
        }
    else {//clear any previous warnings
        document.getElementById("info").innerHTML= "";
        document.getElementById("info").className="none";
           
    }// end bail out if/else

    // determine how the lookup routines will run: by wt or BSA
    var strLookup = getLookupMethod(wt, BSA);
    // get the index of the necessary array
    var index = getIndex(strLookup, wt, BSA);
    // calculate the scores of the individual measurements, if entered
    // this passes the name of the measurement, the index (of the array), the type of lookup (by BSA vs. wt, and the measurement to a subroutine
    if (!isNaN(document.getElementById("txtRVDD").value)&&document.getElementById("txtRVDD").value!=""){
        Doit2TheZ("RVDD",index,strLookup,parseFloat(document.getElementById("txtRVDD").value))
        }
    if (!isNaN(document.getElementById("txtIVS").value)&&document.getElementById("txtIVS").value!=""){
        Doit2TheZ("IVS",index,strLookup,parseFloat(document.getElementById("txtIVS").value))
        }
    if (!isNaN(document.getElementById("txtLVEDD").value)&&document.getElementById("txtLVEDD").value!=""){
        Doit2TheZ("LVEDD",index,strLookup,parseFloat(document.getElementById("txtLVEDD").value))
        }
    if (!isNaN(document.getElementById("txtLVESD").value)&&document.getElementById("txtLVESD").value!=""){
        Doit2TheZ("LVESD",index,strLookup,parseFloat(document.getElementById("txtLVESD").value))
        }
    if (!isNaN(document.getElementById("txtLVPW").value)&&document.getElementById("txtLVPW").value!=""){
        Doit2TheZ("LVPW",index,strLookup,parseFloat(document.getElementById("txtLVPW").value))
        }
    if (!isNaN(document.getElementById("txtLAD").value)&&document.getElementById("txtLAD").value!=""){
        Doit2TheZ("LAD",index,strLookup,parseFloat(document.getElementById("txtLAD").value))
        }    
}//end main function
    function Doit2TheZ(site,index,lookup,score){
    var strMean = site+"Mean";
    var strRange = site+"Range";
    var strZ = site+"Z";
    var mean;
    var stdDev;
    var lower;
    var upper;
    var zScore;
    
    //doit2 the mean
    mean = getMean(site,index,lookup);//passes to array lookup routine
    document.getElementById([strMean]).innerHTML= mean.toFixed(1);
    //doit2 the SD/Range
    lower = getLower(site,index,lookup);//passes to array lookup routine
    upper = getUpper(site,index,lookup);//passes to array lookup routine
    document.getElementById([strRange]).innerHTML = lower.toFixed(1)+" - "+upper.toFixed(1)
    //doit2 the ZScore
    //check to see which side of the mean the score is
    //because *some* of the SD's are slightly different
    if (score>=mean){
        stdDev = (upper-mean)/2    
    }
    else stdDev = (mean-lower)/2
    
    zScore=(score-mean)/stdDev 
    document.getElementById([strZ]).innerHTML = zScore.toFixed(1)
    document.getElementById([strZ]).className=[ZscoreFlag(zScore)]
    
}//end doit2it function
    
function getMean(site,index,lookup){
    switch (lookup){
        case "BSA":
            switch (site){
                case "RVDD":
                    var RVDDMeanArray = new Array(17.5, 16.5, 15.6, 14, 13.5, 12.4, 11.8, 11.2, 11, 10.5, 10.1, 9.9, 9.6, 9.5, 9.3, 9, 8.9, 8.8, 8.7, 8.7, 8.7);
                    return RVDDMeanArray[index];
                case "IVS":
                    var IVSMeanArray = new Array(9.3, 8, 7.4, 6.7, 6.6, 6.5, 6.2, 5.8, 5.6, 5.2, 5, 4.8, 4.8, 4.6, 4.3, 4.2, 4.1, 3.9, 3.9, 3.8, 3.8);
                    return IVSMeanArray[index];
                case "LVEDD":
                    var LVEDDMeanArray = new Array(53.4, 46.8, 45.4, 43.3, 42.4, 41.7, 39.4, 38.5, 37.1, 35.8, 33.9, 33.2, 31.6, 31, 29, 27.1, 26, 23.6, 22.9, 21.2, 20);
                    return LVEDDMeanArray[index];
                case "LVESD":
                    var LVESDMeanArray = new Array(34.4, 29.8, 28.6, 27.6, 27.1, 27.1, 25.2, 24.4, 23.6, 22.7, 21.3, 20.4, 19.9, 19.3, 18, 17, 16.1, 14.8, 14.8, 13.6, 13.2);
                    return LVESDMeanArray[index];
                case "LVPW":
                    var LVPWMeanArray = new Array(8.1, 8.1, 7.7, 6.9, 6.9, 6.6, 6.3, 5.9, 5.9, 5.7, 5.2, 4.9, 4.8, 4.8, 4.6, 4.6, 4.2, 4.1, 4.1, 3.8, 3.6);
                    return LVPWMeanArray[index];
                case "LAD":
                    var LADMeanArray = new Array(32.5, 30.4, 29.9, 28.2, 27.3, 26.0, 25.2, 25.0, 23.2, 22.5, 21.2, 20.8, 20.1, 19.7, 18.7, 17.8, 16.8, 16.3, 15.3, 15.1, 14.0);
                    return LADMeanArray[index];
            }// end BSA site switch
        
        case "weight":
            switch (site){
                case "RVDD":
                    var RVDDMeanArray = new Array(8.6, 8.6, 8.5, 8.4, 8.4);
                    return RVDDMeanArray[index];
                case "IVS":
                    var IVSMeanArray = new Array(3.8, 3.7, 3.6, 3.5, 3.5);
                    return IVSMeanArray[index];
                case "LVEDD":
                    var LVEDDMeanArray = new Array(19.9, 18.8, 18.2, 18.1, 17.1);
                    return LVEDDMeanArray[index];
                case "LVESD":
                    var LVESDMeanArray = new Array(12.7, 11.9, 11.7, 11.7, 11.0);
                    return LVESDMeanArray[index];
                case "LVPW":
                    var LVPWMeanArray = new Array(3.7, 3.6, 3.5, 3.2, 2.7);
                    return LVPWMeanArray[index];
                case "LAD":
                    var LADMeanArray = new Array(13.7, 13.2, 12.6, 12.1, 11.5);
                    return LADMeanArray[index];
            }// end weight site switch

    }//end lookup switch
}//end getMean function
function getLower(site,index,lookup){
    switch (lookup){
        case "BSA":
            switch (site){
                case "RVDD":
                    var RVDDLowerArray = new Array(11.5,10.3,10.0,9.0,8.5,7.6,7.4,6.4,6.4,5.8,5.7,5.5,5.2,5.0,4.8,4.5,4.4,4.3,4.2,4.2,4.2);
                    return RVDDLowerArray[index];
                case "IVS":
                    var IVSLowerArray = new Array(6.8,5.6,5.2,4.9,4.8,4.7,4.3,4.0,3.8,3.6,3.5,3.3,3.3,3.1,2.7,2.6,2.6,2.5,2.5,2.4,2.4);
                    return IVSLowerArray[index];
                case "LVEDD":
                    var LVEDDLowerArray = new Array(45.4,36.8,39.0,37.3,35.8,35.5,32.5,31.7,31.0,29.6,27.4,27.2,26.0,25.6,23.4,22.0,21.0,19.0,18.0,17.0,16.4);
                    return LVEDDLowerArray[index];
                case "LVESD":
                    var LVESDLowerArray = new Array(25.6,23.4,22.5,22.0,21.5,21.5,19.6,18.6,18.0,17.7,16.1,15.7,15.4,15.0,14.0,13.0,12.0,10.8,10.8,10.4,10.2);
                    return LVESDLowerArray[index];
                case "LVPW":
                    var LVPWLowerArray = new Array(5.1,5.1,4.9,4.3,4.3,4.0,3.9,3.7,3.7,3.6,3.5,3.4,3.3,3.3,3.1,3.1,2.9,2.8,2.8,2.7,2.6);
                    return LVPWLowerArray[index];
                case "LAD":
                    var LADLowerArray = new Array(23.7,23.8,23.7,22.8,21.7,20.9,19.5,19.2,17.0,16.5,16.2,16.1,16.1,15.3,14.5,13.8,13.0,12.0,11.5,11.5,10.5);
                    return LADLowerArray[index];
            }// end BSA site switch
        
        case "weight":
            switch (site){
                case "RVDD":
                    var RVDDLowerArray = new Array(1.5,1.5,1.4,1.4,1.3);
                    return RVDDLowerArray[index];
                case "IVS":
                    var IVSLowerArray = new Array(2.4,2.3,2.3,2.1,2.1);
                    return IVSLowerArray[index];
                case "LVEDD":
                    var LVEDDLowerArray = new Array(16.5,15.4,15.1,15.0,15.0);
                    return LVEDDLowerArray[index];
                case "LVESD":
                    var LVESDLowerArray = new Array(10.2,9.5,9.2,9.2,9.7);
                    return LVESDLowerArray[index];
                case "LVPW":
                    var LVPWLowerArray = new Array(2.6,2.5,2.4,2.2,1.9);
                    return LVPWLowerArray[index];
                case "LAD":
                    var LADLowerArray = new Array(10.5,10.2,9.4,8.5,8.3);
                    return LADLowerArray[index];
            }// end weight site switch

    }//end lookup switch
}//end getLower function 
function getUpper(site,index,lookup){
    switch (lookup){
        case "BSA":
            switch (site){
                case "RVDD":
                    var RVDDUpperArray = new Array(23.5,22.7,21.2,19.0,18.5,17.2,16.2,16.0,15.6,15.2,14.5,14.3,14.0,14.0,13.8,13.5,13.4,13.3,13.2,13.2,13.2);
                    return RVDDUpperArray[index];
                case "IVS":
                    var IVSUpperArray = new Array(11.8,10.4,9.6,8.5,8.4,8.3,8.1,7.6,7.4,6.8,6.5,6.3,6.3,6.1,5.9,5.8,5.6,5.3,5.3,5.2,5.2);
                    return IVSUpperArray[index];
                case "LVEDD":
                    var LVEDDUpperArray = new Array(61.4,54.8,51.8,49.3,49.0,47.9,46.3,45.3,43.2,42.0,40.4,39.2,37.2,36.4,34.6,32.1,31.0,27.2,25.8,25.4,23.6);
                    return LVEDDUpperArray[index];
                case "LVESD":
                    var LVESDUpperArray = new Array(43.2,36.2,34.7,33.2,32.7,32.7,30.8,30.2,29.2,27.7,26.5,25.1,24.4,23.6,22.0,21.0,20.1,18.8,18.8,16.8,16.2);
                    return LVESDUpperArray[index];
                case "LVPW":
                    var LVPWUpperArray = new Array(11.1,11.1,10.5,9.5,9.5,9.2,8.7,8.1,8.1,7.8,6.9,6.4,6.3,6.3,6.1,6.1,5.5,5.4,5.4,4.9,4.6);
                    return LVPWUpperArray[index];
                case "LAD":
                    var LADUpperArray = new Array(41.3,37.0,36.1,33.6,32.9,31.1,30.9,30.8,29.4,28.5,26.2,25.5,24.1,24.1,22.9,21.8,20.6,20.6,19.1,18.7,17.5);
                    return LADUpperArray[index];
            }// end BSA site switch
        
        case "weight":
            switch (site){
                case "RVDD":
                    var RVDDUpperArray = new Array(13.1,13.1,12.9,12.8,12.8);
                    return RVDDUpperArray[index];
                case "IVS":
                    var IVSUpperArray = new Array(5.2,5.1,4.9,4.7,4.7);
                    return IVSUpperArray[index];
                case "LVEDD":
                    var LVEDDUpperArray = new Array(23.3,22.2,21.3,21.1,19.2);
                    return LVEDDUpperArray[index];
                case "LVESD":
                    var LVESDUpperArray = new Array(15.2,14.3,14.2,14.2,12.3);
                    return LVESDUpperArray[index];
                case "LVPW":
                    var LVPWUpperArray = new Array(4.8,4.7,4.6,4.2,3.5);
                    return LVPWUpperArray[index];
                case "LAD":
                    var LADUpperArray = new Array(16.9,16.2,15.8,15.6,14.7);
                    return LADUpperArray[index];
            }// end weight site switch

    }//end lookup switch
}//end getUpper function 
function CalcBSA(ht,wt,BSAMethod){
    switch(BSAMethod) 
    {
    case "DuBois":
        return 0.007184 * Math.pow(ht,0.725) * Math.pow(wt,0.425);
    case "Haycock":
        return 0.024265 * Math.pow(ht,0.3964) * Math.pow(wt,0.5378);
    case "Gehan":
        return 0.0235 * Math.pow(ht, 0.42246) * Math.pow(wt, 0.51456);
    case "Mosteller":
        return Math.sqrt((ht * wt) / 3600);
    case "Boyd":
        wt = wt * 1000
        var exponent = 0.7285 - 0.0188 * (Math.LOG10E*Math.log(wt))//necessary to get the Log base 10 of (wt)
        return 0.0003207 * Math.pow(ht, 0.3) * Math.pow(wt, exponent)
    case "Dreyer":
        return 0.1*Math.pow(wt,(2/3));
    }
        
}// end BSA function

function getLookupMethod(wt, BSA){
    if (BSA < 0.25) { 
        return "weight";
    }
    else{ 
        return "BSA";
    }
}// end getLookupMethod function

function getIndex(strLookup, wt, BSA){
    switch(strLookup){
        case "weight":
            var wtArray = new Array(4, 3.5, 3, 2.5, 2);
            var index = 0;
                for (index=0;index<wtArray.length;index++){
                if (wt >= wtArray[index]){
                    return index;
                    }
                }
        case "BSA":
            var bsaArray = new Array(2, 1.75, 1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.275, 0.25);
            var index = 0;
            for (index=0;index<bsaArray.length;index++){
                if (BSA >= bsaArray[index]){
                    return index;
                    }
                }
    }//end switch

}// end getIndex function
function thinkAboutIt(){
    //runs this check first before calculating everything
    var wt = document.getElementById("txtWT").value
    if (isNaN(wt)|| wt==""){
        return;
    }
    else Calculate();
}// end thinkAboutIt function
function ZscoreFlag(zScore){
    if (zScore >=1.67 && zScore<1.96||zScore>-1.96&&zScore<=-1.67){
    return "borderline"
    }
    else if (zScore>=1.96&& zScore<3||zScore>-3&&zScore<=-1.96){
    return "mild"
    }
    else if (zScore>=3&& zScore<4||zScore>-4&&zScore<=-3){
    return "moderate"
    }
    else if (zScore>=4||zScore<=-4){
    return "severe"
    }
    return "normal"
}//end zscore flag function
