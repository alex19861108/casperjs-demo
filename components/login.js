

/**
 * add login steps to casperjs test stack
 * Login should be used by 
 *          `casperjs test ${script.js}`
 *  example:
 *      var login = new Login(config, test);
 *      login.login();
 **/
function Login(config, test) {
    this.config = config;
    this.test = test;
}
    
Login.prototype.login = function() {

    // local variable
    var config = this.config;
    var test = this.test;

    // begin test
    casper.test.comment('Begin To Add Login Actions to stack');
    casper.start(config.page.index.url, function() {
        test.assertHttpStatus(200);
    }).waitForSelector(
        'form.general-form', function then() {
            this.capture('pic/step1.png');
        }, function timeout() {
            this.die('open index.url failed.', 1);
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
    casper.test.comment('Finish To Add Login Actions to stack');
}

module.exports = Login;
