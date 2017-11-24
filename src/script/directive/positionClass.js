/**
 * Created by 49190 on 2017/5/4.
 */
'use strict'
angular.module('app').directive('appPositionClass',function(){
    return {
        restrict: 'A',
        replace: true,
        scope: {
            com: '='
        },
        link: function($scope){
            $scope.showPositionList = function(idx){
                console.info(idx);
                console.info($scope.com)
                $scope.positionList = $scope.com.positionClass[idx].positionList;
                $scope.isActive =idx;
            }
            $scope.$watch('com', function(newVal){
                if(newVal) $scope.showPositionList(0);
            });
        },
        templateUrl: 'view/template/positionClass.html'
    }
})