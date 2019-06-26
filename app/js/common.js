$(function() {

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');

  });

});

//---------------------------js-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//------------------------------acardeon---------------------------

  $(".answer__dropdown").slideUp("slow");
  $(".answer__item").first('').addClass('active');
  $(".active .answer__dropdown").slideDown("slow");

  $(".answer__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".answer__dropdown").slideUp("slow");
    }
    else {
      $(".active .answer__dropdown").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .answer__dropdown").slideDown("slow");
    }
  });


  // var $links = $('.tabs__nav li');
  // $links.on('click',function(e) {
  //   e.preventDefault();
  //   $links.removeClass('active');
  //   $(this).addClass('active');
  // })