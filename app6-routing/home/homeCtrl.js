angular.module('routingApp').controller('homeCtrl', function($scope, starWarsService) {
  $scope.routeName = 'This is the home page!';

  // $scope.people = function() {
  //   starWarsService.getPeople().then(function(response){
  //     $scope.people = response;
  //   });
  // };
  // $scope.getPeople();

  starWarsService.getPeople().then(function(data) {
    $scope.people = data.results;
  });

});
