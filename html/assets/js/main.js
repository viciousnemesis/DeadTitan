/*
	Template sourced from:
		Eventually by HTML5 UP
		html5up.net | @ajlkn
		Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  
	Modified by:
    	Brandon Smith
*/
//
// set up text to print, each item in array is new line
/*(function() {
	element = document.getElementById('typedtext');
	var aText = element.textContent || element.innerHTML;
	var iSpeed = 10; // time delay of print out
	var iIndex = 0; // start printing array at this posision
	var iArrLength = aText[0].length; // the length of the text array
	var iScrollAt = 10; // start scrolling up at this many lines
	 
	var iTextPos = 0; // initialise text position
	var sContents = ''; // initialise contents variable
	var iRow; // initialise current row
	 
	function typewriter()
	{
	 sContents =  'Searching...';
	 iRow = Math.max(0, iIndex-iScrollAt);
	 var destination = document.getElementById("typedtext");
	 destination.innerHTML = iRow.toString;
	 while ( iRow < iIndex ) {
	  sContents += aText[iRow++] + '<br />';
	 }
	 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + ".";
	 if ( iTextPos++ == iArrLength ) {
	  iTextPos = 0;
	  iIndex++;
	  if ( iIndex != aText.length ) {
	   iArrLength = aText[iIndex].length;
	   setTimeout("typewriter()", 100);
	  }
	 } else {
	  setTimeout("typewriter()", iSpeed);
	 }
	}
	
	if (aText.length > 0) {
		typewriter();
	}
}());
*/

// HAMBURGER MENU
(function() {

	var hamburger = {
	  navToggle: document.querySelector('.nav-toggle'),
	  nav: document.querySelector('nav'),
  
	  doToggle: function(e) {
		e.preventDefault();
		this.navToggle.classList.toggle('expanded');
		this.nav.classList.toggle('expanded');
	  }
	};
  
	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
  }());



// FANCY BACKGROUND CYCLE
(function() {

	"use strict";

	var	$body = document.querySelector('body');

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/Dead Titan.jpg': 'center',
							'images/Dead Titan2.jpg': 'bottom'
							//,'images/bg02.jpg': 'center','images/bg03.jpg': 'center'
						},

					// Delay.
						delay: 8000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

})();