(function () {
	'use strict';

	var app = angular.module('zoop.cxPrototype');

	app.controller('DashboardController', ['ChartService', '$state', function (chart, $state) {
		var scope = this;

		scope.pageName = $state.current.name;

		scope.createNpsGauge = function () {
			chart.createHalfGauge('nps', 'NPS', 0, 100, 88, 80, '%', 250);
		};

		scope.createCsiGauge = function () {
			chart.createHalfGauge('csi', 'CSI', 0, 100, 72, 70, '%', 250);
		};

		scope.createCsiRadialProgress = function () {
			chart.createRadialProgress('csi', '', 0, 100, 89, 200);
		};

		scope.createNpsRadialProgress = function () {
			chart.createRadialProgress('nps', '', 0, 100, 91, 200);
		};

		scope.initialize = function () {
			scope.createCsiGauge();
			scope.createNpsGauge();
			//scope.createCsiRadialProgress();
			//scope.createNpsRadialProgress();
		};

	}]);

	app.controller('ViewTicketController', ['$http', '$stateParams', function ($http, $stateParams) {
		var scope = this;

	}]);


	app.controller('TicketsController', ['ChartService', '$http', '$stateParams', function (chart, $http, $stateParams) {
		var scope = this;

		$http
			.get('data/tickets.json')
			.success(function (data, status) {
				scope.tickets = data;
			});

		scope.newComment = {
			author: "You",
			dateTime: "Now",
			textBody: ""
		};

		scope.getTicketId = function () {
			return $stateParams.ticketId;
		};

		scope.createLineGraph = function () {
			var data = [
				{	name: 'Open', type: 'spline', data: [2, 3, 1, 4, 2, 5, 6, 4, 0], color: '#ff7518'  },
				{	name: 'Closed', type: 'spline', data: [3, 2, 1, 2, 0, 3, 2, 5, 2], color: '#3fb618' },
				{	name: 'Target', type: 'spline', data: [3, 3, 3, 3, 3, 3, 3, 3, 3] }
			],
			xAxis = ['Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09'];
			chart.createLineGraph('resolution', 'Ticket Resolution Trends', 300, data, xAxis, 'No. of tickets');
		};

		scope.initialize = function () {
			scope.createLineGraph();
		};

		scope.emptyNewComment = function () {
			scope.newComment = {
				author: "You",
				dateTime: "Now",
				textBody: ""
			};
		};

		scope.postComment = function (ticket, comment) {
			if (!ticket.hasOwnProperty('comments')) {
				ticket.comments = [];
			}
			ticket.comments.push(comment);
			scope.emptyNewComment();
		};

		scope.addToFavourites = function (id) {
			scope.tickets[id].favorite = true;
		};

	}]);

	app.controller('PeriodScopeSelectionController', [function () {
		var scope = this;
		scope.options = ['Last 90 Days', 'Current Month', 'Custom'];
		scope.customIndex = 2;
		scope.active = 0;

		scope.isActive = function (index) {
			return index === scope.active;
		};

		scope.setActive = function (index) {
			scope.active = index;
		};

		scope.isCustom = function () {
			return scope.active === scope.customIndex;
		};

	}]);

	app.controller('MysteryOptionsController', ['$state', function ($state) {
		var scope = this;

		scope.show = function () {
			return $state.current.name === 'mystery.calls';
		};

      console.log($state.current);
	}]);

	app.controller('ScoresController', ['ChartService', function (chart) {
		var scope = this;

		scope.createNpsGauge = function () {
			chart.createHalfGauge('nps', 'NPS', 0, 100, 88, 80, '%', 320);
		};

		scope.createCsiGauge = function () {
			chart.createHalfGauge('csi', 'CSI', 0, 100, 72, 70, '%', 320);
		};

		scope.createNpsRadialProgress = function () {
			chart.createRadialProgress('nps', '', 0, 100, 79, 230);
		};

		scope.createCsiRadialProgress = function () {
			chart.createRadialProgress('csi', '', 0, 100, 81, 230);
		};

		scope.createNpsAreaChart = function () {
			var series = [ {
				name: 'Promoters',
				data: [244, 441, 531, 422, 421, 522, 510, 520],
				color: '#71F787'
			}, {
				name: 'Passives',
				data: [190, 155, 135, 155, 190, 201, 121, 150],
				color: '#F4F771'
			}, {
				name: 'Detractors',
				data: [40, 51, 61, 24, 41, 80, 71, 20],
				color: '#FF5953'
			}],
			categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
			chart.createAreaChart('nps', 'Promoters, Passives and Detractors', series, categories, 280);
		};

		scope.createCsiAreaChart = function () {
			var series = [ {
				name: 'Satisfied',
				data: [384, 341, 431, 522, 521, 422, 510, 520],
				color: '#71F787'
			}, {
				name: 'Unsatisfied',
				data: [210, 155, 135, 155, 190, 201, 121, 150],
				color: '#FF5953'
			}],
			categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
			chart.createAreaChart('csi', 'Satisfied vs Unsatisfied', series, categories, 280);
		};


		scope.initialize = function () {
			scope.createCsiGauge();
			scope.createNpsGauge();
			scope.createNpsRadialProgress();
			scope.createCsiRadialProgress();
			scope.createNpsAreaChart();
			scope.createCsiAreaChart();
		};

	}]);

	app.controller('CustomersController', ['$http', function ($http) {
		var scope = this;

		$http
			.get('data/customers.json')
			.success(function (data, status) {
				scope.customers = data;
			});
	}]);

	app.controller('LeaderBoardController', ['$http', function ($http) {
		var scope = this;

		$http
			.get('data/rankings.json')
			.success(function (data, status) {
				scope.leaders = data;
			});
	}]);

	app.controller('MysteryCallVisitController', ['ChartService', 'MysteryService', '$modal', function (chart, mystery, $modal) {
		var scope = this;

		scope.renderScore = function () {
			chart.createRadialProgress('callScore', '', 0, 100, 89.1, 280);
			chart.createRadialProgress('visitScore', '', 0, 100, 89.1, 280);
		};

		scope.openEnrollmentModal = function () {
			var modal = $modal.open({
				animation: true,
				templateUrl: 'pages/mystery/my-enrollment.html',
				controller: 'ModalController',
				controllerAs: 'modal',
				resolve: function () {
					return {param: "bansai"};
				}
			});
		};

		mystery.fetchAllCalls().success(function (data) {
			scope.mysteryCalls = data;
		});

		mystery.fetchAllVisits().success(function (data) {
			scope.mysteryVisits = data;
		});
	}]);

	app.controller('ModalController', ['$modalInstance', function ($modalInstance, param) {
		var scope = this;
		scope.close = function () {
			$modalInstance.close()
		};

		scope.dismiss = function () {
			$modalInstance.dismiss();
		};
	}]);

	app.controller('PerformanceMapController',[function () {
		var scope = this;

		scope.map = { center: { latitude: 43.81297600000001, longitude: -79.5227562 }, zoom:5 };
	}]);

	app.controller('ChartsController',['ChartService', function (chart) {
		var scope = this;

		scope.activeType = '';
		scope.activeKpi = {
			name: 'Net Promoter Score',
			categories: ['Promoters','Passives', 'Detractors']
		};

		scope.types = [{
			name: 'Type of work',
			categories: ['Brakes', 'LOF', 'Exhaust', 'SSP', 'Tires', 'Tire Service']
		}, {
			name: 'Amount spent',
			categories: ['<50$', '<100$', '<200%']
		}, {
			name: 'Courtesy check',
			categories: ['Yes', 'No', 'Don\'t Know']
		}, {
			name: 'Sample category',
			categories: ['Option 1', 'Option 2', 'Option 3']
		}];

		scope.kpis = [{
			name: 'Net Promoter Score',
			categories: ['Promoters','Passives', 'Detractors']
		}, {
			name: 'Customer Satisfaction Index',
			categories: ['Satisfied', 'Unsatisfied']
		}];

		scope.setActiveType = function (type) {
			scope.activeType = type;
			scope.graphs();
		};

		scope.isActiveType = function (type) {
			return scope.activeType === type;
		};

		scope.setActiveKpi = function (kpi) {
			scope.activeKpi = kpi;
			scope.graphs();
		};

		scope.isActiveKpi = function (kpi) {
			return scope.activeKpi.name === kpi.name;
		};

		scope.graphs = function () {
			var data = [], categories = [];
			scope.activeKpi.categories.forEach(function (category) {
				data.push({
					name: category,
					data: generateRandomData(scope.activeType.categories.length)
				});
			});

			scope.activeType.categories.forEach(function (category) {
				categories.push(category);
			});

			chart.createBarGraph('graph', scope.activeType.name + ' ' + scope.activeKpi.name + ' Chart', 500, data, categories);
		};

		function generateRandomData (len) {
            var numbers = [];
            for (var i = 0; i < len; i++ ) {
                numbers.push(Math.random() * 100);
            }
            return numbers;
        };

	}]);

}());
