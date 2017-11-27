var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
  $scope.model = { float: 'World' };
  $scope.float = 0.27;
});

myApp.directive('myDirective', function($compile) {
  
  var directive = {};
  directive.restrict = 'E';
  directive.scope = {
      myDirectiveVar: '='
    };
  directive.template = function() {
    var response = "(((myDirectiveVar >=0) && (myDirectiveVar <= 1)) ? ('Percentage: ' + (myDirectiveVar * 100) + '%') : 'ERROR: The given float is an invalid number')";
    return '<div class="some">' +
      '<p ng-bind="' + response + '"></p></div>'
  };
  directive.replace = true;
    //require: 'ngModel',
  directive.link = function($scope, elem, attr, ctrl) {
      console.debug($scope);
  };
  return directive;
});