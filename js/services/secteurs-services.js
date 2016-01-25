angular
  .module('secteurMap')
  .factory('secteurService', ['$http', function($http){
     var factory ={};

     factory.getAllSecteurs = function(){
       return $http({
			      method: 'GET',
			      url: 'http://datastore.local/api/secteurs'
		   });
     };

     factory.getSecteursById = function(id){
       return $http({
           method: 'GET',
           url: 'http://datastore.local/api/secteurs/'+id,
      });
    };
    factory.getSecteursPerYear = function(year){
      return $http({
          method: 'GET',
          url: 'http://datastore.local/api/secteurs/'+year+'/all',
     });
   };
   factory.getYear = function(){
     return $http({
         method: 'GET',
         url: 'http://datastore.local/api/secteurs/year',
    });
  };

  factory.getAll= function(year){
    return $http({
        method: 'GET',
        url: 'http://datastore.local/api/secteurs/all/'+year,
   });
 };

     return factory;
  }]);
