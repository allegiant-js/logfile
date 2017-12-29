# logfile

> Simple logfile library. Provides a simple, effective way to log stdout and stderr to a file of your choice.
>> There be 🐲 here! The API and functionality are being cemented, anything before a 1.0.0 release is subject to change.

## Installation

```
npm install @allegiant/logfile --save
```

## Usage

```js
const path = require('path');
const { LogFile } = require('@allegiant/logfile');

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
        // flushes data to the log file and emits finish event
        logger.end();
    } else {
        finished();
    }
}

live = setInterval(function () {
    console.log("tick"); // eslint-disable-line
}, 1000); 

console.log("Started"); // eslint-disable-line
```

### Copyright & License

Copyright &copy; 2017 Allegiant. Distributed under the terms of the MIT License, see [LICENSE](https://github.com/allegiant-js/logfile/blob/master/LICENSE)

Availble via [npm](https://www.npmjs.com/package/@allegiant/logfile) or [github](https://github.com/allegiant-js/logfile).
