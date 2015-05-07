
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


function googleLoad(){
	$('#div_recommendBox').fadeOut();
	$('#message').html('Thanks for singing up!<br> We will get back to you when ready.');
	$(".success-message").fadeIn();
	setTimeout(function(){ $(".success-message").fadeOut(); }, 1500);
}

function recommendData(){
	$('#div_recommendBox').fadeOut();
	$('#message').html('Thanks for your recommendation!');
	$(".success-message").fadeIn();
	setTimeout(function(){ $(".success-message").fadeOut(); }, 1500);
	$('body').find('textarea').val('');
}

function googleSubmit(){
	$('body').find('input:text').val('');
	return;
}

function startVideo(){
	$('#video')[0].webkitEnterFullscreen();
}
function endVideo(e){
	console.log("ended Video");
	$('#video')[0].webkitExitFullscreen();
	$('#video')[0].src = $('#video')[0].currentSrc;

}
jQuery(document).ready(function() {
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});	
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/3_darker.jpg");
    // $('.top-content').backstretch("assets/img/backgrounds/2_Opac45HD.png");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    $('.earlyAccess-container').backstretch("assets/img/backgrounds/3_darker.jpg");
    $('#div_videoImage').backstretch('assets/img/backgrounds/video_background.png');
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
    
    /*
		On-demand data
	*/
	$(".andMore").on("click", function(){
		$("#andMore").toggle();
	});

	/*
		Recommend Data
	*/
	$('#div_recommendData').on('click', function(){
		$('#div_recommendBox').fadeIn();
	});
	$("#p_exit").on('click', function(){
		$('#div_recommendBox').fadeOut();
	});
    /*
		About-us popup
	*/
	$(".about-us-photo").on('mouseover', function(){
		$(this).parent().find('.div_bio').css("display", "block");
	});
	$(".about-us-photo").on('mouseleave', function(){
		$(this).parent().find('.div_bio').css("display", "none");
	});

	/*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});


	/*
		Set image for each team member
	*/
	// var imgPath = 'assets/img/team/', fileType = '.png';
	// var teamImg = ['michael_chang','david_nichtenhauser','kyle_solan','adam_falls','i-tzu_chen','ana_ruelas',
	// 			'crop_jaccqueline_hung','crop_prasantha_varma','crop_hank_chu','chih-wei_chang','patricia_skoby',
	// 			'crop_alvin_lin','crop_wu-sungpeng','crop_lc_huang','crop_yi-kai_lin','crop_poc_hsu'];
	// var ind = 0;
	// $('.about-us-photo').each(function(){
	// 	$(this).find('img').attr("src", imgPath+teamImg[ind]+fileType)
	// 						.attr("data-at2x",imgPath+teamImg[ind]+fileType);

	// 	ind++;
	// })


});


jQuery(window).load(function() {
	
	/*
		Loader
	*/
	$(".loader-img").fadeOut();
	$(".loader").delay(1000).fadeOut("slow");
	
	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

