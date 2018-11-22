import $ from 'jquery';
import {parseCode} from './code-analyzer';
//import {startBuildingTable} from './code-analyzer';


$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        // let parsedCode = parseCode(codeToParse);
        // $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        //result=[];
        let  result =  parseCode(codeToParse); //return array with table data
        makeTable(result);

    });
});


//make table
function makeTable(result) {
    var html = '<table>';
    html += '<tr>';
    for( var j in result[0] ) {
        html += '<th>' + j + '</th>';
    }
    html += '</tr>';
    for( var i = 0; i < result.length; i++) {
        html += '<tr>';
        for( j in result[i] ) {
            let text=result[i][j];
            html += '<td >' + text + '</td>';
        }
    }
    html += '</table>';
    document.getElementById('finalTable').innerHTML = html;
}
