
weissRecipesApp.controller('mainController', ['$scope','recipesService', function($scope,recipesService) {

  //$scope.categories=['סלטים','דגים','מרקים','בשרים','תוספות','פשטידות','מאפים','עוגות','קינוחים','פסח'];

  var model = {
    categories: []

  };

  recipesService.getCategories().then(function(categories){
     model.categories = categories;
  });
    $scope.model = model;
}]);
