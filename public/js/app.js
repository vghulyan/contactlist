'use strict';

var app = angular.module('contactApp', ['ngRoute','ui.bootstrap']);

app
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {templateUrl: 'template/home.html', controller: 'ContactCtrl'});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);


app.config([function () {
    console.log('Configuraiton...');
}]);
