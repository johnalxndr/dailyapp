'use strict';

angular.module('dailysteals')

.factory('api', ['Restangular', function (Restangular) {
    return {
        woot: Restangular.one('as777lwi').get(),
        steepcheap: Restangular.one('2ji2tx0c').get(),
        dealgenius: Restangular.one('af2vnwdy').get()
    };
}]);