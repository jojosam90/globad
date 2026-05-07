
// 导航下拉
$('.menu').click(function () {
  $('.navigation').slideDown()
})
$('.close').click(function () {
  $('.navigation').slideUp()
});

// 回到顶部
$(".gotop").click(function () {
  $('body,html').animate({
      scrollTop: 0
  },800);
  return false;
});




$(".footer .fo_list2 li").each(function(i){ $(".footer .fo_list2 li").slice(i*7,i*7+7).wrapAll("<ul></ul>");});



$(function(){
  $('.prev1').hover(
    function(){$('.follower .prev').show(100)} ,
    function(){$('.follower .prev').stop().hide(100)} 
  );
  $('.next1').hover(
    function(){$('.follower .next').show(100)} ,
    function(){$('.follower .next').stop().hide(100)} 
  );
  
  $('.swiper-button-disabled').hover(
    // function(){$('.follower .next').show(100)} ,
    function(){$('.follower .next').stop().hide(100)} 
  );
  $('.on-click').hover(
    function(){$('.follower .click').show(100)} ,
    function(){$('.follower .click').stop().hide(100)} 
  );
  $('.on-drag').hover(
    function(){$('.follower .drag').show(100)} ,
    function(){$('.follower .drag').stop().hide(100)} 
  );
  $('.on-open').hover(
    function(){$('.follower .open').show(100)} ,
    function(){$('.follower .open').stop().hide(100)} 
  );
  // $(".service .imgtext .text a").addClass("on-learnmore");
  $('.on-learnmore').hover(
    function(){$('.follower .learnmore').show(100)} ,
    function(){$('.follower .learnmore').stop().hide(100)} 
  );
  $('.on-letstalk').hover(
    function(){$('.follower .lettalk').show(100)} ,
    function(){$('.follower .lettalk').stop().hide(100)} 
  );
  $(".index_title p").addClass("on-opacity");
  $(".service_list ul").addClass("on-opacity");
  $('.on-opacity').hover(
    function(){$('.follower span').css('opacity','0.5')} ,
    function(){$('.follower span').stop().css('opacity','1')} 
  );
  
}); 



$(".index_about ul li").eq(0).addClass("on")
$(".index_about ul li").mousemove(function () {
  $(this).addClass("on").siblings().removeClass("on");
});


// 禁用滚动条记忆
history.scrollRestoration = "manual";




// 禁止安卓微信设置字体大小
(function () {
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
  } else {
      if (document.addEventListener) {
          document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
          //IE浏览器，非W3C规范
          document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
      }
  }
})()
function handleFontSize() {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', function () {
      WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  })
}



window.addEventListener('load',function(e){
	// 字母滚动加速
	// var time1 = new Date;
	// 监听滚动停止
	let t1 = 0;
	let t2 = 0;
	let timer = null; // 定时器
	var _scrolling,_scrolling1;
	var sumWidth =0;  
	var li = $("#marquee_1").find("li");
	li.each(function(){
		sumWidth += $(this).outerWidth();
	});
	console.info(sumWidth)
	$(".ab").css("width",sumWidth*2);
	var _html = $("#marquee_1").html();
	$("#marquee_2").html(_html);
	_scrolling1 = setInterval(autoScroll, 20);
	function autoScroll(){
	  var s = $(".a").scrollLeft();
	  if(s >= sumWidth){
	    $(".a").scrollLeft(0);
	  }else{
	    $(".a").scrollLeft(s + 1);
	  }
	}
	$(document).on("scroll", function(){
	    // 滚动
	    clearTimeout(timer)
	    timer = setTimeout(isScrollEnd, 100)
	    t1 = $(document).scrollTop()
	    clearInterval(_scrolling);
	    clearInterval(_scrolling1);
	    _scrolling = setInterval(autoScroll, 0.5);
	})
	function isScrollEnd() {
	    t2 = $(document).scrollTop();
	    if(t2 == t1){
	        console.log("滚动停止")
	    clearTimeout(timer)
	    clearInterval(_scrolling1);
	    clearInterval(_scrolling);
	    _scrolling = setInterval(autoScroll, 20);
	    }
	}
	$(".a").hover(function(){
	  clearInterval(_scrolling1);
	  clearInterval(_scrolling);
	},function(){
	  _scrolling1 = setInterval(autoScroll,20);
	})
});

