angular.module('myApp').controller('mainCtrl', function($scope, mainSrv){
  
  $scope.people = mainSrv.peopleData;
});
