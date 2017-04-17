var fs = require("fs"); 

//var configPath = fs.dirname(fs.absolute(__filename));
//var configPath = '/home/liuwei02/myproject/casperjs/ConsoleFacePlusPlus/test-detect/config';
//var homePath = fs.dirname(configPath);
//var benPic = fs.pathJoin(homePath, 'pic/ben.jpg');
var benPic = '/home/liuwei02/myproject/casperjs/ConsoleFacePlusPlus/test-detect/pic/ben.jpg';
var mvPic = '/home/liuwei02/myproject/casperjs/ConsoleFacePlusPlus/test-detect/pic/mv.jpg';
mvPic = '/home/liuwei02/myproject/casperjs/ConsoleFacePlusPlus/test-detect/pic/timg.jpg';

var config = {
    general: {
        desc: 'just for demo'
    },
    page: {
        index: {
            url: "https://console.faceplusplus.com.cn/login",
            username: 'youmu',
            passwd: '19880720'
        }
    },
    detect: {
        url: "http://11.171.71.106:12033/facepp/v3/detect",
        //url: 'http://10.155.0.91:8080/index/',
        //url: 'http://10.101.8.70:8080/index/',
        headers: {
                Perm: 'Authorized,user:/facepp/v3/detect,admin:/facepp/v3/detect'
        },
        data: {
                api_key: 'oST7fj-vDvGaSBGgITcz3ep7KdOfvNuy',
                api_secret: '4jfljibhDnMbEoaFvjCoQnYDMYdRjpB2',
                return_attributes: 'glass',
                //image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491814715711&di=89e58e08a0af769acf28f76a5d4eb54c&imgtype=0&src=http%3A%2F%2Fnpic7.edushi.com%2Fcn%2Fzixun%2Fzh-chs%2F2017-03%2F03%2F3824368-2017030316251198.jpg',
        },
        files: {
            image_file: mvPic
        }
    }
}

module.exports=config;
