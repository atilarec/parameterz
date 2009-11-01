﻿$(function() {
    var datasets = {
        "Boston-MV-Upper": {
            label: "Boston MV Upper",
            data: [[16, 0.433],
            [17, 0.472],
            [18, 0.510],
            [19, 0.549],
            [20, 0.587],
            [21, 0.626],
            [22, 0.664],
            [23, 0.703],
            [24, 0.741],
            [25, 0.780],
            [26, 0.818],
            [27, 0.857],
            [28, 0.895],
            [29, 0.934],
            [30, 0.972],
            [31, 1.011],
            [32, 1.049],
            [33, 1.088],
            [34, 1.126],
            [35, 1.165],
            [36, 1.203],
            [37, 1.242],
            [38, 1.280],
            [39, 1.319],
            [40, 1.357]]
        },
        "Boston-MV-Mean": {
            label: "Boston MV Mean",
            data: [[16, 0.347],
        [17, 0.382],
        [18, 0.416],
        [19, 0.451],
        [20, 0.486],
        [21, 0.521],
        [22, 0.556],
        [23, 0.591],
        [24, 0.625],
        [25, 0.660],
        [26, 0.695],
        [27, 0.730],
        [28, 0.765],
        [29, 0.799],
        [30, 0.834],
        [31, 0.869],
        [32, 0.904],
        [33, 0.939],
        [34, 0.974],
        [35, 1.008],
        [36, 1.043],
        [37, 1.078],
        [38, 1.113],
        [39, 1.148],
        [40, 1.182]]
        },
        "Boston-MV-Lower": {
            label: "Boston MV Lower",
            data: [[16, 0.260],
        [17, 0.291],
        [18, 0.322],
        [19, 0.354],
        [20, 0.385],
        [21, 0.416],
        [22, 0.447],
        [23, 0.478],
        [24, 0.509],
        [25, 0.541],
        [26, 0.572],
        [27, 0.603],
        [28, 0.634],
        [29, 0.665],
        [30, 0.696],
        [31, 0.727],
        [32, 0.759],
        [33, 0.790],
        [34, 0.821],
        [35, 0.852],
        [36, 0.883],
        [37, 0.914],
        [38, 0.946],
        [39, 0.977],
        [40, 1.008]]
        },
        "Royal-MV-Upper": {
            label: "Royal Brompton MV Upper",
            data: [[16, 0.541],
        [17, 0.581],
        [18, 0.621],
        [19, 0.662],
        [20, 0.703],
        [21, 0.744],
        [22, 0.786],
        [23, 0.828],
        [24, 0.870],
        [25, 0.913],
        [26, 0.956],
        [27, 0.999],
        [28, 1.043],
        [29, 1.086],
        [30, 1.130],
        [31, 1.175],
        [32, 1.219],
        [33, 1.264],
        [34, 1.309],
        [35, 1.354],
        [36, 1.400],
        [37, 1.446],
        [38, 1.492],
        [39, 1.538],
        [40, 1.584]]
        },
        "Royal-MV-Mean": {
            label: "Royal Brompton MV Mean",
            data: [[16, 0.435],
        [17, 0.467],
        [18, 0.500],
        [19, 0.532],
        [20, 0.566],
        [21, 0.599],
        [22, 0.632],
        [23, 0.666],
        [24, 0.700],
        [25, 0.735],
        [26, 0.769],
        [27, 0.804],
        [28, 0.839],
        [29, 0.874],
        [30, 0.910],
        [31, 0.946],
        [32, 0.981],
        [33, 1.018],
        [34, 1.054],
        [35, 1.090],
        [36, 1.127],
        [37, 1.164],
        [38, 1.201],
        [39, 1.238],
        [40, 1.275]]
        },
        "Royal-MV-Lower": {
            label: "Royal Brompton MV Lower",
            data: [[16, 0.350],
        [17, 0.376],
        [18, 0.402],
        [19, 0.429],
        [20, 0.455],
        [21, 0.482],
        [22, 0.509],
        [23, 0.536],
        [24, 0.564],
        [25, 0.591],
        [26, 0.619],
        [27, 0.647],
        [28, 0.676],
        [29, 0.704],
        [30, 0.732],
        [31, 0.761],
        [32, 0.790],
        [33, 0.819],
        [34, 0.848],
        [35, 0.878],
        [36, 0.907],
        [37, 0.937],
        [38, 0.966],
        [39, 0.996],
        [40, 1.026]]
        }
    };
    // hard-code color indices to prevent them from shifting as
    // countries are turned on/off
    var i = 0;
    $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
    });

    // insert checkboxes 
    var choiceContainer = $("#choices");
    $.each(datasets, function(key, val) {
        choiceContainer.append('<br/><input type="checkbox" name="' + key +
                               '" checked="checked" id="id' + key + '">' +
                               '<label for="id' + key + '">'
                                + val.label + '</label>');
    });
    choiceContainer.find("input").click(plotAccordingToChoices);


    function plotAccordingToChoices() {
        var data = [];

        choiceContainer.find("input:checked").each(function() {
            var key = $(this).attr("name");
            if (key && datasets[key])
                data.push(datasets[key]);
        });

        if (data.length > 0)
            $.plot($("#placeholder"), data, {
                yaxis: { min: 0, max: 2},
                xaxis: { tickDecimals: 0 }
            });
    }

    plotAccordingToChoices();

});  //end ready fx