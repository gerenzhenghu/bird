$(function(){
	$.get("php/getGoodsList.php", function(data){
		console.log("Data Loaded: " + data);
  		let htmlStr = "";
  		for(let i in data){
  			htmlStr+=`<div class="page-bg">
					<a href="##" class="page-img-bg"><img class="page-imgs" src="${data[i].goodsImg}" alt=""></a>
					<a href="##" class="page_text_1"><span>${data[i].goodsName}</span>
					</a>
					<div class="page_text_2">
						<span>￥</span>
						<span>${data[i].goodsPrice}</span>
					</div>
					<div class="page_text_3">
						<p>售出<span>${data[i].goodsCount}</span></p>
						<p>评论<span>${data[i].goodsDesc}</span></p>
					</div>
				</div>`;
				// var imgs1=data[i].goodsImg;
				// var imgs=data[i].beiyong1;
				
  		}
  		$(".page-list").html(htmlStr);
  		var l=$(".page-bg");
  		var v=$(".page-imgs");
  		for(let i=0;i<l.length;i++){
  			$(l[i]).hover(
			function(){
				$(v[i]).attr("src",data[i].beiyong1);
					},
			function(){
				$(v[i]).attr("src",data[i].goodsImg);
					}
			)
  		}
  		
	},"json");
});