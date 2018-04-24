$(function(){
	setGameMethod();//初始化玩法
	$('.gamecontrol > div ').on('click',function(){
		//给投注图案添加点击事件
		if(gameimgCurrent($(this))){
			$(this).removeClass('gameimgcurrent');
			removeTouzhu($(this).attr('number'));
		} else {
			if(getGameMethod() == 2){
				if(gameimgnum() < 2){
					$(this).addClass('gameimgcurrent');
					addTouzhu($(this).attr('number'));
				} else {
					layer.msg('当前为两骰玩法，最多下注两个图案！',{time:1300});
				}
			} else if(getGameMethod() == 3) {
				if(gameimgnum() < 3) {
					$(this).addClass('gameimgcurrent');
					addTouzhu($(this).attr('number'));
				} else {
					layer.msg('当前为三骰玩法，最多下注三个图案！',{time:1300});
				}
			}
			// $(this).siblings().removeClass('gameimgcurrent');
		}
		// console.log(gameimgnum());
		console.log(getGameMethod()+'玩法');
});
	$('.zaixian').on('mouseover',function(){
		// 给在线人数框添加滚动类
		$(this).addClass('scroll');
});
	$('.zaixian').on('mouseout',function(){
		//去除在线人数框滚动效果
		$(this).removeClass('scroll');
});
	$('.choumaimg').on('click',function(){
		// 给筹码框添加选中状态
		if(choumaCurrent($(this))){
			$(this).removeClass('choumacurrent');
		} else {
			$(this).addClass('choumacurrent');
			$(this).siblings().removeClass('choumacurrent');
		}
	});
	$('#xiazhubtn').on('click',function(){
		if(!gameimgnum()){
			layer.msg('请选择图案',{time:1300});
			return;
		}
		// 投注按钮点击事件(如果有选中筹码，则else 若无则提示输入下注金额)
		if(!getChouma()){
			layer.prompt({'title':'请输入投注金额'},function(money,index){
				//如果没有选中筹码，则提示输入金额
				layer.close(index);
				var cont = '您的投注金额为：'+money+'元。'+'下注号码为：'+getTouzhu();
				layer.confirm(cont,{btn:['下注','取消']},function(touzhunum,index){
					//判断用户点击按钮，此处应该写ajax请求发送下注数据
					layer.msg('下注成功');
					$.ajax({
            			url:"#",
            			data:{'money':money,'userid':userid,'haoma':getTouzhu(),'qihao':qihao},
            			type:"Post",
            			dataType:"json",
            			success:function(data){
               			layer.msg(data.msg);
            			},
            			error:function(data){
                		$.messager.alert('错误',data.msg);
            		}
        			});
				},function(){
					layer.msg('已取消下注');
				});
		});
		} else {
			var cont = '您的投注金额为：'+getChouma()+'元。'+'下注号码为：'+getTouzhu();
			layer.confirm(cont,{btn:['下注','取消']},function(){
				//此处写下注请求AJAX
				layer.msg('下注成功');
				$.ajax({
            			url:"#",
            			data:{'money':money,'userid':userid,'haoma':getTouzhu(),'qihao':qihao},
            			type:"Post",
            			dataType:"json",
            			success:function(data){
               			layer.msg(data.msg);
            			},
            			error:function(data){
                		$.messager.alert('错误',data.msg);
            		}
        			});
			},function(){
				layer.msg('已取消下注');
			});
			
		}
		
		// console.log(getChouma());
	});
});
