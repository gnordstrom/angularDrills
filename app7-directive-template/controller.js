angular.module('directiveApp').controller('mainCtrl', function($scope){
  $scope.pageTitle = "Gustav's amazingly epic web page";

  $scope.myFunc = function() {
    alert('Hello There!');
  };
});
