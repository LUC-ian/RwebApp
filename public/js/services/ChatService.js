///public/js/services/ChatService.js
angular.module('ChatService', []).factory('Chat', ['$http', function($http) {

    return {
        // call to get all chat messages
        get : function() {
            return $http.get('/api/chatlog').success(function(response){
                console.log(I got the data I requested);
                $scope.chatlits = response;
            });
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new chat message
        create : function(nerdData) {
            return $http.post('/api/chatlog', chatData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/chatlog/' + id);
        }
    }       

}]);