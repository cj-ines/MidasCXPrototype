(function () {
  'use strict';

  var app = angular.module('zoop.cxPrototype', ['ui.router','ui.date','ui.bootstrap','uiGmapgoogle-maps']);

  app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'pages/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'c'
      })
      .state('surveys', {
        url: '/surveys',
        templateUrl: 'pages/surveys.html'
      })
      .state('review-tracker', {
        url: '/review-tracker',
        templateUrl: 'pages/review-tracker.html',
        controller: 'ReviewTrackerController as c'
      })
      .state('scores', {
        url: '/scores',
        templateUrl: 'pages/scores.html',
		controller: 'ScoresController as c'
      })
	.state('scores.csi', {
        url: '/csi',
        templateUrl: 'pages/scores/csi.html',
		controller: 'ScoresController as c'

      })
	.state('scores.nps', {
        url: '/nps',
        templateUrl: 'pages/scores/nps.html',
		controller: 'ScoresController as c'
      })
      .state('mystery', {
        url: '/mystery',
        templateUrl: 'pages/mystery.html',
        controller: 'MysteryCallVisitController',
        controllerAs: 'vm'
      })
	 .state('mystery.calls', {
        url: '/calls',
        templateUrl: 'pages/mystery/calls.html',
        controller: 'MysteryCallVisitController',
        controllerAs: 'vm'
      })
	.state('mystery.visits', {
        url: '/visits',
        templateUrl: 'pages/mystery/visits.html',
        controller: 'MysteryCallVisitController',
        controllerAs: 'vm'
      })
      .state('mystery.enrollment', {
        url: '/mystery/enrollment',
        templateUrl: 'pages/mystery/enrollment.html',
        controller: 'MysteryCallVisitController',
        controllerAs: 'vm'
      })
      .state('reports', {
        url: '/reports',
        templateUrl: 'pages/reports.html'
      })
      .state('reports.performance-map', {
        url: '/performance-map',
        templateUrl: 'pages/reports/performance-map.html',
        controller: 'PerformanceMapController as vm'
      })
      .state('reports.word-cloud', {
        url: '/word-cloud',
        templateUrl: 'pages/reports/word-cloud.html'
      })
      .state('reports.charts', {
        url: '/charts',
        templateUrl: 'pages/reports/charts.html',
        controller: 'ChartsController as vm'
      })
      .state('tickets', {
        url: '/tickets',
        templateUrl: 'pages/tickets.html'
      })
      .state('view-ticket', {
        url: '/ticket/view/:ticketId',
        templateUrl: 'pages/tickets/view.html'
      })
      .state('customers', {
        url: '/customers',
        templateUrl: 'pages/customers.html'
      })
      .state('view-customer', {
        url: '/customer/view/:customerId',
        templateUrl: 'pages/customers/view.html'
      });

  });

}());
