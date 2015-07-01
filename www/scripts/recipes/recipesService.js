weissRecipesApp.service('recipesService', function($http,$q) {

  this.getRecipes = function(path){
      var defer = $q.defer();
       $http.get('https://s3.amazonaws.com/weissrecipes/'+path)
      .success(function(data){
              defer.resolve(data);
       })
       .error(function(err, status){
           console.log(err, status);
       });
       return defer.promise;
  }

  this.getCategories = function(){
      var defer = $q.defer();
       $http.get('https://s3.amazonaws.com/weissrecipes/categories.json')
      .success(function(data){
              defer.resolve(data);
       })
       .error(function(err, status){
           console.log(err, status);
       });
       return defer.promise;
  }
});
