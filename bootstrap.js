define([], function () {
  return function (runtime, params, callback) {
    runtime.readFile('toInject.js', function (err, code) {
      // Unfortunately, our injected file do not have access to `params`
      code = code.replace('/_APP_KEY_/gi', params.options.pusherAppKey);
      code = code.replace('/_SECRET_/gi', params.options.secret);
      params.content += code;
      callback();
    });
  };
});