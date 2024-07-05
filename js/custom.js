$(function(){

// 스토어 슬라이드---------------------------
    $(".submenu-wrap").css("display",'none');
    $(".submenu-wrap2").css("display",'none');
    $(".submenu-wrap3").css("display",'none');
    $(".blank").css("display",'none');
    $(".blank2").css("display",'none');
    $(".blank3").css("display",'none');

    $(".store").mouseenter(function(){
      $(".submenu-wrap").stop().slideDown('fast');
      $(".blank").stop().slideDown('fast');
      $('.blur').css('opacity','1');
      $('.blur').css('z-index',0);
    })

    $(".blank").mouseenter(function(){
      $(".submenu-wrap").stop().slideDown('fast');
      $(".blank").stop().slideDown('fast');
      $('.blur').css('opacity','1');
      $('.blur').css('z-index',0);
    })
    
    $(".store").mouseleave(function(){
      $(".submenu-wrap").stop().slideUp('fast');
      $(".blank").stop().slideUp('fast');
      $('.blur').css('opacity','0');
      $('.blur').css('z-index',-1);
    })
    $(".blank").mouseleave(function(){
      $(".submenu-wrap").stop().slideUp('fast');
      $(".blank").stop().slideUp('fast');
      $('.blur').css('opacity','0');
      $('.blur').css('z-index',-1);
    })
// 엔터테인먼트 슬라이드 -----------------------------
$(".enter").mouseenter(function(){
  $(".submenu-wrap2").stop().slideDown('fast');
  $(".blank2").stop().slideDown('fast');
  $('.blur').css('opacity','1');
  $('.blur').css('z-index',0);
})

$(".blank2").mouseenter(function(){
  $(".submenu-wrap2").stop().slideDown('fast');
  $(".blank2").stop().slideDown('fast');
  $('.blur').css('opacity','1');
  $('.blur').css('z-index',0);
})

$(".enter").mouseleave(function(){
  $(".submenu-wrap2").stop().slideUp('fast');
  $(".blank2").stop().slideUp('fast');
  $('.blur').css('opacity','0');
  $('.blur').css('z-index',-1);
})
$(".blank2").mouseleave(function(){
  $(".submenu-wrap2").stop().slideUp('fast');
  $(".blank2").stop().slideUp('fast');
  $('.blur').css('opacity','0');
  $('.blur').css('z-index',-1);
})

// 고객지원 슬라이드 -----------------------------------
$(".support").mouseenter(function(){
  $(".submenu-wrap3").stop().slideDown('fast');
  $(".blank3").stop().slideDown('fast');
  $('.blur').css('opacity','1');
  $('.blur').css('z-index',0);
})

$(".blank3").mouseenter(function(){
  $(".submenu-wrap3").stop().slideDown('fast');
  $(".blank3").stop().slideDown('fast');
  $('.blur').css('opacity','1');
  $('.blur').css('z-index',0);
})

$(".support").mouseleave(function(){
  $(".submenu-wrap3").stop().slideUp('fast');
  $(".blank3").stop().slideUp('fast');
  $('.blur').css('opacity','0');
  $('.blur').css('z-index',-1);
})
$(".blank3").mouseleave(function(){
  $(".submenu-wrap3").stop().slideUp('fast');
  $(".blank3").stop().slideUp('fast');
  $('.blur').css('opacity','0');
  $('.blur').css('z-index',-1);
})



})





document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('iframe');

    function setIframeSize() {
        iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    iframe.addEventListener('load', setIframeSize);
    window.addEventListener('resize', setIframeSize);
});







