angular.module('encryptiApp').controller('depositModalController', ['$scope', '$modalInstance', 'userService', function ($scope, $modalInstance, userService) {

    $scope.secondPass = true;
    //$scope.error (false to disable; string to show error)
    $scope.error = false;

    $scope.data = {
        amount: '',
        secondPass: ''
    };

    $scope.send = function () {
        $scope.error = 'Backend does not exist';
        console.log($scope.data);
        if (!$scope.error){
            $modalInstance.close();}

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);