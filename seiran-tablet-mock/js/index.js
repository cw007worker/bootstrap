$(document).ready(function() {
  $(".btns_wrap .btn").mouseover(function() {
    $(this).addClass("hover");
    setTimeout(function() {
      $(".btns_wrap .btn").removeClass("hover");
    }, 300)
  });
  $(".modal_btn").click(function() {
    $(this).parent().find(".modal").css("display", "block");
    $(".left_img").css("z-index", "inherit");
  });
  $(".modal_content .close").click(function() {
    $(this).parent().parent().css("display", "none");
    $(".left_img").css("z-index", "99");
  });
  $(".modal .tab_btns_wrap .item a").click(function() {
    $(this).parent().parent().find('a').removeClass("active");
    $(this).addClass("active");
  });
  $("#tabs01").tabs();
  $("#tabs02").tabs();
  $("#tabs03").tabs();
  $("#tabs04").tabs();
  $("#tabs05").tabs();
  $("#tabs06").tabs();
  $(".photo_studio_modal_btn").click(function() {
    $("#photo_studio_modal").css("display", "block")
    $(".left_img").css("z-index", "inherit");
    $('.slider-for').slick('setPosition');
    $('.slider-nav').slick('setPosition');
  });
  $("#photo_studio_modal .modal_content .close").click(function() {
    $(this).parent().parent().css("display", "none");
    $(".left_img").css("z-index", "inherit");
  });



});