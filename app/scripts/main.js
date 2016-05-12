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

// je déclare la fonction fullscreen
function fullscreen(element) {
   return (element.requestFullscreen ||
      element.webkitRequestFullscreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen).call(element);
}
 
// je récupère le bouton grâce à son id que j'ai rajouté dans le code HTML
var $bouton = document.getElementById('fullscreen')
 
// j'attache le gestionnaire de click
$bouton.addEventListener('click', function() {
   // j'appelle la fonction fullscreen sur le <html>
   fullscreen(document.documentElement);
});
