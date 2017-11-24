/**
 * Created by 49190 on 2017/5/3.
 */
'use strict'
angular.module('app').directive('appCompany',[function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/company.html',
        scope: {
            com: '='
        }
    }
}])