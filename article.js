'use strict';

var h1 = document.querySelector('h1').innerText;

document.querySelector('.title').innerText = document.title;

var reflinks = document.querySelectorAll('.reflink');
for (var i = 0; i < reflinks.length; i++) {
	var reflink = reflinks[i];
	var href = reflink.getAttribute('href');
	reflink.setAttribute('title', document.getElementById(href.substring(1)).innerText);
}

var footer = '<footer><nav><ul>';
[
	'Albanian',
	'Bopomofo',
	'Deseret',
	'Ethiopic',
	'Kana',
	'Lisu',
	'Miao',
	'Shavian',
	'Syllabics'
].forEach(function(t) {
	if (t === h1) {
		footer += '<li><b>' + t + '</b></li>';
	} else {
		var page = t.toLowerCase().replace(' ', '-') + '.html';
		footer += '<li><a href="' + page + '">' + t + '</a></li>';
	}
});
footer += '</ul></nav></footer>';
document.querySelector('body').insertAdjacentHTML('beforeend', footer);
