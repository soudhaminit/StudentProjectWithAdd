(function(){
var app=angular.module('StudentApp',['ngRoute','ngAnimate']);
 app.config(function($routeProvider){
    $routeProvider
         .when('/',{
            controller:'StudentListController',
            templateUrl:'app/views/studentList.html' 
         })
         .when('/studentDetails/:studentNumber',{
                controller:'StudentDetailsController',
                templateUrl:'app/views/studentDetails.html' 
             })
         .when('/studentAdd',{
                controller:'StudentAddController',
                templateUrl:'app/views/studentAdd.html' 
             })
        .otherwise({redirectTo:'/'});    
 });
    
}());