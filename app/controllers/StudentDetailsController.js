(function(){
var studentDetailsController = function($scope,StudentFactory,$routeParams){
    //$scope.yesNo=yesNo;
    var studentNum=$routeParams.studentNumber;
    $scope.studentDetails=null;
    
    function init(){
        StudentFactory.getStudentDetails(studentNum)
        .success(function(studentDetails){
               $scope.studentDetails=studentDetails;     
        })
        .error(function(data,status,headers,config){
            //error Msg
        });
    }
    
    init();
};
    
   studentDetailsController.$inject=['$scope','StudentFactory','$routeParams'];
    angular.module('StudentApp').controller('StudentDetailsController',studentDetailsController);

}());

 