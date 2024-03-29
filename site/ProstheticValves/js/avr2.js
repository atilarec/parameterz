﻿var avrDataSet = [
    ['ATS', 'Bileaflet', '19', '47.0± 12.6', '25.3± 8', '1.1± 0.3'],
    ['ATS', 'Bileaflet', '21', '23.7± 6.8', '15.9± 5.0', '1.4± 0.5'],
    ['ATS', 'Bileaflet', '23', '', '14.4± 4.9', '1.7± 0.5'],
    ['ATS', 'Bileaflet', '25', '', '11.3± 3.7', '2.1± 0.7'],
    ['ATS', 'Bileaflet', '27', '', '8.4± 3.7', '2.5± 0.1'],
    ['ATS', 'Bileaflet', '29', '', '8.0± 3.0', '3.1± 0.8'],
    ['ATS AP', 'Bileaflet', '18', '', '21.0± 1.8', '1.2± 0.3'],
    ['ATS AP', 'Bileaflet', '20', '21.4± 4.2', '11.1± 3.5', '1.3± 0.3'],
    ['ATS AP', 'Bileaflet', '22', '18.7± 8.3', '10.5± 4.5', '1.7± 0.4'],
    ['ATS AP', 'Bileaflet', '24', '15.1± 5.6', '7.5± 3.1', '2.0± 0.6'],
    ['ATS AP', 'Bileaflet', '26', '', '6.0± 2.0', '2.1± 0.4'],
    ['Baxter Perimount', 'Stented bovine pericardial', '19', '32.5± 8.5', '19.5± 5.5', '1.3± 0.2'],
    ['Baxter Perimount', 'Stented bovine pericardial', '21', '24.9± 7.7', '13.8± 4.0', '1.3± 0.3'],
    ['Baxter Perimount', 'Stented bovine pericardial', '23', '19.9± 7.4', '11.5± 3.9', '1.6± 0.3'],
    ['Baxter Perimount', 'Stented bovine pericardial', '25', '16.5± 7.8', '10.7± 3.8', '1.6± 0.4'],
    ['Baxter Perimount', 'Stented bovine pericardial', '27', '12.8± 5.4', '4.8± 2.2', '2.0± 0.4'],
    ['Biocor', 'Stented porcine', '23', '30.0± 10.7', '20± 6.6', '1.3± 0.3'],
    ['Biocor', 'Stented porcine', '25', '23.0± 7.9', '16± 5.1', '1.7± 0.4'],
    ['Biocor', 'Stented porcine', '27', '22.0± 6.5', '15.0± 3.7', '2.2± 0.4'],
    ['Extended Biocor', 'Stentless', '19', '17.5± 6.5', '9.6± 3.6', '1.4± 0.4'],
    ['Extended Biocor', 'Stentless', '21', '17.5± 6.5', '9.6± 3.6', '1.4± 0.4'],
    ['Extended Biocor', 'Stentless', '23', '14.7± 7.3', '7.7± 3.8', '1.7± 0.4'],
    ['Extended Biocor', 'Stentless', '25', '14.0± 4.3', '7.4± 2.5', '1.8± 0.4'],
    ['Bioflo', 'Stented bovine pericardial', '19', '37.2± 8.8', '26.4± 5.5', '0.7± 0.1'],
    ['Bioflo', 'Stented bovine pericardial', '21', '28.7± 6.2', '18.7± 5.5', '1.1± 0.1'],
    ['Bjork-Shiley', 'Single tilting disc', '21', '38.9± 11.9', '21.8± 3.4', '1.1± 0.3'],
    ['Bjork-Shiley', 'Single tilting disc', '23', '28.8± 11.2', '15.7± 5.3', '1.3± 0.3'],
    ['Bjork-Shiley', 'Single tilting disc', '25', '23.7± 8.2', '13.0± 5.0', '1.5± 0.4'],
    ['Bjork-Shiley', 'Single tilting disc', '27', '', '10.0± 2.0', '1.6± 0.3'],
    ['Carbomedics Reduced', 'Bileaflet', '19', '43.4± 1.2', '24.4± 1.2', '1.2± 0.1'],
    ['Carbomedics Standard', 'Bileaflet', '19', '38.0± 12.8', '18.9± 8.3', '1.0± 0.3'],
    ['Carbomedics Standard', 'Bileaflet', '21', '26.8± 10.1', '12.9± 5.4', '1.5± 0.4'],
    ['Carbomedics Standard', 'Bileaflet', '23', '22.5± 7.4', '11.0± 4.6', '1.4± 0.3'],
    ['Carbomedics Standard', 'Bileaflet', '25', '19.6± 7.8', '9.1± 3.5', '1.8± 0.4'],
    ['Carbomedics Standard', 'Bileaflet', '27', '17.5± 7.1', '7.9± 3.2', '2.2± 0.2'],
    ['Carbomedics Standard', 'Bileaflet', '29', '9.1± 4.7', '5.6± 3.0', '3.2± 1.6'],
    ['Carbomedics Tophat', 'Bileaflet', '21', '30.2± 10.9', '14.9± 5.4', '1.2± 0.3'],
    ['Carbomedics Tophat', 'Bileaflet', '23', '24.2± 7.6', '12.5± 4.4', '1.4± 0.4'],
    ['Carbomedics Tophat', 'Bileaflet', '25', '', '9.5± 2.9', '1.6± 0.32'],
    ['Carpentier Edwards Pericardial', 'Stented bovine pericardial', '19', '32.1± 3.4', '24.2± 8.6', '1.2± 0.3'],
    ['Carpentier Edwards Pericardial', 'Stented bovine pericardial', '21', '25.7± 9.9', '20.3± 9.1', '1.5± 0.4'],
    ['Carpentier Edwards Pericardial', 'Stented bovine pericardial', '23', '21.7± 8.6', '13.0± 5.3', '1.8± 0.3'],
    ['Carpentier Edwards Pericardial', 'Stented bovine pericardial', '25', '16.5± 5.4', '9.0± 2.3', ''],
    ['Carpentier Edwards Standard', 'Stented porcine', '19', '43.5± 12.7', '25.6± 8.0', '0.9± 0.2'],
    ['Carpentier Edwards Standard', 'Stented porcine', '21', '27.7± 7.6', '17.3± 6.2', '1.5± 0.3'],
    ['Carpentier Edwards Standard', 'Stented porcine', '23', '28.9± 7.5', '16.1± 6.2', '1.7± 0.5'],
    ['Carpentier Edwards Standard', 'Stented porcine', '25', '24.0± 7.1', '12.9± 4.6', '1.9± 0.5'],
    ['Carpentier Edwards Standard', 'Stented porcine', '27', '22.1± 8.2', '12.1± 5.5', '2.3± 0.6'],
    ['Carpentier Edwards Standard', 'Stented porcine', '29', '', '9.9± 2.9', '2.8± 0.5'],
    ['Carpentier Supra-Annular', 'Stented porcine', '19', '34.1± 2.7', '', '1.1± 0.1'],
    ['Carpentier Supra-Annular', 'Stented porcine', '21', '28.0± 10.5', '17.5± 3.8', '1.4± 0.9'],
    ['Carpentier Supra-Annular', 'Stented porcine', '23', '25.3± 10.5', '13.4± 4.5', '1.6± 0.6'],
    ['Carpentier Supra-Annular', 'Stented porcine', '25', '24.4± 7.6', '13.2± 4.8', '1.8± 0.4'],
    ['Carpentier Supra-Annular', 'Stented porcine', '27', '16.7± 4.7', '8.8± 2.8', '1.9± 0.7'],
    ['Cryolife', 'Stentless', '19', '', '9.0± 2.0', '1.5± 0.3'],
    ['Cryolife', 'Stentless', '21', '', '6.6± 2.9', '1.7± 0.4'],
    ['Cryolife', 'Stentless', '23', '', '6.0± 2.3', '2.3± 0.2'],
    ['Cryolife', 'Stentless', '25', '', '6.1± 2.6', '2.6± 0.2'],
    ['Cryolife', 'Stentless', '27', '', '4.0± 2.4', '2.8± 0.3'],
    ['Edwards Duromedics', 'Bileaflet', '21', '39.0± 13', '', ''],
    ['Edwards Duromedics', 'Bileaflet', '23', '32.0± 8.0', '', ''],
    ['Edwards Duromedics', 'Bileaflet', '25', '26.0± 10.0', '', ''],
    ['Edwards Duromedics', 'Bileaflet', '27', '24.0± 10.0', '', ''],
    ['Edwards Mira', 'Bileaflet', '19', '', '18.2± 5.3', '1.2± 0.4'],
    ['Edwards Mira', 'Bileaflet', '21', '', '13.3± 4.3', '1.6± 0.4'],
    ['Edwards Mira', 'Bileaflet', '23', '', '14.7± 2.8', '1.6± 0.6'],
    ['Edwards Mira', 'Bileaflet', '25', '', '13.1± 3.8', '1.9'],
    ['Hancock', 'Stented porcine', '21', '18.0± 6.0', '12.0± 2.0', ''],
    ['Hancock', 'Stented porcine', '23', '16.0± 2.0', '11.0± 2.0', ''],
    ['Hancock', 'Stented porcine', '25', '15.0± 3.0', '10.0± 3.0', ''],
    ['Hancock II', 'Stented porcine', '21', '', '14.8± 4.1', '1.3± 0.4'],
    ['Hancock II', 'Stented porcine', '23', '34.0± 13.0', '16.6± 8.5', '1.3± 0.4'],
    ['Hancock II', 'Stented porcine', '25', '22.0± 5.3', '10.8± 2.8', '1.6± 0.4'],
    ['Hancock II', 'Stented porcine', '29', '16.2± 1.5', '8.2± 1.7', '1.6± 0.2'],
    ['Homograft', 'Homograft valves', '??', '??', '??', '??'],
    ['Intact', 'Stented porcine', '19', '40.4± 15.4', '24.5± 9.3', ''],
    ['Intact', 'Stented porcine', '21', '40.9± 15.6', '19.6± 8.1', '1.6± 0.4'],
    ['Intact', 'Stented porcine', '23', '32.7± 9.6', '19.0± 6.1', '1.6± 0.4'],
    ['Intact', 'Stented porcine', '25', '29.7± 15.0', '17.7± 7.9', '1.7± 0.3'],
    ['Intact', 'Stented porcine', '27', '25.0± 7.6', '15.0± 4.5', ''],
    ['Ionescu-Shiley', 'Stented bovine pericardial', '17', '23.8± 3.4', '', '0.9± 0.1'],
    ['Ionescu-Shiley', 'Stented bovine pericardial', '19', '19.7± 5.9', '13.3± 3.9', '1.1± 0.1'],
    ['Ionescu-Shiley', 'Stented bovine pericardial', '21', '26.6± 9.0', '', ''],
    ['Ionescu-Shiley', 'Stented bovine pericardial', '23', '', '15.6± 4.4', ''],
    ['Labcor Santiago', 'Stented bovine pericardial', '19', '18.6± 5.0', '11.8± 3.3', '1.2± 0.1'],
    ['Labcor Santiago', 'Stented bovine pericardial', '21', '17.5± 6.6', '8.2± 4.5', '1.3± 0.1'],
    ['Labcor Santiago', 'Stented bovine pericardial', '23', '14.8± 5.2', '7.8± 2.9', '1.8± 0.2'],
    ['Labcor Santiago', 'Stented bovine pericardial', '25', '12.3± 3.4', '6.8± 2.0', '2.1± 0.3'],
    ['Labcor Synergy', 'Stented porcine', '21', '24.3± 8.1', '13.3± 4.2', '1.1± 0.3'],
    ['Labcor Synergy', 'Stented porcine', '23', '27.3± 13.7', '15.3± 6.9', '1.4± 0.4'],
    ['Labcor Synergy', 'Stented porcine', '25', '22.5± 11.9', '13.2± 6.4', '1.5± 0.4'],
    ['Labcor Synergy', 'Stented porcine', '27', '17.8± 7.0', '10.6± 4.6', '1.8± 0.5'],
    ['MCRI On-X', 'Bileaflet', '19', '21.3± 10.8', '11.8± 3.4', '1.5± 0.2'],
    ['MCRI On-X', 'Bileaflet', '21', '16.4± 5.9', '9.9± 3.6', '1.7± 0.4'],
    ['MCRI On-X', 'Bileaflet', '23', '15.9± 6.4', '8.6± 3.4', '1.9± 0.6'],
    ['MCRI On-X', 'Bileaflet', '25', '16.5± 10.2', '6.9± 4.3', '2.4± 0.6'],
    ['Medtronic Advantage', 'Bileaflet', '23', '', '10.4± 3.1', '2.2± 0.3'],
    ['Medtronic Advantage', 'Bileaflet', '25', '', '9.0± 3.7', '2.8± 0.6'],
    ['Medtronic Advantage', 'Bileaflet', '27', '', '7.6± 3.6', '3.3± 0.7'],
    ['Medtronic Advantage', 'Bileaflet', '29', '', '6.1± 3.8', '3.9±0.7'],
    ['Medtronic Freestyle', 'Stentless', '19', '', '13.0± 3.9', ''],
    ['Medtronic Freestyle', 'Stentless', '21', '', '9.1± 5.1', '1.4± 0.3'],
    ['Medtronic Freestyle', 'Stentless', '23', '11.0± 4.0', '8.1± 4.6', '1.7± 0.5'],
    ['Medtronic Freestyle', 'Stentless', '25', '', '5.3± 3.1', '2.1± 0.5'],
    ['Medtronic Freestyle', 'Stentless', '27', '', '4.6± 3.1', '2.5± 0.1'],
    ['Medtronic Hall', 'Single tilting disc', '20', '34.4± 13.1', '17.1± 5.3', '1.2± 0.5'],
    ['Medtronic Hall', 'Single tilting disc', '21', '26.9± 10.5', '14.1± 5.9', '1.1± 0.2'],
    ['Medtronic Hall', 'Single tilting disc', '23', '26.9± 8.9', '13.5± 4.8', '1.4± 0.4'],
    ['Medtronic Hall', 'Single tilting disc', '25', '17.1± 7.0', '9.5± 4.3', '1.5± 0.5'],
    ['Medtronic Hall', 'Single tilting disc', '27', '18.9± 9.7', '8.7± 5.6', '1.9± 0.2'],
    ['Medtronic Mosaic', 'Stented porcine', '21', '', '14.2± 5.0', '1.4± 0.4'],
    ['Medtronic Mosaic', 'Stented porcine', '23', '23.8± 11.0', '13.7± 4.8', '1.5± 0.4'],
    ['Medtronic Mosaic', 'Stented porcine', '25', '22.5± 10.0', '11.7± 5.1', '1.8± 0.5'],
    ['Medtronic Mosaic', 'Stented porcine', '27', '', '10.4± 4.3', '1.9± 0.1'],
    ['Medtronic Mosaic', 'Stented porcine', '29', '', '11.1± 4.3', '2.1± 0.2'],
    ['Mitroflow', 'Stented bovine pericardial', '19', '18.6± 5.3', '13.1± 3.3', '1.1± 0.2'],
    ['Monostrut Bjork-Shiley', 'Single tilting disc', '19', '', '27.4± 8.8', ''],
    ['Monostrut Bjork-Shiley', 'Single tilting disc', '21', '27.5± 3.1', '20.5± 6.2', ''],
    ['Monostrut Bjork-Shiley', 'Single tilting disc', '23', '20.3± 0.7', '17.4± 6.4', ''],
    ['Monostrut Bjork-Shiley', 'Single tilting disc', '25', '', '16.1± 4.9', ''],
    ['Monostrut Bjork-Shiley', 'Single tilting disc', '27', '', '11.4± 3.8', ''],
    ['Prima', 'Stentless', '21', '28.8± 6.0', '13.7± 1.9', '1.4± 0.7'],
    ['Prima', 'Stentless', '23', '21.5± 7.5', '11.5± 4.9', '1.5± 0.3'],
    ['Prima', 'Stentless', '25', '22.1± 12.5', '11.6± 7.2', '1.8± 0.5'],
    ['Omnicarbon', 'Single tilting disc', '21', '37.4± 12.8', '20.4± 5.4', '1.3± 0.5'],
    ['Omnicarbon', 'Single tilting disc', '23', '28.8± 9.1', '17.4± 4.9', '1.5± 0.3'],
    ['Omnicarbon', 'Single tilting disc', '25', '23.7± 8.1', '13.2± 4.6', '1.9± 0.5'],
    ['Omnicarbon', 'Single tilting disc', '27', '20.1± 4.2', '12.4± 2.9', '2.1± 0.4'],
    ['Omniscience', 'Single tilting disc', '21', '50.8± 2.8', '28.2± 2.2', '0.9± 0.1'],
    ['Omniscience', 'Single tilting disc', '23', '39.8± 8.7', '20.1± 5.1', '1.0± 0.1'],
    ['Starr Edwards', 'Caged ball', '23', '32.6± 12.8', '22.0± 9.0', '1.1± 0.2'],
    ['Starr Edwards', 'Caged ball', '24', '34.1± 10.3', '22.1± 7.5', '1.1± 0.3'],
    ['Starr Edwards', 'Caged ball', '26', '31.8± 9.0', '19.7± 6.1', ''],
    ['Starr Edwards', 'Caged ball', '27', '30.8± 6.3', '18.5± 3.7', ''],
    ['Starr Edwards', 'Caged ball', '29', '29.0± 9.3', '16.3± 5.5', ''],
    ['Sorin Bicarbon', 'Bileaflet', '19', '30.1± 4.5', '16.7± 2.0', '1.4± 0.1'],
    ['Sorin Bicarbon', 'Bileaflet', '21', '22.0± 7.1', '10.0± 3.3', '1.2± 0.4'],
    ['Sorin Bicarbon', 'Bileaflet', '23', '16.8± 6.1', '7.7± 3.3', '1.5± 0.2'],
    ['Sorin Bicarbon', 'Bileaflet', '25', '11.2± 3.1', '5.6± 1.6', '2.4± 0.3'],
    ['Sorin Pericarbon', 'Stentless', '19', '36.5± 9.0', '28.9± 7.3', '1.2± 0.5'],
    ['Sorin Pericarbon', 'Stentless', '21', '28.0± 13.3', '23.8± 11.1', '1.3± 0.6'],
    ['Sorin Pericarbon', 'Stentless', '23', '27.5± 11.5', '23.2± 7.6', '1.5± 0.5'],
    ['St. Jude Medical Haem Plus', 'Bileaflet', '19', '28.5± 10.7', '17.0± 7.8', '1.9± 0.1'],
    ['St. Jude Medical Haem Plus', 'Bileaflet', '21', '16.3± 17.0', '10.6± 5.1', '1.8± 0.5'],
    ['St. Jude Medical Haem Plus', 'Bileaflet', '23', '16.8± 7.3', '12.1± 4.2', '1.7± 0.5'],
    ['St. Jude Medical Regent', 'Bileaflet', '19', '20.6± 12', '11.0± 4.9', '1.6± 0.4'],
    ['St. Jude Medical Regent', 'Bileaflet', '21', '15.6± 9.4', '8.0± 4.8', '2.0± 0.7'],
    ['St. Jude Medical Regent', 'Bileaflet', '23', '12.8± 6.8', '6.9± 3.5', '2.3± 0.9'],
    ['St. Jude Medical Regent', 'Bileaflet', '25', '11.7± 6.8', '5.6± 3.2', '2.5± 0.8'],
    ['St. Jude Medical Regent', 'Bileaflet', '27', '7.9± 5.5', '3.5± 1.7', '3.6± 0.5'],
    ['St. Jude Medical Standard', 'Bileaflet', '19', '42.0± 10.0', '24.5± 5.8', '1.5± 0.1'],
    ['St. Jude Medical Standard', 'Bileaflet', '21', '25.7± 9.5', '15.2± 5.0', '1.4± 0.4'],
    ['St. Jude Medical Standard', 'Bileaflet', '23', '21.8± 7.5', '13.4± 5.6', '1.6± 0.4'],
    ['St. Jude Medical Standard', 'Bileaflet', '25', '18.9± 7.3', '11.0± 5.3', '1.9± 0.5'],
    ['St. Jude Medical Standard', 'Bileaflet', '27', '13.7± 4.2', '8.4± 3.4', '2.5± 0.4'],
    ['St. Jude Medical Standard', 'Bileaflet', '29', '13.5± 5.8', '7.0± 1.7', '2.8± 0.5'],
    ['St. Jude Medical', 'Stentless', '21', '22.6± 14.5', '10.7± 7.2', '1.3± 0.6'],
    ['St. Jude Medical', 'Stentless', '23', '16.2± 9.0', '8.2± 4.7', '1.6± 0.6'],
    ['St. Jude Medical', 'Stentless', '25', '12.7± 8.2', '6.3± 4.1', '1.8± 0.5'],
    ['St. Jude Medical', 'Stentless', '27', '10.1± 5.8', '5.0± 2.9', '2.0± 0.3'],
    ['St. Jude Medical', 'Stentless', '29', '7.7± 4.4', '4.1± 2.4', '2.4± 0.6']
];

