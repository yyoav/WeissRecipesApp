
weissRecipesApp.controller('recipesController', ['$scope', '$stateParams','$http','$q','recipesService', function($scope, $stateParams, $http,$q, recipesService) {

  console.log($stateParams.categoryID);
  $scope.id = $stateParams.categoryID;

  var model = {
    recipes: []//recipesService.content

  };

   getRecipes();
  // getRecipes().then(function(recipes){
  ////   model.recipes = recipes;
  // });

   function getRecipes(){
    //   var defer = $q.defer();


      //  $http.get({
      //        url: 'https://s3.amazonaws.com/weissrecipes/Soups/soupslist.json',
      //        dataType: 'json',
      //        headers: {"Content-Type": "application/json;charset=utf-8" }
      //  })
       $http.get('https://s3.amazonaws.com/weissrecipes/Soups/soupslist.json')
      .success(function(data){
         model.recipes = data;
    //          defer.resolve(data);
       })
       .error(function(err, status){
           console.log(err, status);
       });

    //   return defer.promise;
   }

  $scope.model = model;

}]);
