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
})