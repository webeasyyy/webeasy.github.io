jQuery( document ).ready(function($) {
setTimeout(()=>{
	$('body').css('display','block');
},1000);

// TOP_BANNER SECTION
var windowWidth = $(window).width();

$('.top-banner, .right-content, .purple-planet, .blue-planet').on('mousemove',function(event){

	var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
	var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
	$('.right-content').css('margin-right',moveX + 'px');
	$('.right-content').css('margin-top',moveY + 'px');

	$('.purple-planet').css('margin-left',moveX + 'px');
	$('.purple-planet').css('margin-bottom',moveY + 'px');

	$('.blue-planet').css('margin-right',moveX + 'px');
	$('.blue-planet').css('margin-bottom',moveY + 'px');
});

$('.toggle__menu-btn').click(function(e){
	$('.toggle__navbar').css('display','block');
	$('body').css('overflow', 'hidden');
});
$('.close-btn').click(function(e){
	$('.toggle__navbar').css('display','none');
	$('body').css('overflow', 'visible');
});

$('.header_link').click(function(e){
	$(this).addClass('active').siblings().removeClass('active');
});
$('.nav-link').click(function(e){
	$(".close-btn").trigger("click");
	$('body').css('overflow', 'visible');
});

// POPUP 

$('.pop-out-btn').click(function(e){
	$('#contact-modal').css('display','block');
	$('body').css('overflow', 'hidden');
})
$('.btn-close').click(function(e){
	$('#contact-modal').css('display','none');
	$('body').css('overflow', 'visible');
});
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
function validatePhone(txtPhone) {
  // var a = document.getElementById(txtPhone).value;
  var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
  if (filter.test(txtPhone)) {
      return true;
  }
  else {
      return false;
  }
}
function redirectToThankYouPage() {
	window.location.href = "thankyou.html";
 }
if(getUrlParameter('submit') == "true"){
	$('#contact-modal').removeClass('hidden');
	$('form.contact_us-form').hide();
	setTimeout(redirectToThankYouPage, 2000);
}

$('.btn-close').click(function(e){
	e.preventDefault();
	$('.thankyou').removeClass('active');
	$('.form').css('display','block');
	$('#error-validation-message').hide();
	$('.contact_us-form').trigger('reset');			

});



$('.top-nav-item').click(function(e){
		var tab_id = $(this).attr('value');
		
		$('select').val(tab_id).trigger("change");

});
 


// Header links

$('a.top-nav-link').click(function(e){
	e.preventDefault();
	var tab_id = $(this).attr('href');
	tab_id = tab_id.replace(/^#/, '');
	$('#whatwedo .service-tab a[tabs="'+tab_id+'"]').trigger('click');
	$('html, body').animate({
      scrollTop: $("#whatwedo").offset().top
  }, 800);
});

// SUCCESS SECTION TABS

$('.success__tabs-button').click(function(e){
	e.preventDefault();
	$('.success__tabs-button').removeClass('active');
	// $(this).parent('li').addClass('active').siblings().removeClass('active');
	$('.tabs-cards').removeClass('active');
	$(this).addClass('active');
	var attr = $(this).attr('idd');
	$('#'+attr).addClass('active');
});



// SERVICE SECTION TABS
$('.service-tab-link').click(function(e){
	e.preventDefault();
	$('.service-tab-link').removeClass('active');
	$(this).parent('li').addClass('active').siblings().removeClass('active');
	$('.tabs-content').removeClass('active');
	$(this).addClass('active');
	var attr = $(this).attr('tabs');
	$('#'+attr).addClass('active');
	$('#'+attr).removeClass('hidden');

});


// COPYRIGHT FOOTER

// Get the current year
var currentYear = new Date().getFullYear();

// Set the copyright notice
var copyright = "&copy;" + currentYear + " Web Forte Technologies Pvt. Ltd. All rights reserved.";

// Set the text of the copyright footer element
document.getElementById("copyright-text").innerHTML = copyright;
});


jQuery('.load-btn').click(function(e){
	e.preventDefault();
	jQuery('.tab-layout').toggleClass('active');
});

// FIXED HEADER

jQuery(window).scroll(function($) {
  // Header animation
    if (jQuery(document).scrollTop() > 10){
	jQuery(".header__top").addClass("fixed");
      jQuery(".header__sticky").hide();
    } else {
      jQuery(".header__top").removeClass("fixed");
      jQuery(".header__sticky").show();
    }

  // Aeroplane animation

    var sTop = jQuery(window).scrollTop();
    var winH = jQuery(window).outerHeight();
    if(jQuery('.cta__section').length){
      if( sTop + winH > (jQuery(".cta__section ").offset().top + jQuery(".cta__section").outerHeight())  ){
        jQuery(".discuss__aeroplane").addClass("discuss__aeroplane--show");
      } else {
        jQuery(".discuss__aeroplane").removeClass("discuss__aeroplane--show");
      } 
    	}
  });


jQuery('.nav-link').click(function(e) {
e.preventDefault();
var id = $(this).attr('href');
var offs = $(id).offset();
$('html, body').animate({ scrollTop: offs.top - 70}, 'slow');
});
$(window).resize(function() {
var width = $(window).width();
var height = $(window).height();
})

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
  const slidesContainer = slider.querySelector('.slides-container');
  const slides = slider.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth; // Get the width of each slide
  let slideIndex = 0;

  // Clone the first slide and append it to the slides container
  const firstSlideClone = slides[0].cloneNode(true);
  slidesContainer.appendChild(firstSlideClone);

  function nextSlide() {
    slideIndex++;
    slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    if (slideIndex === slides.length) {
      // Reset slideIndex to 0 for infinite loop
      slideIndex = 0;
      // Wait for the slide transition to finish and reset the slides container position
      setTimeout(() => {
        slidesContainer.style.transition = 'none';
        slidesContainer.style.transform = 'translateX(0)';
        setTimeout(() => {
          slidesContainer.style.transition = 'transform 1s ease';
        });
      }, 1000);
    }
  }

  // Automatically transition every 3 seconds (adjust as needed)
  setInterval(nextSlide, 3000);
});
