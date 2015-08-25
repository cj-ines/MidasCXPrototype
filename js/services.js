(function () {
	'use strict';

	var app = angular.module('zoop.cxPrototype');

	app.service('ChartService', function () {
		var scope = this;

		scope.createHalfGauge = function (name, title, min, max, val, target, unit, size) {
			var range = min + max,
				fontSizeSize = Math.round(size * 0.10) + 'pt';

			$('#' + name + 'HalfGauge').highcharts({
				chart: {
					type: 'solidgauge',
					plotBackgroundColor:  '#fff',
					plotBackgroundImage: null,
					plotBorderWidth: 0,
					plotShadow: false,
					margins: [0, 0, 0, 0],
					events: {},
					height: size
				},

				title: {
					text: /*title + ' Last 90 Days'*/'',
					format: {
						fontSize: '12pt',
						fontStyle: 'strong'
					}
				},
				pane: {
					center: ['50%', '65%'],
					size: '90%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: '#efefef',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					},

				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {

					min: min,
					max: max,
					stops: [
						[0.1, '#DF5353'], // green
						[0.7, '#DDDF0D'], // yellow
						[0.9, '#55BF3B'] // red
					],
					lineWidth: 0,
					minorTickInterval: 'auto',
					tickPixelInterval: 400,
					tickWidth: 0,
					title: {
						y: -70,
						style: {fontSize: '14pt'},
						enabled: false
					},
					labels: {
						step: 3,
						rotation: 'auto',
						style: {
							fontSize: '8pt',
							color: '#222',
							offset: 1
						}
					}
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 20,
							borderWidth: 0,
							//useHTML: true,
							style: {fontSize: fontSizeSize, fontFamily: 'Arial'}
						}
					},
					series: {
						dataLabels: {
							format: '{y:,.0f}' + unit,
							verticalAlign: 'center',
							enabled: true,
							borderRadius: 5,
							backgroundColor: null,
							borderWidth: 0,
							y: size -230,
							padding: 3,
							style: {fontSize: fontSizeSize, fontFamily: 'Arial'}
						}
					},
				},

				credits: {
					enabled: false
				},

				series: [{
					name: title,
					data: [val],
					/* dataLabels: {
					 format: '<div style="text-align:center"><span style="font-size:43px;color:' +
					 ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}'+ unit +'</span>'
					 },*/
					tooltip: {
						valueSuffix: ' ' + unit
					}
				}]});
		};

		scope.createLineGraph = function (name, title, size, seriesData, categories, unit) {
			$('#' + name + 'LineGraph').highcharts({
				chart: {
					type: 'line',
					height: size
				},
				title: {
					text: title
				},
				yAxis: {
					min: 0,
					title: {
						text: unit
					}
				},
				xAxis: {
					categories: categories
				},
				credits: {
					enabled: false
				},
				series: seriesData
			});
		};

    scope.createRadialProgress = function (name, title, min, max, value, diameter) {
      var radial = radialProgress(document.getElementById(name + 'Radial'))
        .label(title)
        .diameter(diameter)
        .minValue(min)
        .maxValue(max)
        .value(value)
        .render();
    };

    scope.createAreaChart = function (name, title, series, categories, size) {
		$('#' + name + 'AreaChart').highcharts({
			title: {
				text: title
			},
			chart: {
				type: 'area',
				height: size
			},
			xAxis: {
				categories: categories
			},
			yAxis: {
				title: {
					text: 'No. of customers'
				}
			},
			credits: {
				enabled: false
			},
			series: series
		});
	}
	});

	app.service('MysteryService', ['$http', function ($http) {
		var scope = this;

		scope.fetchAllCalls = function () {
			return $http.get('data/mystery-calls.json');
		};
		
		scope.fetchAllVisits = function () {
			return $http.get('data/mystery-visits.json');
		};
	}]);

}())