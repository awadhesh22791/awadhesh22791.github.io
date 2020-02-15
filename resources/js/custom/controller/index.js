(function(){
    angular.module('template',[])
    .controller('IndexCtrl',['$scope','$http',function($scope,$http){
        $scope.message="Hello world";
        $http.get("resources/data/profile.json")
            .success(function (data) {
                $scope.profile = data;
            })
            .error(function (data) {
                console.log("there was an error");
            });
    }]);
})();