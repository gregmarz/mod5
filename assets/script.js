var displayDay = $("#currentDay");
var time = moment();
var day = moment().format("MMMM Do, YYYY")

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

displayDay.text(day);
//before hour 9
if (time.format("H") > 9) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgreen");
    input3.css("background-color","lightgreen");
    input4.css("background-color","lightgreen");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 9
if (time.format("H") = 9) {
    input1.css("background-color","lightred");
    input2.css("background-color","lightgreen");
    input3.css("background-color","lightgreen");
    input4.css("background-color","lightgreen");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 10
if (time.format("H") = 10) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightred");
    input3.css("background-color","lightgreen");
    input4.css("background-color","lightgreen");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 11
if (time.format("H") = 11) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightred");
    input4.css("background-color","lightgreen");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 12pm
if (time.format("H") = 12) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightred");
    input5.css("background-color","lightgreen");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 1pm
if (time.format("H") = 13) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightgray");
    input5.css("background-color","lightred");
    input6.css("background-color","lightgreen");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 2pm
if (time.format("H") = 14) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightgray");
    input5.css("background-color","lightgray");
    input6.css("background-color","lightred");
    input7.css("background-color","lightgreen");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 3pm
if (time.format("H") = 15) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightgray");
    input5.css("background-color","lightgray");
    input6.css("background-color","lightgray");
    input7.css("background-color","lightred");
    input8.css("background-color","lightgreen");
    input9.css("background-color","lightgreen");
}
//hour 4pm
if (time.format("H") = 16) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightgray");
    input5.css("background-color","lightgray");
    input6.css("background-color","lightgray");
    input7.css("background-color","lightgray");
    input8.css("background-color","lightred");
    input9.css("background-color","lightgreen");
}
//hour 5pm
if (time.format("H") = 17) {
    input1.css("background-color","lightgray");
    input2.css("background-color","lightgray");
    input3.css("background-color","lightgray");
    input4.css("background-color","lightgray");
    input5.css("background-color","lightgray");
    input6.css("background-color","lightgray");
    input7.css("background-color","lightgray");
    input8.css("background-color","lightgray");
    input9.css("background-color","lightred");
}