$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:12,
    responsive:{
        600:{
            items:6
        }
    }
});
 

$('.item1').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/nFBrgeSjj-0?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=5");
  $( ".titulo" ).animate({
      opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img1.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item2').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/qiYiddjc6cU?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=6");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img2.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item3').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/8_U0lhMHoRQ?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=2");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img3.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item4').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/JVWYEHe-E-M?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img4.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item5').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/6F8L3d_OIE0?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=3");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img5.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item6').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/ssrNcwxALS4?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=4");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img6.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item7').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/hJlkMAZTEPI?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=5");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img7.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

$('.item8').click(function() {
  $("#toggle-youtube").attr("src", "https://www.youtube.com/embed/RQhwEgHri1s?controls=0&autoplay=1&showinfo=1&modestbranding=1$loop=1&start=4");
  $( ".titulo" ).animate({
    opacity: 0,
  }, 500 , function() {
    $(".img-titulo").attr("src", "img/t-img8.png");
    $( ".titulo" ).animate({
      opacity: 1,
    });
  });
});

setTimeout(function() { 
  $( ".animacao-logo-gamesflix" ).animate({
      opacity: 0,
  });
}, 4000);

setTimeout(function() { 
  $( ".gb-animacao" ).remove();
}, 5000);
