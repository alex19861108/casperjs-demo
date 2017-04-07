

var config = require('config/config.js');
/**
var casper = require('casper').create({
    verbose: false,
    logLevel: 'debug'
});
*/

casper.options.verbose = true;
casper.options.logLevel = 'debug';
casper.options.viewportSize = {width: 1280, height: 1024};

casper.test.comment('Start Test');
casper.test.begin(config.general.desc, function suite(test) {
    casper.start(config.page.index.url, function() {
        test.assertHttpStatus(200);
    }).waitForSelector(
        'form.general-form', function then() {
            this.capture('pic/step1.png');
        }, function timeout() {
            console.error('get index.url failed');
            this.exit();
        }
    );

    // fill form
    casper.then(function() {
        this.fillSelectors('form.general-form', {
            'input[name="username_or_email"]': config.page.index.username,
            'input[name="password"]': config.page.index.passwd
        });
    });
    // click
    casper.then(function(){
        this.click('form.general-form input[type="submit"]');
    }).waitForSelector(
        '.header-component', function then() {
            //this.debugHTML();
            this.capture('pic/result.png');
        }, function timeout() {
            this.die('login time out', 1);
    });

    // assert login
    casper.then(function() {
        test.assertTextExists('账号信息', 'log in');
    });

    /**
    // dumps step info
    require('utils').dump(casper.steps.map(function(step) {
        return step.toString();
    }));
    */

    // run casper
    casper.run(function() {
        test.done();
    });
});

