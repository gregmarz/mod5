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

var input1Clock = document.getElementById("input1");
var input2Clock = document.getElementById("input2");
var input3Clock = document.getElementById("input3");
var input4Clock = document.getElementById("input4");
var input5Clock = document.getElementById("input5");
var input6Clock = document.getElementById("input6");
var input7Clock = document.getElementById("input7");
var input8Clock = document.getElementById("input8");
var input9Clock = document.getElementById("input9");

var btn1 = $("#button1");
var btn2 = $("#button2");
var btn3 = $("#button3");
var btn4 = $("#button4");
var btn5 = $("#button5");
var btn6 = $("#button6");
var btn7 = $("#button7");
var btn8 = $("#button8");
var btn9 = $("#button9");

var btn1Clock = document.getElementById("row1");
var btn2Clock = document.getElementById("row2");
var btn3Clock = document.getElementById("row3");
var btn4Clock = document.getElementById("row4");
var btn5Clock = document.getElementById("row5");
var btn6Clock = document.getElementById("row6");
var btn7Clock = document.getElementById("row7");
var btn8Clock = document.getElementById("row8");
var btn9Clock = document.getElementById("row9");

displayDay.text(day);
//save to localstorage
$("textarea").each(function(){
    $(this).val(localStorage.getItem($(this).parent()[0].dataset.time))
})

//before hour 9
if (time.format("H") >= 9) {
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
if (time.format("H") == 9) {
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
if (time.format("H") == 10) {
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
if (time.format("H") == 11) {
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
if (time.format("H") == 12) {
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
if (time.format("H") == 13) {
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
if (time.format("H") == 14) {
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
if (time.format("H") == 15) {
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
if (time.format("H") == 16) {
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
if (time.format("H") == 17) {
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
//after 
if (time.format("H") < 9) {
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
//SAVE ITEM
$(btn1).click(function() {
    localStorage.setItem(
        btn1Clock.dataset.time,
        input1Clock.value
    )
})

$(btn2).click(function() {
    localStorage.setItem(
        btn2Clock.dataset.time,
        input2Clock.value
    )
})

$(btn3).click(function() {
    localStorage.setItem(
        btn3Clock.dataset.time,
        input3Clock.value
    )
})

$(btn4).click(function() {
    localStorage.setItem(
        btn4Clock.dataset.time,
        input4Clock.value
    )
})


$(btn5).click(function() {
    localStorage.setItem(
        btn5Clock.dataset.time,
        input5Clock.value
    )
})


$(btn6).click(function() {
    localStorage.setItem(
        btn6Clock.dataset.time,
        input6Clock.value
    )
})


$(btn7).click(function() {
    localStorage.setItem(
        btn7Clock.dataset.time,
        input7Clock.value
    )
})


$(btn8).click(function() {
    localStorage.setItem(
        btn8Clock.dataset.time,
        input8Clock.value
    )
})


$(btn9).click(function() {
    localStorage.setItem(
        btn9Clock.dataset.time,
        input9Clock.value
    )
})

//https://api.jquery.com/parents/
//https://stackoverflow.com/questions/12481439/jquery-this-keyword
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
