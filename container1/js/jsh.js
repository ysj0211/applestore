$(function(){
  /* pt1의 hover 효과 */
  $("#pt1").hover(function(){
    $("#pt1 img").css("border-color","#f58a78");
    $("#t1").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold", borderBottom :"3px solid #f58b787c" });
  }, function(){
    $("#pt1 img").css("border-color","#ccc");
    $("#t1").css({color:"#333", textDecoration :"none", fontWeight: "normal", borderBottom :"3px solid  rgba(255, 255, 255, 0.572"});
  });
  /* pt2의 hover 효과 */
  $("#pt2").hover(function(){
    $("#pt2 img").css("border-color","#f58a78");
    $("#t2").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold", borderBottom :"3px solid #f58b787c" });
  }, function(){
    $("#pt2 img").css("border-color","#ccc");
    $("#t2").css({color:"#333", textDecoration :"none", fontWeight: "normal",borderBottom :"3px solid  rgba(255, 255, 255, 0.572" });
  });
  /* pt3의 hover 효과 */
  $("#pt3").hover(function(){
    $("#pt3 img").css("border-color","#f58a78");
    $("#t3").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold",  borderBottom :"3px solid #f58b787c" });
  }, function(){
    $("#pt3 img").css("border-color","#ccc");
    $("#t3").css({color:"#333", textDecoration :"none", fontWeight: "normal", borderBottom :"3px solid  rgba(255, 255, 255, 0.572"  });
  });


  /* t1의 hover 효과 */
  $("#t1").hover(function(){
    $("#pt1 img").css("border-color","#f58a78");
    $("#t1").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold", borderBottom :"3px solid #f58b787c"  });
  }, function(){
    $("#pt1 img").css("border-color","#ccc");
    $("#t1").css({color:"#333", textDecoration :"none", fontWeight: "normal", borderBottom :"3px solid  rgba(255, 255, 255, 0.572"  });
  });
  /* t2의 hover 효과 */
  $("#t2").hover(function(){
    $("#pt2 img").css("border-color","#f58a78");
    $("#t2").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold", borderBottom :"3px solid #f58b787c"  });
  }, function(){
    $("#pt2 img").css("border-color","#ccc");
    $("#t2").css({color:"#333", textDecoration :"none", fontWeight: "normal", borderBottom :"3px solid  rgba(255, 255, 255, 0.572"  });
  });
   /* t3의 hover 효과 */
  $("#t3").hover(function(){
    $("#pt3 img").css("border-color","#f58a78");
    $("#t3").css({color: "#f58a78",textDecoration:"underline", fontWeight : "bold", borderBottom :"3px solid #f58b787c"  });
  }, function(){
    $("#pt3 img").css("border-color","#ccc");
    $("#t3").css({color:"#333", textDecoration :"none", fontWeight: "normal", borderBottom :"3px solid  rgba(255, 255, 255, 0.572" });
  });


  $(".liEl1").hover(function(){
    $(".liEl1").css("scale","1.1")
    $('.liEl2').css("opacity","0");
    $('.liEl3').css("opacity","0");
    $('.liEl4').css("opacity","0");
    $('.liEl5').css("opacity","0");
    $('#fadeimg >img:nth-child(1)').css('display','block')
  },function(){
    $(".liEl1").css("scale","1")
    $('.liEl2').css("opacity","1");
    $('.liEl3').css("opacity","1");
    $('.liEl4').css("opacity","1");
    $('.liEl5').css("opacity","1");
    $('#fadeimg >img:nth-child(1)').css('display','none')
  })

  $(".liEl2").hover(function(){
    $(".liEl2").css("scale","1.1")
    $('.liEl1').css("opacity","0");
    $('.liEl3').css("opacity","0");
    $('.liEl4').css("opacity","0");
    $('.liEl5').css("opacity","0");
    $('#fadeimg >img:nth-child(4)').css('display','block')
  },function(){
    $(".liEl2").css("scale","1")
    $('.liEl1').css("opacity","1");
    $('.liEl3').css("opacity","1");
    $('.liEl4').css("opacity","1");
    $('.liEl5').css("opacity","1");
    $('#fadeimg >img:nth-child(4)').css('display','none')
  })


  $(".liEl3").hover(function(){
    $(".liEl3").css("scale","1.1")
    $('.liEl2').css("opacity","0");
    $('.liEl1').css("opacity","0");
    $('.liEl4').css("opacity","0");
    $('.liEl5').css("opacity","0");
    $('#fadeimg>img:nth-child(3)').css('display','block')
  },function(){
    $(".liEl3").css("scale","1")
    $('.liEl2').css("opacity","1");
    $('.liEl1').css("opacity","1");
    $('.liEl4').css("opacity","1");
    $('.liEl5').css("opacity","1");
    $('#fadeimg >img:nth-child(3)').css('display','none')
  })




  $(".liEl4").hover(function(){
    $(".liEl4").css("scale","1.1")
    $('.liEl2').css("opacity","0");
    $('.liEl3').css("opacity","0");
    $('.liEl1').css("opacity","0");
    $('.liEl5').css("opacity","0");
    $('#fadeimg >img:nth-child(2)').css('display','block')
  },function(){
    $(".liEl4").css("scale","1")
    $('.liEl2').css("opacity","1");
    $('.liEl3').css("opacity","1");
    $('.liEl1').css("opacity","1");
    $('.liEl5').css("opacity","1");
    $('#fadeimg >img:nth-child(2)').css('display','none')
  })

  $(".liEl5").hover(function(){
    $(".liEl5").css("scale","1.1")
    $('.liEl2').css("opacity","0");
    $('.liEl3').css("opacity","0");
    $('.liEl4').css("opacity","0");
    $('.liEl1').css("opacity","0");
    $('#fadeimg >img:nth-child(5)').css('display','block')
  },function(){
    $(".liEl5").css("scale","1")
    $('.liEl2').css("opacity","1");
    $('.liEl3').css("opacity","1");
    $('.liEl4').css("opacity","1");
    $('.liEl1').css("opacity","1");
    $('#fadeimg >img:nth-child(5)').css('display','none')
  })








































});