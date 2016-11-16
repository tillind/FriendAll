var express = require('express');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.twig', {
    message : "Hello World"
  });
  //res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
    res.render('signup.twig');
  //res.render('index', { title: 'Express' });
});

/* On ajoute un élément à la todolist */
router.post('/register', urlencodedParser, function(req, res) {
    console.log("un utilisateur souhaite se connecter");
    res.redirect('/');
})

module.exports = router;
