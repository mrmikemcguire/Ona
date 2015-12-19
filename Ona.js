var ngDemo = angular.module('ngDemo', ['ngRoute']);

ngDemo.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/cost', 
              {
              templateUrl : 'pages/cost.html',
              controller  : 'costController'
			  })
            .when('/play', 
              {
              templateUrl : 'pages/play.html',
              controller  : 'playController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  });
	});

ngDemo.controller('mainController', function($scope) 
    {
    $scope.message = 'This is the First Adventure Game of Riona McGuire!';
	});

ngDemo.controller('costController', function($scope) 
    {
    $scope.quantity = 1;
    $scope.price = 9.99;
	});

ngDemo.controller('playController', function($scope)
    {
    $scope.locations =
        [
            {
            name: "Aragorn",
            race: "Human Ranger",
            image: "images/aragorn200.png"
            },
            {
            name: "Legolas",
            race: "Elf",
            image: "images/legolas200.png"
            }
        ];
   });

ngDemo.controller('inputController', function($scope) 
    {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() 
        {
        return $scope.firstName + " " + $scope.lastName;
        }
	});

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
