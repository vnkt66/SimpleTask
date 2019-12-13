const express = require('express'),
      path = require('path'),
      cool = require('cool-ascii-faces'),
      PORT = process.env.PORT || 5000

  var app = express();

  app.use(express.static(path.join(__dirname, 'public')));

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('pages/index');
  })

  app.get('/cool', (req, res) => {
    res.send(cool());
  })

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
