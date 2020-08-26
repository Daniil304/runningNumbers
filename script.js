$('.count').each(function () {
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 4000,//время
      easing: 'swing',
      step: function (now) {
         $(this).text(Math.ceil(now));
      }
   });
});