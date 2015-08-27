
weissRecipesApp.controller('mainController', ['$scope','recipesService','jsonService', function($scope,recipesService,jsonService) {


  var model = {
    categories: []

  };
  jsonService.query(function(data){
      model.categories = data;
   });

  // recipesService.getCategories().then(function(categories){
  //    model.categories = categories;
  // });
    $scope.model = model;
}]);
