$(document).ready(function() {
  $('select').niceSelect();

  $('.portfolio-slider').owlCarousel({
    items:1,
    animateOut: 'fadeOut',
    loop:true,
    margin:0,
    nav: true,
    navText: ['',''],
    mouseDrag: false
  });

  $('.testimonials-slider').owlCarousel({
    items:1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoHeight: true,
    loop: true,
    margin: 0,
    nav: true,
    navText: ['',''],
    mouseDrag: false
  });

  $('.counter').countUp();


  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    disable: 'mobile'
  });

  $('.validate-form').each(function() {
    $(this).validate({
      focusCleanup: true,
      focusInvalid: false,
      unhighlight: function (element, errorClass, validClass) {
        $(element).parent().removeClass("field-error");
      },
      errorPlacement: function(error, element) {{
        $( element ).parent().addClass("field-error");
      }}
    });
  });
  $.validator.messages.required = '* это поле обязательное для заполнения!';
  $('.cabinet-user_form').each(function() {
    $(this).validate({
      errorClass: "error-holder",
      focusCleanup: false,
      focusInvalid: false,
      unhighlight: function (element, errorClass, validClass) {
        $(element).parent().removeClass("field-error");
      },
      errorPlacement: function(error, element) {{
        $( element ).parent().addClass("field-error");
        error.insertAfter($( element ).parent().parent());
      }},
    });
  });

  var toggleText = function() {
    $('[data-toggle-secondary]').each(function() {
        var $toggle = $(this);
        var originalText = $toggle.text();
        var secondaryText = $toggle.data('toggle-secondary');
        var $target = $($toggle.attr('href'));

        $target.on('show.bs.collapse hide.bs.collapse', function() {
            if ($toggle.text() == originalText) {
                $toggle.text(secondaryText);
            } else {
                $toggle.text(originalText);
            }
        });
    });
  };
  toggleText();

  $(".navbar__toggle").click(function() {
    $(this).toggleClass('active');
    $('.navbar-content').toggleClass('open');    
  });

  $("a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        $("html, body").animate({scrollTop:$(this.hash).offset().top}, 500);
        //window.location.hash = this.hash;
    }
  });

	$('.popup-form').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		preloader: false,
		removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
      open: function() {$('.footer-fixed').css('right', '17px');},
      close: function() {$('.footer-fixed').css('right', '');}
    }
  });
  
  $('.popup-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-img-mobile mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
      },
      image: {
        verticalFit: true
      }
    });
  });

	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  $(".cabinet-info__content .portfolio .delete").click(function() {
    $(this).parent('li').hide(350);
  });
});




