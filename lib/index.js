var fs = require("fs");
var mkdirp = require("mkdirp");
var path = require("path");
var util = require("util");

function ScreenshotReporter(dir) {
    mkdirp(dir);

    this.specDone = function (result) {
        if (result.failedExpectations && result.failedExpectations.length > 0) {
            browser.takeScreenshot().then(function (png) {
                var stream = fs.createWriteStream(path.join(dir, result.fullName + ".png"));
                stream.write(new Buffer(png, "base64"));
                stream.end();
            });
        }
    };
}

function ConsoleLogReporter() {
    this.specDone = function (result) {
        browser.manage().logs().get("browser").then(function(logs) {
            if (result.failedExpectations && result.failedExpectations.length > 0) {
                console.log("log: " + util.inspect(logs));
            }
        });
    };
}

module.exports = {
    Screenshot: ScreenshotReporter,
    Console:    ConsoleLogReporter,
};
