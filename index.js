const express = require('express'),
      path = require('path'),
      cool = require('cool-ascii-faces'),
      fs = require('fs'),
      PORT = process.env.PORT || 5000

  var app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    // res.render('pages/index');
    res.send('Hello, Navigate through the paths to see result');
  })

  app.get('/cool', (req, res) => {
    res.send(cool());
  });

  app.get('/times', (req, res) => {
    res.send(showTimes());
  })

  app.get('/search', (req, res) => {
    let id = req.query.id;
    let data = fs.readFileSync('search.json');
    let jsondata = JSON.parse(data);
    let dataarray = [...jsondata.users];
    let filtered = dataarray.filter((obj) => obj.id === +id);

    res.send(filtered[0].name);
  })

  const showTimes = () => {
     let res = ''; 
     const time = process.env.Times || 3;
     res = time * time; 
     return res;
  } 

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
