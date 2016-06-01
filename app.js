var express = require('express')
	, reactViews = require('express-react-views')
	, passport = require('passport')
	, util = require('util')
	, session = require('express-session')
	, SteamStrategy = require('passport-steam').Strategy
  , app = express();
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new SteamStrategy({
		returnURL: 'http://localhost:3000/auth/steam/return',
		realm: 'http://localhost:3000/',
		apiKey: 'E8ED2BDC543746E0C8F86CEC672B8722'
	},
	function(identifier, profile, done) {
		process.nextTick(function () {
			profile.identifier = identifier;
			return done(null, profile);
		});
	}
));

app.set('view engine', 'js');

app.set('views',__dirname+'/src/views');

app.engine('js', reactViews.createEngine());

app.use(session({
    secret: 'your secret',
    name: 'name of session id',
    resave: true,
    saveUninitialized: true
	}));

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('home',{user:req.user});
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('home', { user: req.user });
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.listen(3000,function(){console.log("Server listen on port 3000");});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
