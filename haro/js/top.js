$(document).scroll(function() {
  $(".head_wrap").css({
    "background-position-y": (-$(this).scrollTop()/7)
  })
});
