angular.module('apiApp').service('mainSrv', function($http){
  var baseUrl = 'http://swapi.co/api/people';

  this.getPeople = function(){
    var promise = $http.get(baseUrl).then(function(response){
      if (response.status === 200) {
        return response.data;
      } else {
        return "Error getting data";
      }
    });
    return promise;
  };
});
