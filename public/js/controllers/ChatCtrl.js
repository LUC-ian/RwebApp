// public/js/controllers/ChatCtrl.js
angular.module('ChatCtrl', []).controller('ChatController', function($scope) {

    this.messages = [];
    this.sender = "Lucian";
    
    this.sendMessage = function ( message ){
        
        var messageData = {
            from: this.sender,
            text: message
        };  
        this.messages.push( messageData );
    }

});