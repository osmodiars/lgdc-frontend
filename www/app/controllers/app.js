(function (){
  
  var module = angular.module("app", ['ngRoute']);
  var pathViews = 'app/views/';
  module.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: pathViews + 'home.html',
          controller: 'Categories'
        }).
        when('/beat', {
          templateUrl: pathViews + 'app.html',
          controller: 'Categories'
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);

  module.controller('Categories', 
    
    function($scope) {
      $scope.matchs = [];
      
      $scope.add = function (match) {
        $scope._prepare(match);
        $scope.matchs.push(
          {
            team1:match.team1, win1:match.win1, 
            team2:match.team2, win2:match.win2,
            draw:match.draw
          }
        );
      }

      $scope._prepare = function (matchs) {
        //for (match in matchs) {
          //alert("asd");
        //}
      }
    
    }
  );

})();