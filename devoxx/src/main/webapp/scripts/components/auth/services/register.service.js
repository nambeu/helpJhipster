'use strict';

angular.module('devoxxApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


