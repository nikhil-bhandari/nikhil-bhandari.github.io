$(document).ready(() => {
  $("#projects ul li a").click(function (event) {
    event.preventDefault();
    $("h2.selected").removeClass('selected');
    $(this).find('h2').addClass('selected');
    $("#projects .timeline.active").removeClass('active');
    $("#projects .timeline" + $(this).attr('href')).addClass('active');
  });

  $('#brands ul li a').click(function (event) {
    console.log('lets go');
    $("h2.selected").removeClass('selected');
    $("#projects .timeline.active").removeClass('active');

    $("#projects ul li a#btn-projects h2").addClass('selected');
    $("#projects .timeline#slide-projects").addClass('active');

  })
});
