var fs = require("fs"); 
var system = require("system");

// variables
var homePath = fs.dirname(fs.absolute(system.args[2]));
var picPath = fs.absolute(fs.pathJoin(homePath, 'pic'));
var benPic = fs.pathJoin(picPath, 'ben.jpg');
var mvJpg = fs.pathJoin(picPath, 'mv.jpg');

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
            image_file: mvJpg
        }
    }
}

module.exports=config;
