angular.module('routingApp').service('starWarsService', function($http) {

  this.getPeople = function() {
    return $http ({
      method: 'GET',
      url: 'https://swapi.co/api/people/'
    }).then(function(response) {
      return response.data;
    });
  };

  //getPerson function will get one person from swapi and return details
  this.getPerson = function(url) {
    // make HTTP call to the URL and return data from it
    return $http.get(url).then(function(response) {
      return response.data;
    });
  };

});
