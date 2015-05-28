(function ($) {
	"use strict";
	var _lang_model = null;

	function Language (lang,base) {
		this.base = '';
		this.lang = 'en_us';
		this.data = {};

		if (base)
			this.base = base;

		this.lang = lang;
		this.init();
	}

	Language.prototype.init = function () {
		var f = this.base + '/' + this.lang + '.js',
			that = this;
		$.ajax({
			url: f,
			dataType: 'script'
		})
			.done(function (d) {
				if (_lang)
					that.data = _lang;
			});
	}

	Language.prototype.get = function (key) {
		if (this.data[key])
			return this.data[key];
		return null;
	}

	Language.getInstance = function (lang,base) {
		if (_lang_model)
			return _lang_model;
		_lang_model = new Language(lang,base);
		return _lang_model;
	}

	Language.newInstance = function (lang,base) {
		_lang_model = new Language(lang,base);
		return _lang_model;
	}

	window.Language = Language;
})(jQuery);