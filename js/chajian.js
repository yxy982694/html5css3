(function ($) {
	$.fn.sum = function (a,b) {
		console.log(a+b);
		return this;
	}
	$.fn.min = function (a,b) {
		console.log(a-b);
		return this;
	}
	$.fn.config = function () {
		console.log(obj.type);
		return this;
	}
	$.fn.eventfn = {
		cli: function () {console.log('click');},
		mou: function () {console.log('mouseenter');}
	}
	$.fn = function () {
		console.log('工具函数');
	}
})(jQuery)