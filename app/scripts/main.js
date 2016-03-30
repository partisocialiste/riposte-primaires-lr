/* global $ */
/*jslint node: true */
'use strict';

//https://github.com/alvarotrigo/fullPage.js
$('#fullpage').fullpage({
	//sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
	verticalCentered: true,
	anchors: ['intro'],
	responsiveWidth: '992'
	//loopHorizontal: true,
});

//http://www.onextrapixel.com/2014/01/23/create-a-google-tips-card-animation-for-your-website-with-jquery-tip-cards/
$('.tips').tip_cards({
  //entrance: "left",
  //hoverTilt: "up",
  cardFlyDirection: 'bottom'
});
