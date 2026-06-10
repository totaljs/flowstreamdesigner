
// Use this controller if you want to access the designer via the root path `/` instead of `designer.html`.

exports.install = function() {
	ROUTE('GET /', $ => $.file(PATH.public('designer.html')));
};