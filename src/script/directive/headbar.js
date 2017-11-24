/**
 * Created by 49190 on 2017/5/2.
 */
angular.module('app').directive('appHeadBar',[function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/headBar.html',
        scope: {
            text: '@'
        },
        link: function(scope){
            scope.back = function(){
                window.history.back();
            }
        }
    }
}]);