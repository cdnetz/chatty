'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    $scope.addMessage = function () {
    	MessageService.postMessage($scope.textInput).then(function (response) {
    		$scope.messages = response.data;
    		$scope.textInput = '';

    		
    	})


    	
    }

   MessageService.getMessages().then(function (response) {
    	$scope.messages = response;
    })
  });
