$(function($){
    
  let backTop = $('.backTop'),
      win = $(window);

        win.on("scroll",function(){
          
          let ScrollWin = win.scrollTop();
      
          //back top
          if(ScrollWin > 300){
              backTop.fadeIn(1000);
          }else{
              backTop.fadeOut(1000);
          }
      
      
      
      });
      
       //back top-up
       backTop.on("click",function(){
           $('body,html').animate({
              scrollTop: 0
           },500);
       });












      // testimonial_content
  $('.testimonial_text_slider').slick({
    arrows: false,
    dots : true,
    asNavFor: '.testimonial_img_slider'
  });

    $('.testimonial_img_slider').slick({
        arrows: false,
        centerMode: true,
        asNavFor: '.testimonial_text_slider',
        centerPadding: '0',
        slidesToShow: 1,
        speed: 1000,
      });
    

     


});
