angular
      .module('uma')
      .factory('umaFactory', function($http) {

          function getItems() {
            return $http.get('data/data.json');
          }

          return {
            getItems: getItems
          }
});
