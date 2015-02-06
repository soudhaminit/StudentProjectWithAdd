(function(){
var studentListController=function($scope,StudentFactory,$window){
    $scope.studentList=[];
    $scope.sortBy='firstName';
    $scope.reverse=false;
    
    function init(){
        StudentFactory.getStudentList()
        .success(function(studentList){
               $scope.studentList=studentList;     
        })
        .error(function(data,status,headers,config){
            //error Msg
        });
    }
    
    $scope.doSort=function(param){
        $scope.sortBy=param;
        $scope.reverse=!$scope.reverse;
    };
    
    $scope.deleteStudent=function(studentNum){
        StudentFactory.getDeleteStudent(studentNum)
        .success(function(status){
            if(status){
                 for( var i=0, len=$scope.studentList.length; i<len; i++){
                        if(parseInt(studentNum) === parseInt($scope.studentList[i].studentNumber)){
                    $scope.studentList.splice(i,1);        
                    break;
                        }
                        }
            }else{
            $window.alert('Unable to delete the student');
            }  
        })
        .error(function(data,status,headers,config){
            //error Msg
        });
    };
    
   
    init();
};
   studentListController.$inject=['$scope','StudentFactory','$window'];
    angular.module('StudentApp').controller('StudentListController',studentListController);

}());

 