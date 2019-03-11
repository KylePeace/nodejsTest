cc.Class({
    extends: cc.Component,

    properties: {
        label:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let self = this
        this.socket = io('http://localhost:3000');
        this.socket.on('news', function (msg) {
            self.label.string = msg;
        });
     },

    start() {

    },

    bt: function () {
        this.socket.emit('my other event',"what");
       
    },

});