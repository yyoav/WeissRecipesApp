weissRecipesApp.service('recipesService', function($http,$q) {

  this.getRecipes = function(){
      var defer = $q.defer();

      $http.get({
            url: 'https://s3.amazonaws.com/weissrecipes/Soups/soupslist2.json',
            dataType: 'json',
            headers: {"Content-Type": "application/json;charset=utf-8" }
      })
      .success(function(data){
             defer.resolve(data);
      })
      .error(function(err, status){
          console.log(err, status);
      });

      return defer.promise;
  }

});
