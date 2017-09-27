angular.module('editPageController',[])
.controller('editPageCtrl',function($scope,$http,$location){
    $http({
        url : "/getAccounts",
        method : 'get'
    })
    .then(function(res){
        $scope.accounts = res.data;
    },function(err){
        console.log(err);
    })
    $scope.removeAcc = function(id){
        $http({
            url : '/removeAcc',
            method : 'post',
            data : {id:id}
        })
        .then(function(res){
            // when deleted   
            $location.path('/');
        },function(err){
            console.log(err);
        })
    }
})