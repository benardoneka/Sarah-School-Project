const express = require('express');
const path = require('path')
const bcrypt = require('bcrypt')
const ejs = require('ejs');

const mongodb = require('./db/connect')


const app = express();

// import './css/nav.css';

app
.use(express.static(path.join(__dirname, "public")))
.set('view engine', 'ejs')

.use(express.static('public'))

.get('/home', (req, res) => {
    res.render('home', { title: 'Home' })
})

.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' })
})

.get('/academic', (req, res) => {
    res.render('academic', { title: 'Academic' })
})

.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' })
})

.get('/login', (req, res) => {
    res.render('login', { title: 'login' })
})

.post('/registration', (req, res) => {
    res.render('registration', { title: 'registration' })
})


// mongodb.initDb((err, mongodb) => {
//     if (err) { 
//       console.log(err);
//     } else {
//       app.listen(
//         port
//       );
//       console.log(`Connected to Database and listening on ${port}`);
//     }
  
  
//   });

.listen(3000, () => {
    console.log('Server is running on port 3000');
});