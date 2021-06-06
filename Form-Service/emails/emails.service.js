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
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL, 
                          // you can try with TLS, but port is then 587
            // auth: {
            //   user: 'Rediscoverhappyness', // Your email id
            //   pass: 'Createhappyness@06' // Your password
            // }
            auth: {
                user: 'arora.anuj98', // Your email id
                pass: 'barinderkumar' // Your password
              }
    })

    let mailOptions = {
        from: "arora.anuj98@gmail.com",
        to: "ak1812@checkboxtechnology.com",
        subject: "Feedback sent by " +  name,
        html: html
    };

    let info = await transporter.sendMail(mailOptions);
    // console.log(info);
    // console.log(html)
    return info;
}
