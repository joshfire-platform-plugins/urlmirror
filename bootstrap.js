define([], function () {
  return function(runtime, params, callback) {
    runtime.readFile('./toInject.js', function(err, code) {
      // Unfortunately, our injected file do not have access to `params`
      code = code.replace('_APP_KEY_', params.options.pusherAppKey);
      code = code.replace('_SECRET_', params.options.secret);
      callback(null, params.content + code);
    });
  };
});