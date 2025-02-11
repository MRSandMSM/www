/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-chevron-right': '&#xe904;',
		'icon-chevron-left': '&#xe905;',
		'icon-chevron-down': '&#xe906;',
		'icon-chevron-up': '&#xe907;',
		'icon-x': '&#xe900;',
		'icon-twitter': '&#xe900;',
		'icon-tiktok': '&#xe901;',
		'icon-envelope': '&#xe902;',
		'icon-email': '&#xe902;',
		'icon-mail': '&#xe902;',
		'icon-letter': '&#xe902;',
		'icon-contact': '&#xe902;',
		'icon-snapchat-ghost': '&#xe903;',
		'icon-home3': '&#xe908;',
		'icon-newspaper': '&#xe909;',
		'icon-pencil': '&#xe90a;',
		'icon-pen': '&#xe90b;',
		'icon-paint-format': '&#xe90c;',
		'icon-image': '&#xe90d;',
		'icon-images': '&#xe90e;',
		'icon-camera': '&#xe90f;',
		'icon-connection': '&#xe91b;',
		'icon-podcast': '&#xe91c;',
		'icon-mic': '&#xe91e;',
		'icon-book': '&#xe91f;',
		'icon-file-empty': '&#xe924;',
		'icon-files-empty': '&#xe925;',
		'icon-file-text2': '&#xe926;',
		'icon-file-picture': '&#xe927;',
		'icon-file-music': '&#xe928;',
		'icon-file-play': '&#xe929;',
		'icon-file-video': '&#xe92a;',
		'icon-file-zip': '&#xe92b;',
		'icon-copy': '&#xe92c;',
		'icon-paste': '&#xe92d;',
		'icon-stack': '&#xe92e;',
		'icon-folder': '&#xe92f;',
		'icon-folder-open': '&#xe930;',
		'icon-folder-download': '&#xe933;',
		'icon-folder-upload': '&#xe934;',
		'icon-price-tag': '&#xe935;',
		'icon-price-tags': '&#xe936;',
		'icon-barcode': '&#xe937;',
		'icon-qrcode': '&#xe938;',
		'icon-ticket': '&#xe939;',
		'icon-cart': '&#xe93a;',
		'icon-coin-dollar': '&#xe93b;',
		'icon-coin-euro': '&#xe93c;',
		'icon-coin-pound': '&#xe93d;',
		'icon-coin-yen': '&#xe93e;',
		'icon-credit-card': '&#xe93f;',
		'icon-lifebuoy': '&#xe941;',
		'icon-phone': '&#xe942;',
		'icon-address-book': '&#xe944;',
		'icon-pushpin': '&#xe946;',
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-compass': '&#xe949;',
		'icon-compass2': '&#xe94a;',
		'icon-map': '&#xe94b;',
		'icon-history': '&#xe94d;',
		'icon-clock': '&#xe94e;',
		'icon-calendar': '&#xe953;',
		'icon-printer': '&#xe954;',
		'icon-keyboard': '&#xe955;',
		'icon-display': '&#xe956;',
		'icon-laptop': '&#xe957;',
		'icon-mobile': '&#xe958;',
		'icon-mobile2': '&#xe959;',
		'icon-tablet': '&#xe95a;',
		'icon-tv': '&#xe95b;',
		'icon-drawer': '&#xe95c;',
		'icon-drawer2': '&#xe95d;',
		'icon-box-add': '&#xe95e;',
		'icon-box-remove': '&#xe95f;',
		'icon-download': '&#xe960;',
		'icon-upload': '&#xe961;',
		'icon-floppy-disk': '&#xe962;',
		'icon-drive': '&#xe963;',
		'icon-database': '&#xe964;',
		'icon-undo': '&#xe965;',
		'icon-redo': '&#xe966;',
		'icon-undo2': '&#xe967;',
		'icon-redo2': '&#xe968;',
		'icon-forward': '&#xe969;',
		'icon-reply': '&#xe96a;',
		'icon-bubble': '&#xe96b;',
		'icon-bubbles': '&#xe96c;',
		'icon-bubbles2': '&#xe96d;',
		'icon-user': '&#xe971;',
		'icon-users': '&#xe972;',
		'icon-user-plus': '&#xe973;',
		'icon-user-minus': '&#xe974;',
		'icon-user-check': '&#xe975;',
		'icon-user-tie': '&#xe976;',
		'icon-quotes-left': '&#xe977;',
		'icon-quotes-right': '&#xe978;',
		'icon-hour-glass': '&#xe979;',
		'icon-spinner': '&#xe97a;',
		'icon-spinner2': '&#xe97b;',
		'icon-spinner3': '&#xe97c;',
		'icon-spinner5': '&#xe97e;',
		'icon-spinner6': '&#xe97f;',
		'icon-spinner7': '&#xe980;',
		'icon-spinner8': '&#xe981;',
		'icon-spinner11': '&#xe984;',
		'icon-binoculars': '&#xe985;',
		'icon-search': '&#xe986;',
		'icon-zoom-in': '&#xe987;',
		'icon-zoom-out': '&#xe988;',
		'icon-enlarge': '&#xe989;',
		'icon-shrink': '&#xe98a;',
		'icon-enlarge2': '&#xe98b;',
		'icon-shrink2': '&#xe98c;',
		'icon-key2': '&#xe98e;',
		'icon-wrench': '&#xe991;',
		'icon-equalizer': '&#xe992;',
		'icon-equalizer2': '&#xe993;',
		'icon-cog': '&#xe994;',
		'icon-cogs': '&#xe995;',
		'icon-magic-wand': '&#xe997;',
		'icon-switch': '&#xe9b6;',
		'icon-power-cord': '&#xe9b7;',
		'icon-list-numbered': '&#xe9b9;',
		'icon-list': '&#xe9ba;',
		'icon-list2': '&#xe9bb;',
		'icon-menu': '&#xe9bd;',
		'icon-menu2': '&#xe9be;',
		'icon-menu3': '&#xe9bf;',
		'icon-menu4': '&#xe9c0;',
		'icon-cloud': '&#xe9c1;',
		'icon-cloud-download': '&#xe9c2;',
		'icon-cloud-upload': '&#xe9c3;',
		'icon-cloud-check': '&#xe9c4;',
		'icon-download2': '&#xe9c5;',
		'icon-upload2': '&#xe9c6;',
		'icon-download3': '&#xe9c7;',
		'icon-upload3': '&#xe9c8;',
		'icon-sphere': '&#xe9c9;',
		'icon-earth': '&#xe9ca;',
		'icon-link': '&#xe9cb;',
		'icon-flag': '&#xe9cc;',
		'icon-attachment': '&#xe9cd;',
		'icon-eye': '&#xe9ce;',
		'icon-eye-plus': '&#xe9cf;',
		'icon-eye-minus': '&#xe9d0;',
		'icon-eye-blocked': '&#xe9d1;',
		'icon-bookmark': '&#xe9d2;',
		'icon-bookmarks': '&#xe9d3;',
		'icon-star-empty': '&#xe9d7;',
		'icon-star-half': '&#xe9d8;',
		'icon-star-full': '&#xe9d9;',
		'icon-heart': '&#xe9da;',
		'icon-checkmark': '&#xea10;',
		'icon-enter': '&#xea13;',
		'icon-exit': '&#xea14;',
		'icon-play3': '&#xea1c;',
		'icon-pause2': '&#xea1d;',
		'icon-stop2': '&#xea1e;',
		'icon-backward2': '&#xea1f;',
		'icon-forward3': '&#xea20;',
		'icon-first': '&#xea21;',
		'icon-last': '&#xea22;',
		'icon-previous2': '&#xea23;',
		'icon-next2': '&#xea24;',
		'icon-eject': '&#xea25;',
		'icon-volume-high': '&#xea26;',
		'icon-volume-medium': '&#xea27;',
		'icon-volume-low': '&#xea28;',
		'icon-volume-mute': '&#xea29;',
		'icon-volume-mute2': '&#xea2a;',
		'icon-volume-increase': '&#xea2b;',
		'icon-volume-decrease': '&#xea2c;',
		'icon-loop': '&#xea2d;',
		'icon-loop2': '&#xea2e;',
		'icon-arrow-up-left2': '&#xea39;',
		'icon-arrow-up2': '&#xea3a;',
		'icon-arrow-up-right2': '&#xea3b;',
		'icon-arrow-right2': '&#xea3c;',
		'icon-arrow-down-right2': '&#xea3d;',
		'icon-arrow-down2': '&#xea3e;',
		'icon-arrow-down-left2': '&#xea3f;',
		'icon-arrow-left2': '&#xea40;',
		'icon-circle-up': '&#xea41;',
		'icon-circle-right': '&#xea42;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'icon-checkbox-checked': '&#xea52;',
		'icon-checkbox-unchecked': '&#xea53;',
		'icon-radio-checked': '&#xea54;',
		'icon-radio-checked2': '&#xea55;',
		'icon-radio-unchecked': '&#xea56;',
		'icon-filter': '&#xea5b;',
		'icon-bold': '&#xea62;',
		'icon-underline': '&#xea63;',
		'icon-italic': '&#xea64;',
		'icon-strikethrough': '&#xea65;',
		'icon-page-break': '&#xea68;',
		'icon-superscript': '&#xea69;',
		'icon-subscript': '&#xea6a;',
		'icon-clear-formatting': '&#xea6f;',
		'icon-table2': '&#xea71;',
		'icon-pilcrow': '&#xea73;',
		'icon-ltr': '&#xea74;',
		'icon-rtl': '&#xea75;',
		'icon-paragraph-left': '&#xea77;',
		'icon-paragraph-center': '&#xea78;',
		'icon-paragraph-right': '&#xea79;',
		'icon-paragraph-justify': '&#xea7a;',
		'icon-indent-increase': '&#xea7b;',
		'icon-indent-decrease': '&#xea7c;',
		'icon-share': '&#xea7d;',
		'icon-embed2': '&#xea80;',
		'icon-share2': '&#xea82;',
		'icon-amazon': '&#xea87;',
		'icon-google-plus': '&#xea8b;',
		'icon-facebook': '&#xea90;',
		'icon-instagram': '&#xea92;',
		'icon-spotify': '&#xea94;',
		'icon-rss': '&#xea9b;',
		'icon-youtube': '&#xea9d;',
		'icon-vimeo': '&#xeaa0;',
		'icon-flickr2': '&#xeaa4;',
		'icon-github': '&#xeab0;',
		'icon-tumblr': '&#xeab9;',
		'icon-appleinc': '&#xeabe;',
		'icon-soundcloud': '&#xeac3;',
		'icon-reddit': '&#xeac6;',
		'icon-linkedin2': '&#xeaca;',
		'icon-stackoverflow': '&#xead0;',
		'icon-pinterest': '&#xead1;',
		'icon-chrome': '&#xead9;',
		'icon-firefox': '&#xeada;',
		'icon-IE': '&#xeadb;',
		'icon-edge': '&#xeadc;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
