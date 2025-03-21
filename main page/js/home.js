$(window).on("load", function () {
  $(".content").removeClass('hidden').addClass('fade-in').fadeIn(3000);
  $(".loader").fadeOut(3500, function () { 
  });
});