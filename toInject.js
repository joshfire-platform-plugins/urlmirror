var pusher = new Pusher('_APP_KEY_'); // Replaced in bootstrap.js

// Should be changed by something specific by Joshfire Factory app
Pusher.channel_auth_endpoint = 'http://pusherauthp.herokuapp.com/pusher/auth';
Pusher.channel_auth_transport = 'jsonp';

var channel = pusher.subscribe('private-' + Joshfire.factory.config.app.id);

channel.bind('client-changed-url', function(data) {
  if (data.url && data.url !== window.location.href && !window.IAMAmaster) {
    window.location.href = data.url;
  }
});

// To send an event, on a private channel then
// we *have to* listen to pusher:subscription_succeeded
channel.bind('pusher:subscription_succeeded', function() {
  function locationHashChanged() {
    if (location.hash === '#_SECRET_' && !window.IAMAmaster) {
      alert('You\'re now the master');
      window.IAMAmaster = true;
      window.location.hash = '';
    }
    if (window.IAMAmaster && location.hash !== '#_SECRET_') {
      var triggered = channel.trigger('client-changed-url', {url: location.hash});
    }
  }

  if ("onhashchange" in window) {
    window.addEventListener('hashchange', locationHashChanged, false);
  }
});