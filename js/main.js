/*******lokacija******/
var lokacijaCela = window.location.href
var lokacijaSplit = window.location.href.split('/')
for(let i=0;  i<lokacijaSplit.length; i++){
	if(i==lokacijaSplit.length-1){
		var lokacija = lokacijaSplit[i]
	}
}
/********NAVIGACIJA********/
window.onload = function(){
	document.getElementById("navIcon").addEventListener("click", navSlide)
}
function navSlide(){
	if($('#nav').css('visibility')=='hidden'){
		$('#nav')
			.css({'visibility': 'visible'})
			.animate({width: '100%', height: '100%'}, 510)
		$('body').css({'overflow': 'hidden'})
		
	}
	else {
		$('#nav')
			.animate({width: '0%', height: '0%'}, 410)
			setTimeout(function(){
				$('#nav').css('visibility','hidden');
					},411);
		$('body').css({'overflow': 'visible'})
	}
}

$("#navIcon").hover(
	function()
	{
		$("#navIcon span:first-child")
		.stop(true, true)
		.animate({width: '15px'}, 210)
		$("#navIcon span:nth-child(2)")
		.stop(true, true)
		.animate({width:'27px'}, 210);
	},
	function()
	{
		$("#navIcon span:first-child")
		.stop(true, true)
		.animate({width: '27px'}, 210)
		$("#navIcon span:nth-child(2)")
		.stop(true, true)
		.animate({width: '15px'}, 210)
	}
)
$("#nav a").hover(
	function()
	{
		if(this == document.getElementById("restaurant"))
			$("#imageBg img:nth-child(1)").show().addClass('navPhotoAppear')
		else if(this == document.getElementById("menu"))
			$("#imageBg img:nth-child(2)").show().addClass('navPhotoAppear').removeClass('navPhotoDisappear')
		else if(this == document.getElementById("contact"))
			$("#imageBg img:nth-child(3)").show().addClass('navPhotoAppear').removeClass('navPhotoDisappear')
	},
	function()
	{
		if(this == document.getElementById("restaurant"))
			$("#imageBg img:nth-child(1)").hide(300)
		else if(this == document.getElementById("menu"))
			$("#imageBg img:nth-child(2)").hide(300).addClass('navPhotoDisappear').removeClass('navPhotoAppear')
		else if(this == document.getElementById("contact"))
			$("#imageBg img:nth-child(3)").hide(300).addClass('navPhotoDisappear').removeClass('navPhotoAppear')
	}
)

if((lokacija=='index.html')||(lokacijaCela = 'https://livio.netlify.com/')){
	/*****ARROW*****/
	$("#arrowDown").click(function() {
		$('html').animate({
			scrollTop: $("#about").offset().top},
			1000);
	});

	/*********DOTS**********/
	var dots = $('.dots')
	var months = $('#slideChange h3')
	var monthsDescription = $('#slideChange p')
	$(document).ready(function(){
		$('.dots').click(function(){
			var dotNumber = $(this).attr("data-number")
			for (let i = 0; i < dots.length; i++) {
				$(dots[i]).removeClass('active')
				$(months[i]).removeClass('activeHeader')
				$(monthsDescription[i]).removeClass('activeHeader')
				
				if($(months[i]).attr("data-number")==dotNumber){
					$(months[i]).addClass("activeHeader")
					$(monthsDescription[i]).addClass("activeHeader")
				}
			}
			$(this)
			.addClass('active')
			.html("<span></span>")
			$("#slideChange img").attr("src", "img/month"+dotNumber+".png")
		})
	})

	/************INDEX MENJANJE SLIKA*************/
	$('#aboutSide1 a').hover(
		function()
		{
			$("#aboutPhoto3 img").attr("src", "img/team1.jpg").show().addClass('aboutPhotoAppear').removeClass('aboutPhotoDisappear')
			$(this)
			.stop(true, true)
			.animate({"font-size": "0.87em"}, 300);
		},
		function()
		{
			$("#aboutPhoto3 img").removeClass('aboutPhotoAppear').addClass('aboutPhotoDisappear')
			$(this)
			.stop(true, true)
			.animate({"font-size": "0.8em"});
		}
	)
	$('#aboutSide2 a').hover(
		function()
		{
			$("#aboutPhoto3 img").attr("src", "img/food1.jpg").show().addClass('aboutPhotoAppear').removeClass('aboutPhotoDisappear')
			stop(true, true)
			$(this).animate({"font-size": "0.87em"}, 300);
		},
		function()
		{
			$("#aboutPhoto3 img").removeClass('aboutPhotoAppear').addClass('aboutPhotoDisappear')
			stop(true, true)
			$(this).animate({"font-size": "0.8em"});
		}
	)
}

