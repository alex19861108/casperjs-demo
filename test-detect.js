var config = require('config/config.js');
var Login = require('components/login.js');
var DetectRunner = require('components/detect-runner.js');

casper.options.verbose = true;
casper.options.logLevel = 'debug';
casper.options.viewportSize = {width: 1280, height: 1024};
casper.options.pageSettings = {
    javascriptEnabled: true,
    webSecurityEnabled : false
};

casper.test.comment('Start Test');
casper.test.begin(config.general.desc, function suite(test) {

    casper.start();

    //var login = new Login(config, test);
    //login.login();

    var detectRunner = new DetectRunner(config, test);
    detectRunner.run();

    require('utils').dump(casper.steps.map(function(step) {
        return step.toString();
    }));
    casper.run(function() {
        test.done();
    });
});
