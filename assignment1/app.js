(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', lunchchecker);
lunchchecker.$inject = ['$scope'];

function lunchchecker($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.isValid = "";
    $scope.check = function(){
    var items = $scope.items;
    if (items === '') {
      $scope.message = "Please enter data first";
      $scope.isValid = 'red';
    } else {
      items = items.split(',');
      $scope.isValid = 'green';
      var totalCount = 0;
      for (var i = 0; i < items.length; i++) {
        var item = items[i].trim();
        if (item !== "") {
            totalCount += 1
        }
      }
      if(totalCount <= 3) {
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    }

  }

}

})();
