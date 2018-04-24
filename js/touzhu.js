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
				layer.close(index);
				layer.confirm('确认您的下注信息',{btn:['下注','取消']},function(touzhunum,index){
					layer.msg('下注成功'+getTouzhu());
				},function(){
					layer.msg('已取消下注');
				});
		});
		} else {
			layer.msg('下注成功'+getTouzhu());
		}
		
		console.log(getChouma());
	});
});
