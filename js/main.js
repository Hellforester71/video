

$(window).on("load",function(){

   // плавный скролл по якорю
   $("a[rel='mPageScroll2id']").mPageScroll2id();
   // видеофон
   $('#slider').vide('video/sport', {
      // фон до загрузки видео
      bgColor: '#666'
   });
});