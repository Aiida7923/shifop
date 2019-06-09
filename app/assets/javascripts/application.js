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


//カレンダーに関する記述
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var posts = gon.posts;
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid','interaction'],
    timeZone: 'Asia/Tokyo',
    defaultView: 'dayGridMonth',
    height: 'parent',
    selectable: true,

    dateClick: function(info,data) {
      var click_day = moment( info.date ).format( 'YYYY-MM-DD' );
      posts.forEach(function( value ) {
        if (value.workday == click_day) {
          $("#start").val(moment(value.start).format("HH:mm"));
          $("#end").val(moment(value.end).format("HH:mm"));
        } else {
        }
      });

      $('#today').val(click_day);
      $('#today2').val(click_day);
      $('#today3').val(click_day);

      $("#start3").val("09:00");
      $("#end3").val("22:00");

      var i = 0;
      var allevent = calendar.getEvents();
      allevent.forEach(function( value ) {
        if (click_day === moment(value.start).format("YYYY-MM-DD")){
          i += 1;
        } else {
          i += 0;
        }
      });

      if (i == 1) {
        $('#modal-sample2').modal('show');
      } else {
        $('#modal-sample3').modal('show');
      }

    },

    //ドラッグ選択による申請
    // select: function(info) {
    //   var start = moment(info.start);
    //   var end = moment(info.end);
    //   var t = 1;
    //   console.log(start.format("YYYY-MM-DD"));
    //   console.log(end.format("YYYY-MM-DD"));
    //
    //   for (var target = start.clone(); target.isBefore(end); target.add(1, "days")){
    //     var allevent = calendar.getEvents();
    //
    //     console.log(target.format("YYYY-MM-DD"));
    //     $('today4').val(target.format("YYYY-MM-DD"));
    //
    //     allevent.forEach(function( value ) {
    //       if (target.format("YYYY-MM-DD") === moment(value.start).format("YYYY-MM-DD")){
    //         t += 1;
    //       } else {
    //         t += 0;
    //       }
    //     });
    //   }
    //
    //   if (start.add(1,"days").format("YYYY-MM-DD") == end.format("YYYY-MM-DD")) {
    //     return;
    //   } else if (t == 1) {
    //     $('#modal-sample4').modal('show');
    //   } else {
    //     alert("すでに申請が行われている日付が含まれています。");
    //   }
    //
    // }


  });

  calendar.render();


  posts.forEach(function( value ) {
    var start = moment(value.start).format('HH:mm');
    var end = moment(value.end).format('HH:mm');
    calendar.addEvent({
      title: '申請中(' + start + '~' + end + ')',
      start: new Date(value.workday),
      allDay: true
    });
  });


  $(function() {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(function(){
    $('.language-text').fadeIn();
  },
  function(){
    $('.language-text').fadeOut();
  }
  )
});


});




//= require_tree .
