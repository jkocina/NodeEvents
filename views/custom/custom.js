$(document).ready(function() {

    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {

        plugins: ['dayGrid', 'list']

    });

    calendar.render();
});
