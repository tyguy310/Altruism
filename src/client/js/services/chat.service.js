(function () {

  'use strict';

  angular
    .module('Altruism.services.chat', ['pubnub.angular.service'])
    .service('chatService', chatService);

  chatService.$inject = ['$rootScope', 'Pubnub'];

  function chatService ($rootScope, Pubnub) {
    this.channel = 'messages-channel';
    this.uuid = (Math.floor(Math.random() * 100).toString());

    Pubnub.init({
      // publish_key: config.PUBNUB_PUBLISH_KEY,
      // subscribe_key: config.PUBNUB_SUBSCRIBE_KEY,
      publish_key: 'pub-c-5edfaba1-63ae-4681-b421-5da5c2f0534d',
      subscribe_key: 'sub-c-c439bfe2-bc01-11e6-b490-02ee2ddab7fe',
      uuid: this.uuid
    });

    // Send the messages over PubNub Network
    this.sendMessage = (msg) => {
      // Don't send an empty message
      if (!msg || msg === '') {
        return;
      }
      let message = {
        content: msg,
        sender_uuid: this.uuid,
        date: new Date()
      };

      Pubnub.publish({
        channel: this.channel,
        message: message,
        callback: function(m) {
          console.log(m);
        }
      });
      // Reset the messageContent input
      msg = '';
      return message;
    }

    this.messages = [];

    // Subscribing to the ‘messages-channel’ and trigering the message callback
    Pubnub.subscribe({
      channel: this.channel,
      triggerEvents: ['callback']
    });

    // Listening to the callbacks
    $rootScope.$on(Pubnub.getMessageEventNameFor(this.channel), (ngEvent, m) => {
      $rootScope.$apply(() => {
        this.messages.push(m)
      });
    });

  };
})();
