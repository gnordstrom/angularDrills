angular.module('routingApp').controller('detailsCtrl', function($scope, starWarsService, $stateParams){

  starWarsService.getPerson($stateParams.url).then(function(person) {
    $scope.person = person;
  });

});
