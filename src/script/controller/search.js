/**
 * Created by 49190 on 2017/5/23.
 */
angular.module('app').controller('searchCtrl',['$http','$scope','dict',function($http,$scope,dict){

    $scope.name = '';
    $scope.search = function() {

        $http.get('data/positionList.json').then(function(resp){
            $scope.positionList = resp.data;
        });
    };

    $scope.search();
    $scope.sheet = {};
    $scope.tabList = [{
        id: 'city',
        name: '城市'
    },{
        id: 'salary',
        name: '薪水'
    },{
        id: 'scale',
        name: '公司规模'
    }];
    $scope.filterObj = {};
    var tabId = '';
    $scope.tClick = function(id,name){
        console.info(id,name);
        tabId = id;
        $scope.sheet.list = dict[id];
        console.info($scope.sheet.list);
        $scope.sheet.visible = true;
    };

    $scope.sClick = function(id,name){
        console.info(id,name);
        if(id){
            angular.forEach($scope.tabList,function(item){
                console.info(item)
                if(item.id===tabId){
                    item.name = name;
                }
            });
            $scope.filterObj[tabId + 'Id'] = id;
        }else {
            delete  $scope.filterObj[tabId + 'Id'];
            angular.forEach(tabList,function(item){
                if(item.id===tabId){
                    switch(item.id) {
                        case 'city':
                            item.name = '城市';
                            break;
                        case 'salary':
                            item.name = '薪水';
                            break;
                        case 'scale':
                            item.name = '公司规模';
                            break;
                        default:
                    }
                }
            })
        }
    }
}])