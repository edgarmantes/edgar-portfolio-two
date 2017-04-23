'use strict'


import $ from "jquery";


// Smooth scrolling code
let page = 0;
let marginY = window.scrollY;
let marginy = marginY;
let increment = 7;
let decrement = 7;
let scroller = null;
let currentPage = 0;

// animation variables
// splash
const splash = document.getElementById('splash').offsetTop;
// about
const about = document.getElementById('about').offsetTop;
// projects
const projects = document.getElementById('projects').offsetTop;
// contacts
const contacts = document.getElementById('contacts').offsetTop;
console.log(25, splash, about, projects, contacts)


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
		// fixes Nav Bar to top of screen when it reaches the top
		if (scrollPos >= navOffset){
			$('.nav').addClass('fixed');
		} else {
			$('.nav').removeClass('fixed'); // removes fixed class when moving back into splash page
		}

		if ( (scrollPos >= 0) && (scrollPos < (about * 0.5)) ) {
			console.log('splash fires')
		} else if ((scrollPos > (about * 0.5)) && (scrollPos < (((projects-about) * 0.5)+about))) {
			console.log('splash disappears about fire')
		} else if ( (scrollPos > (((projects-about) * 0.5)+about)) && (scrollPos < (((contacts-projects) * 0.5)+projects)) ) {
			console.log('about disappears projects fire')
		} else if ( (scrollPos > (((contacts-projects) * 0.5)+projects)) ){
			console.log('projects disappears contacts fire')
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


	// Animated Scroll
	// $(window).scroll(function(){

	// 	let scrollPos = $(window).scrollTop();



	// 	// if (scrollPos >= navOffset){
			
	// 	// } else {
	// 	// 	 // removes fixed class when moving back into splash page
	// 	// }
	// })	
	

});
 