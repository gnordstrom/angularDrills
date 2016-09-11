angular.module('arrayApp').controller('arrayController', function($scope, mainSrv) {
  $scope.people = mainSrv.personData;
});
