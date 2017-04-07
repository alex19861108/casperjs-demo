var config = require('config/config.js');
var Login = require('components/login.js');

casper.options.verbose = true;
casper.options.logLevel = 'debug';
casper.options.viewportSize = {width: 1280, height: 1024};

casper.test.comment('Start Test');
casper.test.begin(config.general.desc, function suite(test) {

    var login = new Login(config, test);
    login.login();

    /**
    require('utils').dump(casper.steps.map(function(step) {
        return step.toString();
    }));
    */
    casper.run(function() {
        test.done();
    });
});
