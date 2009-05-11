var LVMIRef = {
    boys: {//array values are the [10th, 25th, 50th, 75th, 90th, 95th] percentiles
        age0: [40.19, 46.92, 56.44, 66.41, 75.72, 85.6],
        age1: [36.17, 40.66, 44.95, 53.29, 61.27, 57.1],
        age2: [28.44, 33.88, 39.50, 45.19, 48.74, 55.3],
        age3: [27.68, 30.68, 36.96, 40.20, 45.12, 44.3],
        age4: [24.47, 28.56, 31.79, 36.28, 40.18, 43.5],
        age5: [22.45, 24.85, 29.11, 34.57, 38.25, 36.0],
        age6: [21.88, 24.71, 28.18, 31.87, 36.42, 35.7],
        age7: [21.02, 24.38, 28.80, 32.84, 39.08, 38.2],
        age8: [22.22, 25.11, 28.77, 33.49, 38.47, 36.9],
        age9: [20.72, 24.62, 29.00, 32.81, 37.73, 40.0]

    },
    girls: {//array values are the [10th, 25th, 50th, 75th, 90th, 95th] percentiles
        age0: [39.05, 48.62, 55.38, 65.98, 73.47, 80.1],
        age1: [32.91, 38.67, 42.04, 49.85, 52.86, 68.6],
        age2: [28.87, 31.85, 37.88, 43.11, 47.65, 52.4],
        age3: [25.85, 28.06, 32.29, 36.43, 43.47, 48.1],
        age4: [23.15, 25.77, 29.71, 33.15, 37.73, 44.6],
        age5: [19.07, 22.12, 26.63, 30.37, 34.30, 41.0],
        age6: [20.22, 23.25, 26.11, 29.63, 33.05, 38.2],
        age7: [20.47, 23.63, 26.68, 29.86, 34.65, 41.4],
        age8: [20.69, 23.55, 26.51, 29.97, 34.89, 40.5],
        age9: [20.06, 22.94, 26.35, 31.40, 37.93, 39.4]

    }

};

function calcLVMI() {
    var ht = parseFloat($("#txtHeight").val());
    ht /= 100;
    var lvm = parseFloat($("#txtLVM").val());
    var lvmi = lvm / Math.pow(ht, 2.7);
    var gender = $('#gender option:selected').val();
    var age = Number($('#age option:selected').val());
    var calc95, ageGroup;

    if (!isNaN(lvmi)) {
        $('#LVMI').val(lvmi.toFixed(2));

    }
    else {
        $('#LVMI').val('');
    }
    switch (gender) {
        case "girls":
            calc95 = 77.5265 - age * 15.8939 + Math.pow(age, 1.5) * 5.2322 - Math.pow(age, 2) * 0.4671;
            break;
        case "boys":
            calc95 = 77.5265 - age * 15.8939 + Math.pow(age, 1.5) * 5.2322 - Math.pow(age, 2) * 0.4671 + 2.7380;
            break;
    }
    $('#calc95').val(calc95.toFixed(2));
    // style the LVMI if greater than predicted
    if (lvmi > calc95) {
        $("#LVMI").addClass('highlight');
    }
    else {
        $("#LVMI").removeClass('highlight');
    }

    //determine the Age Group
    if (age <= 0.5) { ageGroup = "age0"; }
    if (age > 0.5 && age <= 2) { ageGroup = "age1"; }
    if (age >= 3 && age <= 4) { ageGroup = "age2"; }
    if (age >= 5 && age <= 6) { ageGroup = "age3"; }
    if (age >= 7 && age <= 8) { ageGroup = "age4"; }
    if (age >= 9 && age <= 10) { ageGroup = "age5"; }
    if (age >= 11 && age <= 12) { ageGroup = "age6"; }
    if (age >= 13 && age <= 14) { ageGroup = "age7"; }
    if (age >= 14 && age < 16) { ageGroup = "age8"; } //impossible to know the authors intent regarding published cut-offs: "14<=16" and ">16"
    if (age >= 16) { ageGroup = "age9"; }

    //build the html for the table row (td's)
    var rowhtml = '';
    for (var i = 0; i <= 5; i++) {
        rowhtml += "<td>" + LVMIRef[gender][ageGroup][i] + "</td>";
    }
    //write the results to the table
    $('#LVMIPercentiles').html(rowhtml);



} //end calcLVMI fx

