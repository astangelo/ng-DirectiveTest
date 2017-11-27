'use strict';

describe('myDirective test suite', function() {

  describe('myDirective', function() {
    var $rootScope, $compile, element, scope; 
    
    beforeEach(function(){
      module('myApp');
      inject(function($injector){ 
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
        element = angular.element('<my-directive my-directive-var="float"></my-directive>');

      }); 
    });
    
    it('0.17 should render as 17%', function() {
      scope = $rootScope.$new(); 
      // wrap scope changes using $apply 
      scope.$apply(function(){
        scope.model = { float: 'World' };
        scope.float = 0.17;
        $compile(element)(scope); 
      }); 
      expect(element[0].innerText).toEqual('Percentage: 17%'); 
    });
    
    it('A number greater than 1 should throw an error', function() {
      scope = $rootScope.$new(); 
      // wrap scope changes using $apply 
      scope.$apply(function(){
        scope.float = 1.47;
        $compile(element)(scope); 
      }); 
      expect(element[0].innerText).toEqual('ERROR: The given float is an invalid number'); 
    });
    
    it('A negative number should throw an error', function() {
      scope = $rootScope.$new(); 
      // wrap scope changes using $apply 
      scope.$apply(function(){
        scope.float = -0.47;
        $compile(element)(scope); 
      }); 
      expect(element[0].innerText).toEqual('ERROR: The given float is an invalid number'); 
    });
    
  });
});