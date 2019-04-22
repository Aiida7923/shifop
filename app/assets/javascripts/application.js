// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require turbolinks
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
//= require core
//= require daygrid
//= require interaction
//= import { Calendar } from '@fullcalendar/core';
//= import dayGridPlugin from '@fullcalendar/daygrid';
//= import timeGridPlugin from '@fullcalendar/timegrid';
//= import listPlugin from '@fullcalendar/list';
//= import interactionPlugin from '@fullcalendar/interaction';




//ブラウザバックの禁止
// $(function(){
//   window.onunload = function() {};
//   history.forward();
// });

// history.pushState(null, null, null);
// $(window).on("popstate", function (event) {
//     if (!event.originalEvent.state) {
//         history.pushState(null, null, null);
//         return;
//     }
// });


//カレンダーに関する記述
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid','interaction' ],
    timeZone: 'UTC',
    defaultView: 'dayGridMonth',
    height: 'parent',
    selectable: true,

    dateClick: function(info) {
      // alert('Clicked on: ' + info.dateStr);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
    }
  });

  calendar.render();
});

//モーダルに関する記述
$('#offer-data').click(function() {
  $('.modal').fadeOut();
});

// $(function(){
//     var today = new Date();
//     today.setDate(today.getDate());
//     var yyyy = today.getFullYear();
//     var mm = ("0"+(today.getMonth()+1)).slice(-2);
//     var dd = ("0"+today.getDate()).slice(-2);
//     document.getElementById("today").value=yyyy+'-'+mm+'-'+dd;
// });

//= require_tree .
