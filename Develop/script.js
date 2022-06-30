
var today = moment();
var timeBlockEl = document.querySelector('.container');


// Display the current date and time
$('#currentDay').text(today.format('LLLL'));

// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
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

