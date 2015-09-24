(function () {
  'use strict';

  var app = angular.module('zoop.cxPrototype');

  app.directive('cPerimeterScopeSelection', [function () {
    return {
      templateUrl: 'components/perimeter-scope-selection.html'
    };
  }]);

  app.directive('cPeriodScopeSelection', [function () {
    return {
      templateUrl: 'components/period-scope-selection.html',
      controller: 'PeriodScopeSelectionController',
      controllerAs: 'c'
    };
  }]);

  app.directive('cMysterySelection', [function () {
    return {
      templateUrl: 'components/mystery-selection.html',
	  controller: 'MysteryOptionsController',
      controllerAs: 'c'
    };
  }]);

  app.directive('cSubheader', [function () {
    return {
      templateUrl: 'components/subheader.html'
    };

  }]);

  app.directive('cSocialFeed', [function () {
    return {
      templateUrl: 'components/social-feed.html'
    };

  }]);

  app.directive('cLeaderBoards', [function () {
    return {
      templateUrl: 'components/leader-boards.html',
      controller: 'LeaderBoardController',
      controllerAs: 'c'
    };

  }]);

  app.directive('cTicketBox', [function () {
    return {
      templateUrl: 'components/ticket-box.html',
      scope: {},
      link: function (scope, elem, attr) {
        scope.no = attr.number;
        scope.type = attr.boxType;
        scope.caption = attr.caption;
      }
    };
  }]);

  app.directive('cTicketStatus', [function () {
    return {
      templateUrl: 'components/ticket-status.html',
      scope: {},
      link: function (scope, elem, attr) {
       switch (attr.label) {
        case 'open': scope.uiClass = 'danger'; break;
        case 'closed': scope.uiClass = 'success'; break;
        case 'pending': scope.uiClass = 'warning'; break;
        default: scope.uiClass = 'default';
       }
       scope.label = attr.label;
      }
    };
  }]);

  app.directive('cComment', [function () {
    return {
      templateUrl: 'components/comment.html',
      scope: {},
      link: function (scope, elem, attr) {
        scope.comment = {
          author: attr.commentAuthor,
          dateTime: attr.commentDateTime,
          textBody: attr.commentTextBody
        }
      }
    }
  }]);

  app.directive('cNpsBadge', [function () {
    return {
      templateUrl: 'components/nps-badge.html',
      scope: {},
      link: function (scope, elem, attr) {
        scope.options = attr;
      }
    }
  }]);

  app.directive('cStar', [function () {
      return {
          scope: {
              number: '@'
          },
          link: function (scope, elem, attr) {
              var html = '', i = 0;
              for (i = 0; i < scope.number; i++) {
                  html = html + '<i class="fa fa-gold fa-star"></i>';
              }
              elem.html(html);
          }
      };
  }]);

}());
