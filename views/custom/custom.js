//import { Calendar } from '/fullcalendar/core';
//import interactionPlugin from '../fullcalendar/interaction';
//, { Draggable } from '/fullcalendar/interaction';

$(document).ready(function() {

    let draggableEl = $('#myDraggable');
    let calendarEl = document.getElementById("calendar");

    let calendar = new FullCalendar.Calendar(calendarEl, {

        plugins: ['dayGrid']

    });

    calendar.render();

    $('#calendar').fullCalendar({
      dayClick: function()  {
        //create a pop-up of event data
        alert("I'm soo clicked right now");

      }
    })
});
