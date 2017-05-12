var phantom = require("phantom");
var _ph, _page, _outObj;
var url = 'http://127.0.0.1:8080/app.html';

phantom.create().then(ph => {
    _ph = ph;
    return _ph.createPage();
}).then(page => {
    _page = page;
    return _page.open(url);
}).then(status => {
    console.log(status);
    return _page.property('content')
}).then(content => {
    console.log(content);
    console.log('wait...');
    setTimeout(function () {
        
        console.log('rendering...');
        _page.render('./short/0.png');
        
        // update device data
        _page.evaluateJavaScript('function(){__data.OnOff_Power = "0"; __updateDeviceStatus();}');
        _page.render('./short/1.png');
        
        console.log('close');
        _page.close();
        console.log('exit');
        _ph.exit();
    }, 2000);
    
}).catch(e => console.log(e));