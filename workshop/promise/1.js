
function parsePromised(obj){
    var q = require('q');
    var defer = q.defer();


    try{
        JSON.parse(obj);
        defer.resolve();
    }
    catch (e){
        defer.reject(e);
    }
    defer.promise.then(null,console.log);
    return defer.promise;
}

var q = require('q');q.facall(parsePromised(process.argv[2]));