$(function () {


	//	$(window).on("load",function(){

//wow

//	setTimeout(function(){
  $('.index_title').each(function (index) {
    $('.service .imgtext h3').addClass('wow rotateInUpLeft')
    $('.index_title p').addClass('wow rotateInUpLeft')
    $('.index_title h2').addClass('wow rotateInUpLeft')
    $('.index_title h2').attr('data-wow-duration', (index + 15) * 0.1 + 's')
    $('.index_title h2').attr('data-wow-delay', '.5s')

  })
  $('.service .imgtext h3').each(function (index) {
    $(this).addClass('wow rotateInUpLeft')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  $('.banner li').each(function (index) {
    $(this).addClass('wow fadeInLeft')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  $('.wap_menulist .mm').each(function (index) {
    $(this).addClass('wow fadeInDown')
    $(this).attr('data-wow-duration', '.8s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  $('.header .m>a').each(function (index) {
    $(this).addClass('wow rotateInUpLeft')
    // $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-duration', (index + 15) * 0.1 + 's')
  })
  $('.navright a').each(function (index) {
    $(this).addClass('wow rotateInUpLeft')
    // $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-duration', (index + 15) * 0.1 + 's')
  })
  $('.mySwiper1 li').each(function (index) {
    $(this).addClass('wow fadeInUp')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })

  $('.service_list .img').each(function (index) {
    $(this).addClass('wow fadeInUp')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 2) * 0.1 + 's')
  })
  // $('.service_list .text').each(function (index) {
  //   $(this).addClass('wow fadeInUp')
  //   $(this).attr('data-wow-duration', '1.2s')
  //   $(this).attr('data-wow-delay', (index + 2) * 0.1 + 's')
  // })
  $('.service_list ul li').each(function (index) {
    $(this).addClass('wow fadeInUp')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  $('.mySwiper3 .swiper-slide').each(function (index) {
    $(this).addClass('wow fadeInLeft')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  $('.mySwiper5 .swiper-slide').each(function (index) {
    $(this).addClass('wow fadeInRight')
    $(this).attr('data-wow-duration', '1.2s')
    $(this).attr('data-wow-delay', (index + 1) * 0.1 + 's')
  })
  new WOW().init();
	//},450);
});

// work字体变色填充
$('.hove1').on("mouseover",function(){
  $(this).siblings().css("-webkit-text-stroke-color","#00BB1F")
  $(this).css("-webkit-text-stroke-color","#00BB1F")
  $(this).children().css({
    "-webkit-text-stroke-color":"#00BB1F",
    "color":"#00BB1F"
  })
})
$('.hove2').on("mouseover",function(){
  $(this).siblings().css("-webkit-text-stroke-color","#E88000")
  $(this).css("-webkit-text-stroke-color","#E88000")
  $(this).children().css({
    "-webkit-text-stroke-color":"#E88000",
    "color":"#E88000"
  })
})
$('.hove3').on("mouseover",function(){
  $(this).siblings().css("-webkit-text-stroke-color","#F46936")
  $(this).css("-webkit-text-stroke-color","#F46936")
  $(this).children().css({
    "-webkit-text-stroke-color":"#F46936",
    "color":"#F46936"
  })
})
$('.hove4').on("mouseover",function(){
  $(this).siblings().css("-webkit-text-stroke-color","#2ABECF")
  $(this).css("-webkit-text-stroke-color","#2ABECF")
  $(this).children().css({
    "-webkit-text-stroke-color":"#2ABECF",
    "color":"#2ABECF"
  })
})
$('.hove5').on("mouseover",function(){
  $(this).siblings().css("-webkit-text-stroke-color","#A552FF")
  $(this).css("-webkit-text-stroke-color","#A552FF")
  $(this).children().css({
    "-webkit-text-stroke-color":"#A552FF",
    "color":"#A552FF"
  })
})



$(window).scroll(function () {
  var wTop = $(window).scrollTop();
  var wH = $(window).height();
  $('.sjcTop').each(function () {
      var divTop = $(this).offset().top - (wH / 2);
      var divTopW = (divTop - wTop) / 10 + 20;
      $(this).css("transform", "translate(0px," + divTopW + "px)");
  });
  $('.sjcRight').each(function () {
      var divTop = $(this).offset().top - (wH / 2);
      var divTopW = (divTop - wTop) / 10 + 30;
      $(this).css("transform", "translate(" + -divTopW + "px,0px)");
  });
  $('.sjcLeft').each(function () {
      var divTop = $(this).offset().top - (wH / 2);
      var divTopW = (divTop - wTop) / 10 + 30;
      $(this).css("transform", "translate(" + divTopW + "px,0px)");
  });
  $('.sjcBottom').each(function () {
      var divTop = $(this).offset().top - (wH / 2);
      var divTopW = (divTop - wTop) / 10 - 20;
      $(this).css("transform", "translate(0px," + -divTopW + "px)");
  });

});
