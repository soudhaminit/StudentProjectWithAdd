(function(){
var studentFactory=function($http){
    var factory={};
    
    factory.getStudentList=function(){
        return $http.get('/studentList');
    };
    
    factory.getStudentDetails=function(studentNum){
        return $http.get('/studentDetails/'+studentNum);
    };
    
    factory.getDeleteStudent=function(studentNum){
        return $http.delete('/deleteStudent/'+studentNum);
    };
    
    factory.createStudent=function(studData){
        return $http.post('/createStudent',studData);
    };
    
    return factory;
};

   studentFactory.$inject=['$http'];
    angular.module('StudentApp').factory('StudentFactory',studentFactory);

}());