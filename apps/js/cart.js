//商品规格选择
$(function(){
	$(".guige").each(function(){
		var i=$(this);
		var p=i.find("ul>li");
		p.click(function(){
			if(!!$(this).hasClass("selected")){
				$(this).removeClass("selected");
				i.removeAttr("data-attrval");
			}else{
				$(this).addClass("selected").siblings("li").removeClass("selected");
				i.attr("data-attrval",$(this).attr("data-aid"))
			}
			getattrprice() //输出价格
		})
	})
})