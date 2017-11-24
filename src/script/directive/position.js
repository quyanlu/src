/**
 * Created by 49190 on 2017/4/27.
 */
'use strict'
angular.module('app').directive('appPositionList',['$http',function ($http) {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/position-list.html',
        scope: {
            data : '=',
            filterObj : '=',
            isFavorite : '='
        },
        link: function($scope) {
            $scope.select = function(item) {
                $http.post('data/favorite.json',{
                    id: item.id,
                    select: !item.select
                }).then(function(){
                    item.select = !item.select;
                })
            }
        }
    }
}])