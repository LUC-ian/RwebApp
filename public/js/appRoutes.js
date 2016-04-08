// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // R page that will use the RController
        .when('/R', {
            templateUrl: 'views/R.html',
            controller: 'RController'
        });

    $locationProvider.html5Mode(true);

}]);