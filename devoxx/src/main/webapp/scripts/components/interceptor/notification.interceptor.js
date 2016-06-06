 'use strict';

angular.module('devoxxApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-devoxxApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-devoxxApp-params')});
                }
                return response;
            }
        };
    });
