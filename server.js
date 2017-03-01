var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-ones' : {
title:'artickjsdncks',
heading:'article1',
date:'20/02/17',
body:     '    hello, vamsi krishna is a bad boy. Please leave'
},
'article-two' : {
 title:'articcdsc',
 heading:'article2',
 date:'21/02/17',
 body:     '    hello, vamsi krishna is a good boy. Please leave'
},
'article-three' : {
 title:'articcsa',
 heading:'article3',
 date:'22/02/17',
 body:     '    hello, vamsi krishna is a bad and good boy. Please leave'
}
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var body=data.body;
var htmlTemplate= `
<html>
    <head>
        <title>
            ${title}
        </title>
     <link href="/ui/style.css" rel="stylesheet"/>
    </head>    
        <body>
            <div class="container">
            <div>
                <h1>${heading}</h1>
            </div>
            <div>
                <h2>${date}</h2>
            </div>
            <hr/>
            <div>
            <p>
                ${body}
            </p>
            </div>
            </div>
        </body>
    
 </html>
 `;
 return htmlTemplate;
}
app.get('/:articleName', function (req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
