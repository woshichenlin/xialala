$(".xl").click(function(ev){
			ev.stopPropagation()
			$(this).next().toggle()
		})
		$(".box>li").click(function(){
			$(this).parents(".div").find("input").val($(this).find("b").html())
			$(this).parents(".div").find("span").html($(this).find("i").html())
			$(this).parent().hide()
		})
		$(".box>li").hover(function(){
			
			$(this).css("background","lightblue")
		},function(){
			$(this).css("background","#fff")
		})
		$(document).click(function(){
			$(".xl").next().hide()	
		
		})