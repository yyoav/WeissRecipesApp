
weissRecipesApp.controller('recipesController', ['$scope', '$stateParams', function($scope, $stateParams) {

  console.log($stateParams.categoryID);
  $scope.id = $stateParams.categoryID;

  $scope.OpenUrl = function() {
  navigator.app.loadUrl('https://s3.amazonaws.com/weissrecipes/Soups/soup1.jpg', { openExternal:true });
   }
  $scope.recipes=[

    'מרק ירקות 1 '
    ,'מרק בטטה'
    ,'מרק עוף'];

}]);
