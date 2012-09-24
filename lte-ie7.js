/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Cityscape\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-buildings10' : '&#xe000;',
			'icon-buildings09' : '&#xe001;',
			'icon-buildings08' : '&#xe002;',
			'icon-buildings07' : '&#xe003;',
			'icon-buildings06' : '&#xe004;',
			'icon-buildings05' : '&#xe005;',
			'icon-buildings04' : '&#xe006;',
			'icon-buildings03' : '&#xe007;',
			'icon-buildings02' : '&#xe008;',
			'icon-buildings01' : '&#xe009;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};