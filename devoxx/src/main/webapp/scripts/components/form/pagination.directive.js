/* globals $ */
'use strict';

angular.module('devoxxApp')
    .directive('devoxxAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
