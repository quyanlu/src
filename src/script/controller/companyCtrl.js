/**
 * Created by 49190 on 2017/5/4.
 */
'use strict'
angular.module('app').controller('companyCtrl',['$scope','$http','$state',function($scope,$http,$state){
    $http.get('/data/company.json?id'+$state.params.id).then(function(resp){
        $scope.company = resp.data;
        console.info($scope.company)
    })
}])