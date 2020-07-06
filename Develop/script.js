//Need to use moment.js for dates/times

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//Setting up variables necessary for Local Storage usage

$(".saveBtn").on("click", function () {


    var input = $(this).siblings(".text").val();


    var timeStamp = $(this).parent().attr("id");


    localStorage.setItem(timeStamp, input); //Takes above inputs and allows us to store them


})

//Fetches data saved in Local Storage
$("#hour8 .text").val(localStorage.getItem("hour8"));
$("#hour9 .text").val(localStorage.getItem("hour9"));
$("#hour10 .text").val(localStorage.getItem("hour10"));
$("#hour11 .text").val(localStorage.getItem("hour11"));
$("#hour12 .text").val(localStorage.getItem("hour12"));
$("#hour13 .text").val(localStorage.getItem("hour13"));
$("#hour14 .text").val(localStorage.getItem("hour14"));
$("#hour15 .text").val(localStorage.getItem("hour15"));
$("#hour16 .text").val(localStorage.getItem("hour16"));
$("#hour17 .text").val(localStorage.getItem("hour17"));

//Loop adding/removing classes as needed depending on hour

function compareHours() {

    $(".time-block").each(function () {

            var hourNow = moment().hour();

            // Below variable turns string hour into int so we can use it to compare to current hour
            var timeInput = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeInput, hourNow)

            // Depending on inputs, change the predetermined classes
            // according to code given to reflect either past, present, or future

            if (timeInput < hourNow) { 

                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            } else if (timeInput === hourNow) {

                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }


        })
    }

    compareHours();

