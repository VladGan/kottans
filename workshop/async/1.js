var async = require('async');
var http = require('http');



function getUrl1(cb) {
    cb(null,123);
}

function getUrl2(cb) {
    cb(null,234);
}

//function getHttp(cb) {
//    var body = "";
//
//    http.get(data[0],function (res){
//        res.on('data',function(chunk)
//        {
//            body += chunk.toString();
//        });
//        res.on('end', function (){
//                cb(null,body)
//            }
//
//        );
//    });
//}

async.waterfall([
    getUrl1,
    getUrl2
    ],
    function (err,result) {
        console.log(result[0]);
        if (err) return console.log(err);
        console.log(result);
    });