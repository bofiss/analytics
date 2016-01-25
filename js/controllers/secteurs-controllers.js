angular.module('secteurMap')
   .controller('secteurCtrl', ['$scope', 'secteurService',function($scope, secteurService) {

     secteurService.getYear()
       .success(function(response) {
         $scope.years = response
       })
       .error(function(response) {
         console.log('oops error !');
       });

     secteurService.getAllSecteurs()
       .success(function(response) {
         $scope.secteurs = response
       })
       .error(function(response) {
         console.log('oops error !');
       });


         secteurService.getSecteursById(6)
         .success(function(response) {
           $scope.sector= response;
           drawHighCharts(response);
         })
         .error(function(response) {
           console.log('oops error !');
         });



       $scope.getSecteursById = function(id){
         secteurService.getSecteursById(id)
         .success(function(response) {
           $scope.sector= response;
           drawHighCharts(response);
         })
         .error(function(response) {
           console.log('oops error !');
         });
       };

         secteurService.getSecteursPerYear(2013)
         .success(function(response) {
           $scope.datas = response;
           drawHighChart(response);
           //drawChart(response);

         })
         .error(function(response) {
           console.log('oops error !');
         });


       $scope.getSecteursPerYear = function(year){
         secteurService.getSecteursPerYear(year)
         .success(function(response) {
           $scope.datas = response;
           console.log(response);
           drawHighChart(response);
           //drawChart(response);

         })
         .error(function(response) {
           console.log('oops error !');
         });
       };


         secteurService.getAll(2012)
         .success(function(response) {
           $scope.datas = response;
           drawHighChartAll(response);
           //drawChart(response);

         })
         .error(function(response) {
           console.log('oops error !');
         });


       $scope.getAll = function(year){
         secteurService.getAll(year)
         .success(function(response) {
           $scope.datas = response;
           drawHighChartAll(response);
           //drawChart(response);
         })
         .error(function(response) {
           console.log('oops error !');
         });
       };

   }]);
