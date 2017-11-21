//
// This is only a SKELETON file for the "Pangram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at pangram.spec.js--that should give you some hints about what is
// expected here.

'use strict';

function Pangram(textToTest) {
    this.textToTest = textToTest;

    this.isPangram = function () {
    	this.textToTest= this.textToTest.toLowerCase();
    	for (var i = 0; i < this.textToTest.length; i++) {
			if (this.textToTest.includes("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")){
				return true;
			}

			return false;
		}
 	}
};