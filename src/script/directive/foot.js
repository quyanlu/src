/**
 * Created by 49190 on 2017/4/24.
 */
'use strict'
angular.module('app').directive('appFoot',[function(){
    return  {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/foot.html'
    }
}]);