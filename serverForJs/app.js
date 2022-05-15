var express = require('express');
// Now, we can control this module after, we got an information from this.
var app = express();
app.set('views','./views');
// let this know express where is the templates.
// if you define directory for saving files from templates like other one comparing view
// you have to change the name of directory. but these days, most progrmmer who already used this have a little promise like
// we're going to set the name to "views", which is the directory for saving information it's from templates.
app.set('view engine', 'pug');
// this codes for connecting express and templates module is.
app.use(express.static('public'));
// Here's the code for deciding where we're saving a directory.
app.get('/topic/:bin', (req, res) => {
    var topics = [
        'JS is...',
        'Node.js is...',
        'Express is...'
    ];

    var output = `
    <a href= "/topic?id=0">JS</a></br>
    <a href= "/topic?id=1">Node.js</a></br>
    <a href= "/topic?id=2">Express</a></br>
    ${topics[req.params.bin]}
    `
    
    res.send(output);
});

app.get('/template', (req, res) => {
    res.render('temp', {now:Date(), _title:'Pug'});
})
app.get('/topic/:bin/:mode', (req,res)=> {
    res.send(req.params.bin+ ',' +req.params.mode )
});
app.locals.pretty = true;
// if somebody comes here through 'template', the function which is in this is working.
// and then, it's going to do a rendering in 'temp'.

const port = 3000;

app.get('/', (req,res) => {
    res.send('Sup! bro')
});
// "get" Method => router : Method for finding some specific way => routeing : process what get module's doing.

app.get('/route', (req,res) => {
    res.send('Hello Everyone</br> <img src = "/vscode.png">')
});

app.get('/dynamic', (req,res) => {
    var lis = '';
    for(var i = 0; i < 6; i ++){
        lis = lis + '<li>ASS</li>'
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="uft-8">
        <title>BackEnd Making</title>
    </head>
    <body>
        <h3>Hello Everybody!</h3>
        <h4>${time}</h4>
        <p>
            We just made html files in the directory of public
            So, You could think you just have to close this node and come in again whenever you fix something in this.
            But, it isn't. Because, this is kind of active file. You can see results about what you just fixed something after push the reload.
        </p>
        <ol>
            ${lis} 
        </ol>
    </body>
    </html>
    `
    res.send(output);
});

app.get('/login', (req,res) => {
    res.send('Type in right ID!')
});
// this codes for when clients came into the home, we're using that function. 


// when every host comes into our site, we could get that information 
// by get or host. Especially, when we type some url on the internet, server gets values by function of get.

app.listen(port,() => {
    console.log('Connected ${port} port!')
});
