const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const sql = require('./db')
const port = 4000

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  if(req.query.info !== undefined) {
    res.render('index', {info: req.query.info});
  } else {
    res.render('index');
  }
});

app.post('/add', (req, res) => {
  sql.query("INSERT INTO customers (id, firstname, lastname, date_naissance, mail, adresse, ville, cp) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)",
    [req.body.prenom, req.body.nom, req.body.date, req.body.mail, req.body.adresse, req.body.ville, req.body.cp],
    (err, rows) => {
      if (err) {
        res.redirect('/?info=false')
      } else {
        res.redirect('/?info=true')
      }
    })
})

app.get('/list', (req, res) => {
  sql.query('SELECT * FROM customers', (err, rows) => {
    res.render('list', {
      rows: rows,
      date: (date) => {
        let dateString = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
        return dateString
      }
    });
  })
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});