if(lokacija=='contact.html'){
	/*******forma*******/
	$(document).ready(function(){
		document.getElementById('buttonSubmit').addEventListener("click", formCheck)
	})
	var regexIme = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,20}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,25})*$/,
		regexPrezime = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,20}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,25})*$/,
		regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d]).{8,30}$/,
	/*password mora da ima jedno veliko slovo, jedno malo slov i jedan broj*/
		regexEmail = /^(?!\.)[A-z\d!#$%&'*+-/=?^_`{|}~\.]{3,30}@[A-z\d-]{3,10}\.[a-z]{2,5}$/,
		regexYourMessage = /^.{5,120}$/;

	function formCheck(){
		var firstName = document.getElementById("firstName"),
			lastName = document.getElementById("lastName"),
			password = document.getElementById("password"),
			email = document.getElementById("email"),
			yourMessage = document.getElementById("yourMessage"),
			ddList = document.getElementById("ddList");

		var firstNameValue = document.getElementById("firstName").value.trim(),
			lastNameValue = document.getElementById("lastName").value.trim(),
			passwordValue = document.getElementById("password").value.trim(),
			emailValue = document.getElementById("email").value.trim(),
			yourMessageValue = document.getElementById("yourMessage").value.trim(),
			ddListIndex = document.getElementById("ddList").selectedIndex;

		var valid = true; 

		if(regexIme.test(firstNameValue)){
			firstName.style.borderBottom = "2px solid lightgreen"
		}
		else{
			firstName.style.borderBottom = "2px solid red"
			valid = false;
		}


		if(regexPrezime.test(lastNameValue)){
			lastName.style.borderBottom = "2px solid lightgreen"
		}
		else{
			lastName.style.borderBottom = "2px solid red"
			valid = false;
		}


		if(regexPassword.test(passwordValue)){
			password.style.borderBottom = "2px solid lightgreen"
		}
		else{
			password.style.borderBottom = "2px solid red"
			valid = false;
		}


		if(regexEmail.test(emailValue)){
			email.style.borderBottom = "2px solid lightgreen"
		}
		else{
			email.style.borderBottom = "2px solid red"
			valid = false;
		}


		if(regexYourMessage.test(yourMessageValue)){
			yourMessage.style.borderBottom = "2px solid lightgreen"
		}
		else{
			yourMessage.style.borderBottom = "2px solid red"
			valid = false;
		}


		if(ddListIndex==0){
			ddList.style.borderBottom = "2px solid red"
			valid = false;
		}
		else{
			ddList.style.borderBottom = "2px solid lightgreen"
		}
		if(valid&&(regexIme.test(firstNameValue))&&(regexPrezime.test(lastNameValue))&&(regexPassword.test(passwordValue))&&(regexEmail.test(emailValue))&&(regexYourMessage.test(yourMessageValue))&&(ddListIndex==0)){
			firstName.value = '';
			lastName.value = '';
			password.value = '';
			email.value = '';
			yourMessage.value = '';
			ddList.selectedIndex = 0;
			$('#firstName').css({'border-bottom': '2px solid $svetloZlatna'})
			lastName.style.borderBottom = "2px solid $svetloZlatna";
			password.style.borderBottom = "2px solid $svetloZlatna";
			email.style.borderBottom = "2px solid $svetloZlatna";
			yourMessage.style.borderBottom = "2px solid $svetloZlatna";
			ddList.style.borderBottom = "2px solid $svetloZlatna";
		}
	}
}

if(lokacija=='restaurant.html'){
	/***********RESTAURANT************/
		var restaurantPhotos = new Array("img/team1.jpg", "img/team2.jpg","img/team3.jpg","img/team4.jpeg","img/team5.jpg","img/team6.jpg", "img/team7.jpg", "img/team8.jpg", "img/team9.jpg", "img/team10.jpg", "img/team11.jpg","img/team12.jpg","img/team13.jpg")
		var photoRestaurantLength = restaurantPhotos.length
		var photoNumber = 0

		function Previous(){
			if(document.images){
				photoNumber--
			if(photoNumber<0)
				photoNumber = photoRestaurantLength - 1
			document.getElementById("restaurantPhoto").setAttribute("src", restaurantPhotos[photoNumber])
			}
		}

		function Next(){
		    if(document.getElementById("restaurantPhoto") && photoNumber < photoRestaurantLength){
		        photoNumber++
		        if(photoNumber >= photoRestaurantLength)
		        photoNumber = 0
		        document.getElementById("restaurantPhoto").src = restaurantPhotos[photoNumber]
		    }
		}
	$.fn.isInView = function() {
		var elementTop = $(this).offset().top
		var elementBottom = elementTop + $(this).outerHeight()

		var viewportTop = $(window).scrollTop()
		var viewportBottom = viewportTop + $(window).height()

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};
	var scrollElements = $('.scroll-to')

	$(window).on('resize scroll', function() {
		for(let i = 0; i<scrollElements.length; i++){
			if ($(scrollElements[i]).isInView()) {
				$(scrollElements[i]).animate({opacity: '1'}, 690)
			}
		}
	});
}

if(lokacija=='menu.html'){
	/************MENU**************/
	$(document).ready(function(){
		$('.center').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        dots: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        dots: true,
	        centerMode: true,
			centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	})

	$.fn.isInView = function() {
		var elementTop = $(this).offset().top
		var elementBottom = elementTop + $(this).outerHeight()

		var viewportTop = $(window).scrollTop()
		var viewportBottom = viewportTop + $(window).height()

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	var scrollElements = $('.scroll-to')

	$(window).on('load scroll resize', function() {
		for(let i = 0; i<scrollElements.length; i++){
			if ($(scrollElements[i]).isInView()) {
				$(scrollElements[i]).animate({opacity: '1'}, 690)
			}
		}
	});

}
