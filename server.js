var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    articleone : {
title:'article-one',
heading:'article',
date:'20/02/17',
body:     '    hello, vamsi krishna is a bad boy. Please leave'
},
articletwo : {
 title:'article-two',
 heading:'article',
 date:'21/02/17',
 body:     '    hello, vamsi krishna is a good boy. Please leave'
},
articlethree : {
 title:'article-three',
 heading:'article',
 date:'22/02/17',
 body:     '    hello, vamsi krishna is a bad and good boy. Please leave'
}
};

function createTemplate(data){
    title = data.title;
    heading=data.heading;
    date=data.date;
    body=data.body;
var htmltemplate= `
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
}
app.get('/:articlename', function (req,res){
    var articlename=req.params.articlename;
res.send(createTemplate(articles[articlename]));
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