var avrColumns = [{
    "sTitle": "Valve"
},
{
    "sTitle": "Type"
},
{
    "sTitle": "Size (mm)"
},
{
    "sTitle": "Peak gradient (mmHg)",
    "bSearchable": false
},
{
    "sTitle": "Mean gradient (mmHg)",
    "bSearchable": false
},
{
    "sTitle": "Effective orifice area (cm2)",
    "bSearchable": false
}];

    $(document).ready(function() {
        $('#avrTable').dataTable({
            "aaData": avrDataSet,
            "aoColumns": avrColumns,
            "bPaginate": false,
            "fnRowCallback": function(nRow, aData, iDisplayIndex) {
                /* Append the grade to the default row class name */
                if (aData[1] == "Bileaflet") {
                    $(nRow).addClass('Bileaflet');
                } else if (aData[1] == "Homograft valves") {
                    $(nRow).addClass('gradeX');
                }
                return nRow;
            }
        });
        $('#avrTable_filter input').val('Example: 23 bov').addClass('search_init');
        $("#avrTable_filter input").focus(function() {
            if (this.className == "search_init") {
                this.className = "";
                this.value = "";
            }
        });
        $("#avrTable_filter input").blur(function() {
            if (this.value == "") {
                this.className = "search_init";
                this.value = "Example: 23 bov";
            }
        });

    });