'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale'// angular-dynamic-locale
  ])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider, $translateProvider,tmhDynamicLocaleProvider){
    $translateProvider.useMissingTranslationHandlerLog();
     $translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

    $locationProvider.hashPrefix('');
    $stateProvider.state("home", {
        url: "/home",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).state("about", {
        url: "/about",
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
      $urlRouterProvider.otherwise('/about');
      })
  .constant('LOCALES', {
    'locales': {
        'ru_RU': 'Русский',
        'en_US': 'English',
        'te_IN': 'తెలుగు'
    },
    'preferredLocale': 'en_US'
});
