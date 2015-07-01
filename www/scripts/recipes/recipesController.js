
weissRecipesApp.controller('recipesController', ['$scope', '$stateParams','$http','$q','recipesService', function($scope, $stateParams, $http,$q, recipesService) {


  $scope.id = $stateParams.categoryName;
  $scope.path = $stateParams.categoryPath;

  var model = {
    recipes: []

  };

  recipesService.getRecipes($scope.path).then(function(recipes){
     model.recipes = recipes;
  });

  $scope.model = model;

}]);
