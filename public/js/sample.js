
    var app = angular.module('justSample', []);
    app.config(function ($interpolateProvider) {

        $interpolateProvider.startSymbol('<<');
        $interpolateProvider.endSymbol('>>');

    });
