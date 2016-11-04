$(document).ready(function() {   
	//日期插件   
	// $('#popupDatepicker').datepicker({
	// 			changeMonth:true,
 //                changeYear:true,
 //                dateFormat:"yy-mm-dd",
 //                regional:"zh-Tw"
	// }

	// ); 
	//搜索
	$(".search-select").hover(function(){
		$(".search-select-list").show();
	},function(){
		$(".search-select-list").hide();
	});
	$(".search-select-list a").click(function(){
		var searchText=$(this).text();
		$(".search-select>a").html(searchText);
		var url=$(this).attr("url");
        $("#search-all").attr("action",url);


	});
	$(".search-select-list a").click(function(){
		$(".search-select-list").hide();
	});
	//导航栏  买车下拉
	$(".buycar").hover(function(){

		$(this).css({"background":"#ec3c2d"});
		$("img",$(this)).attr("src","img/topJTWhite.png");
//		$("i",$(this)).html("&#xe624").css({"color":"#fff"});
		
		$("a.active",$(this)).css({"color":"#fff"})
		$(".buycar-list",$(this)).show();
		$(".buycar-list a",$(this)).css({"background":"#fff"});
	},function(){
		$(this).css({"background":"#fff"});
//		$("i",$(this)).html("&#xe611").css({"color":"#a9a9a9"});
		$("img",$(this)).attr("src","img/topJT.png")
		$("a.active",$(this)).css({"color":"#333"})
		$(".buycar-list",$(this)).hide();
	})
	//搜索   提交时不为空
	
			$("form").submit( function (){
				if($(".keywords").val()==""){
					alert("请输入关键字");
					return false;
				}
			  
			} );
	//获取焦点  失去焦点
	$("#search-all input[type=text]").focus(function(){
		$(this).val("");
	});
	$("#search-all input[type=text]").blur(function(){
		$(this).val("输入关键字进行搜索");
	});
	//小图片左右滚动
	var $moveBox=$(".showcar-img-l-small-list-over");
	var moveBoxImgW=$(".showcar-img-l-small-list a").eq(0).width();
	function move(){
		$moveBox.animate({marginLeft:-moveBoxImgW},200,function(){
			$(".showcar-img-l-small-list a").first().insertAfter($(".showcar-img-l-small-list a").last());
			$moveBox.css({marginLeft:"0"});
		})
		
	}
	$("i.rightBtn").click(function(){
		move();
		$(".showcar-img-l-small-list a img").removeClass("active");
		$(".showcar-img-l-small-list a img").first().addClass("active");
		$(".showcar-img-l-big img").attr("src",$(".showcar-img-l-small-list a img.active").attr("src"));
		
	});
	$("i.leftBtn").click(function(){
		$(".showcar-img-l-small-list a").last().insertBefore($(".showcar-img-l-small-list a").first());
  	    $moveBox.css({marginLeft:-moveBoxImgW});
  	    $moveBox.animate({marginLeft:0},200);
  	    
  	    $(".showcar-img-l-small-list a img").removeClass("active");
		$(".showcar-img-l-small-list a img").first().addClass("active");
		$(".showcar-img-l-big img").attr("src",$(".showcar-img-l-small-list a img.active").attr("src"));
	})
 //点击小图切换大图
 $(".showcar-img-l-small-list a img").click(function(){
		$(".showcar-img-l-big img").attr("src",$(this).attr("src"));
		$(".showcar-img-l-small-list a img").removeClass("active");
		$(this).addClass("active");
	});
	
   //车辆认证报告  切换左右
  $(".car-right-img-btn a").click(function(){
  	var showCarIndex=$(this).index();
  	$(".car-show-coordinate-img").hide().eq(showCarIndex).show();
  	$(".car-right-img-btn a").removeClass("btn-active");
  	$(this).addClass("btn-active");
  	
  });
  //
  $(".car-configuration-parameters-btn a").click(function(){
  	 var BtnIndex=$(this).index();
  	 $(".table-car-Vehicle").hide().eq(BtnIndex).show();
  	 $(".car-configuration-parameters-btn a").removeClass("active");
  	 $(this).addClass("active");
  });
  //


}); 