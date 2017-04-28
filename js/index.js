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




		// if ( (scrollPos >= -1) && (scrollPos < (about * 0.4)) ) {

		// 	console.log('splash fires')
		// 	$('.white').css({'animation':'fadeInBack 2s','z-index': '-1', 'opacity': '0'})
			

		// 	$('.about-cont').css({'display':'none'});
		// 	setTimeout( (jQ) => {				
		// 		$('.traveling, .art, .about-par, .about-quote').css({'opacity':'0'});			
		// 	}, 2000)

		// } else if ((scrollPos > (about * 0.45)) && (scrollPos < (((projects-about) * 0.5)+about))) {			
		// 	console.log('splash disappears about fire');

		// 	$('.white').css({'animation':'fadeOutBack 2s','z-index': '2', 'opacity': '1'})

		// 	$('.project').css({'display':'none','animation':'fadeOutBack 2s'});

		
		// 	$('.about-cont').css({'display':'','animation':'unset'});
		// 	$('.about-cont').css({'display':'block'});
		// 	setTimeout( () => {
		// 		$('.traveling, .art, .about-par, .about-quote').css({'opacity':'1'});
		// 	}, 2000)

		// 	$('.contacts-cont').css({'display':'none'})

		// } else if ( (scrollPos > (((projects-about) * 0.5)+about)) && (scrollPos < (((contacts-projects) * 0.5)+projects)) ) {
		// 	console.log('about disappears projects fire')

		// 	// show projects
		// 	// $('.project').css({'display':'','animation':''});			
		// 	$('.project').css({'display':'inline-block','animation':''});			




		// 	// $('.about-cont').css({'animation':'LRout 2s'});
		// 	$('.about-cont').css({'display':'none'});
		// 	setTimeout( () => {
		// 		$('.traveling, .art, .about-par, .about-quote').css({'opacity':'0'});			
		// 	}, 2000)

		// } else if ( (scrollPos > (((contacts-projects) * 0.8)+projects)) ){
		// 	console.log('projects disappears contacts fire');

		// 	$('.contacts-cont').css({'display':'block'})

		// 	// hide projects
		// 	$('.project').css({'display':'none'});

		// }
	})	

	/*************************************************/

	 /************************************************/ 


	// // on page refresh 
	// if ( (scrollPos >= 0) && (scrollPos < (about * 0.5)) ) {

	// 	console.log('splash fires')

	// 	// setTimeout( (jQ) => {
			
	// 		$('.traveling, .art, .about-par, .about-quote').css({'opacity':'0'});
	// 		$('.about-cont').css({'display':'none'});
	// 	// }, 400)




	// } else if ((scrollPos > (about * 0.4)) && (scrollPos < (((contacts-projects) * 0.35)+about))) {	
	// 	console.log('splash disappears about fire')
	// 	$('.white').css({'animation':'fadeOutBack 2s','z-index': '2', 'opacity': '1'})
	
	// 	$('.about-cont').css('display','block');
		
	// 	setTimeout( (jQ) => {
	// 		// $('.about-cont').css('animation','');
	// 		$('.traveling, .art, .about-par, .about-quote').css({'opacity':'1'});
	// 	}, 600)


	// } else if ( (scrollPos > (((projects-about) * 0.5)+about)) && (scrollPos < (((contacts-projects) * 0.5)+projects)) ) {
	// 	console.log('about disappears projects fire')

	// 	$('.project').css({'display':'inline-block'});	

	// } else if ( (scrollPos > (((contacts-projects) * 0.5)+projects)) ){
	// 	console.log('projects disappears contacts fire')

	// 	$('.contacts-cont').css({'display':'block'})
	// }






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
 