var config = require('config/config.js');
var Login = require('components/login.js');
var DetectRunner = require('components/detect-runner.js');
var DetectConsumer = require('components/detect-consumer.js');

casper.options.verbose = true;
casper.options.logLevel = 'debug';
casper.options.viewportSize = {width: 1280, height: 1024};
casper.options.pageSettings = {
    javascriptEnabled: true,
    webSecurityEnabled : false
};

casper.on("remote.message", function(msg){
    this.echo("[remote]: " + msg);
});

casper.test.comment('Start Test');
casper.test.begin(config.general.desc, function suite(test) {

    // start casper
    casper.start();

    // login
    var login = new Login(config, test);
    login.login();

    // current cose
    var consumer = new DetectConsumer(config, test);
    consumer.run();

    /**
    require('utils').dump(casper.steps.map(function(step) {
        return step.toString();
    }));
    */

    casper.run(function() {
        test.done();
    });
});
