weissRecipesApp.service('jsonService', function($resource) {
  return $resource('img/categories.json');
});
