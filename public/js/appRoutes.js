// public/js/appRoutes.js

 angular.module('appRoutes', [])
     .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })

            // nerds page that will use the NerdController
            .when('/nerds', {
                templateUrl: 'views/nerd.html',
                controller: 'NerdController'
            })
            // ragister page that will use the registerCtrl
            .when('/register', {
                templateUrl: 'auth/register/registerView.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: 'auth/login/loginView.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
            .when('/profile', {
                templateUrl: 'profile/profileView.html',
                controller: 'profileCtrl',
                controllerAs: 'vm'
            })
            // If 404 Redirect to home
            .otherwise( { redirectTo: '/'} );

        $locationProvider.html5Mode(true);
         
//still to solve!
}])
    .run(['$rootScope', '$location', 'authentication', function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
   });
}]);
