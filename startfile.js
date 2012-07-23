define([], function () {
  return function (runtime, params, callback) {
    params.content = runtime.scriptPrepend(params.content, '<script src="http://js.pusher.com/1.12/pusher.min.js"></script>');
    callback();
  };
});