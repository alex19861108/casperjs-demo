var fs = require('fs');

var DetectRunner = function(config, test) {
    this.config = config;
    this.test = test;
};

DetectRunner.prototype.run = function() {
    var config = this.config;
    var test = this.test;

    var MegRequests = require('./meg-requests.js');
    var megRequests = new MegRequests();
    var response = megRequests.post(config.detect.url, config.detect.data, config.detect.headers, config.detect.files);
    console.debug(JSON.stringify(response));

    /**
    casper.thenOpen(config.detect.url, {
        method: 'post',
        headers: config.detect.headers,
        encoding: 'utf-8',
        data: config.detect.data
    }, function(response) {
        this.page.uploadFile('input[name=image_file]', config.detect.file);
        //this.echo(JSON.stringify(response));
        this.echo(this.page.plainText);
        test.assertEquals(response.status, 200);
    });
    */

    /**
    casper.open(config.detect.url, {
        method: 'post',
        headers: config.detect.headers,
        encoding: 'utf8',
        data: config.detect.data
    }, function(response) {
        // dump response header
        require('utils').dump(response);

        // echo response status
        this.echo(response.status);

        // echo response body
        this.echo(this.page.content);

        // echo response body with no tags added
        this.echo(this.page.plainText);
    });
    */
}

module.exports = DetectRunner;
