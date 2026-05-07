$(function(){
	var _width = $(window).width();
	if(_width > 1024){
		$(".wx").mouseenter(function(){
			$(".wx_pop").fadeIn();
		});
		$(".wx").mouseleave(function(){
			$(".wx_pop").fadeOut();
		});
		

	}
	if(_width < 1024){
		$(".footer .wx").click(function () {
			$(".wap_wxpop").slideDown();
			$("body").css({ "overflow": "hidden"});
		});
		$(".footer .back").click(function () {
			$(".wap_wxpop").slideUp();
			$("body").css({ "overflow": "initial"});
		});
		// $('input').on('click', function () {
		// 	var target = this;
		// 	// 使用定时器是为了让输入框上滑时更加自然
		// 	setTimeout(function(){
		// 		target.scrollIntoView(false);
		// 	},300);
		// });
	}
		$('.slideTxtBox .select1').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1
		});
		$('.slideTxtBox .select99').select2({
			placeholder:"Please seclect",
		});
		$('.slideTxtBox .select_2').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1,
		});
		
		$('.slideTxtBox1 .select2').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1
		});
	//	$('.slideTxtBox1 .select100').select2({
		$('.slideTxtBox1 .select99').select2({
			placeholder:"Please seclect",
		});
		$('.slideTxtBox1 .select_3').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1,
		});
	var formName = [
		{'btn':'submitForm1','name':'form_do_1'},
			{'btn':'submitForm2','name':'form_do_2'},
				{'btn':'submitForm3','name':'form_do_3'},
		{'btn':'submitDownForm1','name':'downform_do_1'},
			{'btn':'submitDownForm2','name':'downform_do_2'},
				{'btn':'submitDownForm3','name':'downform_do_3'},
	];
	$.each(formName,function(index,item){
		let form_btn = $('#' + item['btn']);
		let form_name = $("#" + item['name']);
	//	return false;
		form_btn.on('click', function () {
			form_name.submit();
		})
		form_name.validate({
			ignore: "",
			submitHandler: function() {
				if(form_btn.hasClass('exit')){
					layer.msg('Please do not resubmit~',{time: 3000});
					return false;
				}
				if(form_btn.hasClass('stop')){
					layer.msg('Please wait a moment~', {time: 3000});
					return false;
				}
				jQuery.ajax({
					type : "POST",
					url: __formApp__,
					dataType: "json",
					beforeSend:function(){
						form_btn.attr("disabled",true);
						if($('#shadGg').length>0){
							$('#shadGg').remove();
						}
						var loading = '<div id="shadGg" style="width:100%;height:100%;position:fixed;z-index:10;left:0;top:0;background:rgba(0,0,0,0.8);display:block;z-index:9999999;"><img src="/Public/static/loading/loading23.gif" style="width:16px;position: fixed;top: 30%;left: 49%;"/></div>';
						$('body').append(loading);
						form_btn.addClass('stop');
						form_btn.addClass('exit');
					},
					data : form_name.serialize(),
					async:true,
					success: function(json){
						var d = json;
						if(d.status=='1'){
							layer.msg('Submitted successfully!', {
								icon: 1,   // 成功图标
								time: 3000 //2秒关闭（如果不配置，默认是3秒）
							}, function(){ // 关闭后执行的函数
								form_name[0].reset();
								form_btn.removeClass('exit');
								if(d.downUrl){
									openNewWindow(d.downUrl);
								}
							});		
						}else{
						   layer.msg(d.msg,{icon:2});
							form_btn.removeClass('exit');
						}
					},	
					complete:function(){
						$('#shadGg:visible').fadeOut(200);
						form_btn.removeClass('stop');
						form_btn.removeAttr('disabled');
					},
					error:function(data){
						layer.msg("network error!", {time: 3000});
						form_btn.removeAttr('disabled');
						form_btn.removeClass('stop');
						form_btn.removeClass('exit');
					}
				})
			}
		});
	});
});
	
function openNewWindow(Url) {
	const strUrl = Url ? Url : '/case-512-0-1.html';
	let a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	a.target = "_blank";
	a.href = strUrl;
	a.click();
	document.body.removeChild(a);
}


$('.nav_list').parent().addClass('navon');
$('.wap_navlist').parent().append('<i class="anniu"></i>')

$(document).ready(function(){
	$(".anniu").on('click', function(){
		$(".wap_navlist").slideToggle("slow");
	});
});
// 导航
jQuery(".nav").slide({ type:"menu",  titCell:".m", targetCell:".nav_list",effect:"slideDown", delayTime:300, triggerTime:0,returnDefault:false,titOnClassName:'ons' });	

