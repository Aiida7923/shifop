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
//= require main
//= require main1
//= import { Calendar } from '@fullcalendar/core';
//= import dayGridPlugin from '@fullcalendar/daygrid';
//= import timeGridPlugin from '@fullcalendar/timegrid';
//= import listPlugin from '@fullcalendar/list';





$(function(){
  window.onunload = function() {};
  history.forward();
});



document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid' ],
    timeZone: 'UTC',
    defaultView: 'dayGridMonth',
    height: 'parent',
    selectable: true,
  });

  calendar.render();
});

//= require_tree .
