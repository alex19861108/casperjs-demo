

/**
 @description：
    http协议规定了以ASCII码传输，是建立在tcp、ip协议之上的应用层规范，
    规范把http请求分为3个部分：状态行，请求头，请求体
*/
var MegResponse = function(status_code, text) {
    this.status_code = status_code;
    this.text = text;
};

var MegRequests = function() {
};

MegRequests.prototype.post = function(url, data, headers, files) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.info('[DONE] ' + xhr.responseText);
        }
    };

    // send requests
    xhr.open("POST", url, false);
    if (headers != undefined) {
        for (var header_key in headers) {
            xhr.setRequestHeader(header_key, headers[header_key]);
        }
    }

    var formdata = new FormData();
    for (var key in data) {
        formdata.append(key, data[key]);
    }
    for (var name in files) {
        var pieces = fs.absolute(files[name]).split('/');
        var basename = pieces[pieces.length -1];
        var binaryContent = fs.read(files[name], {mode:'rb'});
        var aBuffer = new window.ArrayBuffer(binaryContent.length);
        var uBuffer = new window.Uint8Array(aBuffer);
        for(var i = 0; i < binaryContent.length; i++){
            uBuffer[i] = binaryContent.charCodeAt(i) & 0xff ;
        }

        var imgBlob = new Blob([uBuffer], { type: MegRequests.DEFAULT_CONTENT_TYPE});
        formdata.append(name, imgBlob, basename);
    }
    xhr.send(formdata);
    
    return new MegResponse(xhr.status, xhr.responseText);
};

module.exports = MegRequests;
