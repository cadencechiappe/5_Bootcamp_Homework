// variable declarations
// var buttonContent = getElementById("8am");

// changeLock function
//function changeLock() {
    //buttonContent.textContent("&#128274");
//}

// event listener to change unlock to lock
//button.addEventListener('click', changeLock());

// moment class changer so that the color changes based on the current hour

// to display the current date
var currentDayEl = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDayEl);

// time selectors for time cards
var eightAmEl = moment("8" , "h").format("h a");
$("#eightAm").text(eightAmEl);

var nineAmEl = moment("9" , "h").format("h a");
$("#nineAm").text(nineAmEl);

var tenAmEl = moment("10" , "h").format("h a");
$("#tenAm").text(tenAmEl);

var elevenAmEl = moment("11" , "h").format("h a");
$("#elevenAm").text(elevenAmEl);

var twelvePmEl = moment("12" , "h").format("h a");
$("#twelvePm").text(twelvePmEl);

var onePmEl = moment("13" , "h").format("h a");
$("#onePm").text(onePmEl);

var twoPmEl = moment("14" , "h").format("h a");
$("#twoPm").text(twoPmEl);

var threePmEl = moment("15" , "h").format("h a");
$("#threePm").text(threePmEl);

var fourPmEl = moment("16" , "h").format("h a");
$("#fourPm").text(fourPmEl);

var fivePmEl = moment("17" , "h").format("h a");
$("#fivePm").text(fivePmEl);

var sixPmEl = moment("18" , "h").format("h a");
$("#sixPm").text(sixPmEl);