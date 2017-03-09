'use strict';

function Observer () {
    var channels = {};

    this.sub = function (channel, callback) {
        if (!channels[channel]) {
            channels[channel] = [];
        }

        channels[channel].push(callback);
    };

    this.pub = function (channel) {
        if (channels[channel]) {
            channels[channel].forEach(function (callback) {
                callback();
            });
        }
    };

    return this;
}