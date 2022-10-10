var currentDayDisplay = moment().format("LLLL");
$("#current-day").text(currentDayDisplay);

$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var plannerEntry = $(this).siblings(".planner-entry").val();
        var entryTime = $(this).parent().attr("id");

        plannerEntry = $.trim(plannerEntry);
        console.log(entryTime);
        console.log(plannerEntry);

        localStorage.setItem(entryTime, plannerEntry);
    })
});

function currentTimeTracker() {
    var currentTime = moment().hour();
    console.log(currentDayDisplay);

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else if (timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });


    $("#hour9 .planner-entry").val(localStorage.getItem("hour9"));
    $("#hour10 .planner-entry").val(localStorage.getItem("hour10"));
    $("#hour11 .planner-entry").val(localStorage.getItem("hour11"));
    $("#hour12 .planner-entry").val(localStorage.getItem("hour12"));
    $("#hour13 .planner-entry").val(localStorage.getItem("hour13"));
    $("#hour14 .planner-entry").val(localStorage.getItem("hour14"));
    $("#hour15 .planner-entry").val(localStorage.getItem("hour15"));
    $("#hour16 .planner-entry").val(localStorage.getItem("hour16"));
    $("#hour17 .planner-entry").val(localStorage.getItem("hour17"));
}
currentTimeTracker()