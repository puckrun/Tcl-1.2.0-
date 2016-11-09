$(function() {
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[0].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[0].child[i].img + '" alt=""/></a><p class="m_tit">' + res[0].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[0].child[i].price + '</p></li>'
			}
			$('.t31 ul').html(html);
		}
	})
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[1].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[1].child[i].img + '" alt=""/></a><p class="m_tit">' + res[1].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[3].child[i].price + '</p></li>'
			}
			$('.t32 ul').html(html);
		}
	})
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[2].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[2].child[i].img + '" alt=""/></a><p class="m_tit">' + res[2].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[2].child[i].price + '</p></li>'
			}
			$('.t33 ul').html(html);
		}
	})
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[4].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[3].child[i].img + '" alt=""/></a><p class="m_tit">' + res[4].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[4].child[i].price + '</p></li>'
			}
			$('.t35 ul').html(html);
		}
	})
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[5].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[5].child[i].img + '" alt=""/></a><p class="m_tit">' + res[5].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[5].child[i].price + '</p></li>'
			}
			$('.t36 ul').html(html);
		}
	})
	$.ajax({
		url: '../json/page.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[3].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[3].child[i].img + '" alt=""/></a><p class="m_tit">' + res[3].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[3].child[i].price + '</p></li>'
			}
			$('.t34 ul').html(html);
		}
	})
	$('.top').find('.top11').find('.t1').find('.ul1').find('li').hover(function() {
		$('.top').find('.top11').find('.t1').find('.ul1').find('li').attr('class', '');
		//alert(1)
		$('.top').find('.t3').find('.t30').find('div').css('display', 'none');
		$(this).attr('class', 'active');
		$('.top').find('.t3').find('.t30').find('div').eq($(this).index()).css('display', 'block');
	}, function() {
		$('.top').find('.t3').find('.t30').find('div').css('display', 'none');
	})
	$('#Title').find('#Title_z').find('#L_R').find('ul').find('li').click(function() {
		//$('#Title').find('#Title_z').find('#L_R').find('ul').find('li').attr('class','');
		$('#Title').find('#Title_z').find('#L_T').find('div').css('display', 'none');

		//$(this).attr('class','act');
		$('#Title').find('#Title_z').find('#L_T').find('div').eq($(this).index()).css('display', 'block');
	})
})
window.onload = function(){
	 var opro = ['安徽', '新疆', '云南', '浙江', '重庆','甘肃','北京','上海','吉林'];
	 var ocity =[
				['合肥', '安庆', '蚌埠', '亳州', '巢湖', '池州', '滁州', '阜阳', '淮北', '淮南', '黄山', '六安', '马鞍山', '宿州', '铜陵', '芜湖', '宣城'],
				['乌鲁木齐', '阿克苏', '阿拉尔', '阿勒泰', '巴音郭楞', '博尔塔拉', '昌吉', '哈密', '和田', '喀什', '克拉玛依', '克孜勒苏柯尔克孜', '石河子'],
				['昆明', '保山', '楚雄', '大理', '德宏', '迪庆', '红河', '丽江', '临沧', '怒江', '曲靖', '思茅', '文山', '西双版纳', '玉溪', '昭通'],
				['杭州', '湖州', '嘉兴', '金华', '丽水', '宁波', '衢州', '绍兴', '台州', '温州', '舟山'],
				['巴南', '北碚', '璧山', '长寿', '城口', '大渡口', '大足', '垫江', '丰都'],
				['兰州','平凉','天水','武威','酒泉','白银']
				]
			var pro=document.getElementById('pro');
			var city=document.getElementById('city');
			for(var i=0;i<opro.length;i++){
			var op=document.createElement('option');
			op.innerHTML=opro[i];
			pro.appendChild(op);
			}
		                 //alert(opro.length)
		    pro.onchange=function(){					
			city.innerHTML='<option>请选择</option>';
						//alert(this.value)	
			var index=opro.indexOf(this.value);
			for(var i=0;i<ocity[index].length;i++){
				var oc=document.createElement('option');
					oc.innerHTML = ocity[index][i];
					city.appendChild(oc);
				}
						
			}
		function $(id){
			return document.getElementById(id);
		}
		var lis = $('size').getElementsByTagName('li');
			for (var i = 0; i < lis.length; i++) {
				lis[i].onclick = function(){
					for (var j = 0; j <　lis.length;j ++) {
						lis[j].className = '';
					}
					this.className = 'bingo';
				}
			}
			$('btn').onclick = function(){
						//alert(1)
			for (var i = 0; i < lis.length; i++) {
				if (lis[i].className == 'bingo') {
					var size = lis[i].innerHTML;
				} 
			}
			var val = 'id#'+$('goodsId').value+'|name#'+$('name').innerHTML+'|imgUrl#'+$('goodsImg').src+'|price#'+$('price').innerHTML+'|size#'+size+'|number#'+$('number').value+'|url#'+window.location.href;
				cookie('goods'+$('goodsId').value+size,val,1);
	}
}
 window.onscroll=function(){
	var goTop=document.getElementById("goTop");
    var top= document.body.scrollTop|| document.documentElement.scrollTop;
		if(top>=1000){
			 goTop.style.display="block";
		}else{
			 goTop.style.display="none";
		}
		 goTop.onclick=function(){
			var t=setInterval(function(){
				 document.documentElement.scrollTop -= 20;
				 document.body.scrollTop -=20;
				 top= document.body.scrollTop||
				 document.documentElement.scrollTop;
		 if(top<=0){
			 clearInterval(t);
		}
	},10);
  }
}