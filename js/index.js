'use strict'


import $ from "jquery";


// Smooth scrolling code
let page = 0;
let marginY = window.scrollY;
let marginy = marginY;
let increment = 5;
let decrement = 5;
let scroller = null;
let currentPage = 0;
const jQ = $

// animation variables
// splash
const splash = document.getElementById('splash').offsetTop;
// about
const about = document.getElementById('about').offsetTop;
// projects
const projects = document.getElementById('projects').offsetTop;
// contacts
const contacts = document.getElementById('contacts').offsetTop;





let initScroll = (pageId) => {
	page = document.getElementById(pageId).offsetTop;

	scroller = setTimeout(() => {
		initScroll(pageId);
	}, 1);

	if ( (page - marginY) > 0 ) {   	// If conditions are met page will scroll down
		marginY = marginY + increment;
		if (marginY >= page) {
			clearTimeout(scroller);	
		};
	} else {							//  else, it will scroll up
		marginY = marginY - decrement;
		if (marginY <= page) {
			clearTimeout(scroller)		
		};
	};

	window.scroll(0, marginY);



}

// smooth scrolling - end



$(document).ready( () => {

	let count = 0;

	// sticky fixed nav on scroll.
	let navOffset = $('.nav').offset().top;

	let scrollPos = $(window).scrollTop();

	// Fixes scroll bar when page is refreshed
	if (scrollPos >= navOffset){
		$('.nav').addClass('fixed');
	} else {
		$('.nav').removeClass('fixed'); // removes fixed class when moving back into splash page
	}
	
	// Scrolling listener
	$(window).scroll(function(){
		let scrollPos = $(window).scrollTop();
		
		const jQ = $
		// fixes Nav Bar to top of screen when it reaches the top
		if (scrollPos >= navOffset){
			$('.nav').addClass('fixed');
		} else {
			$('.nav').removeClass('fixed'); // removes fixed class when moving back into splash page
		}


	})	



	// nav buttons
	$('.js-splash').on('click', () => {
		initScroll('splash')
	});	

	$('.js-about').on('click', () => {
		initScroll('about')
	});	

	$('.js-projects').on('click', () => {
		initScroll('projects')
	});	

	$('.js-contacts').on('click', () => {
		initScroll('contacts')
	});	


	if ($(window).width() > 1000) {
		console.log($(window).width())
	    var s = skrollr.init(
	        // smoothScrolling=true;
	        // skrollrBody='skrollr-body';
	    );


	    s.refresh(document.getElementsByClassName('.homeSlide')[0]);
	}	

});
 