angular.module('addAccountController',[])
	.controller('addAccountCtrl',function ($scope,$http,$location) {
		$scope.addAccount = function () {
			$http({
				url : '/addNewAccount',
				method : 'post',
				data : {
					name : $scope.name,
					deposit: $scope.deposit,
					cCard : $scope.cCard,
					city : $scope.city
				}
			}).then(function (res) {
				$scope.name = "";
				$scope.deposit = "";
				$scope.cCard = "";
				$scope.city = "";
				$location.path('/')
			},function (err) {
				console.log(err);
			})
		}
	})