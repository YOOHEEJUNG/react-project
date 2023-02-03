$(document).ready(
	function() {
		
            // 검색기능
            $('.md-search-input').keyup(function() {
                var k = $(this).val();
                $('.md-section, .md-section > .content-list > .content-item').hide();
                var temp = $(".md-content > .md-section > .content-list .value:contains('" + k + "'), .md-content > .md-section > .content-list .md-product:contains('" + k + "')");
                $(temp).parents('.md-section').show();
                $(temp).closest('li').show();
            });

		$('.header_banner .ico_close').click(function() {
			$('.header_banner').remove();
		});
	$('.aside_button').click(function() {
		$('body').addClass('modal-opened');
		$('.side_background, .side_container').addClass('active');
	});
	$('.side_background').click(function() {
		$('body').removeClass('modal-opened');
		$('.side_background, .side_container').removeClass('active');
	});
	$('.gnb_item').children('.profile_photo').click(function() {
		$('.prfPopup').toggleClass('active');
	});
	$('a.gnb_search, .stu_search-input, #ico_search').click(function() {
		$('body').addClass('modal-opened');
		$('.stu_md_search').addClass('active');

		if($('.header_banner').length > 0) {
			$('.md-container').removeClass('pos-top1');
			$('.md-container').addClass('pos-top2');
		} else {
			$('.md-container').removeClass('pos-top2');
			$('.md-container').addClass('pos-top1');
		};
		$('.md-searchWrap input.md-search-input').focus();
	});

	$('a.ico_close, .search_background').click(function() {
		$('body').removeClass('modal-opened');
		$('.stu_md_search').removeClass('active');
	});
	$(document).click(function(e) {
		if($('.prfPopup').css('opacity') == 1) {
				if(!$('.prfPopup, .profile_photo').has(e.target).length) {
					$('.prfPopup').removeClass('active');
				};
			};
		});
	var gnbBanner = new Swiper ('.swiper-gnb_banner',{direction:'horizontal',slidesPerView:1,loop:true,navigation:{nextEl:'.gnb_banner-button-next',prevEl:'.gnb_banner-button-prev'},pagination:{el:'.gnb_banner-pagination',type:'fraction'}});
	$('.stu_copyright .info_btn').click(function() {
		$(this).toggleClass('on');
		$('.stu_copyright .business_info').toggleClass('on');
	});
	$('.stu_scroll_top').insertBefore('footer');
	$(window).scroll(function() {
		if($(this).scrollTop() > 600) {
			$('.stu_scroll_top').fadeIn().css('display','block');
	}
	else {
 		$('.stu_scroll_top').fadeOut();
 	}
 });
	$('.stu_scroll_top').click(function() {
		$('html, body').animate({scrollTop : 0}, 400);
 	return false;
	});
});
