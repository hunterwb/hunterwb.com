'use strict';

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
	var link = links[i];
	var t = link.getAttribute('href');
	if (link.className === 'reflink') {
		t = document.getElementById(t.substring(1)).innerText;
	}
	link.setAttribute('title', t);
}

var footer = '<footer><hr><a href="..">Home</a></footer>';
document.querySelector('main').insertAdjacentHTML('afterend', footer);
