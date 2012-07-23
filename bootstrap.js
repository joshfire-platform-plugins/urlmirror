define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('toInject.js', function (err, code) {
      // Unfortunately, our injected file do not have access to `params`
      code = code.replace('_APP_KEY_', params.options.pusherAppKey);
      var secret = new RegExp(params.options.secret, 'gi');
      code = code.replace('_SECRET_', secret);
      params.content += code;
      callback();
    });
  };
});