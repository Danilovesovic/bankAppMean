angular.module('editAccController',[])
    .controller('editAccCtrl',function($scope,$http,$routeParams,$location){
    $http({
        url : '/getOneAccount',
        method : 'post',
        data : {id:$routeParams.id}
    })
    .then(function(res){
        // one Account
        // console.log(res.data);
        console.log(res.data.name); 
        $scope.name = res.data.name;
        $scope.deposit = res.data.deposit;
        $scope.cCard = res.data.cCard;
        $scope.city = res.data.city;
    },function(err){
        console.log(err);
    })
    $scope.editAccount = function(){
        $http({
            url : "/editOne",
            method : 'post',
            data : {
                id : $routeParams.id,
                name : $scope.name,
                deposit : $scope.deposit,
                cCard :$scope.cCard,
                city : $scope.cCard
            }
        })
        .then(function(res){
            $location.path('/');
        },function(err){
            console.log(err);
        })
    }
})