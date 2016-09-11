angular.module('apiApp').controller('mainCtrl', function($scope, mainSrv){

  $scope.getPerson = function() {
    var promise = mainSrv.getPeople();
    promise.then(function(skyPerson){
      $scope.skyPerson = skyPerson;
    });
  };
  $scope.getPerson();
});
