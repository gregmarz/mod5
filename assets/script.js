var time = moment();

var row1 = $("#row1");
var row2 = $("#row2");
var row3 = $("#row3");
var row4 = $("#row4");
var row5 = $("#row5");
var row6 = $("#row6");
var row7 = $("#row7");
var row8 = $("#row8");
var row9 = $("#row9");

var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var input4 = $("#input4");
var input5 = $("#input5");
var input6 = $("#input6");
var input7 = $("#input7");
var input8 = $("#input8");
var input9 = $("#input9");

var box9 = $("#9ambox")

if (time.format("H") > 9) {
    input1.css("background-color","lightgreen");
    input2.css("background-color","lightgreen");
    input3.css("background-color","lightgreen");
    input4.css("background-color","lightgreen");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
