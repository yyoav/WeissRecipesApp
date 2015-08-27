
weissRecipesApp.controller('recipesController', ['$scope', '$stateParams','$http','$q','recipesService', function($scope, $stateParams, $http,$q, recipesService) {

//  window.open('https://s3.amazonaws.com/weissrecipes/Soups/1.jpg', '_blank', 'location=no,toolbar=no');


  var model = {
    recipes: []

  };

  model.disaplyName = $stateParams.categoryName;
  model.path = $stateParams.categoryPath;
  model.name = model.path.split('/')[0];

  var events = {
      openRecipe: function (recipeId) {
        window.open('https://s3.amazonaws.com/weissrecipes/' +model.name+'/' + recipeId+ '.jpg', '_blank', 'location=no');
      }
  };


  recipesService.getRecipes(model.path).then(function(recipes){
     model.recipes = recipes;
  });

  $scope.events = events;
  $scope.model = model;

}]);
