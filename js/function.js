// 写入一个投注图案
function addTouzhu(i) {
	var a = '<div number="'+i+'"><img src="./images/'+i+'.png" alt=""></div>';
	$('.touzhukuang').append(a);
}
//删除一个已选投注图案
function removeTouzhu(i) {
	$('.touzhukuang > [number='+i+']').remove();
}
// 查看当前筹码是否被选中
function choumaCurrent($this) {
	return $this.hasClass('choumacurrent');
}
// 查看当前图案是否被选中
function gameimgCurrent($this) {
	return $this.hasClass('gameimgcurrent');
}
// 获取当前选中的投注图案数量
function gameimgnum() {
	var num = 0;
	var divs = $('.gamecontrol > div');
	divs.each(function(index,val){
		if($(val).hasClass('gameimgcurrent')){
			num++;
		}
	});
	return num;
}
// 获取当前玩法
function getGameMethod() {
	return $('#wanfa').val();
}
// 设置当前玩法CSS类
function setGameMethod() {
	if($('#wanfa').val() == 2){
		$('#gameTwo').addClass('gamecurrent');
	} else if($('#wanfa').val() == 3) {
		$('#gameThree').addClass('gamecurrent');
	}
}
// 获取当前选中筹码值
function getChouma() {
	var s = $('.choumaimg');
	var money = 0;
	s.each(function(i,v){
		if($(v).hasClass('choumacurrent')) {
			money = $(this).attr('money');
		
		}
	});
		return money;
}
// 获取选中的投注图案信息
function getTouZhu() {
	var a = $('.gamecontrol > div');
	var zhu = '';
	a.each(function(i,v){

	});
}