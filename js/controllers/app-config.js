angular
.module('secteurMap', [ 'ngRoute', 'ngAnimate']);

angular
.module('secteurMap')
.config(['$routeProvider',
function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'secteurs.html',
		controller: 'secteurCtrl'
	})
  .otherwise({
		redirectTo: '/'
	});
}]);
