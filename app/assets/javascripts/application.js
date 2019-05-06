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
//= require turbolinks
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
//= require core
//= require daygrid
//= require interaction
//= require rrule

//= import { Calendar } from '@fullcalendar/core';
//= import dayGridPlugin from '@fullcalendar/daygrid';
//= import timeGridPlugin from '@fullcalendar/timegrid';
//= import listPlugin from '@fullcalendar/list';
//= import interactionPlugin from '@fullcalendar/interaction';
//= import rrulePlugin from '@fullcalendar/rrule';




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
    plugins: [ 'dayGrid','interaction'],
    timeZone: 'UTC',
    defaultView: 'dayGridMonth',
    height: 'parent',
    selectable: true,
    header: {
      center: 'addEventButton'
    },
    // customButtons: {
    //   addEventButton: {
    //     text: 'シフト決め打ち',
    //     click: function() {
    //       console.log("----------決め打ち---------")
    //       var dateStr = prompt('Enter a date in YYYY-MM-DD format');
    //       var date = new Date(dateStr); // will be in local time
    //
    //       calendar.addEvent({
    //         title: '希望シフト',
    //         start: date,
    //         allDay: true
    //       if (!isNaN(date.valueOf())) { // valid?
    //         });
    //         alert('Great. Now, update your database...');
    //       } else {
    //         alert('Invalid date.');
    //       }
    //     }
    //   }
    // },

    // dayClick:  function(date, jsEvent, view) {
    // console.log("----------dayクリック---------")
    // $('#calendarModal').fadeIn();
    // },

    dateClick: function(info) {
      console.log($('#modal_box'))
      $('#modal-sample2').modal('show');
      // alert('Clicked on: ' + info.dateStr);
      // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      // alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
    },


  });

  calendar.render();

  var posts = gon.posts;
  posts.forEach(function( value ) {
    calendar.addEvent({
      title: '申請中',
      start: new Date(value.workday),
      allDay: true
    });
  });



});

//まとめて申請モーダルに関する記述
$('#offer-data').click(function() {
  $('.modal').fadeOut();
});

//デフォルトの日付に関する記述
// $(function(){
//     var today = new Date();
//     today.setDate(today.getDate());
//     var yyyy = today.getFullYear();
//     var mm = ("0"+(today.getMonth()+1)).slice(-2);
//     var dd = ("0"+today.getDate()).slice(-2);
//     document.getElementById("today").value=yyyy+'-'+mm+'-'+dd;
// });

//= require_tree .
