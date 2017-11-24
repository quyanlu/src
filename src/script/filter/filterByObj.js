/**
 * Created by 49190 on 2017/7/10.
 */
'use strict';
angular.module('app').filter('filterByObj',[function(){
   return function(list, obj) {
       var result = [];
       console.info(list)
       console.info(obj)
       angular.forEach(list,function(item){
           var isEqual = true;
           for(var e in obj){
               console.log(e)
               if(item[e] !== obj[e]) {
                   isEqual = false;
               }
           }
           if(isEqual){
               result.push(item);
           }
       });
       return result;
   };
}])

