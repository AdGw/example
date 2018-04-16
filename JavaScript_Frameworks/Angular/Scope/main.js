let app = angular.module('app', []);
app.controller('ctrl1', function($scope){
	$scope.first = 1;
	$scope.second = 2;
	$scope.updateValueAdd = function(){
		$scope.calculationAdd = $scope.first + ' + ' + $scope.second +
		" = " + (+$scope.first + +$scope.second);
	}
	$scope.updateValueMul = function(){
		$scope.calculationMul = $scope.first + ' * ' + $scope.second +
		" = " + (+$scope.first * +$scope.second);
	}
	$scope.updateValueDiv = function(){
		$scope.calculationDiv = $scope.first + ' / ' + $scope.second +
		" = " + (+$scope.first / +$scope.second);
	}
	$scope.updateValueSub = function(){
		$scope.calculationSub = $scope.first + ' - ' + $scope.second +
		" = " + (+$scope.first - +$scope.second);
	}
});