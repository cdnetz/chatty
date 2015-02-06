'use strict';

var app = angular.module('chattyApp')
  
app.service('MessageService', function ($http) {
    
    	this.getMessages = function () {
    		return $http.get('http://localhost:8002').then(function(response) {
    			var results = response.data;
    			return results;

    		})
    	}

    	this.postMessage = function (importMessage) {
    		return $http.post('http://localhost:8002', {text: importMessage});
    	}

     
  });
