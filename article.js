'use strict';

var h1 = document.querySelector('h1').innerText;

document.querySelector('.title').innerText = document.title;

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
	var link = links[i];
	var t = link.getAttribute('href');
	if (link.className === 'reflink') {
		t = document.getElementById(t.substring(1)).innerText;
	}
	link.setAttribute('title', t);
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
	'Syllabics',
	'Thaana'
].forEach(function(t) {
	if (t === h1) {
		footer += '<li><b>' + t + '</b></li>';
	} else {
		footer += '<li><a href="' + t.toLowerCase().replace(' ', '-') + '">' + t + '</a></li>';
	}
});
footer += '</ul></nav></footer>';
document.querySelector('body').insertAdjacentHTML('beforeend', footer);
