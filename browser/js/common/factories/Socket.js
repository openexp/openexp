/**
 * Created by Austin on 12/8/15.
 */
app.factory('Socket', () => {
    if(!window.io) throw new Error('socket.io not found!');
    return window.io(window.location.origin);
});
