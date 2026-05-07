
/* js禁用滚动条记忆功能 */
// history.scrollRestoration = 'manual';

//convertToEdge();
function convertToEdge() {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location = 'microsoft-edge:' + window.location;
        setTimeout(function () {
            top.window.open('about:blank', '_self').close();
            top.window.opener = self;
            top.self.close();
        }, 1);
    }
}

// 键盘操作
$(document).keydown(function(event){
	let e = event || window.event,
		k = e.keyCode || e.which,
		up = $('.up').attr('href'),
		next = $('.next').attr('href');
	if(up || next){
		switch(k) {
			case 37:
				// …
				console.log('<-');
				window.location.href = up;
				break;
			case 39:
				// …
				console.log('->');
				window.location.href = next;
				break;
		}
	}
});
var tips_index = 0;
$(document).on('mouseenter', '.comtips', function(){
	var remark = $(this).attr('data-remarks');
	remark = remark ? remark : '';
	if(remark){
	tips_index = layer.tips(remark, this, {
		tips: [1, '#000'],
		area: ['auto', 'auto'],
		time: 500000
	});
	}
}).on('mouseleave', '.comtips', function(){
	layer.close(tips_index);
});
function zizhi() {
	layer.open({
		type: 1,
		title: false,
		closeBtn: 1, //不显示关闭按钮
		anim: 2,
		shade: [0.7, '#000000'],
		area: ['auto', 'auto'], //宽高
		shadeClose: true, //开启遮罩关闭
		scrollbar: false,
		content: $(".zizhi")
	});
}
$('#search-btn').on('click', function (e) {
	e.preventDefault();
	keywords  = $("#keywords").val();
	var cat_id = $('#cat_id option:selected').val();
	
	if(!$.trim(keywords)){
		layer.msg('您要搜索什么!');
		return false;
	}else{
		window.location.href = '/search-' + $('#p').val() + '-' + keywords;
		//$("#searchform").submit();
	}
})
function souso(){
	if(event.keyCode ==13){
		keywords  = $("#keywords").val();
	//	var cat_id = $('#cat_id option:selected').val();
		if(!$.trim(keywords)){
			layer.msg('您要搜索什么!');
			return false;
		}else{
			window.location.href = '/search-' + $('#p').val() + '-' + keywords;
			//$("#searchform").submit();
		}
	}
	return false;
}


	
	/**
	 * 数据获取加载更多
	 */
	function resultListMore(params, SuccessCallbackFunc){
		$('#' + params.moreId).on('click',function(){
			if($('#' + params.moreId + '').hasClass('stop')){
				$('#' + params.moreId + '').html("暂无信息");
				$('#' + params.moreId + ':visible').hide();
				return false;
			}
			getResultList(params,SuccessCallbackFunc);
		});
	}
	/**
	 * 数据获取
	 *
	 */
	function getResultList(params, SuccessCallbackFunc, CompleteCallbackFunc){
		let html = '',
			current_page = params.data.page,
			moreText = params.moreText || '加载更多',
			loadingText = params.loadingText || '加载中...',
			obj = $("#" + params.appendId);
		$.ajax({
			type : params.type || "GET",
			url : params.url,
			beforeSend : function(){
				if(current_page <= 1){
					obj.html('');
				}
				$('#' + params.moreId).html(loadingText);
			},
			data: params.data,
			async:true,
			dataType : 'json',
			success : function(data) {
				// 执行成功回调函数
				if (SuccessCallbackFunc!= undefined) {
					SuccessCallbackFunc(data, obj, current_page);
				}	
			},
			complete:function(){
				params.data.page++;
				$('#' + params.moreId).html(moreText);
				if (CompleteCallbackFunc!= undefined) {
					CompleteCallbackFunc(params);
				}
			}
		})
	}
	
	function CompleteCallbackFunc(params){
		$('#' + params.moreId).html(params.moreText);
	} 