# jasmine-protractor-reporter

> Jasmine reporters for use with Protractor

[![Build Status](https://travis-ci.org/rubenv/jasmine-protractor-reporter.png?branch=master)](https://travis-ci.org/rubenv/jasmine-protractor-reporter)

## Reporters

This module provides two reporters:

* Screenshot: Takes a screenshot at the end of each failed spec
* Console: Dumps console logs at the end of each failed spec

To use them:

```
var reporters = require("jasmine-protractor-reporter");

jasmine.getEnv().addReporter(new reporters.Screenshot("path/to/output/screenshots"));
jasmine.getEnv().addReporter(new reporters.Console());
```

## License 

    (The MIT License)

    Copyright (C) 2018 by Ruben Vermeersch <ruben@rocketeer.be>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
