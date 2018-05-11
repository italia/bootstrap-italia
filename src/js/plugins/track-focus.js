(function(body) {

	var usingMouse;

	var preFocus = function(event) {
		usingMouse = (event.type === 'mousedown');
	};

	var addFocus = function(event) {
		if (usingMouse)
			event.target.classList.add('focus--mouse');
	};

	var removeFocus = function(event) {
		event.target.classList.remove('focus--mouse');
	};

	var bindEvents = function() {
		body.addEventListener('keydown', preFocus);
		body.addEventListener('mousedown', preFocus);
		body.addEventListener('focusin', addFocus);
		body.addEventListener('focusout', removeFocus);
	};

	bindEvents();

})(document.body);