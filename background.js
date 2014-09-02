window.addEventListener("load", function(){

	var canObserveMutation = 'MutationObserver' in window;

	if (canObserveMutation) {

		var observer, callback;

		callback = function(mutations){

			mutations.forEach(function(mutation) {
				if  ((mutation.target.className.indexOf('js-new-items-bar-container') != -1)
					&& (document.body.scrollTop < 20)) {
					var elementToClick = mutation.target.getElementsByClassName('js-new-tweets-bar');
					if (elementToClick.length) {
						elementToClick[0].click();
					}
				}
			});
		}

		observer = new MutationObserver(callback);

		var options = {
			'childList': true,
			'subtree': true
		},
		timeline = document.querySelector('body');

		observer.observe(timeline, options);
	}

	window.onscroll = function() {
		if (document.body.scrollTop<20) {
			var elementToClick = document.getElementsByClassName('js-new-tweets-bar');
			if (elementToClick.length) {
				elementToClick[0].click();
			}
		}
	}
});