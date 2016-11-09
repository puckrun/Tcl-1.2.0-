$(function() {
	$('.top').find('.top11').find('.t1').find('.ul1').find('li').hover(function() {
		$('.top').find('.top11').find('.t1').find('.ul1').find('li').attr('class', '');
		//alert(1)
		$('.top').find('.t3').find('.t30').find('div').css('display', 'none');
		$(this).attr('class', 'active');
		$('.top').find('.t3').find('.t30').find('div').eq($(this).index()).css('display', 'block');
	}, function() {
		/*if($('.top').find('.t3').find('.t30').find('div').css('display', 'none')){
			$('.top').find('.t3').find('.t30').find('div').eq($(this).index()).css('display', 'block');
		}
		*/
		$('.top').find('.t3').find('.t30').find('div').css('display','none')
	})
	$.ajax({
		url: 'json/index.json',
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
		url: 'json/index.json',
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
		url: 'json/index.json',
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
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[3].child.length; i++) {
				html += '<li><a href="#"><img src="' + res[3].child[i].img + '" alt=""/></a><p class="m_tit">' + res[3].child[i].title + '</p><p id="plathead_1ffa4ff89390411fba54aa75d4e539b6" class="red">' + res[3].child[i].price + '</p></li>'
			}
			$('.t34 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
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
		url: 'json/index.json',
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
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[6].child.length; i++) {
				html += '<li><div id="oImg"><a href="#"><img src="' + res[6].child[i].img + '"/></a><p class="p1">' + res[6].child[i].title + '</p><p class="p2">' + res[6].child[i].title1 + '</p><p class="p3">' + res[6].child[i].price + '</p></div></li>';
			}
			$('#roll_layer ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[7].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[7].child[i].img + '"/></p><p class="p1">' + res[7].child[i].title + '</p><p class="p2">' + res[7].child[i].title1 + '</p><p class="p3">' + res[7].child[i].price + '</p></li>';
			}
			$('.s_c31 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[8].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[8].child[i].img + '"/></p><p class="p1">' + res[8].child[i].title + '</p><p class="p2">' + res[8].child[i].title1 + '</p><p class="p3">' + res[8].child[i].price + '</p></li>';
			}
			$('.s_c32 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[9].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[9].child[i].img + '"/></p><p class="p1">' + res[9].child[i].title + '</p><p class="p2">' + res[9].child[i].title1 + '</p><p class="p3">' + res[9].child[i].price + '</p></li>';
			}
			$('.s_c33 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[10].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[10].child[i].img + '"/></p><p class="p1">' + res[10].child[i].title + '</p><p class="p2">' + res[10].child[i].title1 + '</p><p class="p3">' + res[10].child[i].price + '</p></li>';
			}
			$('.s_c34 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[11].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[11].child[i].img + '"/></p><p class="p1">' + res[11].child[i].title + '</p><p class="p2">' + res[11].child[i].title1 + '</p><p class="p3">' + res[11].child[i].price + '</p></li>';
			}
			$('.s_c35 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[12].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[12].child[i].img + '"/></p><p class="p1">' + res[12].child[i].title + '</p><p class="p2">' + res[12].child[i].title1 + '</p><p class="p3">' + res[12].child[i].price + '</p></li>';
			}
			$('.s_c36 ul').html(html);
		}
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[13].child.length; i++) {
				html += '<li><p class="img_1"><img src="' + res[13].child[i].img + '"/></p><p class="p1">' + res[13].child[i].title + '</p><p class="p2">' + res[13].child[i].title1 + '</p><p class="p3">' + res[13].child[i].price + '</p></li>';
			}
			$('.s_c37 ul').html(html);
		}
	})
	$('.Lister').find('.switch_card').find('.s_c2 ').find('#oUl').find('li').hover(function() {
		$('.Lister').find('.switch_card').find('.s_c2').find('#oUl').find('li').attr('class', '');
		$('.Lister').find('.switch_card').find('.s_c3').find('div').css('display', 'none');
		//$(this).find("li:first").animate({top:-5},30)

		$(this).attr('class', 'li1');
		$('.Lister').find('.switch_card').find('.s_c3').find('div').eq($(this).index()).css('display', 'block')
	})
	$.ajax({
		url: 'json/index.json',
		type: 'GET',
		success: function(res) {
			var html = '';
			for(var i = 0; i < res[14].child.length; i++) {
				html += '<li><div class=""><a href="#"><img src="' + res[14].child[i].img + '"/></a></div><div id="m_q">' + res[14].child[i].title + '</div><p class="p1">' + res[14].child[i].title1 + '</p><p class="p2">' + res[14].child[i].title2 + '</p><p class="p3">' + res[14].child[i].price + '</p></li>';
			}
			$('#m_d3 ul').html(html);
		}
	})
})