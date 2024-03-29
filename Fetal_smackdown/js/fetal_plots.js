﻿$(function() {
    var aovDatasets = {
        "Boston-AoV-Upper": {
            label: "Boston AoV Upper",
            data: [[16, 0.261],
            [17, 0.288],
            [18, 0.316],
            [19, 0.343],
            [20, 0.371],
            [21, 0.398],
            [22, 0.426],
            [23, 0.453],
            [24, 0.481],
            [25, 0.509],
            [26, 0.536],
            [27, 0.564],
            [28, 0.591],
            [29, 0.619],
            [30, 0.646],
            [31, 0.674],
            [32, 0.701],
            [33, 0.729],
            [34, 0.757],
            [35, 0.784],
            [36, 0.812],
            [37, 0.839],
            [38, 0.867],
            [39, 0.894],
            [40, 0.922]]
        },
        "Boston-AoV-Mean": {
            label: "Boston AoV Mean",
            data: [[16, 0.215],
                [17, 0.239],
                [18, 0.263],
                [19, 0.287],
                [20, 0.311],
                [21, 0.336],
                [22, 0.360],
                [23, 0.384],
                [24, 0.408],
                [25, 0.432],
                [26, 0.456],
                [27, 0.480],
                [28, 0.505],
                [29, 0.529],
                [30, 0.553],
                [31, 0.577],
                [32, 0.601],
                [33, 0.625],
                [34, 0.650],
                [35, 0.674],
                [36, 0.698],
                [37, 0.722],
                [38, 0.746],
                [39, 0.770],
                [40, 0.794]]
        },
        "Boston-AoV-Lower": {
            label: "Boston AoV Lower",
            data: [[16, 0.169],
                [17, 0.190],
                [18, 0.211],
                [19, 0.231],
                [20, 0.252],
                [21, 0.273],
                [22, 0.294],
                [23, 0.314],
                [24, 0.335],
                [25, 0.356],
                [26, 0.377],
                [27, 0.397],
                [28, 0.418],
                [29, 0.439],
                [30, 0.460],
                [31, 0.480],
                [32, 0.501],
                [33, 0.522],
                [34, 0.543],
                [35, 0.563],
                [36, 0.584],
                [37, 0.605],
                [38, 0.626],
                [39, 0.646],
                [40, 0.667]]
        },
        "Royal-Aov-Upper": {
            label: "Royal Brompton AoV Upper",
            data: [[16, 0.271],
                [17, 0.293],
                [18, 0.314],
                [19, 0.337],
                [20, 0.359],
                [21, 0.382],
                [22, 0.405],
                [23, 0.429],
                [24, 0.452],
                [25, 0.476],
                [26, 0.500],
                [27, 0.525],
                [28, 0.549],
                [29, 0.574],
                [30, 0.599],
                [31, 0.625],
                [32, 0.650],
                [33, 0.676],
                [34, 0.702],
                [35, 0.728],
                [36, 0.755],
                [37, 0.781],
                [38, 0.808],
                [39, 0.835],
                [40, 0.862]]
        },
        "Royal-Aov-Mean": {
            label: "Royal Brompton AoV Mean",
            data: [[16, 0.219],
                [17, 0.237],
                [18, 0.254],
                [19, 0.272],
                [20, 0.291],
                [21, 0.309],
                [22, 0.328],
                [23, 0.347],
                [24, 0.366],
                [25, 0.385],
                [26, 0.405],
                [27, 0.425],
                [28, 0.445],
                [29, 0.465],
                [30, 0.485],
                [31, 0.506],
                [32, 0.526],
                [33, 0.547],
                [34, 0.568],
                [35, 0.589],
                [36, 0.611],
                [37, 0.632],
                [38, 0.654],
                [39, 0.676],
                [40, 0.698]]
        },
        "Royal-Aov-Lower": {
            label: "Royal Brompton AoV Lower",
            data: [[16, 0.178],
                [17, 0.192],
                [18, 0.206],
                [19, 0.221],
                [20, 0.235],
                [21, 0.250],
                [22, 0.265],
                [23, 0.281],
                [24, 0.296],
                [25, 0.312],
                [26, 0.328],
                [27, 0.344],
                [28, 0.360],
                [29, 0.376],
                [30, 0.393],
                [31, 0.409],
                [32, 0.426],
                [33, 0.443],
                [34, 0.460],
                [35, 0.477],
                [36, 0.494],
                [37, 0.512],
                [38, 0.529],
                [39, 0.547],
                [40, 0.565]]
        }
    };
    var mvDatasets = {
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
    // values are turned on/off
    var i = 0;
    $.each(mvDatasets, function(key, val) {
        val.color = i;
        ++i;
    });
    var i = 0;
    $.each(aovDatasets, function(key, val) {
        val.color = i;
        ++i;
    });

    // insert checkboxes
    var choiceContainer1 = $("#mv-choices");
    $.each(mvDatasets, function(key, val) {
        choiceContainer1.append('<br/><input type="checkbox" name="' + key +
                               '" checked="checked" id="id' + key + '">' +
                               '<label for="id' + key + '">'
                                + val.label + '</label>');
    });
    choiceContainer1.find("input").click(plotAccordingToChoices1);

    var choiceContainer2 = $("#aov-choices");
    $.each(aovDatasets, function(key, val) {
        choiceContainer2.append('<br/><input type="checkbox" name="' + key +
                               '" checked="checked" id="id' + key + '">' +
                               '<label for="id' + key + '">'
                                + val.label + '</label>');
    });
    choiceContainer2.find("input").click(plotAccordingToChoices2);


    function plotAccordingToChoices1() {
        var data = [];

        choiceContainer1.find("input:checked").each(function() {
            var key = $(this).attr("name");
            if (key && mvDatasets[key])
                data.push(mvDatasets[key]);
        });

        if (data.length > 0)
            $.plot($("#mv-placeholder"), data, {
                yaxis: { min: 0, max: 2 },
                xaxis: { tickDecimals: 0 }
            });
    }
    function plotAccordingToChoices2() {
        var data = [];

        choiceContainer2.find("input:checked").each(function() {
        var key = $(this).attr("name");
        if (key && aovDatasets[key])
                data.push(aovDatasets[key]);
        });

        if (data.length > 0)
            $.plot($("#aov-placeholder"), data, {
                yaxis: { min: 0, max: 1 },
                xaxis: { tickDecimals: 0 }
            });
    }

    plotAccordingToChoices1();
    plotAccordingToChoices2();

});            //end ready fx