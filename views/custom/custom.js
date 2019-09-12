$(document).ready(function() {

    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {

        plugins: ['dayGrid', 'list']

    });

    calendar.render();

    $('#calendar').fullCalendar({
      dayClick: function()  {
        //create a pop-up of event data
        alert("I'm soo clicked right now");

      }
    })
});
