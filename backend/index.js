var fast2sms = require('fast2sms');
var options = {API_KEY:''};
fast2sms.init(options)
var otp = Math.floor(1000*Math.random()+ 9000);
fast2sms.send({ message:'your otp is 5678', to:'8083124598'}).then(function (data) {
    console.log('data................', data);
}).catch(function (error) {
    console.log('err.................', error);
})
 