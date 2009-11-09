$(function() {
    var aovDatasets = [
         {
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
         {
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
 {
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
        }


    ];

        function plotAccordingToChoices1() {
        var data = aovDatasets;
        $.plot($("#placeholder"),
    data, {
        //options
        yaxis: {
            min: 0.1,
            max: 1.1
        },
        xaxis: {
            tickDecimals: 0
        },
        crosshair: { mode: 'xy' },
        grid: { hoverable: true }

    })

    }
    function plotAccordingToChoices2() {
        var data = aovDatasets;
        $.plot($("#placeholder"),
    data, {
        //options
        yaxis: {
            min: 0.1,
            max: 1.1,
            transform: function(v) { return Math.log(v); },
            inverseTransform: function(v) { return Math.exp(v); }

        },
        xaxis: {
            tickDecimals: 0,
            transform: function(v) { return Math.log(v); },
            inverseTransform: function(v) { return Math.exp(v); }

        },
        crosshair: { mode: 'xy' },
        grid: { hoverable: true }

    })
    }

    plotAccordingToChoices1();

    $('#Radio1').click(plotAccordingToChoices1);
    $('#Radio2').click(plotAccordingToChoices2);

    $("#placeholder").bind("plothover", function(event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
    });
});            //end ready fx