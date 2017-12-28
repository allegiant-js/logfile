const path = require('path');
const LogFile = require('../index').LogFile;

var live = false;
var logger = new LogFile( path.resolve('logfile.txt'));

require('@allegiant/shutdown')(onShutdown);
function onShutdown(req=false, finished) {
    console.log("Shut down triggered... ", req); // eslint-disable-line
    if (live !== false)
        clearInterval(live);
    
    if (logger !== false) {
        console.log("Closing log..."); // eslint-disable-line
        logger.on('finish', function() {
            console.log("Logging completed"); // eslint-disable-line
            finished();
        });
        logger.end(); // trigger finish even after data is flushed to the log
    } else {
        finished();
    }
}

live = setInterval(function () {
    console.log("tick"); // eslint-disable-line
}, 1000); 

console.log("Started"); // eslint-disable-line