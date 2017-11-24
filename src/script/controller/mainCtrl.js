/**
 * Created by 49190 on 2017/4/16.
 */
'use strict'

angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){

    $http.get('/data/positionList.json').then(function(resp){
        $scope.list = resp.data;
        $scope.list2 = resp.data;
    });

}]);