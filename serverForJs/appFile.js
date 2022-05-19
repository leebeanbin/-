var express = require('express');
var app = express(); // app => express 객체이다.
app.locals.pretty = true;
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var fs = require('fs');


app.set('views','./data');
app.set('view engine', 'pug');


app.get('/topic/new', (req,res)=>{
    res.render('nody');
})

app.get(['/topic', '/topic/:id'], (req,res) =>{
    fs.readdir('renew', (err, files) =>{
        if(err){
            console.log(err);
            res.status(500).send("Error!");
        }
        var id = req.params.id;
        if(id){
            fs.readFile('renew/'+id, 'utf8', (err,date) =>{
                if(err){
                    console.log(err);
                    res.status(500).send("Error!");
                }
                res.render('view', {topics: files, title: id, desp: date });
            })
        } else{
            res.render('view', {topics: files, title: 'Welcome', desp: "Hello JS"});
        }
    })
});


app.post('/topic' , (req,res) => {
    var tit = req.body.title;
    var desp = req.body.desp;
    fs.writeFile('renew/'+tit, desp, (err)=>{
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        
        res.send('Good job');
    })
})


app.listen(port, ()=>{
    console.log('Connected!')
})