jQuery(".wap_menulist .picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:2,interTime:30,pnLoop:false});

var clickStatus = true;

// 弹窗
$(".header .talk").on('click', function () {
	$(".slideTxtBox .hd li").addClass("on").siblings().removeClass("on");
	track((_index_+2));
	setTimeout(function(){
		_height_ = $('#form_do_'+_index_).height();
		$('.slideTxtBox .bd').css({'height':_height_})
	},500)
	$(".talk_pop").slideDown();
	$("body").css({ "overflow": "hidden"});
	$(".talk_pop .bai").css({ "height": "0","transition-delay": "0.4s"});
	if(clickStatus){
		clickStatus = false;
		jQuery(".talk_pop .picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:30,pnLoop:false});
		
		/* $('.select1').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1
		});
		$('.select99').select2({
			placeholder:"Please seclect",
		});
		$('.select_2').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1,
		}); */
	}
	jQuery(".slideTxtBox").slide({effect:"fold",trigger:"click"});
});
var _index_ = 1,
	_height_;
	$('.slideTxtBox .hd li').on('click',function(){
		_index_ = $(this).data('index');
		_height_ = $('#form_do_'+_index_).height();
			$('.slideTxtBox .bd').css({'height':_height_})
	});
setTimeout(function(){
	$(".letstalk,.wap_menulist .picMarquee-left").on('click', function () {
		$(".slideTxtBox .hd li").addClass("on").siblings().removeClass("on");
		setTimeout(function(){
			_height_ = $('#form_do_'+_index_).height();
			$('.slideTxtBox .bd').css({'height':_height_})
		},500)
		$(".talk_pop").slideDown();
		$("body").css({ "overflow": "hidden"});
		$(".talk_pop .bai").css({ "height": "0","transition-delay": "0.4s"});
		if(clickStatus){
			clickStatus = false;
			jQuery(".talk_pop .picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:30,pnLoop:false});
			
		/* $('.select1').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1
		});
		$('.select99').select2({
			placeholder:"Please seclect",
		});
		$('.select_2').select2({
			placeholder:"Please seclect",
			minimumResultsForSearch: -1,
		}); */
		}
		
		$(".talk_pop .picMarquee-left").css({ "display": "block"});
		jQuery(".slideTxtBox").slide({effect:"fold",trigger:"click"});
		
	});
},100)
$(document).on('click',".close", function () {
	if($(".wap_menulist").css("display") == "block"){
		$("body").css({ "overflow": "hidden"});
	}else{
		$("body").css({ "overflow": "initial"});
	}
	$(".talk_pop .picMarquee-left").css({ "display": "none"});
	$(".talk_pop .bai").css({ "height": "100%","transition-delay": "0.001s"});
	$(".talk_pop").slideUp(1000);
});





// 手机导航
$(".wap_header .menu").click(function () {
	$(".wap_menulist").slideDown();
	$("body").css({ "overflow": "hidden"});
	$(".anniu").addClass('on');
});
$(".wap_close").click(function () {
	$(".wap_menulist").slideUp();
	$("body").css({ "overflow": "initial"});
	$(".anniu").removeClass('on');
});
// if(typeof IS_SCROLL_SHOW !== 'undefined' && IS_SCROLL_SHOW){
// $(window).scroll(function () {
// 	$(window).mousewheel(function(event) {
// 		var wid = $(window).height();
// 		var sWid = $(window).scrollTop();
// 		var tHeight = $(".header").height();
// 		if(wid < sWid && event.deltaY == -1){
// 			$(".header").css({
// 				"top":"-"+tHeight+"px",
// 				"transition":"1s"
// 			})
// 		}else{
// 			$(".header").css({
// 				"top":"0",
// 				"transition":"1s"
// 			})
// 		}
// 	})
// });
// }
if(typeof IS_SCROLL_SHOW !== 'undefined' && IS_SCROLL_SHOW){
var cubuk_seviye = $(document).scrollTop();
var header_yuksekligi = $('.header').outerHeight();
var wid = $(window).height();
$(window).scroll(function () {
	var kaydirma_cubugu = $(document).scrollTop();
	if (kaydirma_cubugu > wid){$('.header').addClass('gizle');} 
	else {$('.header').removeClass('gizle');}
		
	if (kaydirma_cubugu > cubuk_seviye){$('.header').removeClass('sabit');} 
	else {$('.header').addClass('sabit');}	
	cubuk_seviye = $(document).scrollTop();	
})
}
/* 
;(function($){
  //默认参数
  var defaluts = {
      select: "select",
      select_text: "select_text",
      select_ul: "select_ul"
  };
  $.fn.extend({
      "select": function(options){
          var opts = $.extend({}, defaluts, options);
          return this.each(function(){
              var $this = $(this);
              //模拟下拉列表
              if ($this.data("value") !== undefined && $this.data("value") !== '') {
                  $this.val($this.data("value"));
              }
              var _html = [];
              _html.push("<div class=\"" + $this.attr('class') + "\">");
              _html.push("<div class=\""+ opts.select_text +"\">" + $this.find(":selected").text() + "</div>");
              _html.push("<ul class=\""+ opts.select_ul +"\">");
              $this.children("option").each(function () {
                  var option = $(this);
                  if($this.data("value") == option.val()){
                      _html.push("<li class=\"cur\" data-value=\"" + option.val() + "\">" + option.text() + "</li>");
                  }else{
                      _html.push("<li data-value=\"" + option.val() + "\">" + option.text() + "</li>");
                  }
              });
              _html.push("</ul>");
              _html.push("</div>");
              var select = $(_html.join(""));
              var select_text = select.find("." + opts.select_text);
              var select_ul = select.find("." + opts.select_ul);
              $this.after(select);
              $this.hide();
              //下拉列表操作
              select.click(function (event) {
                  $(this).find("." + opts.select_ul).slideToggle().end().siblings("div." + opts.select).find("." + opts.select_ul).slideUp();
                  event.stopPropagation();
              });
              $("body").click(function () {
                  select_ul.slideUp();
              });
              select_ul.on("click", "li", function () {
                  var li = $(this);
                  var val = li.addClass("cur").siblings("li").removeClass("cur").end().data("value").toString();
                  if (val !== $this.val()) {
                      select_text.text(li.text());
                      $this.val(val);
                      $this.attr("data-value",val);
                  }
              });
          });
      }
  });
})(jQuery); */
var config = {
		appId: '10151',
		showLog: false,
		serverUrl: 'https://deapi.funsdata.com/v1/sdk/report',
		// mode: 'debug',
	};
	window.ta = thinkingdata; //赋值全局变量
	ta.init(config); //初始化配置
	async function track(t) {
		console.info(ta.getDeviceId())
	  try {
		switch(t){
			case 1:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Entrance": "Header","name": "点击header位置LetsTalk的入口"};
				break;
			case 2:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Entrance": "Bottom","name": "点击bottom位置LetsTalk的入口"};
				break;
			case 3:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Switch": "Advertiser","name": "点击切换角色表单"};
				break;
			case 4:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Switch": "MediaPartner","name": "点击切换角色表单"};
				break;
			case 5:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Switch": "Influencer","name": "点击切换角色表单"};
				break;
			case 6:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Send": "Advertiser","name": "提交留资表单"};
				break;
			case 7:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Send": "MediaPartner","name": "提交留资表单"};
				break;
			case 8:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Send": "Influencer","name": "提交留资表单"};
				break;
			case 9:
				_className ='Email';
				_obj = {"Email": "Click","name": "点开Email"};
				break;
			case 10:
				_className ='ChatBot';
				_obj = {"ChatBot": "Click","name": "点开chatbot"};
				break;
			case 11:
				_className ='ChatBot';
				_obj = {"ChatBot": "SendEmail","name": "发送身份信息、激活对话"};
				break;
			case 12:
				_className ='LetsTalk';
				_obj = {"LetsTalk_Entrance": "Work","name": "点击Work列表位置下载的入口"};
				break;
		}
		
		const {res, req} = await ta.track(
		  _className, //追踪事件的名称
		  _obj //需要上传的事件属性
		);
	    // 当前请求参数
	    // console.log(JSON.parse(req),"请求参数");
	    // 响应参数
	    // console.log(JSON.parse(res),"响应参数");
	  } catch (error) {
	    // 抛出错误
	    console.error(error);
	  }
	}
	
	
	
	$(document).ready(function(){
			eachIframe();
	        function eachIframe() {
	            setTimeout(function(params) {
	                var iframe = document.getElementsByTagName("iframe");
					
	                for(var i=0;i <iframe.length;i++){
						iframe1 = iframe[i];
						var iwindow = iframe1.contentWindow;
						var idoc = iwindow.document;
						//console.log("window",iwindow);//获取iframe的window对象
						//console.log("document",idoc); //获取iframe的document
						//console.log("html",idoc.documentElement);//获取iframe的html
						//console.log("head",idoc.head); //获取head
						//console.log("body",idoc.body); //获取body
						if(i==0){
							//监听click事件
							$(idoc.documentElement).on('click',function (e) {
								let _alt = $(this).find('svg').attr('alt');
								if(_alt == 'Close icon'){
									track(10);
								}
							});
						}
						if(i==1){
							//监听click事件
							$(idoc.documentElement).on('click',function (e) {
								track(11)
							});
						}
	                 }    
	            },1500);
	        }
	    })