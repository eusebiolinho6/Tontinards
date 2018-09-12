   exports.asyncMethodCall =function(methodName, args) {
        return new Promise((resolve, reject) => {
            Meteor.call(methodName, args, (error, result) => {
                if (error) {
                  return  reject(error);
                } else {
                   return resolve(result);
                }
            });
        });
    };