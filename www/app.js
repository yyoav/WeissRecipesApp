
var weissRecipesApp = angular.module('weissRecipesApp', ['ui.router']);

weissRecipesApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'scripts/home/home.html',
            controller: 'mainController'
        })
        .state('recipes', {
            url: '/recipes/:categoryID',
            templateUrl: 'scripts/recipes/recipes.html',
            controller: 'recipesController'
        })
        .state('recipe', {
            url: '/recipe/:recipeID',
            templateUrl: 'scripts/recipe/recipe.html',
            controller: 'recipeController'
        });


});
