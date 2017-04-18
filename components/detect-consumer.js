
var Consumer = function(config, test) {
    this.config = config;
    this.test = test;
};

Consumer.prototype.run = function() {
    var config = this.config;
    var test = this.test;

    var costBefore = undefined;
    var costAfter = undefined;
    casper.thenClick('#app > div > div > div.sidebar-component > ul > li:nth-child(9) > a > span', function(){
    }).waitForText('账户余额', function() {
        casper.capture('pic/click-' + new Date().getTime() + '.jpg');
    }).thenClick('#app > div > div > div.sidebar-component > ul > li:nth-child(9) > ul > li:nth-child(1) > a', function() {
        
    }).waitForText('财务中心', function() {
        casper.capture('pic/click-' + new Date().getTime() + '.jpg');
    }).thenClick('#table-component > div > div > div.react-bs-container-body > table > tbody > tr > td:nth-child(5) > a', function() {
    }).waitForText('服务扣费', function() {
        casper.capture('pic/click-' + new Date().getTime() + '.jpg');
        var fullText = this.fetchText('#general-right-section > p');
        var pattern = RegExp("日期(.*)服务扣费：(.*?)元", "gim");
        costBefore = pattern.exec(fullText)[2];
        console.log('[cost]: ' + costBefore);
    });

    casper.then(function() {
        casper.echo("[do detect]");
        var DetectRunner = require('./detect-runner.js');
        var runner = new DetectRunner(config, test);
        runner.run();
    }).waitFor(function(){
    }, function() {
    }, function() {
    }, 3000);

    casper.then(function() {
        this.reload()
            .waitForText('服务扣费', function() {
                casper.capture('pic/click-' + new Date().getTime() + '.jpg');
                var fullText = this.fetchText('#general-right-section > p');
                var pattern = RegExp("日期(.*)服务扣费：(.*?)元", "gim");
                costAfter = pattern.exec(fullText)[2];
                console.log('[cost before]: ' + costBefore);
                console.log('[cost after]: ' + costAfter);
            });
    });
};

module.exports = Consumer;
