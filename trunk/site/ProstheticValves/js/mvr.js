var mvrDataSet = [
    ['Biocor', 'Stentless bioprosthesis', '27', '13 ± 1', '', '', '', ''],
    ['Biocor', 'Stentless bioprosthesis', '29', '14 ± 2.5', '', '', '', ''],
    ['Biocor', 'Stentless bioprosthesis', '31', '11.5 ± 0.5', '', '', '', ''],
    ['Biocor', 'Stentless bioprosthesis', '33', '12 ± 0.5', '', '', '', ''],
    ['Bioflo pericardial', 'Stented bioprosthesis', '25', '10 ± 2', '6.3 ± 1.5', '', '', '2 ± 0.1'],
    ['Bioflo pericardial', 'Stented bioprosthesis', '27', '9.5 ± 2.6', '5.4 ± 1.2', '', '', '2 ± 0.3'],
    ['Bioflo pericardial', 'Stented bioprosthesis', '29', '5 ± 2.8', '3.6 ± 1', '', '', '2.4 ± 0.2'],
    ['Bioflo pericardial', 'Stented bioprosthesis', '31', '4.0', '2.0', '', '', '2.3'],
    ['Bjork-Shiley', 'Tilting disc', '23', '', '', '1.7', '115', ''],
    ['Bjork-Shiley', 'Tilting disc', '25', '12 ± 4', '6 ± 2', '1.75 ± 0.38', '99 ± 27', '1.72 ± 0.6'],
    ['Bjork-Shiley', 'Tilting disc', '27', '10 ± 4', '5 ± 2', '1.6 ± 0.49', '89 ± 28', '1.81 ± 0.54'],
    ['Bjork-Shiley', 'Tilting disc', '29', '7.83 ± 2.93', '2.83 ± 1.27', '1.37 ± 0.25', '79 ± 17', '2.1 ± 0.43'],
    ['Bjork-Shiley', 'Tilting disc', '31', '6 ± 3', '2 ± 1.9', '1.41 ± 0.26', '70 ± 14', '2.2 ± 0.3'],
    ['Bjork-Shiley monostrut', 'Tilting disc', '23', '', '5.0', '1.9', '', ''],
    ['Bjork-Shiley monostrut', 'Tilting disc', '25', '13 ± 2.5', '5.57 ± 2.3', '1.8 ± 0.3', '', ''],
    ['Bjork-Shiley monostrut', 'Tilting disc', '27', '12 ± 2.5', '4.53 ± 2.2', '1.7 ± 0.4', '', ''],
    ['Bjork-Shiley monostrut', 'Tilting disc', '29', '13 ± 3', '4.26 ± 1.6', '1.6 ± 0.3', '', ''],
    ['Bjork-Shiley monostrut', 'Tilting disc', '31', '14 ± 4.5', '4.9 ± 1.6', '1.7 ± 0.3', '', ''],
    ['Carbomedics', 'Bileaflet', '23', '', '', '1.9 ± 0.1', '126 ± 7', ''],
    ['Carbomedics', 'Bileaflet', '25', '10.3 ± 2.3', '3.6 ± 0.6', '1.3 ± 0.1', '93 ± 8', '2.9 ± 0.8'],
    ['Carbomedics', 'Bileaflet', '27', '8.79 ± 3.46', '3.46 ± 1.03', '1.61 ± 0.3', '89 ± 20', '2.9 ± 0.75'],
    ['Carbomedics', 'Bileaflet', '29', '8.78 ± 2.9', '3.39 ± 0.97', '1.52 ± 0.3', '88 ± 17', '2.3 ± 0.4'],
    ['Carbomedics', 'Bileaflet', '31', '8.87 ± 2.34', '3.32 ± 0.87', '1.61 ± 0.29', '92 ± 24', '2.8 ± 1.14'],
    ['Carbomedics', 'Bileaflet', '33', '8.8 ± 2.2', '4.8 ± 2.5', '1.5 ± 0.2', '93 ± 12', ''],
    ['Carpentier-Edwards', 'Stented bioprosthesis', '27', '', '6 ± 2', '1.7 ± 0.3', '98 ± 28', ''],
    ['Carpentier-Edwards', 'Stented bioprosthesis', '29', '', '4.7 ± 2', '1.76 ± 0.27', '92 ± 14', ''],
    ['Carpentier-Edwards', 'Stented bioprosthesis', '31', '', '4.4 ± 2', '1.54 ± 0.15', '92 ± 19', ''],
    ['Carpentier-Edwards', 'Stented bioprosthesis', '33', '', '6 ± 3', '', '93 ± 12', ''],
    ['Carpentier-Edwards pericardial', 'Stented Bioprosthesis', '27', '', '3.6', '1.6', '100', ''],
    ['Carpentier-Edwards pericardial', 'Stented Bioprosthesis', '29', '', '5.25 ± 2.36', '1.67 ± 0.3', '110 ± 15', ''],
    ['Carpentier-Edwards pericardial', 'Stented Bioprosthesis', '31', '', '4.05 ± 0.83', '1.53 ± 0.1', '90 ± 11', ''],
    ['Carpentier-Edwards pericardial', 'Stented Bioprosthesis', '23', '', '1.0', '0.8', '80', ''],
    ['Duromedics', 'Bileaflet', '27', '13 ± 6', '5 ± 3', '1.61 ± 0.4', '75 ± 12', ''],
    ['Duromedics', 'Bileaflet', '29', '10 ± 4', '3 ± 1', '1.40 ± 0.25', '85 ± 22', ''],
    ['Duromedics', 'Bileaflet', '31', '10.5 ± 4.33', '3.3 ± 1.36', '1.38 ± 0.27', '81 ± 12', ''],
    ['Duromedics', 'Bileaflet', '33', '11.2', '2.5', '', '85', ''],
    ['Hancock I (or NOS)', 'Stented bioprosthesis', '27', '10 ± 4', '5 ± 2', '', '', '1.3 ± 0.8'],
    ['Hancock I (or NOS)', 'Stented bioprosthesis', '29', '7 ± 3', '2.46 ± 0.79', '', '115 ± 20', '1.5 ± 0.2'],
    ['Hancock I (or NOS)', 'Stented bioprosthesis', '31', '4 ± 0.86', '4.86 ± 1.69', '', '95 ± 17', '1.6 ± 0.2'],
    ['Hancock I (or NOS)', 'Stented bioprosthesis', '33', '3 ± 2', '3.87 ± 2', '', '90 ± 12', '1.9 ± 0.2'],
    ['Hancock II', 'Stented bioprosthesis', '27', '', '', '', '', '2.21 ± 0.14'],
    ['Hancock II', 'Stented bioprosthesis', '29', '', '', '', '', '2.77 ± 0.11'],
    ['Hancock II', 'Stented bioprosthesis', '31', '', '', '', '', '2.84 ± 0.1'],
    ['Hancock II', 'Stented bioprosthesis', '33', '', '', '', '', '3.15 ± 0.22'],
    ['Hancock pericardial', 'Stented bioprosthesis', '29', '', '2.61 ± 1.39', '1.42 ± 0.14', '105 ± 36', ''],
    ['Hancock pericardial', 'Stented bioprosthesis', '31', '', '3.57 ± 1.02', '1.51 ± 0.27', '81 ± 23', ''],
    ['Ionescu-Shiley', 'Stented bioprosthesis', '25', '', '4.87 ± 1.08', '1.43 ± 0.15', '93 ± 11', ''],
    ['Ionescu-Shiley', 'Stented bioprosthesis', '27', '', '3.21 ± 0.82', '1.31 ± 0.24', '100 ± 28', ''],
    ['Ionescu-Shiley', 'Stented bioprosthesis', '29', '', '3.22 ± 0.57', '1.38 ± 0.2', '85 ± 8', ''],
    ['Ionescu-Shiley', 'Stented bioprosthesis', '31', '', '3.63 ± 0.9', '1.45 ± 0.06', '100 ± 36', ''],
    ['Ionescu-Shiley low profile', 'Stented bioprosthesis', '29', '', '3.31 ± 0.96', '1.36 ± 0.25', '80 ± 30', ''],
    ['Ionescu-Shiley low profile', 'Stented bioprosthesis', '31', '', '2.74 ± 0.37', '1.33 ± 0.14', '79 ± 15', ''],
    ['Labcor-Santiago pericardial', 'Stented bioprosthesis', '25', '8.7', '4.5', '', '97', '2.2'],
    ['Labcor-Santiago pericardial', 'Stented bioprosthesis', '27', '5.6 ± 2.3', '2.8 ± 1.5', '', '85 ± 18', '2.12 ± 0.48'],
    ['Labcor-Santiago pericardial', 'Stented bioprosthesis', '29', '6.2 ± 2.1', '3 ± 1.3', '', '80 ± 34', '2.11 ± 0.73'],
    ['Lillehei-Kaster', 'Tilting disc', '18', '', '', '1.7', '140', ''],
    ['Lillehei-Kaster', 'Tilting disc', '20', '', '', '1.7', '67', ''],
    ['Lillehei-Kaster', 'Tilting disc', '22', '', '', '1.56 ± 0.09', '94 ± 22', ''],
    ['Lillehei-Kaster', 'Tilting disc', '25', '', '', '1.38 ± 0.27', '124 ± 46', ''],
    ['Medtronic Hall', 'Tilting disc', '27', '', '', '1.4', '78', ''],
    ['Medtronic Hall', 'Tilting disc', '29', '', '', '1.57 ± 0.1', '69 ± 15', ''],
    ['Medtronic Hall', 'Tilting disc', '31', '', '', '1.45 ± 0.12', '77 ± 17', ''],
    ['Medtronic Intact Porcine', 'Stented bioprosthesis', '29', '', '3.5 ± 0.51', '1.6 ± 0.22', '', ''],
    ['Medtronic Intact Porcine', 'Stented bioprosthesis', '31', '', '4.2 ± 1.44', '1.6 ± 0.26', '', ''],
    ['Medtronic Intact Porcine', 'Stented bioprosthesis', '33', '', '4 ± 1.3', '1.4 ± 0.24', '', ''],
    ['Medtronic Intact Porcine', 'Stented bioprosthesis', '35', '', '3.2 ± 1.77', '1.3 ± 0.5', '', ''],
    ['Mitroflow', 'Stented bioprosthesis', '25', '', '6.9', '2.0', '90', ''],
    ['Mitroflow', 'Stented bioprosthesis', '27', '', '3.07 ± 0.91', '1.5', '90 ± 20', ''],
    ['Mitroflow', 'Stented bioprosthesis', '29', '', '3.5 ± 1.65', '1.43 ± 0.29', '102 ± 21', ''],
    ['Mitroflow', 'Stented bioprosthesis', '31', '', '3.85 ± 0.81', '1.32 ± 0.26', '91 ± 22', ''],
    ['Omnicarbon', 'Tilting disc', '23', '', '8.0', '', '', ''],
    ['Omnicarbon', 'Tilting disc', '25', '', '6.05 ± 1.81', '1.77 ± 0.24', '102 ± 16', ''],
    ['Omnicarbon', 'Tilting disc', '27', '', '4.89 ± 2.05', '1.63 ± 0.36', '105 ± 33', ''],
    ['Omnicarbon', 'Tilting disc', '29', '', '4.93 ± 2.16', '1.56 ± 0.27', '120 ± 40', ''],
    ['Omnicarbon', 'Tilting disc', '31', '', '4.18 ± 1.4', '1.3 ± 0.23', '134 ± 31', ''],
    ['Omnicarbon', 'Tilting disc', '33', '', '4 ± 2', '', '', ''],
    ['On-X', 'Bileaflet', '25', '11.5 ± 3.2', '5.3 ± 2.1', '', '', '1.9 ± 1.1'],
    ['On-X', 'Bileaflet', '27', '10.3 ± 4.5', '4.5 ± 1.6', '', '', '2.2 ± 0.5'],
    ['On-X', 'Bileaflet', '29', '10.3 ± 4.5', '4.5 ± 1.6', '', '', '2.2 ± 0.5'],
    ['On-X', 'Bileaflet', '31', '9.8 ± 3.8', '4.8 ± 2.4', '', '', '2.5 ± 1.1'],
    ['On-X', 'Bileaflet', '33', '9.8 ± 3.8', '4.8 ± 2.4', '', '', '2.5 ± 1.1'],
    ['Sorin Allcarbon', 'Tilting disc', '25', '15 ± 0.25', '4 ± 0.5', '1.95 ± 0.02', '70 ± 1', ''],
    ['Sorin Allcarbon', 'Tilting disc', '27', '11 ± 2.75', '4 ± 0.5', '1.65 ± 0.21', '82 ± 20', ''],
    ['Sorin Allcarbon', 'Tilting disc', '29', '12 ± 3', '4 ± 1.25', '1.73 ± 0.22', '80 ± 14', ''],
    ['Sorin Allcarbon', 'Tilting disc', '31', '10 ± 1.5', '4 ± 1', '1.66 ± 0.11', '83 ± 14', ''],
    ['St. Jude Medical', 'Bileaflet', '23', '', '4.0', '1.5', '160', '1.0'],
    ['St. Jude Medical', 'Bileaflet', '25', '', '2.5 ± 1', '1.34 ± 1.12', '75 ± 4', '1.35 ± 0.17'],
    ['St. Jude Medical', 'Bileaflet', '27', '11 ± 4', '5 ± 1.82', '1.61 ± 0.29', '75 ± 10', '1.67 ± 0.17'],
    ['St. Jude Medical', 'Bileaflet', '29', '10 ± 3', '4.15 ± 1.8', '1.57 ± 0.29', '85 ± 10', '1.75 ± 0.24'],
    ['St. Jude Medical', 'Bileaflet', '31', '12 ± 6', '4.46 ± 2.22', '1.59 ± 0.33', '74 ± 13', '2.03 ± 0.32'],
    ['Starr-Edwards', 'Caged ball', '26', '', '10.0', '', '', '1.4'],
    ['Starr-Edwards', 'Caged ball', '28', '', '7 ± 2.75', '', '', '1.9 ± 0.57'],
    ['Starr-Edwards', 'Caged ball', '30', '12.2 ± 4.6', '6.99 ± 2.5', '1.7 ± 0.3', '125 ± 25', '1.65 ± 0.4'],
    ['Starr-Edwards', 'Caged ball', '32', '11.5 ± 4.2', '5.08 ± 2.5', '1.7 ± 0.3', '110 ± 25', '1.98 ± 0.4'],
    ['Starr-Edwards', 'Caged ball', '34', '', '5.0', '', '', '2.6'],
    ['Stentless quadrileaflet bovine pericardial', 'Stentless bioprosthesis', '26', '', '2.2 ± 1.7', '1.6', '103 ± 31', '1.7'],
    ['Stentless quadrileaflet bovine pericardial', 'Stentless bioprosthesis', '28', '', '', '1.58 ± 0.25', '', '1.7 ± 0.6'],
    ['Stentless quadrileaflet bovine pericardial', 'Stentless bioprosthesis', '30', '', '', '1.42 ± 0.32', '', '2.3 ± 0.4'],
    ['Wessex', 'Stented bioprosthesis', '29', '', '3.69 ± 0.61', '1.66 ± 0.17', '83 ± 19', ''],
    ['Wessex', 'Stented bioprosthesis', '31', '', '3.31 ± 0.83', '1.41 ± 0.25', '80 ± 21', '']
];
var mvrColumns = [{
    "sTitle": "Valve"
},
{
    "sTitle": "Type"
},
{
    "sTitle": "Size (mm)"
},
{
    "sTitle": "Peak gr. (mmHg)",
    "bSearchable": false
},
{
    "sTitle": "Mean gr. (mmHg)",
    "bSearchable": false
},
{
    "sTitle": "Peak v. (m/s)",
    "bSearchable": false
},
{
    "sTitle": "Pres. 1/2 t (ms)",
    "bSearchable": false
},
{
    "sTitle": "EOA (cm2)",
    "bSearchable": false
}];
$(document).ready(function() {
    $('#mvrTable').dataTable({
        "aaData": mvrDataSet,
        "aoColumns": mvrColumns,
        "bPaginate": false,
        "fnRowCallback": function(nRow, aData, iDisplayIndex) {
            /* Append the grade to the default row class name */
            if (aData[1] == "Bileaflet") {
                $(nRow).addClass('Bileaflet');
            }
            return nRow;
        }
    });
    $('#mvrTable_filter input').val('Example: 29 med').addClass('search_init');
    $("#mvrTable_filter input").focus(function() {
        if (this.className == "search_init") {
            this.className = "";
            this.value = "";
        }
    });
    $("#mvrTable_filter input").blur(function() {
        if (this.value == "") {
            this.className = "search_init";
            this.value = "Example: 29 med";
        }
    });

});