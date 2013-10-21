// JavaScript Document

$(document).ready(function(){
	
	// Get Random Numer
	// returns 0 to 'limit'
var limit = 3;
var numRand = Math.floor(Math.random()*limit);

// add background color
$('body').addClass('bg' + numRand);

console.log(numRand);

});