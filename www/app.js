
var weissRecipesApp = angular.module('weissRecipesApp', ['ui.router','ngResource']);

weissRecipesApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'scripts/home/home.html',
            controller: 'mainController'
        })
        .state('recipes', {
            url: '/recipes/',
            templateUrl: 'scripts/recipes/recipes.html',
            controller: 'recipesController',
            params: {
              categoryName: null,
              categoryPath: null
            }
        })
        .state('recipe', {
            url: '/recipe/:recipeID',
            templateUrl: 'scripts/recipe/recipe.html',
            controller: 'recipeController'
        });


});
