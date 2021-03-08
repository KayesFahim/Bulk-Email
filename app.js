var createError = require('http-errors');
var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/', (req , res) =>{
  console.log(req.body);

  var maillist = [
    'kiddykayes@gmail.com',
    'kayesfahimvlogs@gmail.com',
    'mrfawofficial@gmail.com',
  ];

  maillist.toString();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrfawbd@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'mrfawbd@gmail.com',
  to: maillist,
  subject: req.body.subject,
  text:  req.body.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.send('success')
  }
});

});


app.listen(3000)



module.exports = app;
