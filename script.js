
var today = moment();
var timeBlockEl = document.querySelector('.container');


// Display the current date and time
$('#currentDay').text(today.format('LLLL'));


// saveBtn function
$('.saveBtn').on('click', function () {
 
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id');


  localStorage.setItem(timeKey, textValue);
});

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour1 .description').val(localStorage.getItem('hour1'));
$('#hour2 .description').val(localStorage.getItem('hour2'));
$('#hour3 .description').val(localStorage.getItem('hour3'));
$('#hour4 .description').val(localStorage.getItem('hour4'));
$('#hour5 .description').val(localStorage.getItem('hour5'));

//Start of function to change colors
function changeTask() {
    
    var currentHour = today.hours();
  
    $('.time-block').each(function () {
      var timeId = parseInt($(this).attr('id').split("hour")[1]);
  
      // Adds past class
      if (timeId < currentHour) {
        $(this).addClass('past');
      } // Adds present class
      else if (timeId === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } // Adds the future class
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  
  
  changeTask();
  


