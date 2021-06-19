const nodemailer = require('nodemailer');
var fs = require("fs");

var sendMailtemplate = '';

fs.readFile('sendMail.html', 'utf8', function(err, data) {
    sendMailtemplate = data;
});

module.exports = {sendFeedbackMail};

async function sendFeedbackMail(feedbackParam){
    let name = feedbackParam.fullname;
    let comment = feedbackParam.comment;
    let gender = feedbackParam.gender;
    let mobileNumber = feedbackParam.mobileNumber;
    let alternateNumber = feedbackParam.alternateNumber;
    let email = feedbackParam.email;
    let address = feedbackParam.address;

    var html = sendMailtemplate;
    html = html.replace(/%name%/g, name);
    html = html.replace(/%comment%/g, comment);
    html = html.replace(/%gender%/g, gender);
    html = html.replace(/%mobileNumber%/g, mobileNumber);
    html = html.replace(/%alternateNumber%/g, alternateNumber);
    html = html.replace(/%email%/g, email);
    html = html.replace(/%address%/g, address);


    let transporter = nodemailer.createTransport({
            host: 'smtpout.secureserver.net',
            port: 567,
            secure: false, // use SSL, 
            secureConnection: false,
            requireTLS:true,
                          // you can try with TLS, but port is then 587
            // auth: {
            //   user: 'Rediscoverhappyness', // Your email id
            //   pass: 'Createhappyness@06' // Your password
            // }
            auth: {
                user: 'help@rediscoverhappyness.com', // Your email id
                pass: 'Createhappyness@06' // Your password
              }
    })

    let mailOptions = {
        from: "help@rediscoverhappyness.com",
        to: "help@rediscoverhappyness.com",
        subject: "Feedback sent by " +  name,
        html: html
    };

    let info = await transporter.sendMail(mailOptions);
    // console.log(info);
    // console.log(html)
    return info;
}
