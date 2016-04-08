///public/js/services/RService.js
angular.module('RService', []).factory('R', ['$http', function($http) {

    return {
        // call to get all Rs
        get : function() {
            return $http.get('/api/R');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new R
        create : function(RData) {
            return $http.post('/api/R', RData);
        },

        // call to DELETE a R
        delete : function(id) {
            return $http.delete('/api/R/' + id);
        }
    }       

}]);