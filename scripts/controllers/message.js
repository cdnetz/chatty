'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    $scope.addMessage = function (textInput) {
    	return http.post('http://localhost:8002')
    	
    }

   MessageService.getMessages().then(function (response) {
    	$scope.messages = response.data;
    })
  });
