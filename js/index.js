'use strict'


import $ from "jquery";


// Smooth scrolling code
let page = 0;
let marginY = 0;
let marginy = marginY;
let increment = 7;
let decrement = 7;
let scroller = null;
let currentPage = 0;

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

	// sticky fixed nav on scroll.
	let navOffset = $('.nav').offset().top;
	
	$(window).scroll(function(){
		let scrollPos = $(window).scrollTop();

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

});
 