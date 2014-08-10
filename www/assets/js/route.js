(function (){

  module.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/view1', {
          templateUrl: 'views/app.html',
          controller: 'RouteController'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
})();