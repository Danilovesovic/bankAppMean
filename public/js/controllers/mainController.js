angular.module('mainController',[])
.controller('mainCtrl',function($scope,$http){
    $scope.accounts = [];
    $http({
        url : "/getAccounts",
        method : "get"
    })
    .then(function(res){
        console.log(res.data);
        $scope.accounts = res.data;
    },function(err){
        console.log(err)
    })
})