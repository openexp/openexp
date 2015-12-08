/**
 * Created by Austin on 12/8/15.
 */
app.controller('connectController', ['$scope','Socket','ConnectFactory',($scope, Socket, ConnectFactory) => {
    var socket = Socket;

    $scope.trigger = () => {
        socket.emit('message', 'a message');
    };

}]);
